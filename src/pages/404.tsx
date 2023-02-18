import Image from "next/image";
import Link from "next/link";

export default function QuartreCentQuatre(){
    return (
        <div className={"h-screen bg-white py-16 flex flex-col items-center"}>
            <h1 className={"text-8xl text-center font-bold"}>404</h1>
            <p className={"lg:text-5xl text-2xl text-center font-bold py-16"}>La page à laquelle vous tentez d'accéder <span className={"underline"}>n'existe pas</span>.</p>
            <Link href={"/"} className={"bg-red-900 text-white py-3 px-8 shadow-lg rounded-md hover:bg-red-800 hover:text-white uppercase font-bold hover:scale-105 duration-500"}>Retourner a l'accueil</Link>
        </div>
    );
}
