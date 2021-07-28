import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { css } from "@emotion/react";
import { Colours } from "../../util/constants";
import ReactTooltip, { Place } from "react-tooltip";

interface Props {
  tooltipDirection: Place;
}

const Socials = ({ tooltipDirection }: Props) => {
  return (
    <div css={styles.socials}>
      <a
        href="mailto:adamjleung123@gmail.com"
        target="_blank"
        rel="noopener noreferrer external"
        css={styles.a}
        data-tip="Email me at: adamjleung123@gmail.com"
      >
        <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" css={styles.icon} />
      </a>
      <ReactTooltip place={tooltipDirection} type="dark" effect="solid" />

      <a
        href="https://www.github.com/aleung27"
        target="_blank"
        rel="noopener noreferrer external"
        css={styles.a}
        data-tip="Visit my Github Profile"
      >
        <FontAwesomeIcon icon={faGithubSquare} size="2x" css={styles.icon} />
      </a>
      <ReactTooltip place={tooltipDirection} type="dark" effect="solid" />

      <a
        href="https://www.linkedin.com/in/adam-leung-ba5796182"
        target="_blank"
        rel="noopener noreferrer external"
        css={styles.a}
        data-tip="Visit my LinkedIn Profile"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" css={styles.icon} />
      </a>
      <ReactTooltip place={tooltipDirection} type="dark" effect="solid" />
    </div>
  );
};

const styles = {
  socials: css({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  }),
  a: css({
    color: Colours.gray4,
    margin: "0 0.5rem",
    "&:hover": {
      color: Colours.black,
    },
  }),
  icon: {
    "&:hover": {
      color: Colours.black,
    },
  },
};

export default Socials;
