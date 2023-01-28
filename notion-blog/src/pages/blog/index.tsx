import Link from 'next/link'
import Header from '../../components/header'

import { getBlogLink, getDateStr, postIsPublished } from '../../lib/blog-helpers'
import getNotionUsers from '../../lib/notion/getNotionUsers'
import getBlogIndex from '../../lib/notion/getBlogIndex'
import getNotionAsset from '../../lib/notion/getNotionAssetUrls'
import Image from "next/image";
import BesoinAvocat from "../../components/Besoin-avocat";
import React, {useEffect} from "react";

export async function getStaticProps({ preview }) {
  const postsTable = await getBlogIndex()

  const authorsToGet: Set<string> = new Set()
  const posts: any[] = Object.keys(postsTable)
    .map((slug) => {
      const post = postsTable[slug]
      // remove draft posts in production
      if (!preview && !postIsPublished(post)) {
        return null
      }
      post.Authors = post.Authors || []
      for (const author of post.Authors) {
        authorsToGet.add(author)
      }
      return post
    })
    .filter(Boolean)

  const { users } = await getNotionUsers([...authorsToGet])

  posts.map((post) => {
    post.Authors = post.Authors.map((id) => users[id].full_name)
  })

  return {
    props: {
      preview: preview || false,
      posts,
    },
    revalidate: 10,
  }
}

const Index = ({ posts = [], preview }) => {
    useEffect(() => {
        document.getElementById('tri').addEventListener('change', function(event){
            var tri = event.target.value
            var articles = document.getElementsByClassName('article')
            Array.prototype.forEach.call(articles, function(element){
                console.log(element.getAttribute('type'))
                if(element.getAttribute('type') === tri || tri === ""){
                    element.classList.remove('hidden');
                }else{
                    element.classList.add('hidden');
                }
            })
        })
    })
  return (
    <>
        <div>
            <div className={"relative w-full"}>
                <div className={"absolute transform top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4/5 text-center z-50"}>
                    <h1 className={"text-white text-2xl md:text-4xl font-bold"}>BLOG</h1>
                    <p className={"text-white text-xl md:text-2xl mb-8"}>Retrouvez les actualités de mon cabinet</p>
                </div>
                <Image className={"brightness-50 h-[30vh] w-full object-cover"} src={"/images/Actualites-sociales/blog-banniere.png"} alt={"image-banniere"} width={"1920"} height={"1080"}/>
            </div>
            <div className={"bg-zinc-100 flex justify-center w-full py-1 pb-10"}>
                <div className={"w-5/6"}>
                    {/**<div className={"w-full flex flex-col lg:flex-row justify-center py-16"}>
                        <div className={"w-full lg:w-1/2"}>
                            <img className={"h-full w-full rounded-lg "} src={"/images/Actualites-sociales/image-actualites.png"} alt={"image-banniere"}></img>
                        </div>
                        <div className={"w-full lg:w-1/2 mt-10"}>
                            <h2 className={"text-black font-bold text-3xl text-center"}>Retrouvez les actualités de notre cabinet</h2>
                            <p className={"text-black text-left"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</p>
                        </div>
                    </div>*/}
                    <div className={"justify-center w-full flex"}>
                        <div className={"bg-red-900 py-2 px-4 my-10"}>
                            <label className={"text-white text-xl"} htmlFor="tri">Afficher les articles par catégorie :</label>
                            <select className={"border ml-3"} id={"tri"} name={"tri"}>
                                <option value={""}></option>
                                <option value={"Droit du travail"}>Droit du travail</option>
                                <option value={"Droit de la sécurité sociale"}>Droit de la sécurité sociale</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {posts.map((post) => {
                            return(
                                <div className="w-full bg-gray-100 border border-gray-200 rounded-lg shadow-lg hover:scale-110 duration-500 article" key={post.Slug} type={post.Type}>
                                    <Link href={"/blog/[slug]"} as={getBlogLink(post.Slug)}>
                                        <div>
                                            {post.Illustration ?
                                                <img className={"object-cover h-44 w-full rounded-lg shadow-lg"} src={`/api/asset?assetUrl=${encodeURIComponent(post.Illustration)}&blockId=${post.id}`} />
                                                : <img className={"object-cover h-44 w-full rounded-lg shadow-lg"} src={"https://placeimg.com/400/225/arch"} />
                                            }
                                        </div>
                                        <div className="p-5">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{post.Page}</h5>
                                            {(!post.Preview || post.Preview.length === 0) &&
                                                <p className={"mb-3 font-normal text-gray-700"}>Pas de résumé disponible</p>}
                                            {(post.Preview) && (
                                                <p className={"mb-3 font-normal text-gray-700"}>{(post.Preview)}</p>
                                            )}
                                            {post.Date && (
                                                <p className="text-sm mt-auto text-gray-700 font-regular">Publié le : {getDateStr(post.Date)}</p>
                                            )}
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        <BesoinAvocat></BesoinAvocat>
    </>
  )
}

export default Index
