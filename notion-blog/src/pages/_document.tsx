import Document, { Html, Head, Main, NextScript } from 'next/document'
import Loader from '../components/loader';
import Image from "next/image";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }
    render() {
        return (
            <Html>
                <Head/>
                <head>
                    <meta name="robots" content="noindex, nofollow" />
                    <meta httpEquiv="X-Robots-Tag" content="noindex, nofollow" />
                    <style>
                        {Loader}
                    </style>
                </head>
                <body>
                <div id={'globalLoader'}>
                    <Image src={"/images/logo-babeau2.svg"} alt={""} height={"500"} width={"500"} className={"bg-red-900 p-4 my-5"}></Image>
                    <div className="loader">
                        <div/>
                        <div/>
                    </div>
                </div>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

/**class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}*/

export default MyDocument
