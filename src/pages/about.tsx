import { css } from "@emotion/react";
import Header from "../components/atomic/Header";
import Profile from "../components/atomic/Profile";
import { Timeline } from "../components/data/TimeLineConstants";
import Footer from "../components/Footer";
import HelmetWrapper from "../components/HelmetWrapper";
import Navbar from "../components/Navbar";
import { Colours, Sizes } from "../util/constants";

const About = () => {
  return (
    <div>
      <HelmetWrapper />
      <Navbar />

      <div css={styles.intro}>
        <Profile />
        <span css={styles.title}>
          Want to learn more about me? You've come to the right place &#x1F604;
        </span>
        <span css={styles.subtitle}>
          (and yes I literally have like one photo of myself - shoutout if you
          know where this background is!)
        </span>
      </div>

      <div css={styles.header}>
        <Header text="Education" />
      </div>

      {Timeline}

      <Footer />
    </div>
  );
};

const styles = {
  intro: css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  }),
  title: css({
    fontSize: Sizes.xl,
    fontWeight: 500,
    paddingTop: "3em",
    paddingBottom: "0.5em",
  }),
  subtitle: css({
    fontSize: Sizes.med,
    color: Colours.gray4,
  }),
  header: css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "10em 0",
  }),
};

export default About;
