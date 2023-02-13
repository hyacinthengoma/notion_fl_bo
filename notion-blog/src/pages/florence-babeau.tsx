import Header from "../components/header";
import BesoinAvocat from "../components/Besoin-avocat";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function FlorenceBabeau() {
    return(
        <div>
            <div className={"relative w-full"}>
                <div className={"absolute transform top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4/5 text-center z-50"}>
                    <h1 className={"text-white text-2xl md:text-4xl font-bold translate-y-1/2"}>FLORENCE BABEAU</h1>
                </div>
                <Image className={"brightness-50 h-[40vh] w-full object-cover"} src={"/images/FlorenceBabeau/fb-banniere.png"} alt={"image-banniere"} width={"1920"} height={"1080"}/>
            </div>
            <div className={"bg-white flex justify-center w-full h-[70vh] pt-36"}>
                <div className={"w-5/6"}>
                    <div className={"flex flex-col md:flex-row md:h-96"}>
                        <div className={"w-full md:w-1/2 order-2 md:order-1"}>
                            <video controls src={"/video/FlorenceBabeau.mp4"} type={"video/mp4"} className={"h-96 md:h-full rounded-md"}>

                            </video>
                            {/**<iframe className={"h-96 w-full md:h-full rounded"}
                                     src="https://www.youtube.com/embed/KBPtg6yr3YE">
                            </iframe>*/}
                        </div>
                        <div className={"w-full md:w-1/2 my-auto order-1 md:order-2 py-20 md:py-0"}>
                            <div className={"w-4/5 flex flex-col mx-auto"}>
                                <h2 className={"font-bold text-black text-2xl uppercase text-start"}>ADN DE L'ENTREPRISE</h2>
                                <p className={"text-black text-center text-justify break-words my-5"}>L’ADN du cabinet c’est son approche holistique de chaque affaire, qui est appréhendée dans sa globalité et en prenant en considération ses différentes dimensions économiques, sociales et humaines.</p>
                                <p className={"text-black text-center text-justify break-words my-5"}>La complémentarité entres les activités en conseil et de contentieux permet de faire un juste diagnostic du dossier, une bonne évaluation des risques et de proposer les solutions les plus adaptées.</p>
                                <div className={"w-full flex justify-center"}>
                                    <Link href={""} className={"text-sm bg-red-900 text-white mt-10 text-center mt-[3vh] py-3 px-8 shadow-lg rounded-md hover:bg-red-800 hover:text-white uppercase font-bold hover:scale-105 duration-500 sm:text-base"}>Prenez rendez-vous</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <BesoinAvocat></BesoinAvocat>
        </div>
    )
}
