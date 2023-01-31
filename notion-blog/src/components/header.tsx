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
        <header className={"relative pb-20"}>
            <Head>
                <script src="https://cdn.tailwindcss.com"></script>
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.0/dist/tailwind.min.css" rel="stylesheet" type="text/css" />
                <Script src="https://use.fontawesome.com/46cabe336c.js"></Script>
                <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
                <link rel="stylesheet" href="https://unpkg.com/@themesberg/flowbite@1.6.2/dist/flowbite.min.css"/>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.2/flowbite.min.js"></script>
            </Head>
            <div className={""}>
                <nav className="px-4 py-4 flex justify-between w-full items-center bg-red-900 fixed z-[100] shadow-lg">
                    <Link className="text-3xl font-bold leading-none" href="/">
                        <svg id="Groupe_7" data-name="Groupe 7" xmlns="http://www.w3.org/2000/svg" width="232.691" height="57.908" viewBox="0 0 232.691 57.908">
                            <g id="Groupe_49">
                                <g id="Groupe_17">
                                    <path id="Tracé_9" d="M23.486,3.08A3.08,3.08,0,1,1,20.406,0h0A3.089,3.089,0,0,1,23.486,3.08Z" fill="#2a2422"/>
                                    <path id="Tracé_10" d="M11.551,52.133V10.781h6.083V22.332H23.1V10.781h6.083V52.133H11.551Z" fill="#2a2422"/>
                                    <path id="Tracé_11" d="M8.855,10.7a3.311,3.311,0,1,1,3.311-3.311h0A3.336,3.336,0,0,1,8.855,10.7Z" fill="#fff"/>
                                    <path id="Tracé_12" d="M11.551,57.908V46.356H6.083V57.908H0V16.556H17.634V57.908Z" fill="#fff"/>
                                </g>
                                <g id="Groupe_18" transform="translate(39.04 14.631)">
                                    <path id="Tracé_13" d="M10.088,4.235A5.561,5.561,0,0,0,7.932,3.7a4.847,4.847,0,0,0-2.541.693A5.309,5.309,0,0,0,3.543,6.237a5.005,5.005,0,0,0,0,5.082,5.309,5.309,0,0,0,1.848,1.848,4.658,4.658,0,0,0,2.541.693,5.429,5.429,0,0,0,2.156-.462,6.539,6.539,0,0,0,1.925-1.309l1.694,1.848a8.933,8.933,0,0,1-2.772,1.925,7.8,7.8,0,0,1-3.157.693,7.468,7.468,0,0,1-3.927-1A8.189,8.189,0,0,1,1,12.783,7.468,7.468,0,0,1,0,8.856,7.709,7.709,0,0,1,1.078,4.929,7.578,7.578,0,0,1,3.927,2.155a7.935,7.935,0,0,1,4-1,8.866,8.866,0,0,1,3.157.616A7.867,7.867,0,0,1,13.7,3.542L12.008,5.621A11.09,11.09,0,0,0,10.088,4.235Z" transform="translate(0.002)" fill="#fff"/>
                                    <path id="Tracé_14" d="M22.64,16.325V14.939a4.749,4.749,0,0,1-1.54,1.155,6.318,6.318,0,0,1-2.156.385,4.367,4.367,0,0,1-2.079-.462,3.26,3.26,0,0,1-1.386-1.309,3.661,3.661,0,0,1-.462-1.848,3.076,3.076,0,0,1,1.155-2.541A5.057,5.057,0,0,1,19.406,9.4h3.31V9.087a1.838,1.838,0,0,0-.693-1.536A2.865,2.865,0,0,0,20.1,7.012,6.712,6.712,0,0,0,16.71,8.09L15.632,6.242A16.051,16.051,0,0,1,18.1,5.164a9.048,9.048,0,0,1,2.62-.313,5.326,5.326,0,0,1,3.465,1.078,3.634,3.634,0,0,1,1.232,3V16.4H22.64Zm-1-2.541a2.176,2.176,0,0,0,1-1.386v-1H19.716a2.842,2.842,0,0,0-1.617.308,1.164,1.164,0,0,0-.539,1.078,1.383,1.383,0,0,0,.539,1.155,2.218,2.218,0,0,0,1.463.462,4.146,4.146,0,0,0,2.076-.617Z" transform="translate(0.002)" fill="#fff"/>
                                    <path id="Tracé_15" d="M38.118,5.544a4.6,4.6,0,0,1,1.925,2.079,6.491,6.491,0,0,1,.693,3.08,6.185,6.185,0,0,1-.693,3,5.161,5.161,0,0,1-1.848,2,5.778,5.778,0,0,1-2.849.693,4.181,4.181,0,0,1-2.234-.534A3.722,3.722,0,0,1,31.495,14.4v1.848H28.723V.462h2.772V6.776a3.722,3.722,0,0,1,1.617-1.463,5.023,5.023,0,0,1,2.233-.539A6.775,6.775,0,0,1,38.118,5.544Zm-1.155,7.547a3.747,3.747,0,0,0,0-4.928,3.2,3.2,0,0,0-2.31-1,2.826,2.826,0,0,0-2.31,1,3.369,3.369,0,0,0-.924,2.464,3.691,3.691,0,0,0,.924,2.541,2.927,2.927,0,0,0,2.31,1A3.621,3.621,0,0,0,36.963,13.091Z" transform="translate(0.002)" fill="#fff"/>
                                    <path id="Tracé_16" d="M45.587.462a1.627,1.627,0,0,1,.462,1.232,1.617,1.617,0,0,1-3.234,0h0A1.885,1.885,0,0,1,43.277.462,1.675,1.675,0,0,1,45.587.462ZM43.123,4.928H45.9V16.4H43.123Z" transform="translate(0.002)" fill="#fff"/>
                                    <path id="Tracé_17" d="M59.294,6.006A4.373,4.373,0,0,1,60.449,9.24V16.4H57.677V10.01a2.685,2.685,0,0,0-.693-1.925,2.5,2.5,0,0,0-1.848-.693,2.584,2.584,0,0,0-2.156.924,3.429,3.429,0,0,0-.77,2.387v5.621H49.437V4.924h2.772v2.16A4.262,4.262,0,0,1,56.29,4.851,3.547,3.547,0,0,1,59.294,6.006Z" transform="translate(0.002)" fill="#fff"/>
                                    <path id="Tracé_18" d="M72.462,6.392a6.521,6.521,0,0,1,1.386,4.389v.85H65.377a2.936,2.936,0,0,0,1.155,1.925,3.439,3.439,0,0,0,2.156.693,4.148,4.148,0,0,0,1.694-.308,4.36,4.36,0,0,0,1.386-.924l1.463,1.54a5.942,5.942,0,0,1-2.079,1.463,7.642,7.642,0,0,1-2.7.539,6.491,6.491,0,0,1-3.08-.693,4.533,4.533,0,0,1-2.079-2.079,6.393,6.393,0,0,1-.693-3,5.454,5.454,0,0,1,.77-3,5.981,5.981,0,0,1,2.079-2.079,6.439,6.439,0,0,1,3-.77A4.729,4.729,0,0,1,72.462,6.392ZM71.305,9.78a2.553,2.553,0,0,0-.847-2,3.126,3.126,0,0,0-2.079-.77,2.907,2.907,0,0,0-2.079.77,2.809,2.809,0,0,0-1,2Z" transform="translate(0.002)" fill="#fff"/>
                                    <path id="Tracé_19" d="M82.935,15.632a5.569,5.569,0,0,1-2.849.847,3.467,3.467,0,0,1-2.387-.847,3.433,3.433,0,0,1-.924-2.541V7.469H75.157v-2h1.617V2.31h2.772V5.39h3.311v2H79.546v5.159a1.6,1.6,0,0,0,.311,1.161,1.123,1.123,0,0,0,.924.308,3.734,3.734,0,0,0,1.617-.462Z" transform="translate(0.002)" fill="#fff"/>
                                    <path id="Tracé_20" d="M125.954,2.386a3.293,3.293,0,0,1,1.386,2.772,3.439,3.439,0,0,1-.693,2.156,2.936,2.936,0,0,1-1.925,1.155,3.5,3.5,0,0,1,2.31,1.309,4.039,4.039,0,0,1,.847,2.541,3.4,3.4,0,0,1-1.463,3,6.432,6.432,0,0,1-4.081,1.078h-6.854V1.386H122.1A6.349,6.349,0,0,1,125.954,2.386Zm-2.233,4.62a1.691,1.691,0,0,0,.616-1.386,1.646,1.646,0,0,0-.616-1.309,2.86,2.86,0,0,0-1.771-.462h-3.619V7.468h3.619a2.866,2.866,0,0,0,1.771-.461Zm.385,6.391a1.775,1.775,0,0,0,0-2.926,3.582,3.582,0,0,0-2.156-.539h-3.619v3.927h3.619a4.087,4.087,0,0,0,2.156-.46Z" transform="translate(0.002)" fill="#fff"/>
                                    <path id="Tracé_21" d="M137.351,16.325V14.939a4.75,4.75,0,0,1-1.54,1.155,6.318,6.318,0,0,1-2.156.385,4.367,4.367,0,0,1-2.079-.462,3.26,3.26,0,0,1-1.386-1.309,3.661,3.661,0,0,1-.462-1.848,3.076,3.076,0,0,1,1.155-2.541,5.057,5.057,0,0,1,3.234-.924h3.31V9.087a1.837,1.837,0,0,0-.693-1.54,2.865,2.865,0,0,0-1.925-.539,6.712,6.712,0,0,0-3.388,1.078l-1-1.925a16.051,16.051,0,0,1,2.464-1.078,9.035,9.035,0,0,1,2.618-.308,5.326,5.326,0,0,1,3.465,1.078,3.634,3.634,0,0,1,1.232,3v7.47Zm-1-2.541a2.176,2.176,0,0,0,1-1.386v-1h-2.924a2.842,2.842,0,0,0-1.617.308,1.164,1.164,0,0,0-.539,1.078,1.383,1.383,0,0,0,.539,1.155,2.218,2.218,0,0,0,1.463.462,4.4,4.4,0,0,0,2.076-.617Z" transform="translate(0.002)" fill="#fff"/>
                                    <path id="Tracé_22" d="M152.752,5.544a4.6,4.6,0,0,1,1.925,2.079,6.49,6.49,0,0,1,.693,3.08,6.185,6.185,0,0,1-.693,3,5.161,5.161,0,0,1-1.848,2,5.778,5.778,0,0,1-2.849.693,4.181,4.181,0,0,1-2.234-.534,3.722,3.722,0,0,1-1.617-1.463v1.848h-2.772V.462h2.772V6.776a3.722,3.722,0,0,1,1.617-1.463,5.023,5.023,0,0,1,2.233-.539A6.46,6.46,0,0,1,152.752,5.544ZM151.6,13.091a3.747,3.747,0,0,0,0-4.928,3.2,3.2,0,0,0-2.31-1,2.826,2.826,0,0,0-2.31,1,3.369,3.369,0,0,0-.924,2.464,3.691,3.691,0,0,0,.924,2.541,2.927,2.927,0,0,0,2.31,1A3.288,3.288,0,0,0,151.6,13.091Z" transform="translate(0.002)" fill="#fff"/>
                                    <path id="Tracé_23" d="M166.69,6.392a6.521,6.521,0,0,1,1.386,4.389v.85h-8.471a2.936,2.936,0,0,0,1.155,1.925,3.439,3.439,0,0,0,2.156.693,4.148,4.148,0,0,0,1.694-.308A4.36,4.36,0,0,0,166,13.017l1.463,1.54a5.942,5.942,0,0,1-2.079,1.463,7.642,7.642,0,0,1-2.7.539,6.491,6.491,0,0,1-3.08-.693,4.533,4.533,0,0,1-2.079-2.079,6.393,6.393,0,0,1-.693-3,5.454,5.454,0,0,1,.77-3,5.981,5.981,0,0,1,2.079-2.079,6.439,6.439,0,0,1,3-.77A4.729,4.729,0,0,1,166.69,6.392ZM165.533,9.78a2.553,2.553,0,0,0-.847-2,3.126,3.126,0,0,0-2.079-.77,2.907,2.907,0,0,0-2.079.77,2.809,2.809,0,0,0-1,2Z" transform="translate(0.002)" fill="#fff"/>
                                    <path id="Tracé_24" d="M177.24,16.325V14.939a4.75,4.75,0,0,1-1.54,1.155,6.318,6.318,0,0,1-2.156.385,4.367,4.367,0,0,1-2.079-.462,3.26,3.26,0,0,1-1.386-1.309,3.661,3.661,0,0,1-.462-1.848,3.076,3.076,0,0,1,1.155-2.541,5.057,5.057,0,0,1,3.234-.924h3.31V9.087a1.837,1.837,0,0,0-.693-1.54,2.865,2.865,0,0,0-1.925-.539,6.712,6.712,0,0,0-3.388,1.078l-1-1.925a16.051,16.051,0,0,1,2.464-1.078,9.035,9.035,0,0,1,2.618-.308,5.326,5.326,0,0,1,3.465,1.078,3.634,3.634,0,0,1,1.232,3v7.47Zm-1-2.541a2.176,2.176,0,0,0,1-1.386v-1h-2.924a2.842,2.842,0,0,0-1.617.308,1.164,1.164,0,0,0-.539,1.078,1.383,1.383,0,0,0,.539,1.155,2.218,2.218,0,0,0,1.463.462,4.4,4.4,0,0,0,2.076-.617Z" transform="translate(0.002)" fill="#fff"/>
                                    <path id="Tracé_25" d="M193.642,4.928V16.4H190.87V14.246a4.146,4.146,0,0,1-4,2.233,3.833,3.833,0,0,1-3-1.155,4.341,4.341,0,0,1-1.078-3.234V4.928h2.772v6.391a2.666,2.666,0,0,0,.616,1.848,2.321,2.321,0,0,0,1.771.693,2.532,2.532,0,0,0,2.079-.924,3.357,3.357,0,0,0,.77-2.31V5.005h2.849Z" transform="translate(0.002)" fill="#fff"/>
                                </g>
                                <path id="Tracé_36" d="M80.163,66.849h1.248l-5.12-11.2H75.123L70,66.849h1.232l1.344-2.992h6.24ZM73.011,62.9,75.7,56.881,78.387,62.9Zm15.552-4.464L85.379,65.6l-3.152-7.168H81.043l3.728,8.416h1.168l3.744-8.416Zm5.92,8.5a4.141,4.141,0,0,0,4.273-4c0-.1,0-.19,0-.285a4.127,4.127,0,0,0-3.973-4.276c-.1,0-.2,0-.3,0A4.139,4.139,0,0,0,90.2,62.356c0,.1,0,.19,0,.285a4.153,4.153,0,0,0,4.013,4.288c.091,0,.183,0,.275,0Zm0-1.008a3.082,3.082,0,0,1-3.142-3.019q0-.131.006-.261a3.081,3.081,0,0,1,2.875-3.274q.13-.009.261-.006a3.069,3.069,0,0,1,3.127,3.01c0,.09,0,.18-.007.27a3.069,3.069,0,0,1-2.854,3.27c-.088.006-.177.008-.266.006v0Zm10.08,1a3.709,3.709,0,0,0,3.3-1.664l-.852-.576a2.848,2.848,0,0,1-2.448,1.232,3.084,3.084,0,0,1-3.189-2.974,2.842,2.842,0,0,1,0-.306,3.092,3.092,0,0,1,2.9-3.276c.1-.006.192-.007.287,0a2.862,2.862,0,0,1,2.448,1.248l.848-.576a3.675,3.675,0,0,0-3.3-1.664,4.143,4.143,0,0,0-4.334,3.943c0,.11-.006.219,0,.329a4.155,4.155,0,0,0,4.016,4.29C104.347,66.935,104.455,66.934,104.563,66.929Zm8.464-8.56a5.341,5.341,0,0,0-3.424,1.136l.512.848a4.283,4.283,0,0,1,2.8-.992c1.568,0,2.384.784,2.384,2.224V62.1h-2.672c-2.416,0-3.248,1.088-3.248,2.384,0,1.456,1.168,2.448,3.072,2.448a3.16,3.16,0,0,0,2.9-1.392v1.312h1.088V61.633C116.435,59.457,115.2,58.369,113.027,58.369Zm-.4,7.664c-1.344,0-2.128-.608-2.128-1.584,0-.864.528-1.5,2.16-1.5h2.64v1.376A2.693,2.693,0,0,1,112.627,66.033Zm10.928-.512a1.878,1.878,0,0,1-1.248.428,1.348,1.348,0,0,1-1.456-1.532V59.393h2.56v-.96h-2.56v-1.84h-1.136v1.84h-1.5v.96h1.5v5.088a2.23,2.23,0,0,0,1.984,2.45,2.2,2.2,0,0,0,.48,0,2.709,2.709,0,0,0,1.776-.592Z" transform="translate(-31 -18)" fill="#fff"/>
                            </g>
                            <path id="Tracé_37" d="M163.8,34.654H173.94l-.021,2.457h-7.308V41.08h6.657v2.457h-6.657v5.817H163.8v-14.7Zm12.159,11.865a1.39,1.39,0,0,1,1.04.42,1.469,1.469,0,0,1,.409,1.071,1.535,1.535,0,0,1-.414,1.1,1.371,1.371,0,0,1-1.04.431,1.333,1.333,0,0,1-1.019-.441,1.545,1.545,0,0,1-.41-1.092,1.47,1.47,0,0,1,.41-1.071A1.367,1.367,0,0,1,175.956,46.519Z" transform="translate(-31 -18)" fill="#fff"/>
                        </svg>

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
                    <ul className="hidden lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-12">
                        <li>
                            <Link className="text-sm text-white font-semibold hover:text-gray-300" href="/">ACCUEIL</Link>
                        </li>
                        <li className={"group"}>
                            <Link className="text-sm text-white font-semibold hover:text-gray-300 mb-64 drop pointer-events-none" href={""}>EXPERTISES</Link>
                            <ul className="absolute hidden bg-red-900 text-gray-700 pt-10 pb-1 group-hover:block">
                                <li className="">
                                    <Link
                                        className="hover:bg-red-800 text-sm py-2 px-4 text-white block hover:text-gray-300 font-semibold whitespace-no-wrap"
                                        href="/Expertise/Droit-travail"
                                    >Droit du travail</Link
                                    >
                                </li>
                                <li className="">
                                    <Link
                                        className="hover:bg-red-800 text-sm py-2 px-4 text-white block hover:text-gray-300 font-semibold whitespace-no-wrap"
                                        href="/Expertise/Droit-securite-sociale"
                                    >Droit de la sécurité sociale</Link
                                    >
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link className="text-sm text-white font-semibold hover:text-gray-300" href="/honoraires">HONORAIRES</Link>
                        </li>
                        <li>
                            <Link className="text-sm text-white font-semibold hover:text-gray-300" href="/blog">ACTUALITÉS SOCIALES</Link>
                        </li>
                        <li>
                            <Link className="text-sm text-white font-semibold hover:text-gray-300" href="/florence-babeau">FLORENCE BABEAU</Link>
                        </li>
                        <li>
                            <Link className="text-sm text-white font-semibold hover:text-gray-300" href="/contact">CONTACT</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="navbar-menu relative z-[100] hidden">
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav
                    className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-red-900 overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <Link className="mr-auto text-3xl font-bold leading-none" href="/">
                            <img src="/images/logo-babeau.png" className="h-16" alt="waw-logo"/>
                        </Link>
                        <button className="navbar-close">
                            <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-bold text-white hover:text-gray-300" href="/">
                                    ACCUEIL
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-bold text-white hover:text-gray-300" href="/Expertise/Droit-travail">
                                    Expertise - Droit du travail
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-bold text-white hover:text-gray-300" href="/Expertise/Droit-securite-sociale">
                                    Expertise - Droit de la sécurité sociale
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-bold text-white hover:text-gray-300"
                                      href="/honoraires">HONORAIRES
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-bold text-white hover:text-gray-300" href="/blog">
                                    ACTUALITÉS SOCIALES
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-bold text-white hover:text-gray-300" href="/florence-babeau">
                                    FLORENCE BABEAU
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link className="block p-4 text-sm font-bold text-white hover:text-gray-300" href="/contact">
                                    CONTACT
                                </Link>
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
