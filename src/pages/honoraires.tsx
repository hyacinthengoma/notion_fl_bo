import BesoinAvocat from "../components/Besoin-avocat";
import Image from "next/image";
import Link from "next/link";
import Recommendation from "../components/recommendation";
import React from "react";
import getHonoraireIndex from "../lib/notion/getHonoraireIndex";
import Head from "next/head";
import Partenaires from "../components/Partenaires";
import HonoraireCard from "../components/HonoraireCard";

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
            <div className={"bg-white flex justify-center w-full py-20"}>
                <div className={"w-5/6"}>
                    <div className={"w-full flex flex-col text-justify order-1 w-full"}>
                        <p className={"mt-2 text-sm lg:text-base mb-14 lg:mx-40"}>
                            La gestion des ressources humaines constitue pour les entreprises un risque financier non négligeable. Elles doivent être bien accompagnées pour éviter ou minimiser les coûts d’une mauvaise gestion sociale.
                            Le cabinet Florence Babeau propose ses prestations en conseil et/ou en contentieux sur la base d’une tarification horaire ou forfaitaire, avant le début de la mission, et qui fait l’objet d’une convention d’honoraires écrite.
                        </p>
                    </div>
                    <div className={"grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:grid-cols-4 lg:max-w-full"}>
                        {/**<HonoraireCard type_rdv={"demande-rendez-vous-cabinet"} titre={"Rendez-vous cabinet"} honoraire={"120"} description={"Maître Babeau vous reçoit à son cabinet pour un 1er rendez-vous. Ce premier rdv de 60 min, sans engagement, permet réciproquement de faire connaissance, de connaître vos droits et la manière de traiter la problématique à laquelle vous êtes confronté."}/>
                        <HonoraireCard type_rdv={"demande-consultation-telephonique"} titre={"Consultation téléphonique"} honoraire={"60"} description={"Maître Babeau vous rappelle pour répondre à vos questions juridiques. Cette consultation téléphonique de 30 min vous permet d'obtenir des éléments de réponse concrets et rapides à la question que vous vous posez."}/>
                        <HonoraireCard type_rdv={"question-simple"} titre={"Question simple"} honoraire={"100"} description={"Maître Babeau répond à votre question simple par écrit. Si vous souhaitez accompagner votre question d'une pièce jointe, la consultation juridique est adaptée, sinon la question simple (moins de 1.000 caractères) répondra parfaitement à votre question de droit."}/>
                        <HonoraireCard type_rdv={"consultation-juridique"} titre={"Consultation juridique"} honoraire={"150"} description={"Maître Babeau répond à vos questions juridiques par écrit. Si vous souhaitez accompagner votre question d'une pièce jointe, la consultation juridique est adaptée, sinon la question simple (moins de 1.000 caractères) répondra parfaitement à votre question de droit."}/>*/}
                        {honoraires.map((currentHonoraire) => {
                            return(
                                <HonoraireCard type_rdv={currentHonoraire.type_service} titre={currentHonoraire.titre} honoraire={currentHonoraire.prix} description={currentHonoraire.description}/>
                            );
                        })}
                    </div>
                </div>
            </div>
            <Recommendation></Recommendation>
            <Partenaires></Partenaires>
            <BesoinAvocat></BesoinAvocat>
        </>
    );
}
