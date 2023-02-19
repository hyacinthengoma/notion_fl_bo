import Image from "next/image";
import BesoinAvocat from "../components/Besoin-avocat";
import Head from "next/head";
import React from "react";

export default function MentionLegales(){
    return (
        <>
            <Head>
                <title>Mention légales</title>
            </Head>
            <div className={"relative w-full"}>
                <div className={"absolute transform top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4/5 text-center z-50"}>
                    <h1 className={"text-white text-2xl md:text-4xl font-bold"}>MENTIONS LEGALES</h1>
                </div>
                <Image className={"brightness-50 h-[35vh] w-full object-cover"} src={"/images/FlorenceBabeau/banniere.png"} alt={"image-banniere"} width={"1920"} height={"1080"}/>
            </div>
            <div className={"w-full flex justify-center bg-white py-20"}>
                <div className={"w-5/6 text-justify"}>
                    <h2 className={"font-bold text-black text-xl uppercase mb-6"}>PROPRIETAIRE</h2>
                    <p className={"font-regular text-gray-700 text-lg mb-6"}>Florence Babeau</p>
                    <p className={"font-regular text-gray-800 text-lg mb-6"}>fl.babeau@gmail.com</p>
                    <p className={"font-regular text-gray-800 text-lg mb-6"}>05.57.10.28.24</p>
                    <p className={"font-regular text-gray-800 text-lg mb-6"}>2 Rue Claude Boucher</p>
                    <p className={"font-regular text-gray-800 text-lg mb-6"}>33300 Bordeaux</p>
                    <h2 className={"font-bold text-black text-xl uppercase mb-6"}>HEBERGEUR</h2>
                    <p className={"font-regular text-gray-700 text-lg mb-6"}>Ce site est hébergé par Vercel</p>
                    <p className={"font-regular text-gray-700 text-lg mb-6"}>340 S Lemon Ave #4133 Walnut, CA 91789 </p>
                    <h2 className={"font-bold text-black text-xl uppercase mb-6"}>UTILISATION DES DONNÉES DU SITE</h2>
                    <p className={"font-regular text-gray-700 text-lg mb-6"}>Les utilisateurs du présent site sont tenus de respecter les dispositions de la loi relative à l’Informatique, aux fichiers et aux libertés, dont la violation est passible de sanctions pénales. Ils doivent notamment s’abstenir, s’agissant des informations nominatives auxquelles ils accèdent, de toute collecte, de toute utilisation détournée, et d’une manière générale, de tout acte susceptible de porter atteinte à la vie privée ou à la réputation des personnes. La structure générale, ainsi que les logiciels, textes, images animées ou non, son savoir-faire, et tous autres éléments composants le site sont la propriété exclusive du site. Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l’autorisation expresse du site avocat-babeau.fr est interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle. Toute reproduction totale ou partielle de ces marques ou de ces logos, effectuée à partir des éléments du site sans l’autorisation expresse du site avocat-babeau.fr donc prohibée, au sens de l’article L.713-2 du Code de la propriété intellectuelle.</p>
                    <h2 className={"font-bold text-black text-xl uppercase mb-6"}>LIMITATION DE RESPONSABILITÉ</h2>
                    <p className={"font-regular text-gray-700 text-lg mb-6"}>Le site avocat-babeau.fr ne saurait être tenu pour responsable des erreurs rencontrées sur le site, problèmes techniques, interprétation des informations publiée et conséquences de leur utilisation. En conséquence, l’utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.</p>
                    <h2 className={"font-bold text-black text-xl uppercase mb-6"}>DROIT APPLICABLE</h2>
                    <p className={"font-regular text-gray-700 text-lg mb-6"}>Le présent site est soumis au droit français.</p>
                    <h2 className={"font-bold text-black text-xl uppercase mb-6"}>INFORMATIONS LEGALES</h2>
                    <p className={"font-regular text-gray-700 text-lg mb-6"}>Le site internet avocat-babeau.fr est la propriété de Florence Babeau.</p>
                    <h2 className={"font-bold text-black text-xl uppercase mb-6"}>COOKIES</h2>
                    <p className={"font-regular text-gray-700 text-lg mb-6"}>
                        Le site web avocat-babeau.fr utilise des cookies pour stocker les informations de session de l'utilisateur. Ces cookies sont des fichiers de petite taille qui sont stockés sur l'ordinateur de l'utilisateur lors de la navigation sur le site web. Ils permettent au site web de reconnaître l'utilisateur lorsqu'il se connecte à son compte et de mémoriser ses préférences de navigation pour améliorer l'expérience utilisateur.<br/> <br/>

                        Le site web avocat-babeau.fr utilise uniquement des cookies de session, qui sont des cookies temporaires qui expirent lorsque l'utilisateur ferme son navigateur. Ces cookies ne collectent pas d'informations personnelles sur l'utilisateur et ne sont pas utilisés à des fins publicitaires.<br/> <br/>

                        L'utilisation de cookies par le site web avocat-babeau.fr est conforme à la réglementation en vigueur. Vous pouvez contrôler et gérer l'utilisation des cookies en modifiant les paramètres de votre navigateur.<br/> <br/>

                        En naviguant sur le site web avocat-babeau.fr, vous acceptez l'utilisation de cookies conformément à la présente politique. Si vous n'acceptez pas l'utilisation de cookies, veuillez désactiver les cookies dans les paramètres de votre navigateur.<br/>
                    </p>
                </div>
            </div>
            <BesoinAvocat></BesoinAvocat>
        </>
    );
}
