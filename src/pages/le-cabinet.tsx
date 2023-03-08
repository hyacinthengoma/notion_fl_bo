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
            <div className={"bg-white flex justify-center w-full py-20"}>
                <div className={"w-5/6"}>
                    {/*
                    <h2 className={"font-bold text-gray-800 text-2xl lg:text-4xl uppercase mb-6"}>Le cabinet</h2>
                    <h3 className={"font-medium text-xl lg:text-3xl text-gray-800"}>ADN DE L'ENTREPRISE</h3>
                    <p className={"mt-2 text-sm lg:text-base mb-8"}>
                        L’ADN du cabinet c’est son approche holistique de chaque affaire, qui est appréhendée dans sa globalité et en prenant en considération ses différentes dimensions économiques, sociales et humaines.
                    </p>
                    <p className={"text-sm lg:text-base mb-8"}>
                        La complémentarité entres les activités en conseil et de contentieux permet de faire un juste diagnostic du dossier, une bonne évaluation des risques et de proposer les solutions les plus adaptées.
                    </p>
                     */}
                    <div className={"flex flex-col gap-y-8 gap-x-16 lg:flex-row mt-10"}>
                        {/*  <div className={"h-auto w-auto lg:w-1/2 order-2"}>
                            <video controls poster="/images/FlorenceBabeau/flofrence_babeau.png" src={"/video/FlorenceBabeau.mp4"} type={"video/mp4"} className={"w-full h-auto rounded-md"}></video>
                        </div>
                        */}
                        <Image loading={"eager"} className={" h-[400px] lg:w-1/2 object-cover rounded-lg shadow-lg"} src={"/images/FlorenceBabeau/cabinet-fl.jpg"} alt={"image-banniere-besoin-avocat"} width={"600"} height={"600"}></Image>
                        <div className={"w-full lg:w-1/2 flex flex-col text-justify order-1"}>
                            <p className={"mt-2 text-sm lg:text-base mb-8"}>
                                L’ADN du cabinet c’est son approche holistique de chaque affaire, qui est appréhendée dans sa globalité et en prenant en considération ses différentes dimensions économiques, sociales et humaines.
                                La complémentarité entres les activités en conseil et de contentieux permet de faire un juste diagnostic du dossier, une bonne évaluation des risques et de proposer les solutions les plus adaptées.
                            </p>
                            {/* <div>
                                <p className={"font-medium text-xl lg:text-3xl text-gray-800"}>Florence Babeau</p>
                                <p className={"mt-2 text-sm lg:text-base mb-8"}>Très investie dans les dossiers que je gère en Droit du Travail et en Droit de la Sécurité Sociale, j’aime travailler dans une relation de confiance et de proximité qui me paraît indispensable à l’établissement d’une collaboration pérenne et fructueuse.</p>
                            </div>
                            */}
                            {/*<div>
                                <p className={"font-medium text-xl lg:text-3xl text-gray-800"}>Mon parcours</p>
                                <p className={"mt-2 text-sm lg:text-base"}>Titulaire d’un DEA de Droit Social et Droit du Travail, c’est tout naturellement que je me suis spécialisée dans l’accompagnement, la formation et la défense des intérêts des employeurs et dirigeants d’entreprise qui ont besoin de se consacrer pleinement et sereinement au développement de leur entreprise.</p>
                            </div>
                            */}
                        </div>
                    </div>
                </div>
            </div>
            <BesoinAvocat></BesoinAvocat>
        </div>
    )
}
