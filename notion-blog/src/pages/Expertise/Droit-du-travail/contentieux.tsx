import Header from "../../../components/header";
import sharedStyles from "../../../styles/shared.module.css";

export default function ContentieuxDroitTravail() {
    return (
        <>
            <Header></Header>
            <div className={sharedStyles.layout}>
                <h1>Droit du travail : Contentieux</h1>
            </div>
        </>
    );
}