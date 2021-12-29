import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { css, SerializedStyles } from "@emotion/react";
import { Colours } from "../../util/constants";

interface Props {
  style?: SerializedStyles;
}

const Socials = ({ style }: Props) => {
  return (
    <div css={[styles.socials, style]}>
      <a
        href="mailto:adamjleung123@gmail.com"
        target="_blank"
        rel="noopener noreferrer external"
        css={styles.a}
        data-tip="Email me at: adamjleung123@gmail.com"
      >
        <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" css={styles.icon} />
      </a>

      <a
        href="https://www.github.com/aleung27"
        target="_blank"
        rel="noopener noreferrer external"
        css={styles.a}
        data-tip="Visit my Github"
      >
        <FontAwesomeIcon icon={faGithubSquare} size="2x" css={styles.icon} />
      </a>

      <a
        href="https://www.linkedin.com/in/ajleung"
        target="_blank"
        rel="noopener noreferrer external"
        css={styles.a}
        data-tip="Visit my LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" css={styles.icon} />
      </a>
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
