import ArticleCard from "./ArticleCard";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Partenaires(){
    return(
        <div className={"bg-white flex justify-center w-full py-20 pl-4 pr-5"}>
            <div className={"w-5/6"}>
                <h2 className={"font-bold text-black text-xl lg:text-3xl uppercase mb-6"}>MES PARTENAIRES</h2>
                <div className={"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-16 items-center"}>
                    <Image src={"/images/Partenaires/carsat-aquitaine.png"} className={"w-2/4 lg:w-3/4"} alt={"Logo carsat aquitaine"} width={1000} height={1000}/>
                    <Image src={"/images/Partenaires/extencia.png"} className={"w-2/4 lg:w-2/4"} alt={"Logo extencia"} width={500} height={500}/>
                    <Image src={"/images/Partenaires/gifi.jpg"} className={"w-2/5 lg:w-2/4"} alt={"Logo gifi"} width={1000} height={1000}/>
                    <Image src={"/images/Partenaires/PKF-Arsilon_logo_CMJN.svg"} className={"lg:w-3/4"} alt={"logo pkf arsilon"} width={1000} height={1000}/>
                    <Image src={"/images/Partenaires/SUEZ.svg"} alt={"logo suez"} className={"lg:w-3/4"} width={1000} height={1000}/>
                </div>
            </div>
        </div>
    );
}
