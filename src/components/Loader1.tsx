import Image from "next/image";

export default function Loader() {
    return (
        <>
            <div className={"fixed left-0 bg-white flex right-0 w-full h-full justify-center items-center -translate-y-1/2 -translate-x-1/2 z-[1700]"}>

            </div>
            <div className={"globalLoader fixed left-0 bg-white flex right-0 w-full h-full justify-center items-center -translate-y-1/2 -translate-x-1/2 z-[1700]"}>
                <Image loading={"eager"} src={"/images/logo-babeau2.svg"} alt={""} height={"500"} width={"500"} className={"bg-red-800"}></Image>
            </div>
        </>
    );
}
