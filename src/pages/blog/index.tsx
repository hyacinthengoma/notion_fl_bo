import Link from 'next/link'
import { getBlogLink, getDateStr, postIsPublished } from '../../lib/blog-helpers'
import getNotionUsers from '../../lib/notion/getNotionUsers'
import getBlogIndex from '../../lib/notion/getBlogIndex'
import Image from "next/image";
import BesoinAvocat from "../../components/Besoin-avocat";
import React, {useEffect, useState} from "react";
import Head from "next/head";
import ArticleCard from "../../components/ArticleCard";
import {Checkbox, Collapse, Text} from "@nextui-org/react";

export async function getServerSideProps({ preview }) {
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
    //revalidate: 10,
  }
}

const Index = ({ posts = [], preview }) => {

    useEffect(() => {
        var categories = document.getElementsByClassName('categorie');
        var clickCounter=0;

        var listeCateg = []
        Array.prototype.forEach.call(categories, function(element) {
            element.addEventListener('click', function(currentCateg){
                if(!listeCateg.includes(currentCateg.target.value))
                {
                    listeCateg.push(currentCateg.target.value);
                }else{
                    listeCateg = listeCateg.filter(e => e !== currentCateg.target.value);
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
        <Head>
            <title>Blog - Actualités sociales</title>
        </Head>
        <div className={"relative w-full"}>
            <div className={"absolute transform top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4/5 text-center z-50"}>
                <h1 className={"text-white text-2xl md:text-4xl font-bold translate-y-1/2"}>BLOG</h1>
            </div>
            <Image className={"brightness-50 h-[40vh] w-full object-cover"} src={"/images/Actualites-sociales/blog-banniere.png"} alt={"image-banniere"} width={"1920"} height={"1080"}/>
        </div>
        <div className={"bg-white flex justify-center w-full py-1 pb-10 min-h-screen py-10"}>
            <div className={"w-5/6"}>
                <div className={"flex flex-col gap-4"}>
                    <div className={"w-1/4"}>
                        <Collapse bordered title="Filtres" subtitle="Selectionner le type d'articles a afficher">
                            <Checkbox.Group color="secondary">
                                {uniqueTypes.map((Type:string) => {
                                    return (
                                        <Checkbox value={Type} className={"categorie"}><Text>{Type}</Text></Checkbox>
                                    );
                                })}
                            </Checkbox.Group>
                        </Collapse>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full mt-4">
                        {posts.map((post) => {
                            return(
                                <ArticleCard Id={post.id} Slug={post.Slug} Illustration={post.Illustration} Page={post.Page} Preview={post.Preview} Type={post.Type} Date={post.Date}/>
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
