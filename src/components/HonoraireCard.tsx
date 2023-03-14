import React from "react";
import Link from "next/link";

interface HonoraireCard {
    type_rdv:string,
    titre:string,
    honoraire:string,
    description:string
}

const HonoraireCard: React.FC<HonoraireCard> = ({type_rdv, titre, honoraire, description}) => {
    return (
        <Link href={{ pathname: "/contact", query: { objet: type_rdv } }} className={"group cursor-pointer flex flex-col bg-white border rounded-lg shadow hover:shadow-lg hover:border-red-300 overflow-hidden hover:scale-105 duration-200"}>
            <div className="flex flex-col flex-1 p-4 sm:p-6 gap-4">
                <h2 className="text-gray-800 mb-2 text-lg font-medium uppercase text-center">{titre}</h2>
                <hr/>
                <h3 className={"text-center text-gray-600 font-semibold text-4xl"}>{honoraire}€ TTC</h3>
                <div className={"px-2 py-8"}>
                    <p className={"my-2 text-sm"}>{description}</p>
                </div>
                <div className="flex justify-center mt-auto">
                    <p className={"relative overflow-hidden border border-red-800 px-4 py-3 rounded"}>
                        <span className="absolute inset-y-0 left-0 w-[0px] bg-red-800 transition-all duration-300 group-hover:w-full group-active:bg-red-800"></span>
                        <span className="relative flex gap-4 text-sm font-medium text-red-700 transition-colors duration-700 group-hover:text-white my-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                        </svg>
                        Demander une consultation
                    </span>
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default HonoraireCard;
