import { css } from "@emotion/react";
import { breakpoints, Colours, Sizes } from "../util/constants";

interface Props {
  title: string;
  subtitle?: string;
  logo: string;
  logoPos: "left" | "right";
  children: React.ReactNode;
}

const TimeLinePanel = ({ title, subtitle, logo, logoPos, children }: Props) => {
  return (
    <div css={styles.panel}>
      <div css={styles.logowrapper(logoPos)}>
        <img src={logo} alt="logo" css={styles.logo} width={200}></img>
      </div>

      <div css={styles.information(logoPos)}>
        <div css={styles.title}>{title}</div>
        <div css={styles.subtitle}>{subtitle}</div>
        <div css={styles.children}>{children}</div>
      </div>
    </div>
  );
};

const styles = {
  panel: css(
    breakpoints({
      display: ["flex", "flex", "grid", "grid"],
      flexDirection: ["column", "column", "initial", "initial"],
      justifyContent: ["center", "center", "initial", "initial"],
      alignItems: ["center", "center", "initial", "initial"],
      padding: "0 1rem",
      gridTemplateColumns: "[left] 1fr [right] 1fr",
      gridTemplateRows: "1fr",
      gridAutoFlow: "column",
    })
  ),
  logowrapper: (logoPos: string) =>
    css(
      breakpoints({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gridColumn: logoPos,
        alignItems: logoPos === "left" ? "flex-end" : "flex-start",
        padding:
          logoPos === "left"
            ? ["1rem 0", "1rem 0", "1rem 2rem 1rem 0", "1rem 2rem 1rem 0"]
            : ["1rem 0", "1rem 0", "1rem 0 1rem 2rem", "1rem 0 1rem 2rem"],
        borderLeft:
          logoPos === "right"
            ? [
                "none",
                "none",
                `1px dashed ${Colours.gray4}`,
                `1px dashed ${Colours.gray4}`,
              ]
            : "",
      })
    ),
  logo: css({
    height: "200px",
    borderRadius: "50%",
    objectFit: "contain",
    backgroundColor: Colours.white,
  }),
  information: (logoPos: string) =>
    css(
      breakpoints({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems:
          logoPos === "left"
            ? ["center", "center", "flex-start", "flex-start"]
            : ["center", "center", "flex-end", "flex-end"],

        padding:
          logoPos === "left"
            ? ["1rem 0", "1rem 0", "1rem 0 1rem 2rem", "1rem 0 1rem 2rem"]
            : ["1rem 0", "1rem 0", "1rem 2rem 1rem 0", "1rem 2rem 1rem 0"],
        borderLeft:
          logoPos === "left"
            ? [
                "none",
                "none",
                `1px dashed ${Colours.gray4}`,
                `1px dashed ${Colours.gray4}`,
              ]
            : "",
        textAlign:
          logoPos === "left"
            ? ["center", "center", "left", "left"]
            : ["center", "center", "right", "right"],
      })
    ),
  title: css({
    fontSize: Sizes.xl,
    fontWeight: 700,
    paddingBottom: "0.5em",
  }),
  subtitle: css({
    fontSize: Sizes.large,
    color: Colours.gray4,
    paddingBottom: "0.5em",
  }),
  children: css({
    fontSize: Sizes.med,
    maxWidth: "calc(min(100%, 700px))",
  }),
};

export default TimeLinePanel;
