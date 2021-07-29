import { css } from "@emotion/react";
import profile from "../../images/profile.jpg";

const Profile = () => {
  return (
    <div css={styles.profile}>
      <img src={profile} alt="profile picture" css={styles.image} />
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
    display: "inline",
    marginLeft: "-25%",
    height: "100%",
    width: "auto",
  }),
};

export default Profile;
