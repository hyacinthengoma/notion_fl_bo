import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function BesoinAvocat() {
    return (
        <div className={"relative"}>
            <div className={"absolute mt-28 ml-16 z-50"}>
                <h1 className={"text-white text-xl lg:text-3xl md:text-4xl font-bold"}>BESOIN D'UN AVOCAT ?</h1>
            </div>
            <div className={"absolute transform top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4/5 text-center z-50"}>
                <Link href={"/contact"} className="bg-red-800 text-white py-3 px-8 shadow-lg rounded-md hover:bg-red-700 hover:text-white inline-flex items-center gap-x-5 hover:scale-105 duration-500">
                    PRENDRE CONTACT
                </Link>
            </div>
            <Image loading={"eager"} className={"brightness-50 h-[400px] w-full object-[center_bottom] object-cover"} src={"/images/BesoinAvocat/besoin-avocat-banniere.png"} alt={"image-banniere-besoin-avocat"} width={"600"} height={"600"}></Image>
        </div>
    );
}
