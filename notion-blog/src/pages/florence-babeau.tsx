import Header from "../components/header";
import BesoinAvocat from "../components/Besoin-avocat";
import Link from "next/link";

export default function FlorenceBabeau() {
    return(
        <div>
            <Header></Header>
            <div className={"relative w-full"}>
                <div className={"absolute transform top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4/5 text-center z-50"}>
                    <h1 className={"text-white text-2xl md:text-4xl font-bold"}>FLORENCE BABEAU</h1>
                </div>
                <img className={"brightness-50 h-96 w-full object-cover"} src={"/images/FlorenceBabeau/banniere.png"} alt={"image-banniere"}></img>
            </div>
            <div className={"bg-white flex justify-center w-full pt-36"}>
                <div className={"w-5/6"}>
                    <h2 className={"font-bold text-black text-3xl uppercase mb-6"}>ADN DE L'ENTREPRISE</h2>
                    <div className={"flex flex-col gap-y-8 lg:flex-row"}>
                        <div className={"w-full lg:w-1/3 mx-2"}>
                            <p className={"mt-2 text-xl"}>L’ADN du cabinet c’est son approche holistique de chaque affaire, qui est appréhendée dans sa globalité et en prenant en considération ses différentes dimensions économiques, sociales et humaines.</p>
                        </div>
                        <div className={"w-full lg:w-1/3 mx-2"}>
                            <p className={"mt-2 text-xl"}>La complémentarité entres les activités en conseil et de contentieux permet de faire un juste diagnostic du dossier, une bonne évaluation des risques et de proposer les solutions les plus adaptées.</p>
                        </div>
                        <div className={"w-full lg:w-1/3 mx-2"}>
                            <p className={"mt-2 text-xl"}>La complémentarité entres les activités en conseil et de contentieux permet de faire un juste diagnostic du dossier, une bonne évaluation des risques et de proposer les solutions les plus adaptées.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"bg-white flex justify-center w-full md:pt-36 py-20"}>
                <div className={"w-5/6"}>
                    <div className={"flex flex-col md:flex-row md:h-96"}>
                        <div className={"w-full md:w-1/2 order-2 md:order-1"}>
                            <iframe className={"h-96 w-full md:h-full rounded"} src="https://www.youtube.com/embed/tgbNymZ7vqY">
                            </iframe>
                        </div>
                        <div className={"w-full md:w-1/2 my-auto order-1 md:order-2 py-20 md:py-0"}>
                            <div className={"w-4/5 flex flex-col mx-auto"}>
                                <h2 className={"font-bold text-black text-2xl uppercase text-center"}>MA PERSONALITÉ PLUS EN DÉTAILS</h2>
                                <p className={"text-black text-center break-words"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur </p>
                                <div className={"w-full flex justify-center"}>
                                    <Link href={""} className={"bg-red-900 text-white text-center py-1 px-4 shadow-lg rounded-md hover:bg-red-800 hover:text-white uppercase font-bold"}>Prenez rendez-vous</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"flex flex-col md:flex-row mt-6 md:h-96"}>
                        <div className={"w-full md:w-1/2 order-2"}>
                            <iframe className={"h-96 w-full md:h-full rounded"} src="https://www.youtube.com/embed/tgbNymZ7vqY">
                            </iframe>
                        </div>
                        <div className={"w-full md:w-1/2 my-auto order-1 py-20 md:py-0"}>
                            <div className={"w-4/5 flex flex-col mx-auto"}>
                                <h2 className={"font-bold text-black text-2xl uppercase text-center"}>ET SI JE VOUS RÉPONDAIS DIRECTEMENT …!</h2>
                                <p className={"text-black text-center break-words"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur </p>
                                <div className={"w-full flex justify-center"}>
                                    <Link href={""} className={"bg-red-900 text-white text-center py-1 px-4 shadow-lg rounded-md hover:bg-red-800 hover:text-white uppercase font-bold"}>Prenez rendez-vous</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BesoinAvocat></BesoinAvocat>
        </div>
    )
}
