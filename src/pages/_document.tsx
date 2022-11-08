import { Html, Head, Main, NextScript } from 'next/document'
import { ToastContainer } from 'react-toastify'

export default function Document() {
    return (
        <Html lang='pt-br'>
            <Head>

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta charSet="utf-8" />
                <meta name="language" content="pt-BR" />
                <meta name="description" content="Ambiente para desenvolver suas habilidades em redação e pontuar alto no ENEM." />
                <meta name="robots" content="index" />
                <meta name="author" content="Redatech" />
                <meta name="keywords" content="Redatech, redação, enem, Redações nota 100" />
            </Head>
            <body className='bg-black bg-app bg-cover bg-no-repeat'>
                <Main />

                <NextScript />
            </body>
        </Html>
    )
}