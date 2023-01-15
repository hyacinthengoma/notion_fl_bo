import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import cabinetStyles from "../styles/cabinet.module.css";
import React, {useEffect} from "react";
import Script from "next/script";
const ogImageUrl = 'https://notion-blog.now.sh/og-image.png'

export default function Header() {
    useEffect(() => {
        const burger = document.querySelectorAll('.navbar-burger');
        const menu = document.querySelectorAll('.navbar-menu');

        if (burger.length && menu.length) {
            for (var i = 0; i < burger.length; i++) {
                burger[i].addEventListener('click', function() {
                    for (var j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }

        //TODO : Revoir les dropdown expertise
        const close = document.querySelectorAll('.navbar-close');
        const backdrop = document.querySelectorAll('.navbar-backdrop');

        if (close.length) {
            for (var i = 0; i < close.length; i++) {
                close[i].addEventListener('click', function() {
                    for (var j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }

        if (backdrop.length) {
            for (var i = 0; i < backdrop.length; i++) {
                backdrop[i].addEventListener('click', function() {
                    for (var j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }
    });
    // @ts-ignore
    return (
        <header className={"relative pb-28"}>
            <Head>
                <script src="https://cdn.tailwindcss.com"></script>
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.0/dist/tailwind.min.css" rel="stylesheet" type="text/css" />
                <Script src="https://use.fontawesome.com/46cabe336c.js"></Script>
                <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'/>
            </Head>
            <div className={""}>
                <nav className="px-4 py-4 flex justify-between w-full items-center bg-red-900 fixed z-[100]">
                    <Link className="text-3xl font-bold leading-none" href="/index">
                        <Image src="/images/logo-babeau.png" alt="logo-babeau" width={"200"} height="500" className={"lg:mx-20"}/>
                    </Link>
                    <div className="lg:hidden">
                        <button className="navbar-burger flex items-center text-white p-3">
                            <svg className="block h-8 w-8 fill-current" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <title>Mobile menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </button>
                    </div>
                    <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
                        <li>
                            <Link className="text-sm text-white font-bold hover:text-gray-300" href="index">ACCUEIL</Link>
                        </li>
                        <li>
                            <Link className="text-sm text-white font-bold hover:text-gray-300 mb-64 drop" href="/Expertise">EXPERTISE</Link>
                        </li>
                        <li>
                            <Link className="text-sm text-white font-bold hover:text-gray-300" href="/Comment-ca-marche/honoraires">HONORAIRES</Link>
                        </li>
                        <li>
                            <Link className="text-sm text-white font-bold hover:text-gray-300" href="/blog/index">ACTUALITÉS SOCIALES</Link>
                        </li>
                        <li>
                            <Link className="text-sm text-white font-bold hover:text-gray-300" href="#">FLORENCE BABEAU</Link>
                        </li>
                        <li>
                            <Link className="text-sm text-white font-bold hover:text-gray-300" href="/contact">CONTACT</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="navbar-menu relative z-[100] hidden">
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav
                    className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-red-900 overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <a className="mr-auto text-3xl font-bold leading-none" href="index.php?page=home">
                            <img src="/images/logo-babeau.png" className="h-16" alt="waw-logo"/>
                        </a>
                        <button className="navbar-close">
                            <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-bold text-white hover:text-gray-300" href="/Expertise">ACCUEIL</Link>
                            </li>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-bold text-white hover:text-gray-300"
                                      href="/Comment-ca-marche/honoraires">EXPERTISE</Link>
                            </li>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-bold text-white hover:text-gray-300"
                                      href="index.php?page=home">HONORAIRES</Link>
                            </li>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-bold text-white hover:text-gray-300"
                                      href="#">FLORENCE BABEAU</Link>
                            </li>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-bold text-white hover:text-gray-300"
                                      href="/contact">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-auto">
                        <div className="pt-6">
                        </div>
                        <p className="my-4 text-xs text-center text-gray-400">
                            <span>Copyright © 2021</span>
                        </p>
                    </div>
                </nav>
            </div>
        </header>
    );
}
