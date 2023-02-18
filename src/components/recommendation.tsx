import Image from "next/image";
import React, { useState } from "react";
export default function Recommendation() {
    {/**constante d'affichage du texte*/}
        const [showText, setShowText] = useState(false);
        const [showSecondText, setSecondShowText] = useState(false);
        const [showThirdText, setThirdShowText] = useState(false);
    {/**constante pour changer Lire la suite en réduire le texte et vis versa*/}
        const [buttonText1, setButtonText1] = useState("Lire la suite");
        const [buttonText2, setButtonText2] = useState("Lire la suite");
        const [buttonText3, setButtonText3] = useState("Lire la suite");
        const limit = 100;
    return (
   <div className={"bg-gray-50 py-16"}>
            <div className={"flex justify-center w-full"}>
                <div className={"w-5/6"}>
                    <h2 className={"font-bold text-black text-[2rem] uppercase mb-16"}>ILS RECOMMANDENT LE CABINET</h2>
                    <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 sm:gap-32"}>
                        <div>
                            <div
                                className="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
                                <div className="px-6">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full flex justify-center">
                                            <div className="relative flex justify-center">
                                                <Image
                                                    src="/images/Recommendations/ViolaineHubert.jpg"
                                                    className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                                                    width={"500"}
                                                    height={"500"}
                                                    alt={"avatar-nicolas-duburch-avis"}/>
                                            </div>
                                        </div>
                                        <div className="w-full text-center mt-20">
                                            <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                                                <div className="p-3 text-center">
                                                    <span
                                                        className="text-xl font-bold block uppercase tracking-wide text-orange-500">★★★★★</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center mt-2 ">
                                        <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">Violaine Hubert</h3>
                                        <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                                            <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>Il y a un 1 an
                                        </div>
                                    </div>
                                    <div className="mt-6 py-6 border-t border-slate-200 text-center h-auto ">
                                        <div className="flex flex-wrap justify-center">
                                            <div className="w-full px-4">
                                                <p id="text" className="font-light leading-relaxed text-slate-600 mb-4 text-left">Professionnalisme, écoute, réactivité, précision.<br/>
                                                    Nous travaillons de manière régulière avec Maître Babeau. <br/>
                                                    <span style={{ display: showText ? "block" : "none" }}>
                                                        Nous apprécions la qualité de nos échanges, ses conseils toujours précis, sa disponibilité, et sa réactivité dans le suivi des dossiers.<br/>
                                                        Elle a une approche personnelle et pédagogique avec pour but de nous accompagner de manière constructive et pérenne.
                                                    </span>
                                                </p>
                                                <div className={"text-end"}>
                                                    <button onClick={() => {setShowText(!showText); setButtonText1(buttonText1 === "Lire la suite" ? "Réduire le texte" : "Lire la suite"); }} className={"text-black text-sm border border-red-900 rounded px-2 my-5 py-1"}>{buttonText1}</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                className="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
                                <div className="px-6">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full flex justify-center">
                                            <div className="relative flex justify-center">
                                                <Image
                                                    src="/images/Recommendations/NicolasDuburch.jpg"
                                                    className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                                                    width={"500"}
                                                    height={"500"}
                                                    alt={"avatar-nicolas-duburch-avis"}/>
                                            </div>
                                        </div>
                                        <div className="w-full text-center mt-20">
                                            <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                                                <div className="p-3 text-center">
                                                    <span
                                                        className="text-xl font-bold block uppercase tracking-wide text-orange-500 ">★★★★★</span>
                                                    {/**<span className="text-sm text-slate-400">Followers</span>*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center mt-2">
                                        <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">Nicolas Duburch</h3>
                                        <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                                            <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>Il y a un 1 an
                                        </div>
                                    </div>
                                    <div className="mt-6 py-6 border-t border-slate-200 text-center h-auto">
                                        <div className="flex flex-wrap justify-center">
                                            <div className="w-full px-4">
                                                <p className="font-light leading-relaxed text-slate-600 mb-4 text-left">Nous travaillons ensemble depuis plus d'une 10aine d'année. Me Babeau a pu nous accompagner sur des dossiers délicats, toujours avec écoute,
                                                    <span style={{ display: showSecondText ? "block" : "none" }}>
                                                         professionnalisme et réactivité.<br/> Nous n'hésitons pas à recommander son cabinet auprès de nos propres clients.
                                                    </span>
                                                </p>
                                                <div className={"text-end"}>
                                                    <button onClick={() => {setSecondShowText(!showSecondText); setButtonText2(buttonText2 === "Lire la suite" ? "Réduire le texte" : "Lire la suite"); }} className={"text-black text-sm border border-red-900 rounded px-2 my-5 py-1"}>{
                                                        buttonText2
                                                    }</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                className="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
                                <div className="px-6">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full flex justify-center">
                                            <div className="relative flex justify-center">
                                                <Image
                                                    src="/images/Recommendations/PierreGarnier.png"
                                                    className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                                                    width={"500"}
                                                    height={"500"}
                                                    alt={"avatar-pierre-garnier-avis"}/>
                                            </div>
                                        </div>
                                        <div className="w-full text-center mt-20">
                                            <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                                                <div className="p-3 text-center">
                                                    <span
                                                        className="text-xl font-bold block uppercase tracking-wide text-orange-500">★★★★★</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center mt-2">
                                        <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">Pierre Garnier</h3>
                                        <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                                            <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>Il y a 1 an
                                        </div>
                                    </div>
                                    <div className="mt-6 py-6 border-t border-slate-200 text-center h-auto">
                                        <div className="flex flex-wrap justify-center">
                                            <div className="w-full px-4">
                                                <p className="font-light leading-relaxed text-slate-600 mb-4 text-left">Très bonne expérience lors de notre collaboration avec Maitre BABEAU.<br/>
                                                    Notre structure ayant fait appel aux services de Maitre BABEAU a plusieurs
                                                    <span style={{ display: showThirdText ? "block" : "none" }}>
                                                   reprises ces derniers mois, nous pouvons attester de son professionnalisme et de la qualité de ses conseils au travers des différentes situations rencontrées.<br/>
                                                    De plus, la réactivité de Madame BABEAU fait d'elle une professionnelle indispensable.
                                                    </span>
                                                </p>
                                                <div className={"text-end"}>
                                                    <button onClick={() => {setThirdShowText(!showThirdText);setButtonText3(buttonText3 === "Lire la suite" ? "Réduire le texte" : "Lire la suite"); }} className={"text-black text-sm border border-red-900 rounded px-2 my-5 py-1 "}>{buttonText3}</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
