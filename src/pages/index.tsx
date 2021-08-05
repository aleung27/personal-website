import HelmetWrapper from "../components/HelmetWrapper";
import Navbar from "../components/Navbar";
import Profile from "../components/atomic/Profile";
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Colours, Sizes } from "../util/constants";
import Header from "../components/atomic/Header";
import { Portfolio } from "../components/data/PanelConstants";

const Index = () => {
  return (
    <div>
      <HelmetWrapper />
      <Navbar />

      <div css={styles.intro}>
        <div css={styles.introMain}>
          <div css={styles.introBio}>
            <span style={{ fontSize: Sizes.xl, fontWeight: 500 }}>
              Hey there &#x1F44B;
            </span>
            <p>
              Nice to meet you and welcome to my website! I’m Adam Leung -
              Sydney based Full Stack Software Engineer, Uni Student @ USYD and
              much more. Interested in a chat? Feel free to reach out through
              one of those handy buttons at the top &#x1F604;
            </p>
          </div>
          <Profile />
        </div>
        <span
          style={{
            color: `${Colours.gray4}`,
            paddingTop: "20vh",
            textAlign: "center",
          }}
        >
          Take a peek into my life below <FontAwesomeIcon icon={faArrowDown} />
        </span>
      </div>

      <div css={styles.header}>
        <Header text="Professional Portfolio" />
      </div>

      {Portfolio}

      <div style={{ height: 1000, paddingTop: "10vh" }}>
        My first React.js page!
      </div>
    </div>
  );
};

const styles = {
  intro: css({
    fontSize: Sizes.large,
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }),
  introMain: css({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  }),
  introBio: css({
    maxWidth: "30vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }),
  header: css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "5em 0",
  }),
};

export default Index;
