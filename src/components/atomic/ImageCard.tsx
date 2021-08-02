import { css } from "@emotion/react";

interface Props {
  image: string;
  width: number;
}

const ImageCard = ({ image, width }: Props) => {
  return (
    <div css={[styles.imagecard(width), styles.div]}>
      <img
        src={image}
        alt="ImageCard"
        width={width}
        css={styles.imagecard(width)}
      />
    </div>
  );
};

const styles = {
  imagecard: (width: number) =>
    css({
      borderRadius: "32px",
      width: `${width}px`,
    }),
  div: css({
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.25)",
  }),
};

export default ImageCard;
