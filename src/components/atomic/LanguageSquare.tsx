import { css } from "@emotion/react";
import { Colours, Sizes } from "../../util/constants";

interface Props {
  label: string;
  children: React.ReactNode;
}

const LanguageSquare = ({ label, children }: Props) => {
  return (
    <div css={styles.square}>
      {children}
      <span css={styles.label}>{label}</span>
    </div>
  );
};

const styles = {
  square: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "150px",
    height: "150px",
    backgroundColor: Colours.gray1,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    backdropFilter: "blur(15px)",
    borderRadius: "32px",
  }),
  label: css({
    padding: "0.5rem 0",
    fontSize: Sizes.large,
  }),
};

export default LanguageSquare;
