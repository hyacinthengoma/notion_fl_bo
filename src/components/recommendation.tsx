import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
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
                    <h2 className={"font-bold text-black text-xl lg:text-3xl uppercase mb-16"}>ILS RECOMMANDENT LE CABINET</h2>
                    <div className="py-6 sm:py-8 lg:py-12">
                            <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">
                                <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
                                    <div className="text-center text-gray-600">
                                        Professionnalisme, écoute, réactivité, précision.<br/>
                                        Nous travaillons de manière régulière avec Maître Babeau. <br/>
                                        <span style={{ display: showText ? "block" : "none" }}>
                                            Nous apprécions la qualité de nos échanges, ses conseils toujours précis, sa disponibilité, et sa réactivité dans le suivi des dossiers.<br/>
                                            Elle a une approche personnelle et pédagogique avec pour but de nous accompagner de manière constructive et pérenne.
                                        </span>
                                        <div className={"text-center"}>
                                            <button onClick={() => {setShowText(!showText); setButtonText1(buttonText1 === "Lire la suite" ? "Réduire le texte" : "Lire la suite"); }} className={"text-black text-sm border border-red-900 rounded px-2 my-5 py-1"}>{buttonText1}</button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                                        <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                                            <img src="/images/Recommendations/ViolaineHubert.jpg" loading="lazy" alt="Photo by Radu Florin" className="h-full w-full object-cover object-center"/>
                                        </div>

                                        <div>
                                            <div className="text-center text-sm font-bold text-gray-800 sm:text-left md:text-base">Violaine Hubert</div>
                                            <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">Le comptoir des nouveaux fromagers</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
                                    <div className="text-center text-gray-600">
                                        “Nous travaillons ensemble depuis plus d'une 10aine d'année. Me Babeau a pu nous accompagner sur des dossiers délicats, toujours avec écoute,
                                        <span style={{ display: showSecondText ? "block" : "none" }}>
                                             professionnalisme et réactivité.<br/> Nous n'hésitons pas à recommander son cabinet auprès de nos propres clients.“
                                        </span>
                                        <div className={"text-center"}>
                                            <button onClick={() => {setSecondShowText(!showSecondText); setButtonText2(buttonText2 === "Lire la suite" ? "Réduire le texte" : "Lire la suite"); }} className={"text-black text-sm border border-red-900 rounded px-2 my-5 py-1"}>{
                                                buttonText2
                                            }</button>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                                        <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                                            <img src="/images/Recommendations/NicolasDuburch.jpg" loading="lazy" alt="Photo by christian ferrer" className="h-full w-full object-cover object-center"/>
                                        </div>

                                        <div>
                                            <div className="text-center text-sm font-bold text-gray-800 sm:text-left md:text-base">Nicolas Duburch</div>
                                            <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">GFF Expertise Audit</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
                                    <div className="text-center text-gray-600">“Très bonne expérience lors de notre collaboration avec Maitre BABEAU.<br/>
                                        Notre structure ayant fait appel aux services de Maitre BABEAU a plusieurs
                                        <span style={{ display: showThirdText ? "block" : "none" }}>
                                            reprises ces derniers mois, nous pouvons attester de son professionnalisme et de la qualité de ses conseils au travers des différentes situations rencontrées.<br/>
                                            De plus, la réactivité de Madame BABEAU fait d'elle une professionnelle indispensable.”
                                        </span>
                                        <div className={"text-center"}>
                                            <button onClick={() => {setThirdShowText(!showThirdText);setButtonText3(buttonText3 === "Lire la suite" ? "Réduire le texte" : "Lire la suite"); }} className={"text-black text-sm border border-red-900 rounded px-2 my-5 py-1 "}>{buttonText3}</button>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                                        <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                                            <img src="/images/Recommendations/PierreGarnier.png" loading="lazy" alt="Photo by Ayo Ogunseinde" className="h-full w-full object-cover object-center"/>
                                        </div>

                                        <div>
                                            <div className="text-center text-sm font-bold text-gray-800 sm:text-left md:text-base">Pierre Garnier</div>
                                            <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">SAPL de la hé</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                    </div>
                    <div className={"flex justify-center mt-20"}>
                        <Link href={"https://www.google.com/search?q=les+avis+v%C3%A9rifi%C3%A9s+de+florence+babeau&rlz=1C5CHFA_enFR964FR965&sxsrf=AJOqlzWVmGDmEmBCX28HPUI2coHTXUvhRA%3A1678223462842&ei=ZqgHZJSMM4ylkdUP6byy-A0&ved=0ahUKEwiU1-zK3cr9AhWMUqQEHWmeDN8Q4dUDCA8&uact=5&oq=les+avis+v%C3%A9rifi%C3%A9s+de+florence+babeau&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzoHCCMQsAMQJzoHCCMQsAIQJzoECCMQJzoLCAAQgAQQsQMQgwE6EQguEIAEELEDEIMBEMcBENEDOgsILhCABBCxAxCDAToOCC4QgAQQsQMQxwEQ0QM6CggAELEDEIMBEEM6EAguELEDEIMBEMcBENEDEEM6BQgAEIAEOggIABCxAxCDAToECC4QQzoKCC4QxwEQrwEQQzoECAAQAzoICC4QgAQQsQM6CAguELEDEIMBOgsILhCABBDHARCvAToICAAQgAQQsQM6DgguEIAEELEDEMcBEK8BOgsILhCABBCxAxDUAjoKCAAQgAQQFBCHAjoFCC4QgAQ6CAguEIAEENQCOgYIABAWEB46CAgAEBYQHhAPOgUIIRCgAToICCEQFhAeEB06BwghEKABEApKBAhBGAFQjwhYm2Rg9WVoAnAAeACAAZUCiAHSG5IBBjMyLjcuMZgBAKABAcgBAsABAQ&sclient=gws-wiz-serp"} className={"bg-red-800 text-white text-center py-3 px-8 shadow-lg rounded-md hover:bg-red-700 hover:text-white uppercase font-bold hover:scale-105 duration-500"}>Consulter mes avis vérifiés</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
