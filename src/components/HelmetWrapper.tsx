import { Helmet } from "react-helmet";
import favicon from "../images/favicon.ico";
import { useLocation } from "@reach/router";

interface Props {
  fixed: boolean;
}

const HelmetWrapper = ({ fixed }: Props) => {
  const location = useLocation();

  const bodyCss = `body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    background-color: #fbfbf8;
    color: #000000;
    overflow: ${fixed ? "hidden" : "initial"};
  }`;

  const htmlCss = `html {
    height: 100%;
    overflow: hidden;
    margin: 0;
  }`;

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="author" content="Adam Leung" />
      <meta
        name="description"
        content="Adam Leung's personal website. Full stack developer and programmer based in Sydney, Australia. Visit my website to learn more about me and get in contact!"
      />

      <meta property="og:title" content="Adam Leung" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://adam-leung.com" />
      <meta
        property="og:description"
        content="Adam Leung's personal website. Full stack developer and programmer based in Sydney, Australia. Visit my website to learn more about me and get in contact!"
      />

      <meta
        name="google-site-verification"
        content="ehtowe-zi5bT-MvSiowhg5GMLBZqKFJMASv3Ej8tCgU"
      />

      <meta
        http-equiv="Content-Security-Policy"
        content="
        default-src 'self'; 
        style-src 'self' 'unsafe-inline' fonts.googleapis.com fonts.gstatic.com; 
        font-src 'self' data: fonts.gstatic.com;
        img-src 'self' data:; 
        frame-src 'self';
        media-src 'self';
        script-src 'self' 'unsafe-inline' 'unsafe-eval';
        connect-src 'self' localhost:*;
        "
      />

      <title>Adam Leung - Software Engineer | Personal Website</title>
      <link
        rel="canonical"
        href={`https://adam-leung.com${location.pathname}`}
      />
      <link rel="icon" href={favicon} type="image/png" sizes="16x16" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />

      <style>{bodyCss}</style>
      {fixed && <style>{htmlCss}</style>}
    </Helmet>
  );
};

export default HelmetWrapper;
