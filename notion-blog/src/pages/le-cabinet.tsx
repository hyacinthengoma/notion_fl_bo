import Header from "../components/header";
import sharedStyles from "../styles/shared.module.css";
import cabinetStyles from '../styles/cabinet.module.css';
import Image from "next/image";
import Link from "next/link";

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
                <h2>Qui suis-je</h2>
                <div className={cabinetStyles.flexpresentation}>
                    <div>
                        <h3>Florence Babeau</h3>
                        <p>Très investie dans les dossiers que je gère en Droit du Travail et en Droit de la Famille, j’aime travailler dans une relation de confiance et de proximité qui me paraît indispensable à l’établissement d’une collaboration pérenne et fructueuse.</p>
                    </div>
                    <div>
                        <h3>Mon parcours</h3>
                        <p>Titulaire d’un DEA de Droit Social et Droit du Travail, c’est tout naturellement que je me suis spécialisée dans l’accompagnement, la formation et la défense des intérêts des employeurs et dirigeants d’entreprise qui ont besoin de se consacrer pleinement et sereinement au développement de leur entreprise. C’est cette même tranquillité d’esprit que je souhaite apporter aux personnes qui se séparent, divorcent, réorganisent leur vie familiale en les aidant à trouver les meilleures solutions techniques et humaines à leurs problématiques.</p>
                    </div>
                    <div>
                        <Image src={"/images/visage-babeau.png"} alt={"visage-babeau"} width={"300"} height={"300"}></Image>
                    </div>
                </div>
                <div align="center">
                    <Link href={""} className={cabinetStyles.button} align="center">Une vidéo et de nombreuses réponses !</Link>
                </div>
            </div>
        </>
    );
}