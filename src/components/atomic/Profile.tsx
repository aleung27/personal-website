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
        imgStyle={styles.image}
        css={{ height: 300 }}
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
  }),
  image: {
    height: 300,
    width: 300,
    "object-fit": "cover",
    "border-radius": "50%",
  },
};

export default Profile;
