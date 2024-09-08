

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang='en'>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
               <Head> 
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Chivo+Mono:ital,wght@0,300;0,400;1,400&family=Hanken+Grotesk:wght@100..900&family=Libre+Baskerville:ital@0;1&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                    {/* NProgress Preloader */}
                    <div className='nloader'>
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    <Main />
                    <NextScript />

                   
                </body>
            </Html>
        )
    }
}
export default MyDocument