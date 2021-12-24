import { css, SerializedStyles } from "@emotion/react";
import { StaticImage } from "gatsby-plugin-image";

interface Props {
  style?: SerializedStyles;
}

const Profile = ({ style }: Props) => {
  return (
    <div css={[styles.profile, style]}>
      <StaticImage
        src="../../images/profile.jpg"
        alt="profile picture"
        placeholder="blurred"
        css={styles.image}
      />
    </div>
  );
};

const styles = {
  profile: css({
    position: "relative",
    width: 300,
    height: 300,
    overflow: "hidden",
    borderRadius: "50%",
  }),
  image: css({
    height: "100%",
    width: "auto",
  }),
};

export default Profile;
