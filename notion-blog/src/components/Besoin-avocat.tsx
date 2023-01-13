import Image from "next/image";
import Link from "next/link";

export default function BesoinAvocat() {
    return (
        <div className={"bg-gray-800 flex justify-center w-full py-44"}>
            <div className={"w-5/6"}>
                <h2 className={"text-white text-4xl font-bold mb-16"}>BESOIN D'UN AVOCAT ?</h2>
                <div className={"flex justify-center mt-6"}>
                    <Link href={""} className={"bg-red-900 text-white py-3 px-8 shadow-lg rounded-md hover:bg-red-800 hover:text-white uppercase font-bold"}>Contactez-nous</Link>
                </div>
            </div>
        </div>
    );
}
