import Image from "next/image";
import Link from "next/link";

export default function QuartreCentQuatre(){
    return (
        <div className={"h-screen bg-white"}>
            <h1 className={"text-8xl text-center font-bold py-16"}>404</h1>
            <p className={"lg:text-8xl text-2xl text-center font-bold py-16"}>La page à laquelle vous tentez d'accéder n'existe pas.</p>
            <Link href={"/"}>Retourner a l'accueil</Link>
        </div>
    );
}
