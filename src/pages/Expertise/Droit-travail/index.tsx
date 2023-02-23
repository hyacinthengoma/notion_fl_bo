import BesoinAvocat from "../../../components/Besoin-avocat";
import Image from "next/image";
import getDroitTravailIndex from "../../../lib/notion/getDroitTravailIndex";
import Head from "next/head";
import React, {useEffect, useState} from "react";

export async function getStaticProps({ preview }) {
    const droitTravailTable = await getDroitTravailIndex();

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
        revalidate: 10,
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function HomeDroitTravail({ droitTravail }) {
    const [detailsCompetence, setDetailsCompetences] = useState('');

    useEffect(() => {
        let overlay = document.querySelector("#overlay");
        let skills = document.querySelectorAll('.skill');

    });

    return (
        <div className={"relative"}>
            <Head>
                <title>Expertise Droit du Travail</title>
            </Head>
                <div className={"left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 fixed bg-black/50 backdrop-blur h-screen w-full z-[99] hidden"} id={"overlay"}>
                    <div className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}>
                        <div className={"flex justify-center"}>
                            <div className="block bg-white h-auto w-4/5 rounded-xl border border-gray-100 p-4 shadow hover:border-red-700 hover:shadow-red-50 hover:shadow-lg hover:scale-105 transition-all duration-500 hover:ring-1 hover:ring-gray-300 focus:outline-none focus:ring cursor-pointer">
                                  <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                                    </svg>
                                  </span>
                                <h2 className="mt-2 font-thin text-gray-800">{detailsCompetence}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            <div className={"relative w-full"}>
                <div className={"absolute transform top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4/5 text-center z-50"}>
                    <h1 className={"text-white text-2xl md:text-4xl font-bold translate-y-1/2"}>DROIT DU TRAVAIL</h1>
                </div>
                <Image loading={"eager"} className={"brightness-50 h-[40vh] w-full object-cover"} src={"/images/FlorenceBabeau/banniere.png"} alt={"image-banniere"} width={"1920"} height={"1080"}/>
            </div>
            <div className={"w-full justify-center flex py-20 min-h-screen bg-white"}>
                <div className={"w-5/6"}>
                    <h2 className={"font-bold text-gray-800 text-4xl uppercase mb-6"}>Mes compténces</h2>
                    <hr/>
                    {/**<div className={"flex w-full justify-center mt-10"}>
                        <div className={"flex flex-col items-center gap-y-10"}>
                            {droitTravail.map((currentDroit, index) => {
                                if(index === 0){
                                    return(
                                        <div className={"relative w-5/6 overflow-hidden"}>
                                            <input type={"checkbox"} className={"absolute top-0 inset-x-0 w-full h-full opacity-0 z-10 cursor-pointer peer"}/>
                                            <div className={"bg-white w-full pr-10 flex items-center peer-hover:underline"}>
                                                <h2 className={"lg:text-xl text-base text-red-900 font-semibold text-red-900"}>{capitalizeFirstLetter(currentDroit.Slug.replace(/-/g, ' '))}</h2>
                                            </div>
                                            <div className={"absolute top-3 right-3 text-red-900 transition-transform duration-500 rotate-0 peer-checked:rotate-180"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                                </svg>

                                            </div>
                                            <div className={"bg-white  overflow-hidden transition-all duration-500 max-h-full peer-checked:max-h-0"}>
                                                <div className={"pt-4"}>
                                                    <p>{ currentDroit.Texte }</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }else{
                                    return(
                                        <div className={"relative w-5/6 overflow-hidden"}>
                                            <input type={"checkbox"} className={"absolute top-0 inset-x-0 w-full h-full opacity-0 z-10 cursor-pointer peer"}/>
                                            <div className={"bg-white w-full pr-10 flex items-center peer-hover:underline"}>
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
                                                <div className={"pt-4"}>
                                                    <p>{ currentDroit.Texte }</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </div>*/}
                    <div className={"grid grid-cols-1 lg:grid-cols-4 gap-8 mt-10"}>
                        {droitTravail.map((currentDroit, index) => {
                            return(
                                <div onClick={(e) => {setDetailsCompetences(currentDroit.Texte)}} className="block rounded-xl border border-gray-100 p-4 shadow hover:border-red-700 hover:shadow-red-50 hover:shadow-lg hover:scale-105 transition-all duration-500 hover:ring-1 hover:ring-gray-300 focus:outline-none focus:ring cursor-pointer skill">
                                  <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                                    </svg>
                                  </span>
                                    <h2 className="mt-2 font-thin text-gray-800">{capitalizeFirstLetter(currentDroit.Slug.replace(/-/g, ' '))}</h2>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <BesoinAvocat></BesoinAvocat>
        </div>
    );
}
