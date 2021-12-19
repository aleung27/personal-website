import { css } from "@emotion/react";
import { Colours, Sizes } from "../util/constants";
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
      {display === "column" && (
        <div css={[styles.images, styles.columnImage]}>
          <ImageCard image={image} caption={caption} />
        </div>
      )}
      <div css={styles.information}>
        <div css={styles.title}>
          {title}
          {tags.map((t) => (
            <Tag tag={t} key={t} />
          ))}
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
      {display === "row" && (
        <div css={styles.images}>
          <ImageCard image={image} caption={caption} />
        </div>
      )}
    </div>
  );
};

const styles = {
  panel: (display: "column" | "row") =>
    css({
      padding: "2em 0",
      display: "flex",
      flexDirection: display,
      alignItems: "center",
      justifyContent: "space-evenly",
    }),
  information: css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "40vw",
  }),
  title: css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: Sizes.xxl,
  }),
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
  images: css({}),
  columnImage: css({ paddingBottom: "5em" }),
};

export default Panel;
