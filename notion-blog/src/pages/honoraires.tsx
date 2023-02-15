import Header from "../components/header";
import sharedStyles from "../styles/shared.module.css";
import BesoinAvocat from "../components/Besoin-avocat";
import Image from "next/image";
import Link from "next/link";
import {textBlock} from "../lib/notion/renderers";
import {getDateStr, postIsPublished} from "../lib/blog-helpers";
import Recommendation from "../components/recommendation";
import React from "react";
import getBlogIndex from "../lib/notion/getBlogIndex";
import getAccueilIndex from "../lib/notion/getAccueilIndex";
import getNotionUsers from "../lib/notion/getNotionUsers";
import getHonoraireIndex from "../lib/notion/getHonoraireIndex";

export async function getStaticProps({ preview }) {
    const postsTable = await getBlogIndex()
    const honorairesTable = await getHonoraireIndex();

    const authorsToGet: Set<string> = new Set()
    const honoraires: any[] = Object.keys(postsTable)
        .map((slug) => {
            const honoraires = honorairesTable[slug]
            return honoraires
        })
        .filter(Boolean)

    return {
        props: {
            preview: preview || false,
            honoraires,
        },
        revalidate: 1000,
    }
}


export default function Honoraires({honoraires}) {
    return (
        <>
            <div className={"relative w-full"}>
                <div className={"absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4/5 text-center z-50"}>
                    <h1 className={"text-white text-2xl md:text-4xl font-bold translate-y-1/2"}>HONORAIRES</h1>
                </div>
                <Image className={"brightness-50 h-[40vh] w-full object-cover"} src={"/images/comment-ca-marche/honoraires-banniere.png"} alt={"image-banniere"} width={"1920"} height={"1080"}/>
            </div>
            <div className={"bg-white flex justify-center w-full py-36"}>
                <div className={"w-5/6"}>
                    <div className={"grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:grid-cols-3 lg:max-w-full"}>
                        <div className="flex flex-col overflow-hidden border-2 rounded-md border-red-900 shadow-lg hover:scale-105 duration-500">
                            <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4">
                                <p className="text-lg font-medium">CONSULTATION TELEPHONIQUE</p>
                                <p className="text-5xl font-bold">60€
                                    <span className="text-xl"> /mo</span>
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center px-2 py-8">
                                <ul className="self-stretch flex-1 space-y-2">
                                    <li className="flex justify-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                        </svg>
                                        <span>Lumet consectetur adipisicing</span>
                                    </li>
                                    <li className="flex justify-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                        </svg>
                                        <span>Lumet consectetur adipisicing</span>
                                    </li>
                                    <li className="flex justify-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                        </svg>
                                        <span>Lumet consectetur adipisicing</span>
                                    </li>
                                </ul>
                                <Link href={"/contact"} className={"bg-red-900 text-white py-3 px-8 shadow-lg rounded-md hover:bg-red-800 hover:text-white inline-flex items-center gap-x-5 hover:scale-105 duration-500 mt-10"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                                    </svg>
                                    <span>Demander une consultation</span>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col overflow-hidden border-2 rounded-md border-red-900 shadow-lg hover:scale-105 duration-500">
                            <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4">
                                <p className="text-lg font-medium">CONSULTATION ECRITE</p>
                                <p className="text-5xl font-bold">150€
                                    <span className="text-xl"> /mo</span>
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center px-2 py-8">
                                <ul className="self-stretch flex-1 space-y-2">
                                    <li className="flex justify-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                        </svg>
                                        <span>Lumet consectetur adipisicing</span>
                                    </li>
                                    <li className="flex justify-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                        </svg>
                                        <span>Lumet consectetur adipisicing</span>
                                    </li>
                                    <li className="flex justify-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                        </svg>
                                        <span>Lumet consectetur adipisicing</span>
                                    </li>
                                </ul>
                                <Link href={"/contact"} className={"bg-red-900 text-white py-3 px-8 shadow-lg rounded-md hover:bg-red-800 hover:text-white inline-flex items-center gap-x-5 hover:scale-105 duration-500 mt-10"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                                    </svg>
                                    <span>Demander une consultation</span>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col overflow-hidden border-2 rounded-md border-red-900 shadow-lg hover:scale-105 duration-500">
                            <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4">
                                <p className="text-lg font-medium">RENDEZ-VOUS AU CABINET</p>
                                <p className="text-5xl font-bold">50€
                                    <span className="text-xl"> /mo</span>
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center px-2 py-8">
                                <ul className="self-stretch flex-1 space-y-2">
                                    <li className="flex justify-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                        </svg>
                                        <span>Lumet consectetur adipisicing</span>
                                    </li>
                                    <li className="flex justify-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                        </svg>
                                        <span>Lumet consectetur adipisicing</span>
                                    </li>
                                    <li className="flex justify-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                        </svg>
                                        <span>Lumet consectetur adipisicing</span>
                                    </li>
                                </ul>
                                <Link href={"/contact"} className={"bg-red-900 text-white py-3 px-8 shadow-lg rounded-md hover:bg-red-800 hover:text-white inline-flex items-center gap-x-5 hover:scale-105 duration-500 mt-10"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                                    </svg>
                                    <span>Demander une consultation</span>
                                </Link>
                            </div>
                        </div>
                        {/**<div className={"w-[40rem] lg:w-1/4 mx-auto overflow-hidden bg-white shadow-2xl rounded-md border hover:scale-110 duration-500"}>
                            <div className={"bg-gray-800 py-14 flex flex-col text-center"}>
                                <p className={"uppercase text-white font-bold text-2xl"}>CONSULTATION <br/>TELEPHONIQUE</p>
                                <p className={"uppercase text-white font-semibold text-lg mt-5"}>Durée : 30 min</p>
                                <p className={"uppercase text-white font-bold text-3xl mt-5"}>60€</p>
                                <div className={"w-full mt-5"}>
                                    <Link href={"/contact"} className={"bg-red-900 text-white py-3 px-8 shadow-lg rounded-md hover:bg-red-800 hover:text-white uppercase font-bold "}>DEMANDER UN RAPPEL</Link>
                                </div>
                            </div>
                            <div className="px-6 py-4">
                                <h2 className="font-bold text-black text-xl mb-2"></h2>
                                <p className="text-gray-700 text-left break-words">
                                    Maître Babeau vous reçoit à son cabinet pour un 1er rendez-vous.<br/> Ce premier rdv de 60 min, sans engagement, permet réciproquement de faire connaissance, de connaître vos droits et la manière de traiter la problématique à laquelle vous êtes confronté.
                                </p>
                            </div>
                        </div>
                        <div className={"w-[40rem] mt-10 lg:w-1/4 mx-auto overflow-hidden bg-white shadow-2xl border rounded-md lg:transform lg:-translate-y-16 hover:scale-110 duration-500"}>
                            <div className={"bg-gray-800 py-14 flex flex-col text-center"}>
                                <p className={"uppercase text-white font-semibold text-2xl"}>CONSULTATION <br/>ÉCRITE</p>
                                <p className={"text-white font-semibold text-lg mt-5"}>Etude de votre dossier + <br/> possibilité d’ajout d’une pièce jointe</p>
                                <p className={"uppercase text-white font-bold text-3xl mt-5"}>150€</p>
                                <div className={"w-full mt-5"}>
                                    <Link href={"/contact"} className={"bg-red-900 text-white py-3 px-8 shadow-lg rounded-md hover:bg-red-800 hover:text-white uppercase font-bold"}>CONSULTER PAR ÉCRIT</Link>
                                </div>
                            </div>
                            <div className="px-6 py-4">
                                <h2 className="font-bold text-black text-xl mb-2"></h2>
                                <p className="text-gray-700 text-left break-words">
                                    Maître Babeau vous reçoit à son cabinet pour un 1er rendez-vous.<br/> Ce premier rdv de 60 min, sans engagement, permet réciproquement de faire connaissance, de connaître vos droits et la manière de traiter la problématique à laquelle vous êtes confronté.
                                </p>
                            </div>
                        </div>
                        <div className={"w-[40rem] mt-10 lg:w-1/4 mx-auto overflow-hidden bg-white shadow-2xl border rounded-md hover:scale-110 duration-500"}>
                            <div className={"bg-gray-800 py-14 flex flex-col text-center"}>
                                <p className={"uppercase text-white font-semibold text-2xl"}>RENDEZ-VOUS <br/>AU CABINET</p>
                                <p className={"uppercase text-white font-semibold text-lg mt-5"}>Durée : 60 min</p>
                                <p className={"uppercase text-white font-bold text-3xl mt-5"}>50€</p>
                                <div className={"w-full mt-5"}>
                                    <Link href={"/contact"} className={"bg-red-900 text-white py-3 px-8 shadow-lg rounded-md hover:bg-red-800 hover:text-white uppercase font-bold"}>Prendre rendez-vous</Link>
                                </div>
                            </div>
                            <div className="px-6 py-4">
                                <h2 className="font-bold text-black text-xl mb-2"></h2>
                                <p className="text-gray-700 text-base break-words">
                                    Maître Babeau vous reçoit à son cabinet pour un 1er rendez-vous.<br/> Ce premier rdv de 60 min, sans engagement, permet réciproquement de faire connaissance, de connaître vos droits et la manière de traiter la problématique à laquelle vous êtes confronté.
                                </p>
                            </div>
                        </div>*/}
                    </div>
                </div>
            </div>
            {/**<div className={"bg-gray-800 flex justify-center w-full py-20"}>
                <div className={"w-5/6"}>
                    <h2 className={"font-bold text-white text-3xl uppercase mb-6 text-center"}>COMMENT çA MARCHE ?</h2>
                </div>
            </div>
            <div className={"bg-white w-full"}>
                <div className={"flex flex-col md:flex-row"}>
                    <div className={"w-full md:w-1/2 order-1"}>
                        <img src={"/images/comment-ca-marche/2-girls-in-office.png"} className={"object-fit"}></img>
                    </div>
                    <div className={"w-full md:w-1/2 my-auto order-2 py-20 md:py-0"}>
                        <div className={"w-4/5 flex flex-col mx-auto"}>
                            <h2 className={"font-bold text-black text-2xl uppercase text-center"}>1/ Prise de RDV</h2>
                            <p className={"text-black text-center break-words"}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsums</p>
                            <Link href={""} className={"bg-red-900 text-white text-center py-1 px-4 shadow-lg rounded-md hover:bg-red-800 hover:text-white uppercase font-bold"}>Prenez rendez-vous</Link>
                        </div>
                    </div>
                </div>
                <div className={"flex flex-col md:flex-row"}>
                    <div className={"w-full md:w-1/2 order-1 md:order-2"}>
                        <img src={"/images/comment-ca-marche/papiers-administratifs.png"} className={"object-fit"}></img>
                    </div>
                    <div className={"w-full md:w-1/2 my-auto order-2 md:order-1 py-20 md:py-0"}>
                        <div className={"w-4/5 flex flex-col mx-auto"}>
                            <h2 className={"font-bold text-black text-2xl uppercase text-center"}>2/ Préparation des documents</h2>
                            <p className={"text-black text-center break-words"}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsums</p>
                        </div>
                    </div>
                </div>
                <div className={"flex flex-col md:flex-row"}>
                    <div className={"w-full md:w-1/2 order-1"}>
                        <img src={"/images/comment-ca-marche/fille-qui-ecrit.png"} className={"object-fit"}></img>
                    </div>
                    <div className={"w-full md:w-1/2 my-auto order-2 py-20 md:py-0"}>
                        <div className={"w-4/5 flex flex-col mx-auto"}>
                            <h2 className={"font-bold text-black text-2xl uppercase text-center"}>3/ Analyse du dossier</h2>
                            <p className={"text-black text-center break-words"}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsums</p>
                        </div>
                    </div>
                </div>
                <div className={"flex flex-col md:flex-row"}>
                    <div className={"w-full md:w-1/2 order-1 md:order-2"}>
                        <img src={"/images/comment-ca-marche/bien-jouer-mec.png"} className={"object-fit"}></img>
                    </div>
                    <div className={"w-full md:w-1/2 my-auto order-2 md:order-1 py-20 md:py-0"}>
                        <div className={"w-4/5 flex flex-col mx-auto"}>
                            <h2 className={"font-bold text-black text-2xl uppercase text-center"}>4/ Démarrage du processus, si viabilité du dossier</h2>
                            <p className={"text-black text-center break-words"}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsums</p>
                        </div>
                    </div>
                </div>
            </div>*/}
            <Recommendation></Recommendation>
            <BesoinAvocat></BesoinAvocat>
        </>
    );
}
