import '../styles/global.css'
import 'katex/dist/katex.css'
import Footer from '../components/footer'
import { Poppins } from '@next/font/google';
import NextNProgress from "nextjs-progressbar";
import {useEffect} from "react";
import Header from "../components/header";
import BackToTop from "../components/BackToTop";
import { NextUIProvider } from '@nextui-org/react';
import {ParallaxProvider} from "react-scroll-parallax";

const poppins = Poppins({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});

export default function MyApp({ Component, pageProps }) {
    // Hide splash screen shen we are server side
    useEffect(() => {

        const burger = document.querySelector('#navbar-burger');
        const menu = document.querySelector('#navbar-menu');
        const close = document.querySelector('#navbar-close');
        const backdrop = document.querySelector('#navbar-backdrop');
        const sidemenuLinks = document.querySelectorAll('#sidemenu a');

        burger.addEventListener('click', function(){
            menu.classList.toggle('hidden');
        });
        close.addEventListener('click', function(){
            menu.classList.toggle('hidden');
        });
        backdrop.addEventListener('click', function(){
            menu.classList.toggle('hidden');
        });

        Array.prototype.forEach.call(sidemenuLinks, function(currentSideMenuLink) {
            currentSideMenuLink.addEventListener('click', function(){
                menu.classList.toggle('hidden');
            })
        });

        if (typeof window !== 'undefined') {
            const loader = document.getElementById('globalLoader');
            if (loader)
                setTimeout(() => {
                    loader.style.transition = 'all 1s ease-in-out';
                    loader.style.transform = 'translate(-50%, 100%)';
                    //loader.style.transform = 'translateY(100%)';
                    //loader.style.transform = 'translateX(100%)';
                    setTimeout(() => {
                        loader.style.display = 'none';
                    }, 1000);
                }, 500);
        }
    }, []);

    return (
        <>
            <NextNProgress height={6} color="#4338C9"></NextNProgress>
            <Header></Header>
            <ParallaxProvider>
                <NextUIProvider disableBaseline={true}>
                    <Component {...pageProps} />
                </NextUIProvider>
            </ParallaxProvider>
            <BackToTop></BackToTop>
            <Footer />
        </>
      )
}
