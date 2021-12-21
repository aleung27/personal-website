import { css } from "@emotion/react";
import Header from "../components/atomic/Header";
import LanguageSquare from "../components/atomic/LanguageSquare";
import Profile from "../components/atomic/Profile";
import { Timeline } from "../components/data/TimeLineConstants";
import Footer from "../components/Footer";
import HelmetWrapper from "../components/HelmetWrapper";
import Navbar from "../components/Navbar";
import { Colours, Sizes } from "../util/constants";
import languages from "../components/data/LanguageConstants";
import Game from "../components/Game";
import { useState } from "react";

const About = () => {
  const [isFixed, setIsFixed] = useState<boolean>(false);

  return (
    <div>
      <HelmetWrapper fixed={isFixed} />
      <Navbar setIsFixed={setIsFixed} />

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

      <div css={styles.header}>
        <Header text="Technologies" />
      </div>

      <div css={styles.languages}>
        {languages.map((l) => (
          <LanguageSquare key={l.label} label={l.label}>
            <img src={l.icon} width={80} height={80} alt={l.label} />
          </LanguageSquare>
        ))}
      </div>

      <div css={styles.header}>
        <Header text="More About Me" />
      </div>

      <div css={styles.more}>
        <p>
          I’ve always thought that someone’s website reveals a lot about them.
          The colour scheme, layout, aesthetic and vibe of my website was all
          designed and crafted by me and reflects who I am as both an engineer
          and a person - so have a look inside my brain! Want to listen to some
          Adam-certified beats while you’re here? Check out one of my playlists
          on{" "}
          <a
            href="https://open.spotify.com/user/sholabex?si=32840151e110448c"
            rel="noopener noreferrer"
            target="_blank"
          >
            Spotify
          </a>{" "}
          to see what I like listening too.
        </p>
        <p>
          Instead of giving you a boring list of hobbies and interests, I’ve
          decided to make it a little interesting. Play the game below and guess
          whether each statement about me is fact or cap. Let's see how you do!
        </p>
        <Game />
      </div>

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
  languages: css({
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr 1fr",
    rowGap: "2rem",
    justifyItems: "center",
    padding: "1rem 1rem",
  }),
  more: css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "600px",
    textAlign: "center",
    margin: "0 auto",
    fontSize: Sizes.large,
    paddingBottom: "3rem",
  }),
};

export default About;
