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
                <Image className={"brightness-50 h-[40vh] w-full object-cover"} src={"/images/FlorenceBabeau/cab.png"} alt={"image du cabinet florence Babeau"} width={"1920"} height={"1080"}/>
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

                            <div className="md:my-auto">
                                <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6">L’expertise du cabinet</h1>
                                <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">
                                    Le cabinet intervient en droit du Travail et en droit de la Sécurité Sociale. Une parfaite connaissance actualisée en permanence des textes réglementaires et conventionnels, des obligations sociales des entreprises et des apports jurisprudentiels permettent d’accompagner efficacement votre activité et votre développement, en sécurité, tant en conseil qu’en contentieux.
                                </p>
                                <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4">Nos engagements envers vous</h2>
                                <ul>
                                    <li>
                                        <p className="text-gray-500 sm:text-lg mb-6">- Un partenariat privilégié pour identifier vos besoins et y répondre</p>
                                    </li>
                                    <li>
                                        <p className="text-gray-500 sm:text-lg mb-6">- Une approche pédagogique qui prend le temps d’expliquer et de valider avec vous chaque étape importante du dossier</p>
                                    </li>
                                    <li>
                                        <p className="text-gray-500 sm:text-lg mb-6">- Une réelle joignabilité pour œuvrer efficacement ensemble</p>
                                    </li>
                                    <li>
                                        <p className="text-gray-500 sm:text-lg mb-6">- Une relation humaine basée sur la communication et le respect</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BesoinAvocat></BesoinAvocat>
        </div>
    )
}
