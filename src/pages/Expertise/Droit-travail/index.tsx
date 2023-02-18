import BesoinAvocat from "../../../components/Besoin-avocat";
import Image from "next/image";
import getDroitTravailIndex from "../../../lib/notion/getDroitTravailIndex";
import getPageData from "../../../lib/notion/getPageData";
import Head from "next/head";
import React from "react";

export async function getStaticProps({ preview }) {
    const droitTravailTable = await getDroitTravailIndex();
    const pageContent = await getPageData('Droit-du-travail-81fa40a15a3d47d494a993f849fd0e00');

    const droitTravail: any[] = Object.keys(droitTravailTable)
        .map((slug) => {
            const post = droitTravailTable[slug]
            return post
        })
        .filter(Boolean)

    return {
        props: {
            preview: preview || false,
            droitTravail,
        },
        revalidate: 1000,
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function HomeDroitTravail({ droitTravail }) {
    return (
        <>
            <Head>
                <title>Expertise Droit du Travail</title>
            </Head>
            <div className={"relative w-full"}>
                <div className={"absolute transform top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4/5 text-center z-50"}>
                    <h1 className={"text-white text-2xl md:text-4xl font-bold translate-y-1/2"}>DROIT DU TRAVAIL</h1>
                </div>
                <Image className={"brightness-50 h-[40vh] w-full object-cover"} src={"/images/FlorenceBabeau/banniere.png"} alt={"image-banniere"} width={"1920"} height={"1080"}/>
            </div>
            <div className={"w-full justify-center flex py-20 bg-white"}>
                <div className={"flex w-full lg:w-4/5 justify-center"}>
                    <div className={"flex flex-col items-center gap-y-10"}>
                        {droitTravail.map((currentDroit, index) => {
                            if(index === 0){
                                return(
                                    <div className={"relative w-4/5 overflow-hidden"}>
                                        <input type={"checkbox"} className={"absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer peer"}/>
                                        <div className={"bg-white h-12 w-full pl-5 flex items-center peer-hover:underline"}>
                                            <h2 className={"lg:text-xl text-base text-red-900 font-semibold text-red-900"}>{capitalizeFirstLetter(currentDroit.Slug.replace(/-/g, ' '))}</h2>
                                        </div>
                                        <div className={"absolute top-3 right-3 text-red-900 transition-transform duration-500 rotate-0 peer-checked:rotate-180"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                            </svg>

                                        </div>
                                        <div className={"bg-white  overflow-hidden transition-all duration-500 max-h-full peer-checked:max-h-0"}>
                                            <div className={"p-4"}>
                                                <p>{ currentDroit.Texte }</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }else{
                                return(
                                    <div className={"relative w-4/5 overflow-hidden"}>
                                        <input type={"checkbox"} className={"absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer peer"}/>
                                        <div className={"bg-white h-12 w-full pl-5 flex items-center peer-hover:underline"}>
                                            <h2 className={"lg:text-xl text-base font-semibold text-red-900"}>{capitalizeFirstLetter(currentDroit.Slug.replace(/-/g, ' '))}</h2>
                                        </div>
                                        <div className={"absolute top-3 right-3 text-red-900 transition-transform duration-500 rotate-0 peer-checked:rotate-180"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                                            </svg>
                                        </div>
                                        <div className={"bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-full"}>
                                            <div className={"p-4"}>
                                                <p>{ currentDroit.Texte }</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
            <BesoinAvocat></BesoinAvocat>
        </>
    );
}