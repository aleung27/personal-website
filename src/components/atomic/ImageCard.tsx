import { css } from "@emotion/react";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface Props {
  image: string;
  width?: number;
}

const ImageCard = ({ image, width }: Props) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      css={[styles.imagecard(width)]}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={image}
        alt="ImageCard"
        width={width}
        css={styles.image(width, hover)}
      />
      {/* {hover && <FontAwesomeIcon icon={faExpand} css={styles.icon} size="2x" />} */}
    </div>
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
  image: (width: number | undefined, hover: boolean) =>
    css({
      display: "block",
      filter: hover ? "brightness(90%)" : "brightness(100%)",
      borderRadius: "32px",
      width: width ? `${width}px` : "auto",
      maxWidth: `40vw`,
      height: "100%",
    }),
  // icon: css({
  //   position: "absolute",
  //   right: "3%",
  //   top: "3%",
  //   "&:hover": {
  //     cursor: "pointer",
  //     fontSize: "2.25em",
  //   },
  // }),
};

export default ImageCard;
