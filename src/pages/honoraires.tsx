import BesoinAvocat from "../components/Besoin-avocat";
import Image from "next/image";
import Link from "next/link";
import Recommendation from "../components/recommendation";
import React from "react";
import getHonoraireIndex from "../lib/notion/getHonoraireIndex";
import Head from "next/head";

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
                    <div className={"grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:grid-cols-3 lg:max-w-full"}>
                        {honoraires.map((currentHonoraire) => {
                            let liste = [];
                            if(currentHonoraire.liste !== null){
                                liste = currentHonoraire.liste.split(',');
                            }
                            return(
                                <div className="flex flex-col overflow-hidden border-2 rounded-md border-red-900 shadow-lg hover:scale-105 duration-500">
                                    <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4">
                                        <p className="text-lg font-medium uppercase">{currentHonoraire.Slug.replace(/-/g, ' ')}</p>
                                        <p className="text-5xl font-bold">{currentHonoraire.prix}€ TTC

                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center px-2 py-8">
                                        <p className={"my-2"}>{currentHonoraire.description}</p>
                                        <ul className="self-stretch flex-1 space-y-2">
                                            {liste.map((currentItem) => {
                                                return(
                                                    <li className="flex justify-center space-x-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                                        </svg>
                                                        <span>{currentItem}</span>
                                                    </li>
                                                );
                                            })}
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
