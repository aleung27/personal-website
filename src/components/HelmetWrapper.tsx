import { Helmet } from "react-helmet";

const HelmetWrapper = () => {
  const bodyCss = `body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    background-color: #fbfbf8;
    color: #000000;
  }`;

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="author" content="Adam Leung" />
      <title>Adam's Personal Website</title>
      <link rel="canonical" href="http://mysite.com/example" />
      <link rel="icon" href={""} />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />
      {/*TODO: Change this to your site's URL & Icon*/}

      <style>{bodyCss}</style>
    </Helmet>
  );
};

export default HelmetWrapper;
