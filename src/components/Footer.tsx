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
      <Socials tooltipDirection="top" style={css({ paddingRight: "3rem" })} />
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
  }),
  copyright: css({
    fontSize: Sizes.large,
    color: Colours.gray4,
    paddingLeft: "3rem",
  }),
  uptext: css({
    color: Colours.gray4,
    fontSize: Sizes.med,
    transition: "margin 1s ease",
    "&:hover": {
      marginBottom: "1em",
      color: Colours.black,
      cursor: "pointer",
    },
  }),
};

export default Footer;
