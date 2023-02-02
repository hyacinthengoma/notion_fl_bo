import Head from "next/head";
import Link from "next/link";
import React, {useEffect} from "react";
import Script from "next/script";
import Image from "next/image";
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
                <nav className="px-8 py-4 gap-4 flex justify-between w-full items-center fixed z-[100] shadow-lg" id={"navbar"}>
                    <Link className="text-3xl font-bold leading-none" href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="55" viewBox="0 0 753 131.587">
                            <g id="logo_florence" data-name="logo florence" transform="translate(-582 -388.297)">
                                <g id="noun-penrose-square-3612611" transform="translate(582 388.297)">
                                    <path id="Tracé_1" data-name="Tracé 1" d="M283.5,247.378c.033.358.065.683.1,1.04s.1.715.163,1.073c.065.325.13.683.2,1.008a9.748,9.748,0,0,0,.26,1.04l.293.975a9.2,9.2,0,0,0,.358,1.008c.13.325.228.618.358.91.13.325.293.65.455.975.13.293.293.585.455.878a8.469,8.469,0,0,0,.553.91,6.926,6.926,0,0,0,.52.813c.2.293.423.585.618.845l.585.78c.228.26.455.52.683.813.228.228.423.488.65.715.26.26.52.488.78.748.228.228.455.423.683.65a8.325,8.325,0,0,0,.845.65c.26.2.488.39.748.553.293.2.585.39.91.585l.78.488c.325.2.65.325.975.488a6.254,6.254,0,0,0,.813.39c.358.163.683.293,1.04.423.26.1.553.228.813.325.39.13.748.228,1.138.325.26.065.52.163.78.228.423.1.878.163,1.333.228a4.935,4.935,0,0,0,.683.1h0q1.024.1,2.048.1H327.1A44.071,44.071,0,0,0,370.866,225.3v-.2c.033-.715.065-1.431.065-2.146a65.483,65.483,0,0,0-41.391-61.16,2.712,2.712,0,0,1,.39.26c.553.358,1.138.715,1.658,1.073l.585.39c.715.488,1.4,1.008,2.081,1.561.13.1.228.2.358.293.585.455,1.138.943,1.658,1.4.2.163.39.358.585.52.488.455,1.008.943,1.463,1.4l.423.423c.618.618,1.2,1.268,1.756,1.918a4.865,4.865,0,0,1,.358.423c.455.52.91,1.073,1.333,1.626a7.512,7.512,0,0,1,.455.618c.423.553.845,1.138,1.236,1.723.1.13.2.293.293.423.488.715.943,1.463,1.366,2.211.1.163.2.358.293.553.325.585.65,1.2.975,1.788.13.228.228.455.358.683.325.683.618,1.333.91,2.016a1.988,1.988,0,0,1,.163.39c.325.813.65,1.626.943,2.471a5.153,5.153,0,0,0,.228.65q.341.975.585,1.951c.065.26.13.52.2.748.2.78.39,1.561.553,2.341.033.1.033.163.065.26.163.878.325,1.756.455,2.666.033.26.065.488.1.748q.146,1.024.2,2.048c.033.26.033.52.065.813.065.91.1,1.821.1,2.764v22.988c0,12.356-10.925,22.825-23.833,22.825H283.5v.618Z" transform="translate(-239.28 -157.215)" fill="#fff"/>
                                    <path id="Tracé_2" data-name="Tracé 2" d="M186.257,317.151c-.683-.488-1.366-.975-2.016-1.5-.163-.13-.325-.293-.52-.423-.52-.423-1.008-.845-1.5-1.268-.228-.2-.455-.39-.65-.585-.455-.423-.943-.878-1.366-1.333l-.488-.488c-.585-.618-1.171-1.236-1.723-1.886a5.945,5.945,0,0,1-.423-.52c-.423-.488-.845-1.008-1.236-1.528-.163-.228-.358-.455-.52-.683-.39-.553-.813-1.105-1.171-1.658-.1-.163-.228-.325-.325-.488-.455-.715-.91-1.431-1.366-2.178a3.709,3.709,0,0,1-.325-.618c-.325-.585-.618-1.138-.943-1.723a7.335,7.335,0,0,1-.358-.715c-.325-.65-.618-1.333-.91-2.016a1.989,1.989,0,0,1-.163-.39c-.325-.813-.65-1.626-.943-2.439-.065-.228-.163-.455-.228-.683-.2-.618-.39-1.268-.585-1.918a7.056,7.056,0,0,0-.228-.78c-.2-.78-.39-1.561-.553-2.341-.033-.1-.033-.163-.065-.26-.163-.878-.325-1.756-.455-2.634-.033-.26-.065-.52-.1-.748q-.146-1.024-.2-2.048c-.033-.26-.033-.52-.065-.813-.065-.91-.1-1.821-.1-2.764V256.739c0-12.583,10.7-22.825,23.833-22.825H235a3.532,3.532,0,0,0-.033-.585c-.033-.358-.065-.683-.1-1.04s-.1-.748-.163-1.105c-.065-.325-.13-.683-.2-1.008-.065-.358-.163-.715-.26-1.073-.1-.325-.163-.65-.293-.975a9.2,9.2,0,0,0-.358-1.008c-.13-.325-.228-.618-.358-.91-.13-.325-.293-.65-.455-.975-.13-.293-.293-.585-.423-.878-.163-.325-.358-.618-.52-.91a6.922,6.922,0,0,0-.52-.813c-.2-.293-.39-.585-.618-.878-.2-.26-.39-.52-.585-.748-.228-.26-.455-.553-.683-.813-.2-.228-.423-.488-.65-.715-.26-.26-.52-.488-.78-.748-.228-.228-.455-.423-.683-.618a8.323,8.323,0,0,0-.845-.65c-.26-.2-.488-.39-.748-.553-.293-.2-.618-.39-.91-.585l-.78-.488c-.325-.2-.65-.325-.975-.488-.26-.13-.52-.26-.813-.39-.358-.163-.715-.26-1.073-.423a8.137,8.137,0,0,0-.813-.293c-.39-.13-.78-.228-1.171-.325a6.842,6.842,0,0,0-.78-.2c-.423-.1-.878-.163-1.333-.228a4.93,4.93,0,0,0-.683-.1c-.683-.065-1.4-.1-2.081-.1H191.329a44.014,44.014,0,0,0-43.765,42.074v.2c-.033.715-.065,1.463-.065,2.178a65.552,65.552,0,0,0,41.326,61.127c-.13-.1-.293-.2-.423-.293-.52-.325-1.04-.65-1.528-1.008-.2-.13-.423-.293-.618-.423Z" transform="translate(-147.499 -191.97)" fill="#fff"/>
                                    <path id="Tracé_3" data-name="Tracé 3" d="M318.907,329.473a45.689,45.689,0,0,1-39.18,22.175H256.739c-12.356,0-22.825-10.925-22.825-23.833V283.4c-11.478.52-20.614,9.592-20.614,20.647v22.988A44.014,44.014,0,0,0,255.374,370.8h.26c.715.032,1.4.065,2.113.065a65.484,65.484,0,0,0,61.16-41.391Z" transform="translate(-191.905 -239.278)" fill="#fff"/>
                                    <path id="Tracé_4" data-name="Tracé 4" d="M162,188.993a45.726,45.726,0,0,1,39.147-22.11h22.988c12.583,0,22.825,10.7,22.825,23.833v44.415c11.283-.553,20.614-9.787,20.614-20.647V191.5a44.071,44.071,0,0,0-42.139-43.765h-.293c-.683-.033-1.366-.033-2.048-.033A65.5,65.5,0,0,0,162,188.993Z" transform="translate(-157.285 -147.699)" fill="#fff"/>
                                </g>
                                <text id="Florence_Babeau" data-name="Florence  Babeau" transform="translate(773 478.091)" fill="#fff" font-size="67" font-family="Poppins-Bold, Poppins" font-weight="700" letter-spacing="-0.03em"><tspan x="0" y="0" xmlSpace="preserve">Florence  Babeau</tspan></text>
                            </g>
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
                    <ul className="hidden lg:flex lg:flex lg:items-center lg:w-auto lg:space-x-12">
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
                        <li >
                            <Link href={"https://www.linkedin.com/in/florence-babeau-1a7b07166/"} >
                                <Image src={"/images/linkedin_5.png"} alt={"linkedin"} height={"30"} width={"30"}></Image>
                            </Link>
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
