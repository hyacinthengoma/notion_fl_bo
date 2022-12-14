import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import cabinetStyles from "../styles/cabinet.module.css";
const ogImageUrl = 'https://notion-blog.now.sh/og-image.png'

export default function Header() {
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <header>
            <Head>
                <title>My Notion Blog</title>
                <meta name="description" content="Site de Florence Babeau"/>
                <meta name="og:title" content="My Notion Blog" />
                <meta property="og:image" content={ogImageUrl} />
                <meta name="twitter:site" content="@_ijjk" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content={ogImageUrl} />
                <link href="https://cdn.jsdelivr.net/npm/daisyui@2.40.1/dist/full.css" rel="stylesheet" type="text/css" />
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2/dist/tailwind.min.css" rel="stylesheet" type="text/css" />
                <script src="https://use.fontawesome.com/46cabe336c.js"></script>
                <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'/>
            </Head>
            <nav className={"navbar text-white " + cabinetStyles.navcolor}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost xl:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </label>
                        <ul tabIndex="0"
                            className="menu dropdown-content mt-2 -ml-2 p-4 shadow bg-gray-100 w-52">
                            <li>
                                <Link href="/le-cabinet">Le cabinet</Link>
                            </li>
                            <li tabIndex="0">
                                <Link href="/Expertise" className="justify-between">
                                    Expertise
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                         viewBox="0 0 24 24">
                                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                                    </svg>
                                </Link>
                                <ul className="p-2 bg-gray-100">
                                    <li>
                                        <a>Droit du travail</a>
                                    </li>
                                    <li>
                                        <a>Droit de la <br/> s??curit?? sociale</a>
                                    </li>
                                </ul>
                            </li>
                            <li tabIndex="0">
                                <a className="justify-between">
                                    Comment ??a marche ?
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                         viewBox="0 0 24 24">
                                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                                    </svg>
                                </a>
                                <ul className="p-2 bg-gray-100">
                                    <li>
                                        <Link href="/Comment-ca-marche/honoraires">Honoraires</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/actualites">Actualit??s</Link>
                            </li>
                            <li>
                                <Link href="/documentation">Documentation</Link>
                            </li>
                            <li>
                                <Link href="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <Link href="/le-cabinet" className={"hidden xl:flex"}>
                        <Image src="/images/logo-babeau.png" alt="logo-babeau" width={"150"} height="500" className={"mx-20"}></Image>
                    </Link>
                </div>
                <Link href="/le-cabinet" className={"navbar-end xl:hidden"}>
                    <Image src="/images/logo-babeau.png" alt="logo-babeau" width={"150"} height="500" className={"mx-20"}></Image>
                </Link>
                <div className="navbar-center hidden xl:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li>
                            <Link href="/le-cabinet">Le cabinet</Link>
                        </li>
                        <li tabIndex="0">
                            <Link href="/Expertise">
                                Expertise
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                     viewBox="0 0 24 24">
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
                                </svg>
                            </Link>
                            <ul className="p-2 bg-gray-100">
                                <li tabIndex="1">
                                    <Link href="/Expertise/Droit-du-travail">
                                        Droit du travail
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                             viewBox="0 0 24 24">
                                            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
                                        </svg>
                                    </Link>
                                    <ul className="p-2 bg-gray-100">
                                        <li>
                                            <Link href="/images/Expertise/Droit-du-travail/conseils">
                                                - Conseils
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/images/Expertise/Droit-du-travail/contentieux">
                                                - Contentieux
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li tabIndex="1">
                                    <Link href="/Expertise/Droit-de-la-securite-sociale">
                                        Droit de la s??curit?? sociale
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                             viewBox="0 0 24 24">
                                            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
                                        </svg>
                                    </Link>
                                    <ul className="p-2 bg-gray-100">
                                        <li>
                                            <Link href="/images/Expertise/Droit-de-la-securite-sociale/conseils">
                                                - Conseils
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/images/Expertise/Droit-de-la-securite-sociale/contentieux">
                                                - Contentieux
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li tabIndex="1">
                            <Link href="/Comment-ca-marche">
                                Comment ??a marche ?
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                     viewBox="0 0 24 24">
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
                                </svg>
                            </Link>
                            <ul className="p-2 bg-gray-100">
                                <li>
                                    <Link href="/Comment-ca-marche/honoraires">Honoraires</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/actualites">Actualit??s</Link>
                        </li>
                        <li>
                            <Link href="/documentation">Documentation</Link>
                        </li>
                        <li>
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
