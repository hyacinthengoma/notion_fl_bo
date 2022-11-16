import Header from "../components/header";
import sharedStyles from "../styles/shared.module.css";
import cabinetStyles from '../styles/cabinet.module.css';

export default function Home() {
    return (
        <>
            <Header></Header>


<div className={cabinetStyles.layout + " " + cabinetStyles.titre}>
    <h1 className={"title"}>MAÎTRE FLORENCE BABEAU </h1>
    <p className={cabinetStyles.subtitle}>Avocat en droit du travail et de la sécurité sociale</p>
</div>
<video className={cabinetStyles.video} autoPlay loop muted playsInline src={"/pexels-pavel-danilyuk-8061612.mp4"} style={{ width: "100%", height:"50%" }}/>

            <div className={cabinetStyles.layout}>
                <h1>Accueil</h1>
            </div>
        </>
    );
}