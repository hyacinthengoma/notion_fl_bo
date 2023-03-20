import Image from "next/image";
import BesoinAvocat from "../../../components/Besoin-avocat";
import getDroitSocialIndex from "../../../lib/notion/getDroitSocialIndex";
import Head from "next/head";
import React, {useEffect, useState} from "react";
import { Collapse, Text, Grid, Avatar } from "@nextui-org/react";
import {ParallaxBanner} from "react-scroll-parallax";
export async function getStaticProps({ preview }) {
    const droitSocialTable = await getDroitSocialIndex();

    const droitSocial: any[] = Object.keys(droitSocialTable)
        .map((slug) => {
            const post = droitSocialTable[slug]
            return post
        })
        .filter(Boolean)

    return {
        props: {
            preview: preview || false,
            droitSocial,
        },
        revalidate: 10,
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function HomeDroitSecuSociale({ droitSocial }) {
    const [detailsCompetenceSocial, setDetailsCompetencesSocial] = useState('');
    const [titreCompetenceSocial, setTitreCompetenceSocial] = useState('');

    {/**useEffect(() => {
        let overlay = document.querySelector("#overlay");
        let skills = document.querySelectorAll('.skill');

        Array.prototype.forEach.call(skills, function(element){
            element.addEventListener('click', function(currentSkill){
                if(overlay.classList.contains('hidden')){
                    overlay.classList.remove('hidden');
                    setTimeout(() => {
                        overlay.classList.add('opacity-100');
                        setTimeout(() => {
                            overlay.classList.remove('opacity-0');
                        }, 500)
                    }, 1)
                }
            })
        });

        overlay.addEventListener('click', function (element){
            if(!overlay.classList.contains('hidden')){
                overlay.classList.remove('opacity-100');
                overlay.classList.add('opacity-0');
                setTimeout(() => {
                    overlay.classList.add('hidden');
                }, 500);
            }
        })

    });*/}
    return (
        <div className={"relative"}>
            <Head>
                <title>Expertise Droit de la sécurité sociale</title>
            </Head>
            {/**<div className={"left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 fixed bg-black/50 backdrop-blur-sm h-screen w-full z-[99] cursor-pointer transition-all duration-500 opacity-0 hidden"} id={"overlay"}>
                <div className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:w-auto"}>
                    <div className={"flex justify-center"}>
                        <div className="block p-10 bg-white h-auto w-4/5 rounded-xl border border-gray-100 p-4 focus:border-0 shadow transition-all duration-500 hover:ring-1 hover:ring-gray-300 focus:outline-none focus:ring cursor-default ">
                            <button className="inline-block rounded-lg bg-red-100 p-3 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>

                            </button>
                            <h2 className="mt-2 font-bold text-lg text-gray-800">{titreCompetenceSocial}</h2>
                            <p className="mt-4 text-gray-600">
                                {detailsCompetenceSocial}
                            </p>
                        </div>
                    </div>
                </div>
            </div>*/}
            <ParallaxBanner layers={[{image: '/images/FlorenceBabeau/banniere.png', speed: -30, className: "brightness-50 h-screen w-full object-cover my-auto"}]} className={"relative w-full h-[40vh]"}>
                <div className={"absolute transform top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4/5 text-center z-50"}>
                    <h1 className={"text-white text-2xl md:text-4xl font-bold translate-y-1/2"}>DROIT DE LA SÉCURITÉ SOCIALE</h1>
                </div>
                {/**<Image loading={"eager"} className={"brightness-50 h-[40vh] w-full object-cover"} src={"/images/FlorenceBabeau/banniere.png"} alt={"image-banniere"} width={"1920"} height={"1080"}/>*/}
            </ParallaxBanner>
            <div className={"w-full justify-center flex py-20 bg-white min-h-max"}>
                <div className={"w-5/6"}>
                    <h2 className={"font-bold text-gray-800 text-xl lg:text-3xl uppercase mb-6"}>Nos compétences</h2>
                    <hr className={"mb-5"}/>
                    <div className="grid gap-4 sm:grid-cols-2 md:gap-8">
                        {droitSocial.map((currentDroit, index) => {
                            let tableauDeSousChaines = currentDroit.Texte.split("\\n");
                            let chaineAvecSautDeLigne = tableauDeSousChaines.join("\n");
                            return(
                                <div className="shadow bg-white p-5 hover:border-red-800 transition-all duration-500 border">
                                    <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                                        <h3 className="font-semibold text-gray-800 sm:text-lg md:text-xl">{currentDroit.Titre}</h3>
                                        <span className="inline-block rounded-lg bg-red-100 p-3">
                                                <svg className="h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                                                </svg>
                                            </span>
                                    </div>

                                    <p className="text-gray-500">
                                        {tableauDeSousChaines.map((line, index) => (
                                            <p key={index} className={"mt-2 text-justify"}>{line}</p>
                                        ))}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    {/**<div className={"grid grid-cols-1 lg:grid-cols-4 gap-8 mt-10"}>
                        {droitSocial.map((currentDroit, index) => {
                            return(
                                <div onClick={(e) => {setDetailsCompetencesSocial(currentDroit.Texte); setTitreCompetenceSocial(capitalizeFirstLetter(currentDroit.Slug.replace(/-/g, ' ')))}} className="block bg-white rounded-xl border border-gray-100 p-4 shadow hover:border-red-700 hover:shadow-red-50 hover:shadow-lg hover:scale-105 transition-all duration-500 hover:ring-1 hover:ring-gray-300 focus:outline-none focus:ring cursor-pointer skill">
                                  <span className="inline-block rounded-lg bg-red-100 p-3">
                                    <svg className="h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                                    </svg>
                                  </span>
                                    <h2 className="mt-2 font-thin text-gray-800">{capitalizeFirstLetter(currentDroit.Slug.replace(/-/g, ' '))}</h2>
                                </div>
                            );
                        })}
                    </div>*/}
                </div>
            </div>
            <BesoinAvocat></BesoinAvocat>
        </div>
    );
}
