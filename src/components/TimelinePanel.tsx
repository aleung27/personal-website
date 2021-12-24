import { css } from "@emotion/react";
import { Colours, Sizes } from "../util/constants";

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
      {logoPos === "left" && (
        <div css={styles.logowrapper(logoPos)}>
          <img src={logo} alt="logo" css={styles.logo} width={200}></img>
        </div>
      )}

      <div css={styles.information(logoPos)}>
        <div css={styles.title}>{title}</div>
        <div css={styles.subtitle}>{subtitle}</div>
        <div css={styles.children}>{children}</div>
      </div>

      {logoPos === "right" && (
        <div css={styles.logowrapper(logoPos)}>
          <img src={logo} alt="logo" css={styles.logo} width={200}></img>
        </div>
      )}
    </div>
  );
};

const styles = {
  panel: css({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  }),
  logowrapper: (logoPos: string) =>
    css({
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: logoPos === "left" ? "flex-end" : "flex-start",
      paddingRight: logoPos === "left" ? "2em" : 0,
      paddingLeft: logoPos === "right" ? "2em" : 0,
      borderLeft: logoPos === "right" ? `1px dashed ${Colours.gray4}` : "",
      paddingTop: "1rem",
      paddingBottom: "1rem",
    }),
  logo: css({
    height: "200px",
    borderRadius: "50%",
    objectFit: "contain",
    backgroundColor: Colours.white,
  }),
  information: (logoPos: string) =>
    css({
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: logoPos === "left" ? "flex-start" : "flex-end",
      paddingLeft: logoPos === "left" ? "2em" : 0,
      paddingRight: logoPos === "right" ? "2em" : 0,
      borderLeft: logoPos === "left" ? `1px dashed ${Colours.gray4}` : "",
      paddingTop: "1rem",
      paddingBottom: "1rem",
      textAlign: logoPos === "left" ? "left" : "right",
    }),
  title: css({
    fontSize: Sizes.xl,
    fontWeight: 700,
    paddingBottom: "0.5em",
  }),
  subtitle: css({
    fontSize: Sizes.large,
    color: Colours.gray4,
    paddingBottom: "1em",
  }),
  children: css({
    fontSize: Sizes.med,
    maxWidth: "35vw",
  }),
};

export default TimeLinePanel;
