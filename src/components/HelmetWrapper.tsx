import { Helmet } from "react-helmet";
import favicon from "../images/favicon.ico";

interface Props {
  fixed: boolean;
}

const HelmetWrapper = ({ fixed }: Props) => {
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
      <title>Adam Leung</title>
      <link rel="canonical" href="https://adam-leung.com/" />
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
