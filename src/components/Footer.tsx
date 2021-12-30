import { css } from "@emotion/react";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Colours, Sizes } from "../util/constants";
import Socials from "./atomic/Socials";
import { breakpoints } from "../util/constants";
import scrollTo from "gatsby-plugin-smoothscroll";

const Footer = () => {
  return (
    <div css={styles.footer}>
      <div css={styles.copyright}>&#169; 2021 Adam Leung</div>
      <button
        css={styles.uptext}
        onClick={() => scrollTo("#gatsby-focus-wrapper")}
      >
        Take me back up <FontAwesomeIcon icon={faChevronUp} />
      </button>
      <Socials style={styles.socials} />
    </div>
  );
};

const styles = {
  footer: css({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "75px",
    "&:before": {
      content: '""',
      background: Colours.header,
      position: "absolute",
      height: "75px",
      width: "100%",
      filter: `blur(50px)`,
      zIndex: -1,
    },
  }),
  copyright: css(
    breakpoints({
      fontSize: Sizes.med,
      color: Colours.gray4,
      paddingLeft: ["0", "1rem", "3rem", "3rem"],
      textAlign: ["center", "initial", "initial", "initial"],
      width: ["100%", "auto", "auto", "auto"],
    })
  ),
  socials: css(
    breakpoints({
      display: ["none", "initial", "initial", "initial"],
      paddingRight: ["0", "1rem", "3rem", "3rem"],
    })
  ),
  uptext: css(
    breakpoints({
      display: ["none", "initial", "initial", "initial"],
      color: Colours.gray4,
      fontSize: Sizes.med,
      position: "relative",
      top: 0,
      transition: "top 1s ease",
      border: "none",
      background: "none",
      "&:hover": {
        color: Colours.black,
        cursor: "pointer",
        top: "-0.5em",
      },
    })
  ),
};

export default Footer;
