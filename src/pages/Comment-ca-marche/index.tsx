import Image from "next/image";

export default function CommentCaMarcheHome() {
    return (
        <div className={"bg-white"}>
            <div>
                <Image className="w-full" src="/images/comment-ca-marche/2-guys-1-girl.png" width={10000} height={10000} alt="homme-serieux-juridique-couple-chauve"></Image>
            </div>
            <div className={"flex flex-col"}>
                <div className={"mx-auto"}>
                    <div className="card w-96  shadow-xl rounded-none mt-5">
                        <figure>
                            <div className={"bg-gray-600 w-96 py-10"}>
                                <h1 className={"font-bold text-white underline text-center"}>CONSULTATION TELEPHONIQUE</h1>
                                <p className={"text-center text-white"}>Durée 30 min</p>
                                <p className={"text-center text-white"}>ICONE</p>
                                <p className={"text-center text-white"}>60€</p>
                                <div align={"center"}>
                                    <button className={"btn bg-red-500"}>Prendre rendez-vous</button>
                                </div>
                            </div>
                        </figure>
                        <div className="card-body">
                            <p>Maître Babeau vous rappelle pour répondre à vos questions juridiques. Cette consultation téléphonique de 30 min vous permet d’obtenir des éléments de réponse concrets et rapides à la question que vous vous posez.</p>
                        </div>
                    </div>
                </div>
                <div className={"mx-auto"}>
                    <div className="card w-96 shadow-xl rounded-none mt-5">
                        <figure>
                            <div className={"bg-gray-600 w-96 py-10"}>
                                <h1 className={"font-bold text-white underline text-center"}>CONSULTATION ÉCRITE</h1>
                                <p className={"text-center text-white"}>Etude de votre dossier + possibilité d’ajout d’une pièce jointe</p>
                                <p className={"text-center text-white"}>ICONE</p>
                                <p className={"text-center text-white"}>150€</p>
                                <div align={"center"}>
                                    <button className={"btn bg-red-500"}>Prendre rendez-vous</button>
                                </div>
                            </div>
                        </figure>
                        <div className="card-body">
                            <p>Maître Babeau vous rappelle pour répondre à vos questions juridiques. Cette consultation téléphonique de 30 min vous permet d’obtenir des éléments de réponse concrets et rapides à la question que vous vous posez.</p>
                        </div>
                    </div>
                </div>
                <div className={"mx-auto"}>
                    <div className="card w-96 shadow-xl rounded-none mt-5">
                        <figure>
                            <div className={"bg-gray-600 w-96 py-10"}>
                                <h1 className={"font-bold text-white underline text-center"}>RENDEZ-VOUS AU CABINET</h1>
                                <p className={"text-center text-white"}>Durée : 60 min</p>
                                <p className={"text-center text-white"}>ICONE</p>
                                <p className={"text-center text-white"}>50€</p>
                                <div align={"center"}>
                                    <button className={"btn bg-red-500"}>Prendre rendez-vous</button>
                                </div>
                            </div>
                        </figure>
                        <div className="card-body">
                            <p>Maître Babeau vous rappelle pour répondre à vos questions juridiques. Cette consultation téléphonique de 30 min vous permet d’obtenir des éléments de réponse concrets et rapides à la question que vous vous posez.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"bg-gray-600"}>
                <h2 className={"text-white font-bold text-center py-16"}>Comment ça marche ?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 bg-white">
                <div className="w-full md:w-1/2 flex md:hidden flex-col">
                    <h2 className="text-center font-bold text-black">1/ Prise de RDV</h2>
                    <p className="text-black text-center"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.</p>
                </div>
                <div className="w-full md:w-1/2">
                    <Image src="/images/comment-ca-marche/2-girls-in-office.png" alt="femme-serieuse-devant-bureau-indienne" width={1000} height={1000}></Image>
                </div>
                <div className="w-full md:w-1/2 md:flex hidden flex-col">
                    <h2 className="text-center font-bold text-black">1/ Prise de RDV</h2>
                    <p className="text-black text-center"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.</p>
                </div>

                <div className="w-full md:w-1/2">
                    <h2 className="text-center font-bold text-black">2/ Préparation des documents</h2>
                    <p className="text-black text-center"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.</p>
                </div>
                <div className="w-full md:w-1/2">
                    <Image src="/images/comment-ca-marche/papiers-administratifs.png" alt="femme-serieuse-devant-bureau-indienne" width={1000} height={1000}></Image>
                </div>

                <div className="w-full md:w-1/2 md:hidden flex flex-col">
                    <h2 className="text-center font-bold text-black">3/ Analyse du dossier</h2>
                    <p className="text-black text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <Image src="/images/comment-ca-marche/fille-qui-ecrit.png" alt="femme-serieuse-devant-bureau-indienne" width={1000} height={1000}></Image>
                </div>
                <div className="w-full md:w-1/2 hidden md:flex flex-col">
                    <h2 className="text-center font-bold text-black">3/ Analyse du dossier</h2>
                    <p className="text-black text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.
                    </p>
                </div>

                <div className="w-full md:w-1/2">
                    <h2 className="text-center font-bold text-black">4/ Démarrage du processus, si viabilité du dossier </h2>
                    <p className="text-black text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.
                    </p>

                </div>
                <div className="w-full md:w-1/2 flex flex-col">
                    <Image src="/images/comment-ca-marche/bien-jouer-mec.png" alt="femme-serieuse-devant-bureau-indienne" width={1000} height={1000}></Image>
                </div>
            </div>
        </div>
    );
}
