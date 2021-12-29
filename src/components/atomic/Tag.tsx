import { css } from "@emotion/react";
import { Colours, Sizes } from "../../util/constants";

interface Props {
  tag: string;
}

const Tag = ({ tag }: Props) => {
  return <div css={styles.tag}>{tag}</div>;
};

const styles = {
  tag: css({
    display: "inline-block",
    backgroundColor: Colours.gray2,
    borderRadius: "8px",
    padding: "5px 10px",
    marginRight: "10px",
    fontSize: Sizes.small,
  }),
};

export default Tag;
