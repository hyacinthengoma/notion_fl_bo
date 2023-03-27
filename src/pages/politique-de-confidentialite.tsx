import Image from "next/image";
import BesoinAvocat from "../components/Besoin-avocat";
import Head from "next/head";
import React from "react";

export default function PolitiqueDeConfidentialite(){
    return (
        <>
            <Head>
                <title>Politique de confidentialité</title>
            </Head>
            <div className={"relative w-full"}>
                <div className={"absolute transform top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4/5 text-center z-50"}>
                    <h1 className={"text-white text-2xl md:text-4xl font-bold"}>POLITIQUE DE CONFIDENTIALITÉ</h1>
                </div>
                <Image className={"brightness-50 h-[35vh] w-full object-cover"} src={"/images/FlorenceBabeau/banniere.png"} alt={"image-banniere"} width={"1920"} height={"1080"}/>
            </div>
            <div className={"w-full flex justify-center bg-white py-20"}>
                <div className={"w-5/6 text-justify"}>
                    <h2 className={"font-bold text-black text-xl uppercase mb-6"}>Politique de confidentialité</h2>
                    <p className={"font-regular text-gray-700 text-lg mb-6"}>
                        Nous accordons une grande importance à la protection de vos données à caractère personnel et nous nous engageons à respecter les lois et règlements applicables en matière de protection des données, y compris le Règlement général sur la protection des données (RGPD).
                    </p>
                    <h2 className={"font-bold text-black text-xl uppercase mb-6"}>1. Collecte des données à caractère personnel</h2>
                    <p className={"font-regular text-gray-700 text-lg mb-6"}>
                        Nous collectons les données à caractère personnel que vous nous fournissez volontairement via notre formulaire de contact, telles que votre nom, prénom, email, raison sociale, numéro de téléphone et code postal.
                    </p>
                    <h2 className={"font-bold text-black text-xl uppercase mb-6"}>2. Utilisation des données à caractère personnel</h2>
                    <p className={"font-regular text-gray-700 text-lg mb-6"}>
                        Nous utilisons les données à caractère personnel que vous nous fournissez uniquement dans le but de répondre à vos demandes, de fournir des informations sur nos produits et services, et de vous contacter si nécessaire pour répondre à vos besoins.
                    </p>
                    <p className={"font-regular text-gray-700 text-lg mb-6"}>
                        Nous ne communiquons pas vos données à caractère personnel à des tiers, sauf si cela est nécessaire pour répondre à votre demande ou si nous y sommes légalement tenus.
                    </p>
                    <h2 className={"font-bold text-black text-xl uppercase mb-6"}>3. Cookies et services tiers</h2>
                    <p className={"font-regular text-gray-700 text-lg mb-6"}>
                        Notre site web peut inclure des vidéos provenant de services tiers tels que YouTube ou Vimeo. Veuillez noter que ces services tiers peuvent collecter des données personnelles vous concernant, y compris votre adresse IP et vos interactions avec la vidéo. Ces données peuvent être soumises à des politiques de confidentialité différentes de celle de notre site web.
                    </p>
                    <p className={"font-regular text-gray-700 text-lg mb-6"}>
                        Nous vous informons que ces vidéos provenant de services tiers ne seront pas chargées tant que vous n'aurez pas donné votre consentement à l'utilisation de cookies et de traceurs sur notre site web. Par conséquent, si vous ne donnez pas votre consentement, vous ne pourrez pas visualiser ces vidéos.
                    </p>
                    <p className={"font-regular text-gray-700 text-lg mb-6"}>
                        Nous vous recommandons de lire attentivement les politiques de confidentialité de ces services tiers avant de leur fournir vos données personnelles. Nous ne sommes pas responsables de la collecte, du traitement ou de la divulgation de vos données personnelles par ces services tiers.
                    </p>
                    <p className={"font-regular text-gray-700 text-lg mb-6"}>
                        Nous nous engageons à respecter les dispositions du Règlement Général sur la Protection des Données (RGPD) en ce qui concerne la collecte, le traitement et la protection de vos données personnelles. Si vous avez des questions ou des préoccupations concernant notre politique de confidentialité, n'hésitez pas à nous contacter.
                    </p>
                    <h2 className={"font-bold text-black text-xl uppercase mb-6"}>4. Stockage des données à caractère personnel</h2>
                    <p className={"font-regular text-gray-700 text-lg mb-6"}>
                        Nous stockons les données à caractère personnel que vous nous fournissez uniquement aussi longtemps que nécessaire pour répondre à votre demande ou pour respecter nos obligations légales.
                    </p>
                    <h2 className={"font-bold text-black text-xl uppercase mb-6"}>5. Vos droits</h2>
                    <p className={"font-regular text-gray-700 text-lg mb-6"}>
                        Vous avez le droit d'accéder, de rectifier ou de supprimer les données à caractère personnel que nous détenons à votre sujet. Vous pouvez également vous opposer à tout moment au traitement de vos données à caractère personnel ou demander la limitation du traitement. Pour exercer vos droits, vous pouvez nous contacter en utilisant les coordonnées fournies sur notre site web.
                    </p>
                    <h2 className={"font-bold text-black text-xl uppercase mb-6"}>6. Modifications de la politique de confidentialité</h2>
                    <p className={"font-regular text-gray-700 text-lg mb-6"}>
                        Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur notre site web. Nous vous encourageons à consulter régulièrement cette page pour être informé de toute mise à jour de notre politique de confidentialité.
                    </p>
                    <p className={"font-regular text-gray-700 text-lg mb-6"}>
                        Si vous avez des questions ou des préoccupations concernant notre politique de confidentialité ou le traitement de vos données à caractère personnel, n'hésitez pas à nous contacter en utilisant les coordonnées fournies sur notre site web.
                    </p>
                </div>
            </div>
            <BesoinAvocat></BesoinAvocat>
        </>
    );
}
