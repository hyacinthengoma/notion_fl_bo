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
                    className={"w-full h-60 rounded-lg shadow-lg"}
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>*/}
        <footer aria-label="Site Footer" className={"bg-black"}>
            <div className={"max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8"}>
                <div className={"lg:flex lg:items-start justify-center lg:gap-8"}>
                    <div className={"text-teal-600 dark:text-teal-300"}>

                    </div>

                    <div
                        className={"grid grid-cols-2 gap-8 mt-8 lg:mt-0 lg:gap-y-16"}
                    >

                        <div className={"col-span-2 sm:col-span-1"}>
                            <p className={"font-medium text-gray-900 dark:text-white"}>Contact</p>

                            <nav aria-label={"Footer Navigation - Services"} className={"mt-6"}>
                                <ul className={"space-y-4 text-sm text-left"}>
                                    <li>
                                        <a
                                            href={"#"}
                                            className={"text-gray-700 transition hover:opacity-75 dark:text-gray-200"}
                                        >
                                            2 Rue Claude Boucher,<br/> 33000 Bordeaux
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href={"#"}
                                            className={"text-gray-700 transition hover:opacity-75 dark:text-gray-200"}
                                        >
                                            06 00 00 00 00
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href={"#"}
                                            className={"text-gray-700 transition hover:opacity-75 dark:text-gray-200"}
                                        >
                                            contact@babeau.fr
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href={"#"}
                                            className={"text-gray-700 transition hover:opacity-75 dark:text-gray-200"}
                                        >
                                            Lun - Ven 09:00 - 17:00
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className={"col-span-2 sm:col-span-1"}>
                            <p className={"font-medium text-gray-900 dark:text-white"}>Pages</p>

                            <nav aria-label={"Footer Navigation - Company"} className={"mt-6"}>
                                <ul className={"space-y-4 text-sm "}>
                                    <li>
                                        <a
                                            href={"#"}
                                            className={"text-gray-700 transition hover:opacity-75 dark:text-gray-200"}
                                        >
                                            Accueil
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href={"#"}
                                            className={"text-gray-700 transition hover:opacity-75 dark:text-gray-200"}
                                        >
                                            Expertise - Droit du travail
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href={"#"}
                                            className={"text-gray-700 transition hover:opacity-75 dark:text-gray-200"}
                                        >
                                            Expertise - Droit de la sécurité sociale
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href={"#"}
                                            className={"text-gray-700 transition hover:opacity-75 dark:text-gray-200"}
                                        >
                                            Honoraires
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href={"#"}
                                            className={"text-gray-700 transition hover:opacity-75 dark:text-gray-200"}
                                        >
                                            Actualités sociales
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href={"#"}
                                            className={"text-gray-700 transition hover:opacity-75 dark:text-gray-200"}
                                        >
                                            Florence Babeau
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href={"#"}
                                            className={"text-gray-700 transition hover:opacity-75 dark:text-gray-200"}
                                        >
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <ul
                            className={"flex justify-start col-span-2 gap-6 lg:col-span-5 lg:justify-end"}
                        >

                            <li>
                                <a
                                    href={"https://www.linkedin.com/in/florence-babeau-1a7b07166/"}
                                    rel="noreferrer"
                                    target="_blank"
                                    className={"text-gray-700 transition hover:opacity-75 dark:text-gray-200"}
                                >
                                    <span className={"sr-only"}>Linkedin</span>
                                    <img className={"brightness-50 h-12 w-full object-cover"} src={"/images/linkedin_2.png"} alt={"image-banniere"}></img>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className={"grid grid-cols-1 gap-8 lg:grid-cols-2"}>
                        <p className={"text-xs text-left text-gray-500 dark:text-gray-400"}>
                            &copy; 2022. Company Name. All rights reserved.
                        </p>

                        <nav aria-label="Footer Navigation - Support">
                            <ul className={"flex flex-wrap justify-start gap-4 text-xs lg:justify-end"}>
                                <li>
                                    <a
                                        href="#"
                                        className={"text-gray-500 transition hover:opacity-75 dark:text-gray-400"}
                                    >
                                        Terms & Conditions
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className={"text-gray-500 transition hover:opacity-75 dark:text-gray-400"}
                                    >
                                        Privacy Policy
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className={"text-gray-500 transition hover:opacity-75 dark:text-gray-400"}
                                    >
                                        Cookies
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}
