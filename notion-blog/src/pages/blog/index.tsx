import Link from 'next/link'
import Header from '../../components/header'

import { NOTION_TOKEN, API_ENDPOINT } from './server-constants'

import blogStyles from '../../styles/blog.module.css'
import sharedStyles from '../../styles/shared.module.css'

import {
  getBlogLink,
  getDateStr,
  postIsPublished,
} from '../../lib/blog-helpers'
import { textBlock } from '../../lib/notion/renderers'
import getNotionUsers from '../../lib/notion/getNotionUsers'
import getBlogIndex from '../../lib/notion/getBlogIndex'
import getNotionAsset from '../../lib/notion/getNotionAssetUrls'
import Image from "next/image";
import BesoinAvocat from "../../components/Besoin-avocat";
import {useEffect} from "react";

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
        <Header></Header>
        <div>
            <div className={"relative w-full"}>
                <div className={"absolute transform top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4/5 text-center z-50"}>
                    <h1 className={"text-white text-2xl md:text-4xl font-bold"}>BLOG</h1>
                </div>
                <img className={"brightness-50 h-96 w-full object-cover"} src={"/images/blog/img-blog.png"} alt={"image-banniere"}></img>
            </div>
            <div className={"bg-white flex justify-center w-full py-36"}>
                <div className={"w-5/6"}>
                    <div className={"w-full flex flex-col lg:flex-row justify-center py-16"}>
                        <div className={"w-full lg:w-1/2"}>
                            <img className={"h-full w-full rounded-lg "} src={"/images/blog/image-actualites.png"} alt={"image-banniere"}></img>
                        </div>
                        <div className={"w-full lg:w-1/2"}>
                            <h2 className={"text-black font-bold text-2xl text-center"}>Retrouvez les actualités de notre cabinet</h2>
                            <p className={"text-black text-center"}>Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className={"justify-center w-full flex"}>
                        <div className={"bg-red-900 py-2 px-4 my-5"}>
                            <label className={"text-white text-xl"} htmlFor="tri">Afficher les articles par catégorie :</label>
                            <select className={"border ml-3"} id={"tri"} name={"tri"}>
                                <option value={""}></option>
                                <option value={"Droit du travail"}>Droit du travail</option>
                                <option value={"Droit de la sécurité sociale"}>Droit de la sécurité sociale</option>
                            </select>
                        </div>
                    </div>
                    <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 content-center"}>
                        {posts.map((post) => {
                            return(
                                <div className="w-80 bg-gray-100 shadow-xl rounded-none mx-auto hover:scale-110 duration-500 article" key={post.Slug} type={post.Type}>
                                    <Link href="/blog/[slug]" as={getBlogLink(post.Slug)}>
                                        <div className={"max-w-sm mx-auto bg-white rounded-md overflow-hidden shadow-lg"}>
                                            {post.Illustration ?
                                                <img className={"object-fill h-44 w-full"} src={`/api/asset?assetUrl=${encodeURIComponent(post.Illustration)}&blockId=${post.id}`} />
                                                : <img className={"object-fill h-44 w-full"} src={"https://placeimg.com/400/225/arch"} />
                                            }
                                            <div className={"px-6 py-5"}>
                                                <h2 className="font-bold text-black text-xl mb-2">{post.Page}</h2>
                                                <p className={"text-gray-700 text-base"}>
                                                    {(!post.Preview || post.Preview.length === 0) &&
                                                        'Pas de résumé disponible'}
                                                    {(post.Preview) && (
                                                        <p>{(post.Preview)}</p>
                                                    )}
                                                </p>
                                                <p className={"text-gray-700 text-base"}>
                                                    {post.Date && (
                                                        <p className="posted">Publié le : {getDateStr(post.Date)}</p>
                                                    )}
                                                </p>
                                            </div>
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
