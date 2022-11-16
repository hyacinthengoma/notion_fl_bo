import Header from "../components/header";
import sharedStyles from "../styles/shared.module.css";

export default function Documentation() {
    return (
        <>
            <Header></Header>
            <div className={sharedStyles.layout}>
                <h1>Documentation</h1>
            </div>
        </>
    );
}