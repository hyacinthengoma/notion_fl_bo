import Image from "next/image";
import Header from "../../../components/header";
import Recommandation from "../../../components/recommandation";
import Link from "next/link";
import BesoinAvocat from "../../../components/Besoin-avocat";

export default function HomeDroitTravail() {
    return (
        <>
            <Header></Header>
            <div className={"w-full flex bg-white"}>
                <div className={"w-1/2"}>
                    <img className={"h-full w-full object-cover"} src={"/images/Expertise/banniere.png"}
                         alt={"image-banniere"}></img>
                </div>
                <div className={"w-2/3 justify-center"}>
                    <div className={"bg-red p-4"}>

                    </div>
                </div>
            </div>
            <Recommandation></Recommandation>
            <BesoinAvocat></BesoinAvocat>
        </>
    );
}
