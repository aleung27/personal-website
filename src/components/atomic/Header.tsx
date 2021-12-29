import { css } from "@emotion/react";
import { Sizes } from "../../util/constants";

interface Props {
  text: string;
}

const Header = ({ text }: Props) => {
  return (
    <div css={styles.header(`${text.length * 5}px`)}>
      <span>{text}</span>
    </div>
  );
};

const styles = {
  header: (blur: string) =>
    css({
      position: "relative",
      fontSize: Sizes.xxl,
      fontWeight: 500,
      textAlign: "center",
      display: "inline-block",
      "&:before": {
        content: '""',
        background:
          "linear-gradient(183.19deg, rgba(244, 66, 108, 0.6) 10.39%, rgba(251, 242, 177, 0.6) 89.61%)",
        position: "absolute",
        height: 0,
        paddingBottom: "50%",
        width: "100%",
        filter: `blur(${blur})`,
        zIndex: -1,
        transform: "translateY(calc(-50% + 24px))",
      },
      padding: "0 1rem",
    }),
};

export default Header;
