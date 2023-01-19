import Image from "next/image";
import Header from "../../../components/header";
import Recommandation from "../../../components/recommandation";
import Link from "next/link";
import BesoinAvocat from "../../../components/Besoin-avocat";
import {useEffect, useState} from "react";

export default function HomeDroitTravail() {
    return (
        <>
            <Header></Header>
            <div className={"w-full flex bg-white"}>
                <div className={"w-1/2"}>
                    <img className={"h-full w-full object-cover"} src={"/images/Expertise/banniere.png"}
                         alt={"image-banniere"}></img>
                </div>
                <div className={"w-2/3 justify-center"}>
                    <div className={"flex flex-col items-center gap-y-5"}>
                        <h1 className={"text-black text-2xl font-bold underline my-5"}>Droit de la sécurité social</h1>
                        <div className={"relative w-4/5 overflow-hidden"}>
                            <input type={"checkbox"} className={"absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer peer"}/>
                            <div className={"bg-red-900 h-12 w-full pl-5 flex items-center"}>
                                <h2 className={"text-lg font-semibold text-white"}>Contrat de travail et relations individuelles</h2>
                            </div>
                            <div className={"absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                                </svg>
                            </div>
                            <div className={"bg-white shadow-lg overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-full border"}>
                                <div className={"p-4"}>
                                    <p>C’est la première mission de notre Cabinet : encadrer vos recrutements, et la rédaction ou la modification du contrat de travail selon la législation en vigueur. En outre, au regard des conséquences financières (et sur l’environnement de travail) qu’un litige peut engendrer, recourir à un avocat spécialisé en droit du travail pour préparer et/ou négocier la fin d’une relation de travail s’avère indispensable.

                                        Le Cabinet Babeau est le partenaire de nombreuses entreprises de toutes tailles. Nous vous accompagnons dans la résolution de toutes les problématiques liées au droit du travail (rupture conventionnelle, sanction disciplinaire, licenciement, modification du contrat de travail, congés payés, rémunération variable, mobilité…).
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={"relative w-4/5 overflow-hidden"}>
                            <input type={"checkbox"} className={"absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer peer"}/>
                            <div className={"bg-red-900 h-12 w-full pl-5 flex items-center"}>
                                <h2 className={"text-lg font-semibold text-white"}>Relations collectives et restructurations</h2>
                            </div>
                            <div className={"absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                                </svg>
                            </div>
                            <div className={"bg-white shadow-lg overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-full border"}>
                                <div className={"p-4"}>
                                    <p>C’est la première mission de notre Cabinet : encadrer vos recrutements, et la rédaction ou la modification du contrat de travail selon la législation en vigueur. En outre, au regard des conséquences financières (et sur l’environnement de travail) qu’un litige peut engendrer, recourir à un avocat spécialisé en droit du travail pour préparer et/ou négocier la fin d’une relation de travail s’avère indispensable.

                                        Le Cabinet Babeau est le partenaire de nombreuses entreprises de toutes tailles. Nous vous accompagnons dans la résolution de toutes les problématiques liées au droit du travail (rupture conventionnelle, sanction disciplinaire, licenciement, modification du contrat de travail, congés payés, rémunération variable, mobilité…).
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={"relative w-4/5 overflow-hidden"}>
                            <input type={"checkbox"} className={"absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer peer"}/>
                            <div className={"bg-red-900 h-12 w-full pl-5 flex items-center"}>
                                <h2 className={"text-lg font-semibold text-white"}>Contentieux du travail et du licenciement</h2>
                            </div>
                            <div className={"absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                                </svg>
                            </div>
                            <div className={"bg-white shadow-lg overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-full border"}>
                                <div className={"p-4"}>
                                    <p>C’est la première mission de notre Cabinet : encadrer vos recrutements, et la rédaction ou la modification du contrat de travail selon la législation en vigueur. En outre, au regard des conséquences financières (et sur l’environnement de travail) qu’un litige peut engendrer, recourir à un avocat spécialisé en droit du travail pour préparer et/ou négocier la fin d’une relation de travail s’avère indispensable.

                                        Le Cabinet Babeau est le partenaire de nombreuses entreprises de toutes tailles. Nous vous accompagnons dans la résolution de toutes les problématiques liées au droit du travail (rupture conventionnelle, sanction disciplinaire, licenciement, modification du contrat de travail, congés payés, rémunération variable, mobilité…).
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={"relative w-4/5 overflow-hidden"}>
                            <input type={"checkbox"} className={"absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer peer"}/>
                            <div className={"bg-red-900 h-12 w-full pl-5 flex items-center"}>
                                <h2 className={"text-lg font-semibold text-white"}>Droit et contentieux de la sécurité sociale</h2>
                            </div>
                            <div className={"absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                                </svg>
                            </div>
                            <div className={"bg-white shadow-lg overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-full border"}>
                                <div className={"p-4"}>
                                    <p>C’est la première mission de notre Cabinet : encadrer vos recrutements, et la rédaction ou la modification du contrat de travail selon la législation en vigueur. En outre, au regard des conséquences financières (et sur l’environnement de travail) qu’un litige peut engendrer, recourir à un avocat spécialisé en droit du travail pour préparer et/ou négocier la fin d’une relation de travail s’avère indispensable.

                                        Le Cabinet Babeau est le partenaire de nombreuses entreprises de toutes tailles. Nous vous accompagnons dans la résolution de toutes les problématiques liées au droit du travail (rupture conventionnelle, sanction disciplinaire, licenciement, modification du contrat de travail, congés payés, rémunération variable, mobilité…).
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={"relative w-4/5 overflow-hidden"}>
                            <input type={"checkbox"} className={"absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer peer"}/>
                            <div className={"bg-red-900 h-12 w-full pl-5 flex items-center"}>
                                <h2 className={"text-lg font-semibold text-white"}>Droit pénal du travail</h2>
                            </div>
                            <div className={"absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                                </svg>
                            </div>
                            <div className={"bg-white shadow-lg overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-full border"}>
                                <div className={"p-4"}>
                                    <p>C’est la première mission de notre Cabinet : encadrer vos recrutements, et la rédaction ou la modification du contrat de travail selon la législation en vigueur. En outre, au regard des conséquences financières (et sur l’environnement de travail) qu’un litige peut engendrer, recourir à un avocat spécialisé en droit du travail pour préparer et/ou négocier la fin d’une relation de travail s’avère indispensable.

                                        Le Cabinet Babeau est le partenaire de nombreuses entreprises de toutes tailles. Nous vous accompagnons dans la résolution de toutes les problématiques liées au droit du travail (rupture conventionnelle, sanction disciplinaire, licenciement, modification du contrat de travail, congés payés, rémunération variable, mobilité…).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Recommandation></Recommandation>
            <BesoinAvocat></BesoinAvocat>
        </>
    );
}
