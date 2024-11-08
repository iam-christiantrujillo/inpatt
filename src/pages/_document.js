import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="title" content="Pausa" />
        <meta name="description" content="Cuando haces una pausa, encuentras espacio para tu salud mental." />

        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://metatags.io/" /> */}
        <meta property="og:title" content="Pausa" />
        <meta property="og:description" content="Cuando haces una pausa, encuentras espacio para tu salud mental." />
        <meta property="og:image" content="/meta-img.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        {/* <meta property="twitter:url" content="https://metatags.io/" /> */}
        <meta property="twitter:title" content="Pausa" />
        <meta property="twitter:description" content="Cuando haces una pausa, encuentras espacio para tu salud mental." />
        <meta property="twitter:image" content="/meta-img.jpg" />

        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
