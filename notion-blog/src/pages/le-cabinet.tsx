import Header from "../components/header";
import sharedStyles from "../styles/shared.module.css";

export default function Home() {
    return (
        <>
            <Header></Header>
            <div className={sharedStyles.layout}>
                <h1>Accueil</h1>
            </div>
        </>
    );
}