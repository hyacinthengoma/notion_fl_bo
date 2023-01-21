//Custom components
import Header from "../components/header";
import Recommandation from "../components/recommandation";
import BesoinAvocat from "../components/Besoin-avocat";

import Link from "next/link";
import Head from "next/head";

//Notion libs
import { getBlogLink, getDateStr, postIsPublished } from '../lib/blog-helpers';
import { textBlock } from '../lib/notion/renderers';
import getNotionUsers from '../lib/notion/getNotionUsers';
import getBlogIndex from '../lib/notion/getBlogIndex';
import React from "react";

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
    const lastPosts = posts.slice(-3);
    return (
        <>
            <Header></Header>
            <Head>
                <title>Accueil</title>
            </Head>
            <div className={"relative"}>
                <div className={"absolute mt-40 ml-16 z-50"}>
                    <h1 className={"text-white text-2xl md:text-4xl font-bold"}>MAÎTRE FLORENCE BABEAU</h1>
                    <div className={"ml-6 pt-4"}>
                        <p className={"text-white text-xl md:text-2xl"}>Avocat en droit du travail et de la sécurité sociale</p>
                        <div className={"flex"}>
                            <div className={"pt-16 pr-2"}>
                                <Link href={""} className="bg-red-900 text-white py-3 px-8 shadow-lg rounded-md hover:bg-red-800 hover:text-white inline-flex items-center gap-x-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                                    </svg>
                                    <span>06 00 00 00 00</span>
                                </Link>
                            </div>
                            <div className={"pt-16 pl-2"}>
                                <Link href={""} className={"bg-red-900 text-white py-3 px-8 shadow-lg rounded-md hover:bg-red-800 hover:text-white inline-flex items-center gap-x-5"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                                    </svg>
                                    <span>MES EXPERTISES</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <img className={"brightness-75 h-[100vh] w-full object-cover"} src={"/images/Accueil/banniere-accueil.png"} alt={"image-banniere"}></img>
            </div>
            <div className={"absolute flex justify-center w-full"}>
                <div className={"w-5/6 bg-white flex flex-col gap-8 md:flex-row justify-between shadow-lg p-12 rounded-sm transform -translate-y-20"}>
                    <div className={"flex flex-col"}>
                        <p className={"text-black text-center font-bold text-3xl"}>
                            28
                        </p>
                        <p className={"text-black text-center text-2xl"}>
                            Années d'exercice
                        </p>
                    </div>
                    <div className={"flex flex-col"}>
                        <p className={"text-black text-center font-bold text-3xl"}>
                            98%
                        </p>
                        <p className={"text-black text-center text-2xl"}>
                            de clients satisfaits
                        </p>
                    </div>
                    <div className={"flex flex-col"}>
                        <p className={"text-black text-center font-bold text-3xl"}>
                            2
                        </p>
                        <p className={"text-black text-center text-2xl"}>
                            Grands domaines de compétences
                        </p>
                    </div>
                    <div className={"flex flex-col"}>
                        <p className={"text-black text-center font-bold text-3xl"}>
                            3000+
                        </p>
                        <p className={"text-black text-center text-2xl"}>
                            Dossiers traités
                        </p>
                    </div>
                </div>
            </div>

            <div className={"bg-gray-100 flex justify-center w-full pt-96 md:pt-36 pb-20 pl-4 pr-5"}>
                <div className={"w-5/6"}>
                    <h2 className={"font-bold text-black text-[2rem] uppercase mb-6"}>Qui suis-je ?</h2>
                    <div className={"flex flex-col gap-y-8 gap-x-16 lg:flex-row"}>
                        <div className={"w-1/2"}>
                            <iframe className={"w-full h-80"} src="https://www.youtube.com/embed/KBPtg6yr3YE">
                            </iframe>
                        </div>
                        <div className={"w-1/2 flex flex-col gap-y-8 text-justify"}>
                            <div>
                                <p className={"font-semibold text-xl text-black"}>Florence Babeau</p>
                                <p className={"mt-2"}>Très investie dans les dossiers que je gère en Droit du Travail et en Droit de la Famille, j’aime travailler dans une relation de confiance et de proximité qui me paraît indispensable à l’établissement d’une collaboration pérenne et fructueuse.</p>
                            </div>
                            <div>
                                <p className={"font-semibold text-xl text-black"}>Mon parcours</p>
                                <p className={"mt-2"}>Titulaire d’un DEA de Droit Social et Droit du Travail, c’est tout naturellement que je me suis spécialisée dans l’accompagnement, la formation et la défense des intérêts des employeurs et dirigeants d’entreprise qui ont besoin de se consacrer pleinement et sereinement au développement de leur entreprise. C’est cette même tranquillité d’esprit que je souhaite apporter aux personnes qui se séparent, divorcent, réorganisent leur vie familiale en les aidant à trouver les meilleures solutions techniques et humaines à leurs problématiques.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={"bg-gray-800 flex justify-center w-full py-20 pl-4 pr-5"}>
                <div className={"w-5/6"}>
                    <h2 className={"font-bold text-white text-[2rem] uppercase mb-6"}>Mes dernières actualités</h2>
                    <div className={"flex flex-col lg:flex-row justify-center gap-16"}>
                        {lastPosts.map((post) => {
                            return(
                                <div className="w-80 bg-gray-100 shadow-xl mx-auto hover:scale-110 duration-500 article" key={post.Slug} type={post.Type}>
                                    <Link href="/blog/[slug]" as={getBlogLink(post.Slug)}>
                                        <div className={"max-w-sm mx-auto bg-white overflow-hidden shadow-lg"}>
                                            {post.Illustration ?
                                                <img className={"object-fill h-44 w-full"} src={`/api/asset?assetUrl=${encodeURIComponent(post.Illustration)}&blockId=${post.id}`} />
                                                : <img className={"object-fill h-44 w-full"} src={"https://placeimg.com/400/225/arch"} />
                                            }
                                            <div className={"px-6 py-5"}>
                                                <h2 className="font-bold text-black text-xl mb-2">{post.Page}</h2>
                                                <div>
                                                    {(!post.Preview || post.Preview.length === 0) &&
                                                        <p className={"text-gray-700 text-base"}>Pas de résumé disponible</p>}
                                                    {(post.Preview) && (
                                                        <p className={"text-gray-700 text-base"}>{(post.Preview)}</p>
                                                    )}
                                                </div>
                                                <div>
                                                    {post.Date && (
                                                        <p className="posted text-gray-700 text-base">Publié le : {getDateStr(post.Date)}</p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                    <div className={"flex justify-center mt-6"}>
                        <Link href={""} className={"bg-red-900 text-white py-3 px-8 shadow-lg rounded-md hover:bg-red-800 hover:text-white uppercase font-bold"}>Consulter l'ensemble de mes actualités</Link>
                    </div>
                </div>
            </div>
            <Recommandation></Recommandation>
            <BesoinAvocat></BesoinAvocat>
        </>
    );
}

export default Index
