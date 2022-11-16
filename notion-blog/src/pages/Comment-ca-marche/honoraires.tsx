import Header from "../../components/header";
import sharedStyles from "../../styles/shared.module.css";

export default function Honoraires() {
    return (
        <>
            <Header></Header>
            <div className={sharedStyles.layout}>
                <h1>Honoraires</h1>
            </div>
        </>
    );
}