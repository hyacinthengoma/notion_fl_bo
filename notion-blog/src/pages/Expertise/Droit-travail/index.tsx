import Header from "../../../components/header";
import Head from 'next/head';
import BesoinAvocat from "../../../components/Besoin-avocat";
import Image from "next/image";

export default function HomeDroitTravail() {
    return (
        <>
            <div className={"relative w-full"}>
                <div className={"absolute transform top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4/5 text-center z-50"}>
                    <h1 className={"text-white text-2xl md:text-4xl font-bold translate-y-1/2"}>DROIT DU TRAVAIL</h1>
                </div>
                <Image className={"brightness-50 h-[40vh] w-full object-cover"} src={"/images/FlorenceBabeau/banniere.png"} alt={"image-banniere"} width={"1920"} height={"1080"}/>
            </div>
            <div className={"w-full justify-center flex py-10 bg-white"}>
                <div className={"flex w-full lg:w-4/5 justify-center"}>
                    <div className={"flex flex-col items-center gap-y-10"}>
                        <div className={"relative w-4/5 overflow-hidden"}>
                            <input type={"checkbox"} className={"absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer peer"}/>
                            <div className={"bg-white h-12 w-full pl-5 flex items-center peer-hover:underline"}>
                                <h2 className={"lg:text-xl text-base text-red-900 font-semibold text-white"}>Contrat de travail et relations individuelles</h2>
                            </div>
                            <div className={"absolute top-3 right-3 text-red-900 transition-transform duration-500 rotate-0 peer-checked:rotate-180"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                </svg>

                            </div>
                            <div className={"bg-white  overflow-hidden transition-all duration-500 max-h-full peer-checked:max-h-0"}>
                                <div className={"p-4"}>
                                    <p>C’est la première mission de notre Cabinet : encadrer vos recrutements, et la rédaction ou la modification du contrat de travail selon la législation en vigueur. En outre, au regard des conséquences financières (et sur l’environnement de travail) qu’un litige peut engendrer, recourir à un avocat spécialisé en droit du travail pour préparer et/ou négocier la fin d’une relation de travail s’avère indispensable.

                                        Le Cabinet Babeau est le partenaire de nombreuses entreprises de toutes tailles. Nous vous accompagnons dans la résolution de toutes les problématiques liées au droit du travail (rupture conventionnelle, sanction disciplinaire, licenciement, modification du contrat de travail, congés payés, rémunération variable, mobilité…).
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={"relative w-4/5 overflow-hidden"}>
                            <input type={"checkbox"} className={"absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer peer"}/>
                            <div className={"bg-white h-12 w-full pl-5 flex items-center peer-hover:underline"}>
                                <h2 className={"lg:text-xl text-base text-red-900 font-semibold text-white"}>Relations collectives et restructurations</h2>
                            </div>
                            <div className={"absolute top-3 right-3 text-red-900 transition-transform duration-500 rotate-0 peer-checked:rotate-180"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                                </svg>
                            </div>
                            <div className={"bg-white  overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-full"}>
                                <div className={"p-4"}>
                                    <p>C’est la première mission de notre Cabinet : encadrer vos recrutements, et la rédaction ou la modification du contrat de travail selon la législation en vigueur. En outre, au regard des conséquences financières (et sur l’environnement de travail) qu’un litige peut engendrer, recourir à un avocat spécialisé en droit du travail pour préparer et/ou négocier la fin d’une relation de travail s’avère indispensable.

                                        Le Cabinet Babeau est le partenaire de nombreuses entreprises de toutes tailles. Nous vous accompagnons dans la résolution de toutes les problématiques liées au droit du travail (rupture conventionnelle, sanction disciplinaire, licenciement, modification du contrat de travail, congés payés, rémunération variable, mobilité…).
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={"relative w-4/5 overflow-hidden"}>
                            <input type={"checkbox"} className={"absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer peer"}/>
                            <div className={"bg-white h-12 w-full pl-5 flex items-center peer-hover:underline"}>
                                <h2 className={"lg:text-xl text-base font-semibold text-red-900"}>Contentieux du travail et du licenciement</h2>
                            </div>
                            <div className={"absolute top-3 right-3 text-red-900 transition-transform duration-500 rotate-0 peer-checked:rotate-180"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                                </svg>
                            </div>
                            <div className={"bg-white  overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-full"}>
                                <div className={"p-4"}>
                                    <p>C’est la première mission de notre Cabinet : encadrer vos recrutements, et la rédaction ou la modification du contrat de travail selon la législation en vigueur. En outre, au regard des conséquences financières (et sur l’environnement de travail) qu’un litige peut engendrer, recourir à un avocat spécialisé en droit du travail pour préparer et/ou négocier la fin d’une relation de travail s’avère indispensable.

                                        Le Cabinet Babeau est le partenaire de nombreuses entreprises de toutes tailles. Nous vous accompagnons dans la résolution de toutes les problématiques liées au droit du travail (rupture conventionnelle, sanction disciplinaire, licenciement, modification du contrat de travail, congés payés, rémunération variable, mobilité…).
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={"relative w-4/5 overflow-hidden"}>
                            <input type={"checkbox"} className={"absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer peer"}/>
                            <div className={"bg-white h-12 w-full pl-5 flex items-center peer-hover:underline"}>
                                <h2 className={"lg:text-xl text-base font-semibold text-red-900"}>Droit et contentieux de la sécurité sociale</h2>
                            </div>
                            <div className={"absolute top-3 right-3 text-red-900 transition-transform duration-500 rotate-0 peer-checked:rotate-180"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                                </svg>
                            </div>
                            <div className={"bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-full"}>
                                <div className={"p-4"}>
                                    <p className={""}>C’est la première mission de notre Cabinet : encadrer vos recrutements, et la rédaction ou la modification du contrat de travail selon la législation en vigueur. En outre, au regard des conséquences financières (et sur l’environnement de travail) qu’un litige peut engendrer, recourir à un avocat spécialisé en droit du travail pour préparer et/ou négocier la fin d’une relation de travail s’avère indispensable.

                                        Le Cabinet Babeau est le partenaire de nombreuses entreprises de toutes tailles. Nous vous accompagnons dans la résolution de toutes les problématiques liées au droit du travail (rupture conventionnelle, sanction disciplinaire, licenciement, modification du contrat de travail, congés payés, rémunération variable, mobilité…).
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={"relative w-4/5 overflow-hidden"}>
                            <input type={"checkbox"} className={"absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer peer"}/>
                            <div className={"bg-white h-12 w-full pl-5 flex items-center peer-hover:underline"}>
                                <h2 className={"lg:text-xl text-base font-semibold text-red-900"}>Droit pénal du travail</h2>
                            </div>
                            <div className={"absolute top-3 right-3 text-red-900 transition-transform duration-500 rotate-0 peer-checked:rotate-180"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                                </svg>
                            </div>
                            <div className={"bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-full"}>
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
            <BesoinAvocat></BesoinAvocat>
        </>
    );
}
