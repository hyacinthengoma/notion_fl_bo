import Head from "next/head";
import Link from "next/link";
import React, {useEffect} from "react";
import Script from "next/script";
import Image from "next/image";
export default function Header() {
    // @ts-ignore
    return (
        <header className={"relative"}>
            <Head>
                <script src="https://cdn.tailwindcss.com"></script>
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.0/dist/tailwind.min.css" rel="stylesheet" type="text/css" />
                <Script src="https://use.fontawesome.com/46cabe336c.js"></Script>
                <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
            </Head>
            <div className={""}>
                <nav className="px-8 py-4 gap-4 backdrop-blur-md bg-[#1B110F]/10 flex justify-between w-full items-center fixed z-[1000] shadow-lg transition-all duration-500" id={"navbar"}>
                    <Link className="text-3xl font-medium leading-none" href="/">
                        <Image loading={"eager"} src={'/images/logo-babeau2.svg'} width={'210'} height={'50'} alt={'logo-florence-babeau'}></Image>
                    </Link>
                    <div className="lg:hidden">
                        <button className="flex items-center text-white p-3" id={"navbar-burger"}>
                            <svg className="block h-8 w-8 fill-current" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <title>Mobile menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </button>
                    </div>
                    <ul className="hidden lg:flex lg:flex lg:items-center lg:w-auto lg:space-x-12">
                        <li>
                            <Link className="text-sm text-white font-medium hover:text-gray-300" href="/">ACCUEIL</Link>
                        </li>
                        <li className={"group"}>
                            <Link
                                className="text-sm text-white font-medium hover:text-gray-300 mb-64 drop pointer-events-none"
                                href={""}>EXPERTISES</Link>
                            <ul className="absolute hidden backdrop-filter-none text-gray-700 pt-10 pb-1 group-hover:block" id={"navhover"}>
                                <li className="">
                                    <Link
                                        className="hover:bg-red-800 text-sm py-2 px-4 text-white block hover:text-gray-300 font-medium whitespace-no-wrap bg-[#1b110f0d] -mt-[0.9rem]"
                                        href="/Expertise/Droit-travail"
                                    >Droit du travail</Link
                                    >
                                </li>
                                <li className="">
                                    <Link
                                        className="hover:bg-red-800 text-sm py-2 px-4 text-white block hover:text-gray-300 font-medium whitespace-no-wrap bg-[#1b110f0d]"
                                        href="/Expertise/Droit-securite-sociale"
                                    >Droit de la sécurité sociale</Link
                                    >
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link className="text-sm text-white font-medium hover:text-gray-300" href="/le-cabinet">LE CABINET</Link>
                        </li>
                        <li>
                            <Link className="text-sm text-white font-medium hover:text-gray-300" href="/blog">ACTUALITÉS SOCIALES</Link>
                        </li>
                        <li>
                            <Link className="text-sm text-white font-medium hover:text-gray-300" href="/honoraires">HONORAIRES</Link>
                        </li>
                        <li>
                            <Link className="text-sm text-white font-medium hover:text-gray-300" href="/contact">CONTACT</Link>
                        </li>
                        <li >
                            <Link href={"https://www.linkedin.com/in/florence-babeau-1a7b07166/"} >
                                <Image src={"/images/linkedin_5.png"} alt={"linkedin"} height={"30"} width={"30"}></Image>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="relative z-[1000] hidden" id={"navbar-menu"}>
                <div className="fixed inset-0 bg-gray-800 opacity-25" id={"navbar-backdrop"}></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-red-800 overflow-y-auto" id={"sidemenu"}>
                    <div className="flex items-center mb-8">
                        <Link className="mr-auto text-3xl font-medium leading-none" href="/">
                            <img src="/images/logo-babeau.png" className="h-16" alt="waw-logo"/>
                        </Link>
                        <button id="navbar-close">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-medium text-white hover:text-gray-300" href="/">
                                    ACCUEIL
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-medium text-white hover:text-gray-300 uppercase" href="/Expertise/Droit-travail">
                                    Droit du travail
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-medium text-white hover:text-gray-300 uppercase" href="/Expertise/Droit-securite-sociale">
                                    Droit de la sécurité sociale
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-medium text-white hover:text-gray-300" href="/le-cabinet">
                                    LE CABINET
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-medium text-white hover:text-gray-300" href="/blog">
                                    ACTUALITÉS SOCIALES
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-medium text-white hover:text-gray-300"
                                      href="/honoraires">HONORAIRES
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-medium text-white hover:text-gray-300" href="/contact">
                                    CONTACT
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-auto">
                        <div className="pt-6">
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
