import { css } from "@emotion/react";
import React from "react";
import { Colours, Sizes } from "../../util/constants";

interface Props {
  image: string;
  caption: string;
}

const ImageCard = ({ image, caption }: Props) => {
  return (
    <>
      <div css={[styles.imagecard]}>
        <img src={image} alt="ImageCard" css={styles.image} />
      </div>
      <div css={styles.caption}>{caption}</div>
    </>
  );
};

const styles = {
  imagecard: css({
    borderRadius: "32px",
    width: "auto",
    maxWidth: "100%",
    position: "relative",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.25)",
  }),
  image: css({
    display: "block",
    filter: "brightness(100%)",
    borderRadius: "32px",
    width: "100%",
    height: "100%",
  }),
  caption: css({
    textAlign: "center",
    padding: "1em 0",
    fontSize: Sizes.med,
    color: Colours.gray4,
  }),
};

export default ImageCard;
