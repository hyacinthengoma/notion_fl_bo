import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BesoinAvocat() {
    return (
        <div className={"relative"}>
            <div className={"absolute mt-40 ml-16 z-50"}>
                <h1 className={"text-white text-2xl md:text-4xl font-bold"}>BESOIN D'UN AVOCAT ?</h1>
            </div>
            <div className={"absolute transform top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4/5 text-center z-50"}>
                <Link href={""} className="bg-red-900 text-white py-3 px-8 shadow-lg rounded-md hover:bg-red-800 hover:text-white inline-flex items-center gap-x-5">
                    <span>PRENDRE CONTACT</span>
                </Link>
            </div>
            <img className={"brightness-50 h-[600px] w-full object-cover"} src={"/images/BesoinAvocat/besoin-avocat-banniere.png"} alt={"image-banniere"}></img>
        </div>
    );
}
