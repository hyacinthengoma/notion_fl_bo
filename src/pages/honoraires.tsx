import BesoinAvocat from "../components/Besoin-avocat";
import Image from "next/image";
import Link from "next/link";
import Recommendation from "../components/recommendation";
import React from "react";
import getHonoraireIndex from "../lib/notion/getHonoraireIndex";
import Head from "next/head";0

export async function getStaticProps({ preview }) {
    const honorairesTable = await getHonoraireIndex();

    const honoraires: any[] = Object.keys(honorairesTable)
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
        revalidate: 10,
    }
}


export default function Honoraires({honoraires}) {
    return (
        <>
            <Head>
                <title>Honoraires</title>
            </Head>
            <div className={"relative w-full"}>
                <div className={"absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4/5 text-center z-50"}>
                    <h1 className={"text-white text-2xl md:text-4xl font-bold translate-y-1/2"}>HONORAIRES</h1>
                </div>
                <Image loading={"eager"} className={"brightness-50 h-[40vh] w-full object-cover"} src={"/images/comment-ca-marche/honoraires-banniere.png"} alt={"image-banniere"} width={"1920"} height={"1080"}/>
            </div>
            <div className={"bg-white flex justify-center w-full py-36"}>
                <div className={"w-5/6"}>
                    {/**<div className={"flex flex-col gap-4 w-4/5"}>
                        {honoraires.map((currentHonoraire) => {
                            let liste = [];
                            if(currentHonoraire.liste !== null){
                                liste = currentHonoraire.liste.split(',');
                            }
                            return(
                                <div className="flex flex-row overflow-hidden border rounded-md hover:border-red-900 shadow hover:shadow-lg hover:scale-105 duration-500 w-full peer">
                                    <div className="flex flex-col justify-start px-4 py-6 w-1/3">
                                        <p className="text-lg font-medium uppercase">{currentHonoraire.Slug.replace(/-/g, ' ')}</p>

                                        {liste.map((currentItem) => {
                                            return(
                                                <li className="list-none space-2">
                                                    <p className={"text-sm"}>- {currentItem}</p>
                                                </li>
                                            );
                                        })}
                                    </div>
                                    <div className="flex justify-start px-4 py-8 space-y-4 w-1/3">

                                    </div>
                                    <div className={"flex justify-end p-5 w-1/3"}>
                                        <Link href={"/contact"} className={"text-red-900 bg-red-50 px-5 py-3 rounded-lg flex my-auto border transition-all duration-250 hover:bg-red-800 hover:text-white"}>Me contacter</Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>*/}
                    <div className={"grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:grid-cols-4 lg:max-w-full"}>
                        {honoraires.map((currentHonoraire) => {
                            let liste = [];
                            if(currentHonoraire.liste !== null){
                                liste = currentHonoraire.liste.split(',');
                            }
                            return(
                                <div className={"flex flex-col bg-white border rounded-lg shadow hover:shadow-lg hover:border-red-300 overflow-hidden hover:scale-105 duration-200"}>
                                    <div className="flex flex-col flex-1 p-4 sm:p-6 gap-4">
                                        <h2 className="text-gray-800 mb-2 text-lg font-medium uppercase text-center">
                                            {currentHonoraire.titre}
                                        </h2>
                                        <hr/>
                                        <h3 className={"text-center text-gray-600 font-semibold text-4xl"}>{currentHonoraire.prix}€ TTC</h3>

                                        <div className={"px-2 py-8"}>
                                            <p className={"my-2 text-sm"}>{currentHonoraire.description}</p>
                                            <ol className="flex-1 space-y-2 list-disc">
                                                {liste.map((currentItem) => {
                                                    return(
                                                        <li className="flex justify-center space-x-2">
                                                            <p className={"text-md text-gray-600"}>{currentItem}</p>
                                                        </li>
                                                    );
                                                })}
                                            </ol>
                                        </div>

                                        <div className="flex justify-center mt-auto">
                                            <Link href={{ pathname: "/contact", query: { objet: currentHonoraire.type_service } }} className={"group relative overflow-hidden border border-red-800 px-4 py-3 rounded"}>
                                                <span className="absolute inset-y-0 left-0 w-[0px] bg-red-800 transition-all group-hover:w-full group-active:bg-red-800"></span>
                                                <span className="relative flex gap-4 text-sm font-medium text-red-700 transition-colors duration-500 group-hover:text-white my-auto">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                                                    </svg>
                                                    Demander une consultation
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <Recommendation></Recommendation>
            <BesoinAvocat></BesoinAvocat>
        </>
    );
}
