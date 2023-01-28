import '../styles/global.css'
//import '../styles/cabinet.css'
import 'katex/dist/katex.css'
import Footer from '../components/footer'
import { Poppins } from '@next/font/google';
import NextNProgress from "nextjs-progressbar";
import {useEffect} from "react";
import Loader from "../components/loader";
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
        if (typeof window !== 'undefined') {
            const loader = document.getElementById('globalLoader');
            if (loader)
                loader.style.display = 'none';
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
