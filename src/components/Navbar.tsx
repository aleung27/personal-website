//Navbar with three selectable links: 'Home', 'About' and 'Contact'.
import { css } from "@emotion/react";
import { Colours, Sizes } from "../util/constants";
import React, { useState } from "react";
import Socials from "./atomic/Socials";
import { useLocation } from "@reach/router";
import { breakpoints } from "../util/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface Props {
  setIsFixed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ setIsFixed }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <nav css={styles.navbar}>
        <button
          onClick={() => {
            setIsOpen(true);
            setIsFixed(true);
          }}
          css={styles.hamburger}
        >
          <FontAwesomeIcon icon={faBars} size="2x" />
        </button>
        <span css={styles.title}>Adam Leung</span>

        <div css={styles.modal(isOpen)}>
          <div css={styles.menu}>
            <div css={styles.linksPopout}>
              <Links />
            </div>
            <div css={styles.socialsPopout}>
              <Socials
                style={css({
                  justifyContent: "flex-start",
                  paddingLeft: "1.5rem",
                })}
              />
            </div>
          </div>
          <button
            css={styles.closeBtn(isOpen)}
            onClick={() => {
              setIsOpen(false);
              setIsFixed(false);
            }}
          />
        </div>

        <div css={styles.links}>
          <Links />
        </div>

        <Socials style={styles.socials} />
      </nav>
    </>
  );
};

const Links = () => {
  const location = useLocation();
  return (
    <>
      <a
        href="/"
        rel="noopener noreferrer"
        css={[
          styles.a,
          location.pathname === "/" ? styles.selected : styles.unselected,
        ]}
      >
        <span>Home</span>
      </a>
      <a
        href="/about"
        rel="noopener noreferrer"
        css={[
          styles.a,
          location.pathname === "/about/" ? styles.selected : styles.unselected,
        ]}
      >
        <span>About</span>
      </a>
      <a
        href="/blog"
        rel="noopener noreferrer"
        css={[
          styles.a,
          location.pathname === "/blog/" ? styles.selected : styles.unselected,
        ]}
      >
        <span>Blog</span>
      </a>
    </>
  );
};

const styles = {
  navbar: css(
    breakpoints({
      position: ["initial", "initial", "initial", "fixed"],
      top: 0,
      width: "100%",
      height: "10vh",
      display: "flex",
      flexDirection: "row",
      justifyContent: [
        "flex-start",
        "space-between",
        "space-between",
        "space-between",
      ],
      alignItems: "center",
      zIndex: 3,
      "&:before": {
        content: '""',
        background: Colours.header,
        position: "absolute",
        height: "10vh",
        width: "100%",
        filter: `blur(50px)`,
        zIndex: -1,
      },
    })
  ),
  hamburger: css(
    breakpoints({
      border: "none",
      padding: "0",
      cursor: "pointer",
      backgroundColor: "transparent",
      margin: "0 1rem",
      color: Colours.gray4,
      display: ["initial", "none", "none", "none"],
    })
  ),
  title: css(
    breakpoints({
      fontWeight: "bold",
      fontSize: Sizes.large,
      paddingLeft: ["0", "1rem", "3rem", "3rem"],
    })
  ),
  links: css(
    breakpoints({ display: ["none", "initial", "initial", "initial"] })
  ),
  a: css(
    breakpoints({
      position: "relative",
      color: Colours.black,
      fontSize: [Sizes.large, Sizes.med, Sizes.med, Sizes.med],
      textDecoration: "none",
      textAlign: "center",
      padding: ["0.5rem 1rem 0.5rem 1.5rem", "0 1.5em", "0 1.5em", "0 1.5em"],
    })
  ),
  socials: css(
    breakpoints({
      display: ["none", "initial", "initial", "initial"],
      paddingRight: ["0", "1rem", "3rem", "3rem"],
    })
  ),
  selected: css(
    breakpoints({
      color: Colours.black,
      "&:before": {
        content: '""',
        transform: "translateX(-50%)",
        borderRadius: "100%",
        position: "absolute",
        background: Colours.black,
        height: "5px",
        width: "5px",
        left: ["10%", "50%", "50%", "50%"],
        top: ["50%", "100%", "100%", "100%"],
      },
    })
  ),
  unselected: css(
    breakpoints({
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
          left: ["10%", "50%", "50%", "50%"],
          top: ["50%", "100%", "100%", "100%"],
        },
      },
    })
  ),
  modal: (isOpen: boolean) =>
    css(
      breakpoints({
        display: ["flex", "none", "none", "none"],
        flexDirection: "row",
        justifyContent: "flex-end",
        width: "100%",
        position: "absolute",
        top: "0",
        zIndex: "100",
        left: isOpen ? "0px" : "-100%",
        height: "100%",
        transition: "left 0.5s ease-in-out",
      })
    ),
  menu: css(
    breakpoints({
      display: ["flex", "none", "none", "none"],
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      width: "250px",
      backgroundColor: Colours.menubar,
      top: "0",
      height: "100%",
    })
  ),
  closeBtn: (isOpen: boolean) =>
    css({
      width: "calc(100% - 250px)",
      border: "none",
      padding: "0",
      backgroundColor: `${isOpen ? Colours.page : "transparent"}`,
      opacity: "0.8",
    }),
  linksPopout: css({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingTop: "1rem",
  }),
  socialsPopout: css({
    width: "100%",
    padding: "1rem 1.5rem",
  }),
};

export default Navbar;
