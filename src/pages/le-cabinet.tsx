import BesoinAvocat from "../components/Besoin-avocat";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Head from "next/head";

export default function LeCabinet() {
    return(
        <div>
            <Head>
                <title>LE CABINET</title>
            </Head>
            <div className={"relative w-full"}>
                <div className={"absolute transform top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4/5 text-center z-50"}>
                    <h1 className={"text-white text-2xl md:text-4xl font-bold translate-y-1/2"}>LE CABINET</h1>
                </div>
                <Image className={"brightness-50 h-[40vh] w-full object-cover"} src={"/images/FlorenceBabeau/fb-banniere.png"} alt={"image du cabinet florence Babeau"} width={"1920"} height={"1080"}/>
            </div>
            <div className={"bg-white flex justify-center w-full lg:py-20"}>
                <div className="py-6 sm:py-8 lg:py-12">
                    <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                            <div>
                                <div className="h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg">
                                    <img src="/images/FlorenceBabeau/cabinet-fl.jpg" loading="lazy" alt="Cabinet Florence Babeau" className="w-full h-full object-cover object-center shadow"/>
                                </div>
                            </div>

                            <div className="md:pt-6">
                                <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6">Adn du cabinet</h1>
                                <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">
                                    L’ADN du cabinet c’est son approche holistique de chaque affaire, qui est appréhendée dans sa globalité et en prenant en considération ses différentes dimensions économiques, sociales et humaines.<br/><br/>
                                    La complémentarité entres les activités en conseil et de contentieux permet de faire un juste diagnostic du dossier, une bonne évaluation des risques et de proposer les solutions les plus adaptées.
                                </p>
                                <p className="text-red-800 font-bold text-center md:text-left">Qui suis-je ?</p>
                                <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4">Florence Babeau</h2>
                                <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">Très investie dans les dossiers que je gère en Droit du Travail et en Droit de la Sécurité Sociale, j’aime travailler dans une relation de confiance et de proximité qui me paraît indispensable à l’établissement d’une collaboration pérenne et fructueuse.</p>
                                <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4">Mon parcours</h2>
                                <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">Titulaire d’un DEA de Droit Social et Droit du Travail, c’est tout naturellement que je me suis spécialisée dans l’accompagnement, la formation et la défense des intérêts des employeurs et dirigeants d’entreprise qui ont besoin de se consacrer pleinement et sereinement au développement de leur entreprise.</p>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center mt-4 mb-4 md:mb-6">Vous voulez en savoir plus ?</h1>
                    <video controls poster="/images/FlorenceBabeau/flofrence_babeau.png" src={"/video/FlorenceBabeau.mp4"} type={"video/mp4"} className={"w-4/5 md:w-2/4 mx-auto rounded-md"}></video>
                </div>
            </div>
            <BesoinAvocat></BesoinAvocat>
        </div>
    )
}
