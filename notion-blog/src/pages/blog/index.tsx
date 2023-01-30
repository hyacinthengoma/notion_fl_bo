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
                /**clickCounter++;
                if (clickCounter%2 ==0) {
                    element.style.background= '#FDA5A5';
                }*/

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
                    <div className={"flex flex-row gap-x-4 my-10"}>
                        {uniqueTypes.map((Type:string) => {
                            return (
                                <div>
                                    <p className={"categorie bg-red-300 py-2 px-4 rounded text-black cursor-pointer flex gap-2 border border-red-900 hover:bg-red-900 hover:text-white hover:scale-105 hover:transition duration-500"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                                        </svg>

                                        {Type}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    <div className={"justify-center w-full flex"}>
                        {/**<div className={"py-2 px-4 my-10"}>
                            {/**<label className={"text-white text-xl"} htmlFor="tri">Afficher les articles par catégorie :</label>
                            <select className={"border block px-3 py-1.5"} id={"tri"} name={"tri"}>
                                <option value={""}>Trier par catégorie</option>
                                <option value={"Droit du travail"}>Droit du travail</option>
                                <option value={"Droit de la sécurité sociale"}>Droit de la sécurité sociale</option>
                            </select>
                        </div>*/}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                        {posts.map((post) => {
                            return(
                                <div className="w-full bg-gray-100 border border-gray-200 rounded-sm shadow-lg hover:scale-110 duration-500 article" key={post.Slug} type={post.Type}>
                                    <Link href={"/blog/[slug]"} as={getBlogLink(post.Slug)}>
                                        <div className={"w-full flex justify-center"}>
                                            {post.Illustration ?
                                                <img className={"object-cover h-44 w-full m-4 rounded-lg shadow-lg"} src={`/api/asset?assetUrl=${encodeURIComponent(post.Illustration)}&blockId=${post.id}`} />
                                                : <img className={"object-cover h-44 w-full m-4 rounded-lg shadow-lg"} src={"https://placeimg.com/400/225/arch"} />
                                            }
                                        </div>
                                        <div className="p-5">
                                            {(!post.Type || post.Type.length === 0) &&
                                                <p className={"mb-3 font-light text-sm bg-red-100 w-fit p-1 rounded-lg border border-red-900 text-gray-700"}>Aucune catégorie</p>}
                                            {(post.Type) && (
                                                <p className={"mb-3 font-light text-sm bg-red-100 w-fit p-1 rounded-lg border border-red-900 text-gray-700"}>{(post.Type)}</p>
                                            )}
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
