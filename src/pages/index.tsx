//Custom components
import Recommendation from "../components/recommendation";
import BesoinAvocat from "../components/Besoin-avocat";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

//Notion libs
import { getBlogLink, getDateStr, postIsPublished } from '../lib/blog-helpers';
import getNotionUsers from '../lib/notion/getNotionUsers';
import getBlogIndex from '../lib/notion/getBlogIndex';
import React, {useEffect} from "react";
import getAccueilIndex from "../lib/notion/getAccueilIndex";
import getCompetencesDroitSocialIndex from "../lib/notion/getCompetencesDroitSocialIndex";
import getCompetencesDroitTravailIndex from "../lib/notion/getCompetencesDroitTravailIndex";
import ArticleCard from "../components/ArticleCard";
import Partenaires from "../components/Partenaires";
import {Parallax, ParallaxBanner, ParallaxBannerLayer} from "react-scroll-parallax";

export async function getStaticProps({ preview }) {
    const postsTable = await getBlogIndex();
    const accueilTable = await getAccueilIndex();
    const competencesSocialTable = await getCompetencesDroitSocialIndex();
    const competencesTravailTable = await getCompetencesDroitTravailIndex();

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

    const competencesSocial = Object.keys(competencesSocialTable).map((slug) => {
        const competenceS = competencesSocialTable[slug]
        return competenceS
    })

    const competencesTravail = Object.keys(competencesTravailTable).map((slug) => {
        const competenceT = competencesTravailTable[slug]
        return competenceT
    })

    const { users } = await getNotionUsers([...authorsToGet])

    posts.map((post) => {
        post.Authors = post.Authors.map((id) => users[id].full_name)
    })

    return {
        props: {
            preview: preview || false,
            posts,
            accueil: accueilTable,
            competencesSocial,
            competencesTravail
        },
        revalidate: 10
    }
}

const Index = ({ posts = [], accueil, competencesSocial, competencesTravail}) => {

    const lastPosts = posts.slice(-3);
    return (
        <>
            <Head>
                <title>Accueil</title>
                <meta name={"description"} content={"Cabinet Avocat Bordeaux Florence Babeau spécialisé en droit du Travail, droit Social et droit de la Sécurité Sociale ainsi qu'en droit de la Famille."}/>
            </Head>
            <div className={"relative h-[100vh] w-full"}>
                <div className={"absolute z-50 top-1/3 sm:left-20 sm:left-[5vw]"}>
                    <div className={"flex flex-col gap-6"}>
                        <div>
                            <h1 className={"text-white text-center text-2xl md:text-5xl font-bold sm:text-start tracking-wide"}>MAÎTRE FLORENCE BABEAU</h1>
                            <p className={"text-white text-center text-xl md:text-2xl sm:px-0 pt-2 sm:text-start"}>Avocat en droit du travail et de la sécurité sociale</p>
                            <blockquote className={"my-16"}>
                                <p className={"text-gray-50 opacity-100 text-2xl font-thin text-center"}><i>“{ accueil.citation.description }”</i></p>
                            </blockquote>
                            <div className={"block sm:flex"}>
                                <div className={"flex justify-center mt-5"}>
                                    <Link href={"/contact"} className={"bg-red-800 text-white py-3 px-8 shadow-lg rounded-md hover:bg-red-700 hover:text-white inline-flex items-center gap-x-5 hover:scale-105 duration-500"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                                        </svg>
                                        <span>Contactez-moi</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute z-50 py-6 sm:py-8 lg:py-12 top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/4 w-5/6 lg:w-auto">
                    <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                        {/**<div className="bg-gray-100/50 hover:bg-gray-100 transition-all duration-500 rounded-lg px-4 py-6 md:py-8 lg:py-12">
                         <h2 className="text-gray-800 opacity-100 text-2xl lg:text-4xl font-medium text-center italic">"{ accueil.citation.description }"</h2>
                         </div>*/}
                    </div>
                    <Link href={"#section-bandeau"} className={"absolute z-50 w-10 h-16 border-lg translate-y-full -translate-x-1/2 left-1/2 top-full"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 animate-bounce text-gray-100">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </Link>
                </div>
                <Image loading={"eager"} className={"brightness-[60%] h-[100vh] w-full object-cover sm:object-center"} src={"/images/Accueil/banniere-accueil.png"} alt={"image-banniere-accueil"} width={"1920"} height={"1080"}/>
            </div>
            <div className={"bg-white py-10 lg:py-10 flex justify-center"} id={"section-bandeau"}>
                <div className={"bg-white lg:border lg:shadow-lg grid grid-cols-3 lg:grid-cols-3 w-5/6 lg:p-8 gap-4 rounded-lg"}>
                    <div className="flex flex-col justify-center items-center bg-white shadow lg:bg-none lg:shadow-none rounded-lg p-4 md:p-8 h-32">
                        <div className="text-gray-800 text-xl sm:text-3xl md:text-4xl font-bold" id={"annee_exercice"}>{ accueil.annee_exercice.description }</div>
                        <div className="text-xs sm:text-base font-medium text-center">Années d'exercice</div>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white shadow lg:bg-none lg:shadow-none rounded-lg p-4 md:p-8 h-32">
                        <div className="text-gray-800 text-xl sm:text-3xl md:text-4xl font-bold" id={"clients_satisfait"}>{ accueil.clients_satisfait.description }%</div>
                        <div className="text-xs sm:text-base font-medium text-center">de clients satisfait</div>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white shadow lg:bg-none lg:shadow-none rounded-lg p-4 md:p-8 h-32">
                        <div className="text-gray-800 text-xl sm:text-3xl md:text-4xl font-bold" id={"domaines_competences"}>{ accueil.domaines_competences.description }</div>
                        <div className="text-xs sm:text-base font-medium text-center">Grands domaines de compétences</div>
                    </div>
                </div>
            </div>
            <div className={"bg-gradient-to-b from-white to-neutral-100 flex justify-center w-full lg:py-10"}>
                <div className={"w-5/6"}>
                    <h2 className={"font-bold text-gray-800 text-2xl lg:text-4xl uppercase mb-6"}>Nos expertises</h2>
                    <div className={"flex flex-col lg:flex-row w-full gap-10 mt-10 "}>
                        <Link href={"/Expertise/Droit-travail"} className={"w-full flex flex-col bg-white group lg:w-1/2 p-8 border shadow rounded-lg hover:border-red-900 transition-all duration-500 hover:scale-105 hover:shadow-lg"}>
                            <h2 className={"text-start text-gray-800 text-xl lg:text-3xl"}>Droit du travail</h2>
                            <p className={"mt-2 text-sm lg:text-base text-justify"}>{ accueil.droit_travail.description }</p>
                            <div className={"flex justify-end mt-auto items-center"}>
                                <p className={'relative font-semibold text-base lg:text-lg text-red-800 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-red-700 before:transition group-hover:before:scale-100 group-hover:text-red-700'}>Accéder à la page</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-red-700 ml-[1rem]">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>

                            </div>
                        </Link>
                        <Link href={"/Expertise/Droit-securite-sociale"} className={"w-full flex flex-col bg-white group lg:w-1/2 p-8 border border-gray-200 shadow rounded-lg hover:border-red-900 transition-all duration-500 hover:scale-105 hover:shadow-lg"}>
                            <h2 className={"text-start text-gray-800 text-xl lg:text-3xl"}>Droit de la sécurité sociale</h2>
                            <p className={"mt-2 text-sm lg:text-base text-justify"}>{ accueil.droit_social.description }</p>
                            <div className={"flex justify-end mt-auto items-center peer"}>
                                <p className={'relative font-semibold text-base lg:text-lg text-red-800 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-red-700 before:transition group-hover:before:scale-100 group-hover:text-red-700'}>Accéder à la page</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-red-700 ml-[1rem]">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={"bg-neutral-100 flex gap-5 justify-center w-full py-10"}>
                <div className={"w-5/6"}>
                    <h2 className={"font-bold text-gray-800 text-2xl lg:text-4xl uppercase mb-6"}>Le cabinet</h2>
                    <div className="">
                        <div className="max-w-screen-2xl px-4 md:px-4 mx-auto">
                            <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                                <div className="md:pt-6">
                                    <h1 className="text-gray-700 text-2xl sm:text-3xl font-semibold text-center md:text-left mb-4 md:mb-6">ADN du cabinet</h1>
                                    <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">
                                        L’ADN du cabinet c’est son approche holistique de chaque affaire, qui est appréhendée dans sa globalité et en prenant en considération ses différentes dimensions économiques, sociales et humaines.<br/><br/>
                                        La complémentarité entres les activités en conseil et de contentieux permet de faire un juste diagnostic du dossier, une bonne évaluation des risques et de proposer les solutions les plus adaptées.
                                    </p>
                                    <p className="text-red-800 font-semibold text-center md:text-left">Qui suis-je ?</p>
                                    <h2 className="text-gray-700 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4">Florence Babeau</h2>
                                    <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">Très investie dans les dossiers que je gère en Droit du Travail et en Droit de la Sécurité Sociale, j’aime travailler dans une relation de confiance et de proximité qui me paraît indispensable à l’établissement d’une collaboration pérenne et fructueuse.</p>
                                    <h2 className="text-gray-700 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4">Mon parcours</h2>
                                    <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">Titulaire d’un DEA de Droit Social et Droit du Travail, c’est tout naturellement que je me suis spécialisée dans l’accompagnement, la formation et la défense des intérêts des employeurs et dirigeants d’entreprise qui ont besoin de se consacrer pleinement et sereinement au développement de leur entreprise.</p>
                                </div>
                                <div className={"my-auto"}>
                                    <div className="h-auto md:h-auto overflow-hidden rounded-lg shadow-lg">
                                        <video controls poster="/images/FlorenceBabeau/poster.png" src={"/video/FlorenceBabeau.mp4"} type={"video/mp4"} className={"hover:cursor-pointer"}></video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"bg-neutral-600 flex justify-center w-full py-20 pl-4 pr-5"}>
                <div className={"w-5/6"}>
                    <h2 className={"font-bold text-white text-xl lg:text-3xl uppercase mb-10"}>Nos dernières actualités</h2>
                    <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"}>
                        {lastPosts.map((post) => {
                            return(
                                <ArticleCard Id={post.id} Slug={post.Slug} Illustration={post.Illustration} Page={post.Page} Preview={post.Preview} Type={post.Type} Date={post.Date}/>
                            )
                        })}
                    </div>
                    <div className={"flex justify-center mt-20"}>
                        <Link href={"/blog"} className={"bg-red-800 text-white text-center py-3 px-8 shadow-lg rounded-md hover:bg-red-700 hover:text-white uppercase font-bold hover:scale-105 duration-500"}>Consulter l'ensemble de nos actualités</Link>
                    </div>
                </div>
            </div>
            <Recommendation></Recommendation>
            <Partenaires></Partenaires>
            <BesoinAvocat></BesoinAvocat>
        </>
    );
}

export default Index
