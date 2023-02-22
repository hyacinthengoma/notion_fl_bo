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
import React from "react";
import getAccueilIndex from "../lib/notion/getAccueilIndex";
import getCompetencesDroitSocialIndex from "../lib/notion/getCompetencesDroitSocialIndex";
import getCompetencesDroitTravailIndex from "../lib/notion/getCompetencesDroitTravailIndex";

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
                <div className={"absolute z-50 top-1/4 sm:left-20 sm:left-[5vw]"}>
                    <div className={"flex flex-col gap-6"}>
                        <div>
                            <h1 className={"text-white text-center text-2xl md:text-5xl font-bold sm:text-start tracking-wide"}>MAÎTRE FLORENCE BABEAU</h1>
                            <p className={"text-white text-center text-xl md:text-[1.4rem] sm:px-0 pt-2 sm:text-start"}>Avocat en droit du travail et de la sécurité sociale</p>
                            {/*<p className={"text-white text-center sm:text-start text-xl md:text-4xl sm:px-0 italic font-thin mb-16"}>
                                <span className={""}>"{ accueil.citation.description }"</span>
                            </p>*/}
                            <div className={"block sm:flex"}>
                                <div className={"flex justify-center mt-5"}>
                                    <Link href={"/contact"} className={"bg-red-900 text-white py-3 px-8 shadow-lg rounded-md hover:bg-red-800 hover:text-white inline-flex items-center gap-x-5 hover:scale-105 duration-500"}>
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
                <div className="absolute z-50 py-6 sm:py-8 lg:py-12 top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5/6 lg:w-auto">
                    <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                        <div className="bg-gray-100/50 rounded-lg px-4 py-6 md:py-8 lg:py-12">
                            <h2 className="text-gray-800 opacity-100 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6 italic">"{ accueil.citation.description }"</h2>
                        </div>
                    </div>
                    <div className={"absolute z-50 w-10 h-16 -mt-8 border-lg translate-y-full -translate-x-1/2 left-1/2 top-full"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 animate-bounce text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>
                <Image loading={"eager"} className={"brightness-75 h-[100vh] w-full object-cover object-right sm:object-center"} src={"/images/Accueil/banniere-accueil.png"} alt={"image-banniere-accueil"} width={"1920"} height={"1080"}/>
            </div>
            {/*<div className={"bg-slate-50 flex justify-center w-full py-20 before:bottom-4"}>
                <div className={"grid grid-cols-2 lg:grid-cols-4 gap-8 w-5/6"}>
                    <div className="flex flex-col justify-center items-center bg-white shadow rounded-lg p-4 md:p-8 h-32">
                        <div className="text-red-800 text-xl sm:text-2xl md:text-3xl font-bold">{ accueil.annee_exercice.description }</div>
                        <div className="text-sm sm:text-base font-semibold text-center">Années d'exercice</div>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white shadow rounded-lg p-4 md:p-8 h-32">
                        <div className="text-red-800 text-xl sm:text-2xl md:text-3xl font-bold">{ accueil.clients_satisfait.description }</div>
                        <div className="text-sm sm:text-base font-semibold text-center">de clients satisfait</div>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white shadow rounded-lg p-4 md:p-8 h-32">
                        <div className="text-red-800 text-xl sm:text-2xl md:text-3xl font-bold">{ accueil.domaines_competences.description }</div>
                        <div className="text-sm sm:text-base font-semibold text-center">Grands domaines de compétences</div>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white shadow rounded-lg p-4 md:p-8 h-32">
                        <div className="text-red-800 text-xl sm:text-2xl md:text-3xl font-bold">{ accueil.dossiers_traites.description }</div>
                        <div className="text-sm sm:text-base font-semibold text-center">Dossiers traités</div>
                    </div>
                </div>
            </div>

            <div className={"bg-gray-100 flex justify-center w-full pt-40 md:pt-60 lg:pt-72 pb-20 pl-4 pr-5"}>
                <div className={"bg-white border lg:-mt-40 gap-16 grid grid-cols-1 lg:grid-cols-4 shadow-lg p-12 rounded-md sm:-mt-16 mt-0 w-5/6"}>
                    <div className={"flex flex-col"}>
                        <p className={"text-black text-center font-black text-4xl"}>
                            { accueil.annee_exercice.description }
                        </p>
                        <p className={"text-black text-center text-xl"}>
                            Années <br/>d'exercice
                        </p>
                    </div>
                    <div className={"flex flex-col"}>
                        <p className={"text-black text-center font-black text-4xl"}>
                            { accueil.clients_satisfait.description }
                        </p>
                        <p className={"text-black text-center text-xl"}>
                            de clients <br/>satisfait
                        </p>
                    </div>
                    <div className={"flex flex-col"}>
                        <p className={"text-black text-center font-black text-4xl"}>
                            { accueil.domaines_competences.description }
                        </p>
                        <p className={"text-black text-center text-xl"}>
                            Grands domaines <br/> de compétences
                        </p>
                    </div>
                    <div className={"flex flex-col"}>
                        <p className={"text-black text-center font-black text-4xl"}>
                            { accueil.dossiers_traites.description }
                        </p>
                        <p className={"text-black text-center text-xl"}>
                            Dossiers <br/> traités
                        </p>
                    </div>
                </div>
            </div>*/}
            <div className={"bg-gray-100 py-20 flex justify-center"}>
                <div className={"bg-none lg:bg-white lg:border lg:shadow grid grid-cols-2 lg:grid-cols-4 gap-8 w-5/6 lg:p-8"}>
                    <div className="flex flex-col justify-center items-center bg-white shadow lg:bg-none lg:shadow-none rounded-lg p-4 md:p-8 h-32">
                        <div className="text-red-800 text-xl sm:text-2xl md:text-3xl font-bold">{ accueil.annee_exercice.description }</div>
                        <div className="text-sm sm:text-base font-semibold text-center">Années d'exercice</div>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white shadow lg:bg-none lg:shadow-none rounded-lg p-4 md:p-8 h-32">
                        <div className="text-red-800 text-xl sm:text-2xl md:text-3xl font-bold">{ accueil.clients_satisfait.description }</div>
                        <div className="text-sm sm:text-base font-semibold text-center">de clients satisfait</div>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white shadow lg:bg-none lg:shadow-none rounded-lg p-4 md:p-8 h-32">
                        <div className="text-red-800 text-xl sm:text-2xl md:text-3xl font-bold">{ accueil.domaines_competences.description }</div>
                        <div className="text-sm sm:text-base font-semibold text-center">Grands domaines de compétences</div>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white shadow lg:bg-none lg:shadow-none rounded-lg p-4 md:p-8 h-32">
                        <div className="text-red-800 text-xl sm:text-2xl md:text-3xl font-bold">{ accueil.dossiers_traites.description }</div>
                        <div className="text-sm sm:text-base font-semibold text-center">Dossiers traités</div>
                    </div>
                </div>
            </div>
            <div className={"bg-gray-100 flex justify-center w-full py-20 pl-4 pr-5"}>
                <div className={"w-5/6"}>
                    <h2 className={"font-bold text-gray-800 text-4xl uppercase mb-6"}>Mes expertises</h2>
                    <hr/>
                    <div className={"flex flex-col lg:flex-row w-full gap-8 mt-10 "}>
                        <div className={"w-full lg:w-1/2"}>
                            <h2 className={"text-start text-gray-800 text-2xl font-bold"}>Droit du travail</h2>
                            <p className={"mt-2 text-justify"}>{ accueil.droit_travail.description }</p>
                            {/* <div className={"flex justify-center mt-10"}>
                                <Link href={"/Expertise/Droit-travail"} className={"bg-red-900 text-white text-center py-3 px-8 shadow-lg rounded-md hover:bg-red-800 hover:text-white uppercase font-bold hover:scale-105 duration-500"}>Droit du travail</Link>
                                </div>
                             */}
                            <div>

                                <Link href={"/Expertise/Droit-travail"} className={"flex justify-end mt-10 items-center"}>
                                    <p className={'text-red-900 font-bold text-[1.1rem] underline'}>Droit du travail</p><span className={'text-red-900'}>&rarr;</span>
                                </Link>
                            </div>
                        </div>

                        <div className={"w-full lg:w-1/2"}>
                            <h2 className={"text-start text-black text-2xl font-bold"}>Droit de la sécurité sociale</h2>
                            <p className={"mt-2 text-justify"}>{ accueil.droit_social.description }</p>
                            {/*
                            <div className={"flex justify-center mt-10"}>
                                <Link href={"/Expertise/Droit-securite-sociale"} className={"bg-red-900 text-white text-center py-3 px-8 shadow-lg rounded-md hover:bg-red-800 hover:text-white uppercase font-bold hover:scale-105 duration-500"}>Droit de la sécurité sociale</Link>
                            </div>
                            */}
                            <div>
                                <Link href={"/Expertise/Droit-securite-sociale"} className={"flex justify-end mt-10 items-center"}>
                                    <p className={'text-red-900 font-bold text-[1.1rem] underline'}>Droit de la sécurité sociale</p><span className={'text-red-900'}>&rarr;</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"bg-gray-100 flex gap-5 justify-center w-full pb-20 pl-4 pr-5"}>
                <div className={"w-5/6"}>
                    <h2 className={"font-bold text-black text-4xl uppercase mb-6"}>Qui suis-je ?</h2>
                    <hr/>
                    <div className={"flex flex-col gap-y-8 gap-x-16 lg:flex-row mt-10"}>
                        <div className={"w-full lg:w-1/2"}>
                            <video controls poster="/images/FlorenceBabeau/flofrence_babeau.png" src={"/video/FlorenceBabeau.mp4"} type={"video/mp4"} className={"w-full h-auto rounded-md"}></video>
                        </div>
                        <div className={"w-full lg:w-1/2 flex flex-col text-justify"}>
                            <div>
                                <p className={"font-semibold text-xl text-black"}>Florence Babeau</p>
                                <p className={"mt-2 text-base mb-8"}>Très investie dans les dossiers que je gère en Droit du Travail et en Droit de la Famille, j’aime travailler dans une relation de confiance et de proximité qui me paraît indispensable à l’établissement d’une collaboration pérenne et fructueuse.</p>
                            </div>
                            <div>
                                <p className={"font-semibold text-xl text-black"}>Mon parcours</p>
                                <p className={"mt-2 text-base"}>Titulaire d’un DEA de Droit Social et Droit du Travail, c’est tout naturellement que je me suis spécialisée dans l’accompagnement, la formation et la défense des intérêts des employeurs et dirigeants d’entreprise qui ont besoin de se consacrer pleinement et sereinement au développement de leur entreprise. C’est cette même tranquillité d’esprit que je souhaite apporter aux personnes qui se séparent, divorcent, réorganisent leur vie familiale en les aidant à trouver les meilleures solutions techniques et humaines à leurs problématiques.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"bg-gray-800 flex justify-center w-full py-20 pl-4 pr-5"}>
                <div className={"w-5/6"}>
                    <h2 className={"font-bold text-white text-[2rem] uppercase mb-6"}>Mes dernières actualités</h2>
                    <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"}>
                        {lastPosts.map((post) => {
                            return(
                                <Link href={"/blog/[slug]"} as={getBlogLink(post.Slug)} className={"flex flex-col bg-white border rounded-lg overflow-hidden hover:scale-110 duration-500 article"}>
                                    <div
                                       className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative m-2 rounded-lg">
                                        {post.Illustration ?
                                                <img
                                                    src={`/api/asset?assetUrl=${encodeURIComponent(post.Illustration)}&blockId=${post.id}`}
                                                    loading="lazy" alt="Photo by Lorenzo Herrera"
                                                    className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"/>
                                            :
                                                <img
                                                    src={"/images/defaultBlog.png"}
                                                    loading="lazy" alt="default"
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
