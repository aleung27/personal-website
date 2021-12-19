import { css } from "@emotion/react";
import React from "react";
import { Colours, Sizes } from "../../util/constants";

interface Props {
  image: string;
  width?: number;
  caption: string;
}

const ImageCard = ({ image, width, caption }: Props) => {
  return (
    <>
      <div css={[styles.imagecard(width)]}>
        <img
          src={image}
          alt="ImageCard"
          width={width}
          css={styles.image(width)}
        />
      </div>
      <div css={styles.caption}>{caption}</div>
    </>
  );
};

const styles = {
  imagecard: (width: number | undefined) =>
    css({
      borderRadius: "32px",
      width: width ? `${width}px` : "auto",
      maxWidth: `40vw`,
      position: "relative",
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.25)",
    }),
  image: (width: number | undefined) =>
    css({
      display: "block",
      filter: "brightness(100%)",
      borderRadius: "32px",
      width: width ? `${width}px` : "auto",
      maxWidth: `40vw`,
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
