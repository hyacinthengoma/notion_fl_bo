import Header from "../components/header";
import sharedStyles from "../styles/shared.module.css";

export default function Home() {
    return (
        <>
            <Header></Header>

            <div>
            <video autoPlay loop muted playsInline className='absolute w-full h-full object-cover' src={"/pexels-pavel-danilyuk-8061612.mp4"} style={{ width: "100%", height:"50%" }}/>
            <h1>MAÎTRE FLORENCE BABEAU </h1>

            </div>

            <div className={sharedStyles.layout}>
                <h1>Accueil</h1>
            </div>
        </>
    );
}