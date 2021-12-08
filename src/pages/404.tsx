import { Link } from "gatsby";
import { css } from "@emotion/react";
import HelmetWrapper from "../components/HelmetWrapper";
import { Sizes } from "../util/constants";

const NotFoundPage = () => {
  return (
    <main css={styles.root}>
      <HelmetWrapper />
      <title>Not found</title>
      <h1 css={styles.heading}>Page not found</h1>
      <div css={styles.text}>
        <p>〰〰〰〰〰〰〰〰〰〰〰〰〰</p>
        <p>Looked up and looked down</p>
        <p>For the webpage of renown</p>
        <p>404 not found</p>
        <p>〰〰〰〰〰〰〰〰〰〰〰〰〰</p>
      </div>
      <Link to="/" style={{ fontSize: Sizes.med }}>
        Go home
      </Link>
    </main>
  );
};

const styles = {
  root: css({
    color: "#232129",
    padding: "0 1rem",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: "100vh",
  }),
  heading: css({
    fontSize: Sizes.xl,
  }),
  text: css({
    fontSize: Sizes.large,
    margin: "3rem 0",
  }),
};

export default NotFoundPage;
