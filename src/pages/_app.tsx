import '../styles/global.css'
import 'katex/dist/katex.css'
import Footer from '../components/footer'
import { Poppins } from '@next/font/google';
import NextNProgress from "nextjs-progressbar";
import {useEffect} from "react";
import Header from "../components/header";
import BackToTop from "../components/BackToTop";

const poppins = Poppins({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});

export default function MyApp({ Component, pageProps }) {
    // Hide splash screen shen we are server side
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
                }, 1500);
        }
    }, []);
    return (
        <>
            <NextNProgress height={6} color="#4338C9"></NextNProgress>
            <Header></Header>
            <Component {...pageProps} />
            <BackToTop></BackToTop>
            <Footer />
        </>
      )
}
