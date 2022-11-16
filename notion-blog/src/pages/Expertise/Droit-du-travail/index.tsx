import Image from "next/image";
import Header from "../../../components/header";

export default function HomeDroitTravail() {
    return (
        <>
            <Header></Header>
            <div className="bg-gray-500	">
                <div>
                    <Image className="w-full" src="/images/Expertise/Droit-du-travail/homme_serieux_juridique.png" width={10000} height={10000} alt="homme-serieux-juridique-couple-chauve"></Image>
                </div>
                <div>
                    <div className="bg-zinc-700">
                        <p className="">Il a fait prout</p>
                    </div>
                </div>
            </div>
        </>
    );
}