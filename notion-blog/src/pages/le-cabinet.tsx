import Header from "../components/header";
import sharedStyles from "../styles/shared.module.css";

export default function Home() {
    return (
        <>
            <Header></Header>
            <video autoPlay loop muted playsInline className='absolute w-full h-full object-cover'>
                <source src="./notion-blog/public/pexels-pavel-danilyuk-8061612.mp4" type='video/mp4; codecs=vp9'/>
            </video>
            <div className={sharedStyles.layout}>
                <h1>Accueil</h1>
            </div>
        </>
    );
}