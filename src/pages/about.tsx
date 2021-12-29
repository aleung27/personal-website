import { css } from "@emotion/react";
import Header from "../components/atomic/Header";
import LanguageSquare from "../components/atomic/LanguageSquare";
import Profile from "../components/atomic/Profile";
import { Timeline } from "../components/data/TimeLineConstants";
import Footer from "../components/Footer";
import HelmetWrapper from "../components/HelmetWrapper";
import Navbar from "../components/Navbar";
import { breakpoints, Colours, Sizes } from "../util/constants";
import languages from "../components/data/LanguageConstants";
import Game from "../components/Game";
import { useState } from "react";

const About = () => {
  const [isFixed, setIsFixed] = useState<boolean>(false);

  return (
    <div>
      <HelmetWrapper fixed={isFixed} />
      {/*
        //@ts-ignore */}
      <ct></ct>
      <Navbar setIsFixed={setIsFixed} />

      <div css={styles.intro}>
        <Profile style={styles.profile} />
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
        <p>
          To play click on the right hand side of each card if you think the
          answer is true otherwise click the left hand side. On mobile you can
          swipe right and left instead.
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
    padding: "0 1rem",
    textAlign: "center",
  }),
  profile: css({
    marginTop: "calc(10vh + 2em)",
  }),
  title: css({
    fontSize: Sizes.xl,
    fontWeight: 500,
    padding: "1em 0",
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
    overflowX: "clip",
  }),
  languages: css(
    breakpoints({
      display: "grid",
      gridTemplateColumns: [
        "1fr 1fr",
        "1fr 1fr 1fr",
        "1fr 1fr 1fr 1fr",
        "1fr 1fr 1fr 1fr 1fr",
      ],
      gridTemplateRows: "1fr 1fr 1fr 1fr",
      rowGap: "2rem",
      justifyItems: "center",
      padding: "1rem 1rem",
    })
  ),
  more: css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "600px",
    textAlign: "center",
    margin: "0 auto",
    fontSize: Sizes.large,
    padding: "0 1rem 3rem 1rem",
  }),
};

export default About;
