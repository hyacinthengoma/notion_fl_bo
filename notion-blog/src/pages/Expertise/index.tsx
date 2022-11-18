import Header from '../../components/header';
import Image from "next/image";
import cabinetStyles from "../../styles/cabinet.module.css";

export default function Expertise() {
    // @ts-ignore
    return (
        <>
            <Header></Header>
            <div className="bg-black w-full overflow-hidden relative">
                <div className={cabinetStyles.layout + " " + cabinetStyles}>
                    <h1 className={"title"}>EXPERTISE</h1>
                </div>
                <div className="absolute m-auto">
                    TEST
                </div>
                <Image className="" title="step on me" src="/images/Expertise/statue-justice.png" alt="statue-justice" width={10000} height={10000}></Image>
            </div>

        </>
    );
}