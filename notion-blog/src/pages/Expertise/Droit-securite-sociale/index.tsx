import Image from "next/image";
import Header from "../../../components/header";
import Link from "next/link";
import Recommandation from "../../../components/recommandation";
import BesoinAvocat from "../../../components/Besoin-avocat";

export default function HomeDroitSecuSociale() {
    return (
        <>
            <Header></Header>
            <div className={"relative w-full"}>
                <div className={"absolute transform top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4/5 text-center z-50"}>
                    <h1 className={"text-white text-2xl md:text-4xl font-bold"}>DROIT DE LA SÉCURITÉ SOCIALE</h1>
                </div>
                <img className={"brightness-50 h-96 w-full object-cover"} src={"/images/FlorenceBabeau/banniere.png"} alt={"image-banniere"}></img>
            </div>
            <div className={"w-full flex bg-white"}>
                <div className={"flex justify-center mt-10"}>
                    <div className={"flex flex-col items-center gap-y-5"}>
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
                        <Link href={""} className={"bg-red-900 text-white py-3 px-8 shadow-lg rounded-md hover:bg-red-800 hover:text-white uppercase font-bold"}>prenez rendez-vous</Link>
                    </div>
                </div>
            </div>
            <Recommandation></Recommandation>
            <BesoinAvocat></BesoinAvocat>
        </>
    );
}
