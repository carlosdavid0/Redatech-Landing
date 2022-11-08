import { Html, Head, Main, NextScript } from 'next/document'
import { ToastContainer } from 'react-toastify'

export default function Document() {
    return (
        <Html lang='pt-br'>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <body className='bg-black bg-app bg-cover bg-no-repeat'>
                <Main />

                <NextScript />
            </body>
        </Html>
    )
}