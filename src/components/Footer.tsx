import { css } from "@emotion/react";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Colours, Sizes } from "../util/constants";
import Socials from "./atomic/Socials";

const Footer = () => {
  return (
    <div css={styles.footer}>
      <span css={styles.copyright}>&#169; 2021 Adam Leung</span>
      <div
        css={styles.uptext}
        onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
      >
        Take me back up <FontAwesomeIcon icon={faChevronUp} />
      </div>
      <Socials style={css({ paddingRight: "3rem" })} />
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
    height: "10vh",
    "&:before": {
      content: '""',
      background: Colours.header,
      position: "absolute",
      height: "10vh",
      width: "100%",
      filter: `blur(50px)`,
      zIndex: -1,
    },
  }),
  copyright: css({
    fontSize: Sizes.med,
    color: Colours.gray4,
    paddingLeft: "3rem",
  }),
  uptext: css({
    color: Colours.gray4,
    fontSize: Sizes.med,
    position: "relative",
    top: 0,
    transition: "top 1s ease",
    "&:hover": {
      color: Colours.black,
      cursor: "pointer",
      top: "-0.5em",
    },
  }),
};

export default Footer;
