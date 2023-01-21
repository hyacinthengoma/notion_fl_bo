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
        <Header></Header>
        <div>
            <div className={"relative w-full"}>
                <div className={"absolute transform top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4/5 text-center z-50"}>
                    <h1 className={"text-white text-2xl md:text-4xl font-bold"}>BLOG</h1>
                    <p className={"text-white text-xl md:text-2xl mb-8"}>Retrouvez les actualités de mon cabinet</p>
                </div>
                <img className={"brightness-50 h-96 w-full object-cover"} src={"/images/Actualites-sociales/blog-banniere.png"} alt={"image-banniere"}></img>
            </div>
            <div className={"bg-zinc-100 flex justify-center w-full py-1"}>
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
                    <div className="flex flex-wrap -mx-1 lg:-mx-4">
                        {posts.map((post) => {
                            return(
                                <div className="my-4 px-1 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
                                    <article className="overflow-hidden border shadow-lg hover:shadow-xl hover:scale-105 ease-in duration-200 mx-4 rounded-lg">
                                        <div className="relative">
                                            <div className="absolute ml-4 rounded-tr-lg right-0 py-2 px-4 bg-white text-black shadow-lg">
                                                <div>
                                                    {(!post.Type || post.Type.length === 0) &&
                                                        <span className="text-md">Aucun type</span>
                                                    }
                                                    {(post.Type) && (
                                                        <span className="text-md">{post.Type}</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        {post.Illustration ?
                                            <img className={"block h-[230px] w-full object-cover\""} src={`/api/asset?assetUrl=${encodeURIComponent(post.Illustration)}&blockId=${post.id}`} />
                                            : <img className={"block h-[230px] w-full object-cover\""} src={"https://placeimg.com/400/225/arch"} />
                                        }
                                        <header className="leading-tight bg-white p-2 md:p-4 h-44">
                                            <h1 className="text-lg">
                                                {post.Page}
                                            </h1>
                                            <div>
                                                {(!post.Preview || post.Preview.length === 0) &&
                                                    <p className={"text-gray-700 text-base"}>Pas de résumé disponible</p>}
                                                {(post.Preview) && (
                                                    <p className={"text-gray-700 text-base"}>{(post.Preview)}</p>
                                                )}
                                            </div>

                                        </header>
                                        <footer className="flex flex-col items-center bg-white justify-between leading-none p-4">
                                            <div>
                                                {post.Date && (
                                                    <p className="text-sm mt-3 text-gray-700 font-regular">Publié le : {getDateStr(post.Date)}</p>
                                                )}
                                            </div>
                                            <button
                                                className="mt-6 py-2 px-4 bg-red-900 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Consulter cet article
                                            </button>
                                        </footer>
                                    </article>
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
