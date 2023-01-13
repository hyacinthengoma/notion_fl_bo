import Header from "../components/header";
import sharedStyles from "../styles/shared.module.css";
import cabinetStyles from '../styles/cabinet.module.css';
import Image from "next/image";
import Link from "next/link";
import bgBlock4 from '../../public/images/home-bloc-4.png';
import bgBloc3 from '../../public/images/home-bloc-3.png';

export default function Home() {
    return (
        <>
            <Header></Header>
            <div className={cabinetStyles.layoutVideo + " " + cabinetStyles.titre}>
                <h1 className={"title"}>MAÎTRE FLORENCE BABEAU </h1>
                <p className={cabinetStyles.subtitle}>Avocat en droit du travail et de la sécurité sociale</p>
            </div>
            <video className={cabinetStyles.video} autoPlay loop muted playsInline src={"/pexels-pavel-danilyuk-8061612.mp4"} style={{ width: "100%", height:"50%" }}/>
            <div className={cabinetStyles.layout} align={"center"}>
                <div className="stats stats-vertical bg-white -mt-40 border-none rounded-none shadow-xl py-12 md:stats-horizontal">
                    <div className="stat">
                        <div className="stat-value text-black">24</div>
                        <div className="stat-desc text-black">Années d'experience</div>
                    </div>
                    <div className="stat">
                        <div className="stat-value text-black">98%</div>
                        <div className="stat-desc text-black">de clients satisfaits</div>
                    </div>
                    <div className="stat">
                        <div className="stat-value text-black">2</div>
                        <div className="stat-desc text-black">Grands domaines de compétences</div>
                    </div>
                    <div className="stat">
                        <div className="stat-value text-black">3000+</div>
                        <div className="stat-desc text-black">Dossiers traités</div>
                    </div>
                </div>
                <h2 className={"font-bold text-black text-left mt-5"}>Qui suis-je</h2>
                <div className={"flex flex-col lg:flex-row mt-5 space-y-5 lg:space-y-0 lg:space-x-5"}>
                    <div className={"lg:w-1/3"}>
                        <p className={"text-left"}>Très investie dans les dossiers que je gère en Droit du Travail et en Droit de la Famille, j’aime travailler dans une relation de confiance et de proximité qui me paraît indispensable à l’établissement d’une collaboration pérenne et fructueuse.</p>
                    </div>
                    <div className={"lg:w-1/3"}>
                        <iframe className={"w-full h-full"} src="https://www.youtube.com/embed/tgbNymZ7vqY">
                        </iframe>
                    </div>
                    <div className={"lg:w-1/3"}>
                        <p className={"text-left italic"}>&#171; Titulaire d’un DEA de Droit Social et Droit du Travail, c’est tout naturellement que je me suis spécialisée dans l’accompagnement, la formation et la défense des intérêts des employeurs et dirigeants d’entreprise qui ont besoin de se consacrer pleinement et sereinement au développement de leur entreprise. C’est cette même tranquillité d’esprit que je souhaite apporter aux personnes qui se séparent, divorcent, réorganisent leur vie familiale en les aidant à trouver les meilleures solutions techniques et humaines à leurs problématiques. &#187;</p>
                    </div>
                </div>
                <div className={"text-center mt-10"}>
                    <Link href={""} className={cabinetStyles.button}>Une vidéo et de nombreuses réponses !</Link>
                </div>
            </div>
        </>
    );
}
