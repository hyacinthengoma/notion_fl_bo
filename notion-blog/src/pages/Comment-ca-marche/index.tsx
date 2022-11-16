import Header from '../../components/header';
import Image from "next/image";

export default function CommentCaMarcheHome() {
    return (
        <>
            <Header></Header>
            <div className="bg-gray-500	">
                <div>
                    <Image className="w-full" src="/images/comment-ca-marche/2-guys-1-girl.png" width={10000} height={10000} alt="homme-serieux-juridique-couple-chauve"></Image>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 bg-white">
                <div className="w-full md:w-1/2">
                    <Image src="/images/comment-ca-marche/2-girls-in-office.png" alt="femme-serieuse-devant-bureau-indienne" width={1000} height={1000}></Image>
                </div>
                <div className="w-full md:w-1/2 flex flex-col">
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

                <div className="w-full md:w-1/2">
                    <Image src="/images/comment-ca-marche/fille-qui-ecrit.png" alt="femme-serieuse-devant-bureau-indienne" width={1000} height={1000}></Image>
                </div>
                <div className="w-full md:w-1/2 flex flex-col">
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
        </>
    );
}