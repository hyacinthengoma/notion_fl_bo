import '../styles/global.css'
//import '../styles/cabinet.css'
import 'katex/dist/katex.css'
import Footer from '../components/footer'
import { Poppins } from '@next/font/google';
import NextNProgress from "nextjs-progressbar";

const poppins = Poppins({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
        <NextNProgress height={6} color="#4338C9"></NextNProgress>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
