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
                    <p className="md:space-x-1 space-y-1 md:space-y-0 mb-4">
                        <a className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                           data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
                           aria-controls="collapseExample">
                            Link with href
                        </a>
                        <button
                            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"
                            aria-expanded="false" aria-controls="collapseExample">
                            Button with data-bs-target
                        </button>
                    </p>
                    <div className="collapse" id="collapseExample">
                        <div className="block p-6 rounded-lg shadow-lg bg-white">
                            Some placeholder content for the collapse component. This panel is hidden by default but
                            revealed when the user activates the relevant trigger.
                        </div>
                    </div>
                </div>
            </div>
            <Recommandation></Recommandation>
            <BesoinAvocat></BesoinAvocat>
        </>
    );
}
