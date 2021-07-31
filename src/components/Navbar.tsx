//Navbar with three selectable links: 'Home', 'About' and 'Contact'.
import { css } from "@emotion/react";
import { Colours, Sizes } from "../util/constants";
import React, { useState, useEffect } from "react";
import Socials from "./atomic/Socials";

const Navbar = () => {
  const [path, setPath] = useState<string>("");

  useEffect(() => {
    setPath(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <>
      <nav css={styles.navbar}>
        <span css={styles.title}>Adam Leung</span>

        <div>
          <a
            href="/"
            rel="noopener noreferrer"
            css={[styles.a, path === "/" ? styles.selected : styles.unselected]}
          >
            <span>Home</span>
          </a>

          <a
            href="/about"
            rel="noopener noreferrer"
            css={[
              styles.a,
              path === "/about" ? styles.selected : styles.unselected,
            ]}
          >
            <span>About</span>
          </a>

          <a
            href="/blog"
            rel="noopener noreferrer"
            css={[
              styles.a,
              path === "/blog" ? styles.selected : styles.unselected,
            ]}
          >
            <span>Blog</span>
          </a>
        </div>

        <Socials
          tooltipDirection="bottom"
          style={css({ paddingRight: "3rem" })}
        />
      </nav>
      <div css={styles.blur} />
    </>
  );
};

const styles = {
  navbar: css({
    position: "fixed",
    top: 0,
    width: "100%",
    height: "10vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 3,
  }),
  blur: css({
    position: "fixed",
    top: 0,
    width: "100%",
    height: "10vh",
    backgroundColor: Colours.header,
    filter: "blur(100px)",
    zIndex: 2,
  }),
  title: css({
    fontWeight: "bold",
    fontSize: Sizes.large,
    paddingLeft: "3rem",
  }),
  a: css({
    position: "relative",
    color: Colours.black,
    fontSize: Sizes.med,
    textDecoration: "none",
    textAlign: "center",
    padding: "0 1.5em",
  }),
  selected: css({
    color: Colours.black,
    "&:before": {
      content: '""',
      transform: "translateX(-50%)",
      borderRadius: "100%",
      position: "absolute",
      background: Colours.black,
      height: "5px",
      width: "5px",
      left: "50%",
      top: "100%",
    },
  }),
  unselected: css({
    color: Colours.gray4,
    "&:hover": {
      color: Colours.black,
      "&:before": {
        content: '""',
        transform: "translateX(-50%)",
        borderRadius: "100%",
        position: "absolute",
        background: Colours.black,
        height: "5px",
        width: "5px",
        left: "50%",
        top: "100%",
      },
    },
  }),
};

export default Navbar;
