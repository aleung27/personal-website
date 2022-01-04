import { css } from "@emotion/react";
import { Colours, Sizes, breakpoints } from "../util/constants";
import ImageCard from "./atomic/ImageCard";
import Tag from "./atomic/Tag";

interface Props {
  title: string;
  subtitle: string;
  tags: string[];
  image: string;
  caption: string;
  descriptionHeading?: string;
  links?: JSX.Element[];
  children: React.ReactNode;
  display: "column" | "row";
}

const Panel = ({
  title,
  subtitle,
  tags,
  image,
  caption,
  descriptionHeading,
  links,
  children,
  display,
}: Props) => {
  return (
    <div css={styles.panel(display)}>
      <div css={styles.information(display)}>
        <div css={styles.title}>
          <h3 css={styles.heading}>{title}</h3>
          <div css={styles.tags}>
            {tags.map((t) => (
              <Tag tag={t} key={t} />
            ))}
          </div>
        </div>
        <div css={styles.subtitle}>
          {subtitle}
          {links}
        </div>
        {!!descriptionHeading && (
          <div css={styles.descriptionHeading}> {descriptionHeading} </div>
        )}
        <div css={styles.description}>{children}</div>
      </div>
      <div css={styles.images(display)}>
        <ImageCard image={image} caption={caption} />
      </div>
    </div>
  );
};

const styles = {
  panel: (display: "column" | "row") =>
    css(
      breakpoints({
        padding: "2em 1rem",
        display: "flex",
        flexDirection: [
          "column-reverse",
          "column-reverse",
          "column-reverse",
          display === "column" ? "column-reverse" : "row",
        ],
        alignItems: "center",
        justifyContent: [
          "flex-end",
          "flex-end",
          "flex-end",
          display === "column" ? "flex-end" : "space-evenly",
        ],
      })
    ),
  information: (display: "column" | "row") =>
    css(
      breakpoints({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 2rem",
        width: ["100%", "100%", "100%", display === "column" ? "100%" : "50%"],
      })
    ),
  title: css(
    breakpoints({
      display: "flex",
      flexDirection: ["column", "column", "row", "column"],
      alignItems: ["flex-start", "flex-start", "center", "flex-start"],
      fontSize: Sizes.xxl,
    })
  ),
  heading: css({
    display: "inline",
    margin: 0,
    fontSize: Sizes.xxl,
    fontWeight: 400,
  }),
  tags: css(
    breakpoints({
      display: ["none", "flex", "flex", "flex"],
      paddingBottom: ["0", "0.5em", "0", "0.5em"],
      paddingLeft: ["0", "0", "10px", "0"],
    })
  ),
  subtitle: css({
    fontWeight: 300,
    fontSize: Sizes.large,
  }),
  descriptionHeading: css({
    fontSize: Sizes.large,
    color: Colours.gray4,
    padding: "1em 0",
  }),
  description: css({
    fontSize: Sizes.med,
  }),
  images: (display: "column" | "row") =>
    css(
      breakpoints({
        width: ["100%", "100%", "100%", display === "column" ? "100%" : "50%"],
        padding: "1rem 0",
      })
    ),
};

export default Panel;
