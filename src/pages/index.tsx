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

    /**useEffect(() => {
        function animateValue(obj, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }

        const annee_exercice = document.getElementById("annee_exercice");
        const clients_satisfait = document.getElementById("clients_satisfait");
        const domaines_competences = document.getElementById("domaines_competences");
        const dossiers_traites = document.getElementById("dossiers_traites");

        animateValue(annee_exercice, 0,  accueil.annee_exercice.description , 1000);
        animateValue(clients_satisfait, 0,  accueil.clients_satisfait.description , 1000);
        animateValue(domaines_competences, 0,  accueil.domaines_competences.description , 1000);
        animateValue(dossiers_traites, 0,  accueil.domaines_competences.description , 1000);
    });*/

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
                            <blockquote className={"mt-16"}>
                                <p className={"text-gray-50 opacity-100 text-2xl lg:text-4xl font-thin text-center"}>"{ accueil.citation.description }"</p>
                            </blockquote>
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
                <Image loading={"eager"} className={"brightness-[60%] h-[100vh] w-full object-cover object-right sm:object-center"} src={"/images/Accueil/banniere-accueil.png"} alt={"image-banniere-accueil"} width={"1920"} height={"1080"}/>
            </div>
            <div className={"bg-white py-10 lg:py-20 flex justify-center"} id={"section-bandeau"}>
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
            <div className={"bg-white flex justify-center w-full  lg:py-20"}>
                <div className={"w-5/6"}>
                    <h2 className={"font-bold text-gray-800 text-2xl lg:text-4xl uppercase mb-6"}>Mes expertises</h2>
                    <div className={"flex flex-col lg:flex-row w-full gap-10 mt-10 "}>
                        <Link href={"/Expertise/Droit-travail"} className={"w-full group lg:w-1/2 p-8 border shadow rounded-lg hover:border-red-900 transition-all duration-500 hover:scale-105 hover:shadow-lg"}>
                            <h2 className={"text-start text-gray-800 text-xl lg:text-3xl"}>Droit du travail</h2>
                            <p className={"mt-2 text-sm lg:text-base text-justify"}>{ accueil.droit_travail.description }</p>
                            <div className={"flex justify-end mt-10 items-center"}>
                                <p className={'relative font-semibold text-base lg:text-lg text-red-800 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-red-300 before:transition group-hover:before:scale-100 group-hover:text-red-700'}>Accéder a la page</p>
                            </div>
                        </Link>
                        <Link href={"/Expertise/Droit-securite-sociale"} className={"w-full group lg:w-1/2 p-8 border border-gray-200 shadow rounded-lg hover:border-red-900 transition-all duration-500 hover:scale-105 hover:shadow-lg"}>
                            <h2 className={"text-start text-gray-800 text-xl lg:text-3xl"}>Droit de la sécurité sociale</h2>
                            <p className={"mt-2 text-sm lg:text-base text-justify"}>{ accueil.droit_social.description }</p>
                            <div className={"flex justify-end mt-10 items-center peer"}>
                                <p className={'relative font-semibold text-base lg:text-lg text-red-800 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-red-300 before:transition group-hover:before:scale-100 group-hover:text-red-700'}>Accéder a la page</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={"bg-white flex gap-5 justify-center w-full py-20"}>
                <div className={"w-5/6"}>
                    <h2 className={"font-bold text-gray-800 text-2xl lg:text-4xl uppercase mb-6"}>Le cabinet</h2>
                    <h3 className={"font-medium text-xl lg:text-3xl text-gray-800"}>ADN DE L'ENTREPRISE</h3>
                    <p className={"mt-2 text-sm lg:text-base mb-8"}>
                        L’ADN du cabinet c’est son approche holistique de chaque affaire, qui est appréhendée dans sa globalité et en prenant en considération ses différentes dimensions économiques, sociales et humaines.
                    </p>
                    <p className={"text-sm lg:text-base mb-8"}>
                        La complémentarité entres les activités en conseil et de contentieux permet de faire un juste diagnostic du dossier, une bonne évaluation des risques et de proposer les solutions les plus adaptées.
                    </p>
                    <div className={"flex flex-col gap-y-8 gap-x-16 lg:flex-row mt-10"}>
                        <div className={"h-auto w-auto lg:w-1/2 order-2"}>
                            <video controls poster="/images/FlorenceBabeau/flofrence_babeau.png" src={"/video/FlorenceBabeau.mp4"} type={"video/mp4"} className={"w-full h-auto rounded-md"}></video>
                        </div>
                        <div className={"w-full lg:w-1/2 flex flex-col text-justify order-1"}>
                            <div>
                                <p className={"font-medium text-xl lg:text-3xl text-gray-800"}>Florence Babeau</p>
                                <p className={"mt-2 text-sm lg:text-base mb-8"}>Très investie dans les dossiers que je gère en Droit du Travail et en Droit de la Sécurité Sociale, j’aime travailler dans une relation de confiance et de proximité qui me paraît indispensable à l’établissement d’une collaboration pérenne et fructueuse.</p>
                            </div>
                            <div>
                                <p className={"font-medium text-xl lg:text-3xl text-gray-800"}>Mon parcours</p>
                                <p className={"mt-2 text-sm lg:text-base"}>Titulaire d’un DEA de Droit Social et Droit du Travail, c’est tout naturellement que je me suis spécialisée dans l’accompagnement, la formation et la défense des intérêts des employeurs et dirigeants d’entreprise qui ont besoin de se consacrer pleinement et sereinement au développement de leur entreprise.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"bg-gray-800 flex justify-center w-full py-20 pl-4 pr-5"}>
                <div className={"w-5/6"}>
                    <h2 className={"font-bold text-white text-xl lg:text-3xl uppercase mb-6"}>Mes dernières actualités</h2>
                    <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"}>
                        {lastPosts.map((post) => {
                            return(
                                <ArticleCard Id={post.id} Slug={post.Slug} Illustration={post.Illustration} Page={post.Page} Preview={post.Preview} Type={post.Type} Date={post.Date}/>
                            )
                        })}
                    </div>
                    <div className={"flex justify-center mt-20"}>
                        <Link href={"/blog"} className={"bg-red-900 text-white text-center py-3 px-8 shadow-lg rounded-md hover:bg-red-800 hover:text-white uppercase font-bold hover:scale-105 duration-500"}>Consulter l'ensemble de mes actualités</Link>
                    </div>
                </div>
            </div>
            <Recommendation></Recommendation>
            <BesoinAvocat></BesoinAvocat>
        </>
    );
}

export default Index
