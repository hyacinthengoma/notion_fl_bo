import ArticleCard from "./ArticleCard";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Partenaires(){
    return(
        <div className={"bg-white flex justify-center w-full py-20 pl-4 pr-5"}>
            <div className={"w-5/6"}>
                <h2 className={"font-bold text-black text-xl lg:text-3xl uppercase mb-6"}>MES PARTENAIRES</h2>
                <div className={"items-center sm:justify-between flex flex-col lg:flex-row w-full gap-10"}>
                    <Image src={"/images/Partenaires/carsat-aquitaine.png"} className={"w-40"} alt={"Logo carsat aquitaine"} width={1000} height={1000}/>
                    <Image src={"/images/Partenaires/extencia.png"} className={"w-40"} alt={"Logo extencia"} width={500} height={500}/>
                    <Image src={"/images/Partenaires/gifi.jpg"} className={"w-40"} alt={"Logo gifi"} width={1000} height={1000}/>
                    <Image src={"/images/Partenaires/PKF-Arsilon_logo_CMJN.svg"} className={"w-40"} alt={"logo pkf arsilon"} width={1000} height={1000}/>
                    <Image src={"/images/Partenaires/SUEZ.svg"} alt={"logo suez"} className={"w-40"} width={1000} height={1000}/>
                </div>
            </div>
        </div>
    );
}
