import Header from "../components/header";
import sharedStyles from "../styles/shared.module.css";
import Head from "next/head";

export default function Actualites() {
    return (
        <>
            <Header></Header>
            <div className={sharedStyles.layout}>
                <h1>Actualités</h1>
            </div>
        </>
    );
}
