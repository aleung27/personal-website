import HelmetWrapper from "../components/HelmetWrapper";
import Navbar from "../components/Navbar";
import Profile from "../components/atomic/Profile";
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Colours, Sizes } from "../util/constants";
import Header from "../components/atomic/Header";
import ImageCard from "../components/atomic/ImageCard";
import Tag from "../components/atomic/Tag";

import builtview1 from "../images/builtview-1.png";
import Panel from "../components/Panel";

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

      <ImageCard image={builtview1} width={600} />
      <Tag tag="Web App" />
      <Panel
        title="Builtview"
        subtitle="Laing O'Rourke Australia"
        tags={["Web App", "API", "React", "TypeScript", "C#", ".NET Core"]}
        images={[builtview1]}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Quam quisque id diam vel quam. Consectetur libero id faucibus nisl tincidunt eget nullam. Aliquet porttitor lacus luctus accumsan tortor posuere ac. A scelerisque purus semper eget. Eget aliquet nibh praesent tristique magna sit amet purus. Non consectetur a erat nam at lectus urna duis convallis. Et netus et malesuada fames ac turpis egestas maecenas. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Lacus vestibulum sed arcu non odio euismod lacinia at quis. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Molestie at elementum eu facilisis sed odio morbi. Vitae elementum curabitur vitae nunc sed. Diam donec adipiscing tristique risus nec feugiat in. Neque laoreet suspendisse interdum consectetur libero id faucibus."
        descriptionHeading="Photo and Video Capture for Construction Sites"
        display="row"
      />

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
