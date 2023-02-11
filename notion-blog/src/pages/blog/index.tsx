import Link from 'next/link'
import Header from '../../components/header'

import { getBlogLink, getDateStr, postIsPublished } from '../../lib/blog-helpers'
import getNotionUsers from '../../lib/notion/getNotionUsers'
import getBlogIndex from '../../lib/notion/getBlogIndex'
import getNotionAsset from '../../lib/notion/getNotionAssetUrls'
import Image from "next/image";
import BesoinAvocat from "../../components/Besoin-avocat";
import React, {useEffect, useState} from "react";
import {array} from "prop-types";

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
        var categories = document.getElementsByClassName('categorie');
        var clickCounter=0;

        var listeCateg = []
        Array.prototype.forEach.call(categories, function(element) {
            element.addEventListener('click', function(currentCateg){
                if(!listeCateg.includes(currentCateg.target.innerText))
                {
                    listeCateg.push(currentCateg.target.innerText);
                    currentCateg.target.classList.remove('bg-red-300', 'text-black', 'hover:bg-red-900', 'hover:text-white');
                    currentCateg.target.classList.add('bg-red-900', 'text-white', 'hover:bg-red-300', 'hover:text-black');
                }else{
                    listeCateg = listeCateg.filter(e => e !== currentCateg.target.innerText);
                    currentCateg.target.classList.remove('bg-red-900', 'text-white', 'hover:bg-red-300', 'hover:text-black');
                    currentCateg.target.classList.add('bg-red-300', 'text-black', 'hover:bg-red-900', 'hover:text-white');
                }

                var articles = document.getElementsByClassName('article');
                Array.prototype.forEach.call(articles, function(currentArticle){
                    if(listeCateg.includes(currentArticle.getAttribute('type'))){
                        currentArticle.classList.remove('hidden');
                    }else{
                        currentArticle.classList.add('hidden');
                    }

                    if(listeCateg.length === 0){
                        currentArticle.classList.remove('hidden');
                    }
                })
            })
        })
    })

    let types = [];
    posts.map((post) => {
        types.push(post.Type);
    })
    let uniqueTypes = [...new Set(types)];
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
            <div className={"bg-gray-100 flex justify-center w-full py-1 pb-10"}>
                <div className={"w-5/6"}>
                    <div className={"flex flex-row flex-wrap justify-center gap-4 my-10"}>
                        {uniqueTypes.map((Type:string) => {
                            return (
                                <div>
                                    <p className={"categorie bg-red-300 py-2 px-4 rounded-md text-black cursor-pointer flex gap-2 border border-red-900 hover:bg-red-900 hover:text-white hover:scale-105 hover:transition duration-500"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                        </svg>


                                        {Type}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                        {posts.map((post) => {
                            return(
                                <Link href={"/blog/[slug]"} as={getBlogLink(post.Slug)} className={"flex flex-col bg-white border rounded-lg overflow-hidden hover:scale-110 duration-500 article"} key={post.Slug} type={post.Type}>
                                    <div
                                        className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative m-2 rounded-lg">
                                        {post.Illustration ?
                                            <img
                                                src={`/api/asset?assetUrl=${encodeURIComponent(post.Illustration)}&blockId=${post.id}`}
                                                loading="lazy" alt="Photo by Lorenzo Herrera"
                                                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"/>
                                            :
                                            <img
                                                src={"https://placeimg.com/400/225/arch"}
                                                loading="lazy" alt="Photo by Lorenzo Herrera"
                                                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"/>
                                        }

                                    </div>

                                    <div className="flex flex-col flex-1 p-4 sm:p-6">
                                        <h2 className="text-gray-800 text-lg font-semibold mb-2">
                                            <div
                                                className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">{post.Page}</div>
                                        </h2>

                                        {(!post.Preview || post.Preview.length === 0) &&
                                            <p className={"text-gray-500 mb-8"}>Pas de résumé disponible</p>}
                                        {(post.Preview) && (
                                            <p className={"text-gray-500 mb-8"}>{(post.Preview)}</p>
                                        )}
                                        <div className="flex justify-between items-end mt-auto">
                                            <div className="flex items-center gap-2">
                                                <div>
                                                    <span className="block text-red-800">{(post.Type)}</span>
                                                    <span className="block text-gray-400 text-sm">{getDateStr(post.Date)}</span>
                                                </div>
                                            </div>

                                            <span
                                                className="text-black text-sm border border-red-900 rounded px-2 py-1">Lire l'article</span>
                                        </div>
                                    </div>
                                </Link>
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
