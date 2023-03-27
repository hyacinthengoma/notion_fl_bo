import React, {useEffect, useState} from "react";
import Cookies from "js-cookie";
import Link from "next/link";

interface VideoPlayer {
    styling:string,
    source:string,
    key:any,
    classe:string,
}

const VideoPlayer: React.FC<VideoPlayer> = ({styling, source, key, classe}) => {
    const [cookieAccepted, setCookieAccepted] = useState(false);

    useEffect(() => {

        const cookies = document.cookie.split(";");

        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i];
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }

        const cookieValue = Cookies.get("cookieAccepted");
        if (cookieValue) {
            setCookieAccepted(true);
        }


    }, []);

    const handleAccept = () => {
        Cookies.set("cookieAccepted", true);
        setCookieAccepted(true);
    };

    return (
        <div className={"h-full"}>
            {!cookieAccepted && (
                <div className="cookie-consent bg-gray-800 p-4 rounded text-white flex flex-col" style={styling}>
                    <p className={"text-white"}>
                        La vidéo que vous essayez de charger contient des cookies tiers qui sont utilisés pour personnaliser le contenu et les publicités, ainsi que pour analyser le trafic.<br/>
                        Avant de pouvoir regarder la vidéo, nous avons besoin de votre consentement.<br/>
                        Veuillez cliquer sur 'Accepter' pour autoriser l'utilisation de ces cookies tiers.
                    </p>
                    <p className={"text-white"}>
                        En cliquant sur "Accepter", vous accepter la <Link href="politique-de-confidentialite">politique de confidentialité</Link>
                    </p>
                    <button className={"bg-blue-600 py-2 px-4 rounded hover:scale-105 duration-500 transition-all hover:bg-blue-500 mx-auto"} onClick={handleAccept}>Accepter</button>
                </div>
            )}
            {cookieAccepted && (
                <iframe style={styling} src={source} key={key} className={classe}/>
            )}
        </div>
    );
}

export default VideoPlayer;
