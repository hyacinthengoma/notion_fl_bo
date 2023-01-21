import Header from "../components/header";
import sharedStyles from "../styles/shared.module.css";
import BesoinAvocat from "../components/Besoin-avocat";
import Image from "next/image";
import Link from "next/link";
import {textBlock} from "../lib/notion/renderers";
import {getDateStr} from "../lib/blog-helpers";

export default function Honoraires() {
    return (
        <>
            <Header></Header>
            <div className={"relative w-full"}>
                <div className={"absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4/5 text-center z-50"}>
                    <h1 className={"text-white text-2xl md:text-4xl font-bold"}>HONORAIRES</h1>
                    <p className={"text-white text-xl md:text-2xl mb-8"}>Découvrez les honoraires des mes principaux actes.
                        N’hésitez surtout pas à me contacter pour une étude approfondie de votre dossier</p>
                    <div className={"w-full"}>
                        <Link href={""} className={"bg-red-900 text-white py-3 px-8 shadow-lg rounded-md hover:bg-red-800 hover:text-white uppercase font-bold"}>Prenez rendez-vous</Link>
                    </div>
                </div>
                <img className={"brightness-50 h-96 w-full object-cover"} src={"/images/comment-ca-marche/2-guys-1-girl.png"} alt={"image-banniere"}></img>
            </div>
            <div className={"bg-white flex justify-center w-full py-36"}>
                <div className={"w-5/6"}>
                    <div className={"flex flex-col lg:flex-row gap-8"}>
                        <div className={"max-w-full mx-auto overflow-hidden bg-white shadow-lg border"}>
                            <div className={"bg-gray-800 py-14 flex flex-col text-center"}>
                                <p className={"uppercase underline text-white font-semibold text-xl"}>CONSULTATION TELEPHONIQUE</p>
                                <p className={"uppercase text-white font-semibold text-xl"}>Durée 30 min</p>
                                <p className={"uppercase text-white"}>ICONE</p>
                                <p className={"uppercase text-white font-bold text-3xl"}>60€</p>
                                <div className={"w-full mt-5"}>
                                    <Link href={""} className={"bg-red-900 text-white py-3 px-8 shadow-lg rounded-md hover:bg-red-800 hover:text-white uppercase font-bold"}>DEMANDER UN RAPPEL</Link>
                                </div>
                            </div>
                            <div className="px-6 py-4">
                                <h2 className="font-bold text-black text-xl mb-2"></h2>
                                <p className="text-gray-700 text-base">
                                    Maître Babeau vous reçoit à son cabinet pour un 1er rendez-vous. Ce premier rdv de 60 min, sans engagement, permet réciproquement de faire connaissance, de connaître vos droits et la manière de traiter la problématique à laquelle vous êtes confronté.
                                </p>
                            </div>
                        </div>
                        <div className={"max-w-full mx-auto overflow-hidden bg-white shadow-lg border lg:transform lg:-translate-y-16"}>
                            <div className={"bg-gray-800 py-14 flex flex-col text-center"}>
                                <p className={"uppercase underline text-white font-semibold text-xl"}>CONSULTATION ÉCRITE</p>
                                <p className={"uppercase text-white font-semibold text-xl"}>Etude de votre dossier + possibilité d’ajout d’une pièce jointe</p>
                                <p className={"uppercase text-white"}>ICONE</p>
                                <p className={"uppercase text-white font-bold text-3xl"}>150€</p>
                                <div className={"w-full mt-5"}>
                                    <Link href={""} className={"bg-red-900 text-white py-3 px-8 shadow-lg rounded-md hover:bg-red-800 hover:text-white uppercase font-bold"}>CONSULTER PAR ÉCRIT</Link>
                                </div>
                            </div>
                            <div className="px-6 py-4">
                                <h2 className="font-bold text-black text-xl mb-2"></h2>
                                <p className="text-gray-700 text-base">
                                    Maître Babeau vous reçoit à son cabinet pour un 1er rendez-vous. Ce premier rdv de 60 min, sans engagement, permet réciproquement de faire connaissance, de connaître vos droits et la manière de traiter la problématique à laquelle vous êtes confronté.
                                </p>
                            </div>
                        </div>
                        <div className={"max-w-full mx-auto overflow-hidden bg-white shadow-lg border"}>
                            <div className={"bg-gray-800 py-14 flex flex-col text-center"}>
                                <p className={"uppercase underline text-white font-semibold text-xl"}>RENDEZ-VOUS AU CABINET</p>
                                <p className={"uppercase text-white font-semibold text-xl"}>Durée : 60 min</p>
                                <p className={"uppercase text-white"}>ICONE</p>
                                <p className={"uppercase text-white font-bold text-3xl"}>50€</p>
                                <div className={"w-full mt-5"}>
                                    <Link href={""} className={"bg-red-900 text-white py-3 px-8 shadow-lg rounded-md hover:bg-red-800 hover:text-white uppercase font-bold"}>Prendre rendez-vous</Link>
                                </div>
                            </div>
                            <div className="px-6 py-4">
                                <h2 className="font-bold text-black text-xl mb-2"></h2>
                                <p className="text-gray-700 text-base">
                                    Maître Babeau vous reçoit à son cabinet pour un 1er rendez-vous. Ce premier rdv de 60 min, sans engagement, permet réciproquement de faire connaissance, de connaître vos droits et la manière de traiter la problématique à laquelle vous êtes confronté.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"bg-gray-800 flex justify-center w-full py-20"}>
                <div className={"w-5/6"}>
                    <h2 className={"font-bold text-white text-3xl uppercase mb-6 text-center"}>COMMENT çA MARCHE ?</h2>
                </div>
            </div>
            <div className={"bg-white w-full"}>
                <div className={"flex flex-col md:flex-row"}>
                    <div className={"w-full md:w-1/2 order-1"}>
                        <img src={"/images/comment-ca-marche/2-girls-in-office.png"} className={"object-fit"}></img>
                    </div>
                    <div className={"w-full md:w-1/2 my-auto order-2 py-20 md:py-0"}>
                        <div className={"w-4/5 flex flex-col mx-auto"}>
                            <h2 className={"font-bold text-black text-2xl uppercase text-center"}>1/ Prise de RDV</h2>
                            <p className={"text-black text-center break-words"}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsums</p>
                            <Link href={""} className={"bg-red-900 text-white text-center py-1 px-4 shadow-lg rounded-md hover:bg-red-800 hover:text-white uppercase font-bold"}>Prenez rendez-vous</Link>
                        </div>
                    </div>
                </div>
                <div className={"flex flex-col md:flex-row"}>
                    <div className={"w-full md:w-1/2 order-1 md:order-2"}>
                        <img src={"/images/comment-ca-marche/papiers-administratifs.png"} className={"object-fit"}></img>
                    </div>
                    <div className={"w-full md:w-1/2 my-auto order-2 md:order-1 py-20 md:py-0"}>
                        <div className={"w-4/5 flex flex-col mx-auto"}>
                            <h2 className={"font-bold text-black text-2xl uppercase text-center"}>2/ Préparation des documents</h2>
                            <p className={"text-black text-center break-words"}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsums</p>
                        </div>
                    </div>
                </div>
                <div className={"flex flex-col md:flex-row"}>
                    <div className={"w-full md:w-1/2 order-1"}>
                        <img src={"/images/comment-ca-marche/fille-qui-ecrit.png"} className={"object-fit"}></img>
                    </div>
                    <div className={"w-full md:w-1/2 my-auto order-2 py-20 md:py-0"}>
                        <div className={"w-4/5 flex flex-col mx-auto"}>
                            <h2 className={"font-bold text-black text-2xl uppercase text-center"}>3/ Analyse du dossier</h2>
                            <p className={"text-black text-center break-words"}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsums</p>
                        </div>
                    </div>
                </div>
                <div className={"flex flex-col md:flex-row"}>
                    <div className={"w-full md:w-1/2 order-1 md:order-2"}>
                        <img src={"/images/comment-ca-marche/bien-jouer-mec.png"} className={"object-fit"}></img>
                    </div>
                    <div className={"w-full md:w-1/2 my-auto order-2 md:order-1 py-20 md:py-0"}>
                        <div className={"w-4/5 flex flex-col mx-auto"}>
                            <h2 className={"font-bold text-black text-2xl uppercase text-center"}>4/ Démarrage du processus, si viabilité du dossier</h2>
                            <p className={"text-black text-center break-words"}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsums</p>
                        </div>
                    </div>
                </div>
            </div>
            <BesoinAvocat></BesoinAvocat>
        </>
    );
}
