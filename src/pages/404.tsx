import { Link } from "gatsby";
import { css } from "@emotion/react";
import HelmetWrapper from "../components/HelmetWrapper";
import { Sizes } from "../util/constants";

const NotFoundPage = () => {
  return (
    <main css={styles.root}>
      <HelmetWrapper fixed={false} />
      <title>Not found</title>
      <div>
        <h1 css={styles.heading}>Page not found</h1>
        <div css={styles.text}>
          〰〰〰〰〰〰〰〰〰〰〰〰〰
          <br />
          Looked up and looked down
          <br />
          For the webpage of renown
          <br />
          404 not found
          <br />
          〰〰〰〰〰〰〰〰〰〰〰〰〰
        </div>
        <Link to="/" css={styles.link}>
          Go home
        </Link>
      </div>
    </main>
  );
};

const styles = {
  root: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: "100vh",
    width: "100%",
  }),
  heading: css({
    fontSize: Sizes.xl,
  }),
  text: css({
    fontSize: Sizes.large,
    padding: "1em 0",
  }),
  link: css({
    fontSize: Sizes.med,
  }),
};

export default NotFoundPage;
