import ExtLink from './ext-link'
import cabinetStyles from "../styles/cabinet.module.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
        {/**<div className={"absolute flex justify-center w-full"}>
            <div className={"w-4/6 justify-between transform -translate-y-16"}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.921862125881!2d-0.5822976486370732!3d44.863885481215846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55286b9ee92b21%3A0x1694739e2dc975af!2sCabinet%20Avocat%20Florence%20Babeau!5e0!3m2!1sfr!2sfr!4v1673651475903!5m2!1sfr!2sfr"
                    loading="lazy"
                    className={"w-full h-60 rounded-md shadow-lg"}
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>*/}
        <footer aria-label="Site Footer" className={"bg-white"}>
            <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="sm:col-span-2 text-start">
                        <a
                            href="/"
                            aria-label="Go home"
                            title="Company"
                            className="inline-flex items-center"
                        >
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

                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">

            </span>
                        </a>
                        <div className="mt-6 lg:max-w-sm">
                            <p className="text-sm text-black">
                                2 Rue Claude Boucher<br/>
                                33300 Bordeaux<br/>
                                <a
                                    href="tel:05 57 10 28 24">05 57 10 28 24</a><br/>

                            </p>
                            <p className="mt-4 text-sm text-black">
                                Lun – Ven 09:00-17:00
                            </p>
                        </div>
                    </div>
                    <div className="space-y-2 text-sm text-start">
                        <p className="text-base font-bold tracking-wide text-black">
                            <u>Pages</u>
                        </p>
                        <div className="flex mt-5">
                            <Link href={"/"} className="mr-1 text-black">Accueil</Link>
                        </div>
                        <div className="flex mt-5">
                            <Link href={"/Expertise/Droit-travail"} className="mr-1 text-black">Expertises - Droit du travail</Link>
                        </div>
                        <div className="flex mt-5">
                            <Link href={"/Expertise/Droit-securite-sociale"} className="mr-1 text-black">Expertises - Droit de la sécurité sociale</Link>
                        </div>
                        <div className="flex mt-5">
                            <Link href={"/honoraires"} className="mr-1 text-black">Honoraires</Link>
                        </div>
                        <div className="flex mt-5">
                            <Link href={"/blog"} className="mr-1 text-black">Actualités sociales</Link>
                        </div>
                        <div className="flex mt-5">
                            <Link href={"/florence-babeau"} className="mr-1 text-black">Florence Babeau</Link>
                        </div>
                        <div className="flex mt-5">
                            <Link href={"/contact"} className="mr-1 text-black">Contact</Link>
                        </div>

                    </div>
                    <div className={"text-start"}>
          <span className="text-base font-bold tracking-wide text-black">
              <u>Réseau social</u>
          </span>
                        <p className="mt-4 text-sm text-black">
                            Vous pouvez également me suivre sur LinkedIn
                        </p>
                        <div className="flex items-center mt-1 space-x-3 mt-5">
                            {/*
                            <a
                                href="/"
                                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                </svg>
                            </a>
                            <a
                                href="/"
                                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                                    <circle cx="15" cy="15" r="4" />
                                    <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                                </svg>
                            </a>
                            <a
                                href="/"
                                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                </svg>
                            </a>
                            */}
                            <Link
                                href="https://www.linkedin.com/in/florence-babeau-1a7b07166/"
                                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                <img className={"brightness-50 object-cover w-[1.7rem]"} src={"/images/linkedin.png"} alt={"linkedIn"}></img>

                            </Link>
                        </div>

                            {/*  <div><iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.921862125881!2d-0.5822976486370732!3d44.863885481215846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55286b9ee92b21%3A0x1694739e2dc975af!2sCabinet%20Avocat%20Florence%20Babeau!5e0!3m2!1sfr!2sfr!4v1673651475903!5m2!1sfr!2sfr"
                                loading="lazy"
                                className={"w-full h-96 lg:h-full"}
                                referrerPolicy="no-referrer-when-downgrade"></iframe>   </div>
                                */}

                    </div>
                </div>
                <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                    <p className="text-sm text-black    ">
                        © Copyright 2023 Lorem Inc. All rights reserved.
                    </p>
                    <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                        <li>
                            <a
                                href="blog/index"
                                className="text-sm text-black transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                Blog
                            </a>
                        </li>
                        <li>
                            <Link
                                href="mention_legales"
                                className="text-sm text-black transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                Mentions légales
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="politique-de-confidentialite"
                                className="text-sm text-black transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                Politique de confidentialité
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    </>
  )
}
