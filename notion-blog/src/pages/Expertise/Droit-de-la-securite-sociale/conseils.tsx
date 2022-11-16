import Header from "../../../components/header";
import sharedStyles from "../../../styles/shared.module.css";

export default function ConseilsDroitSecuSociale() {
    return (
        <>
            <Header></Header>
            <div className={sharedStyles.layout}>
                <h1>Droit de la sécurité sociales : Conseils</h1>
            </div>
        </>
    );
}