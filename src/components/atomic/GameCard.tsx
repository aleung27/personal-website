import { css, keyframes } from "@emotion/react";
import React, { useState, useEffect } from "react";
import { Colours, Sizes } from "../../util/constants";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  question: string;
  answer: boolean;
  explainer: string;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  removeOneShadow: boolean;
}

const GameCard = ({
  question,
  answer,
  explainer,
  setIndex,
  setScore,
  removeOneShadow,
}: Props) => {
  const [chosen, setChosen] = useState<boolean>();
  const [ok, setOk] = useState<boolean>(false);
  const [touchStart, setTouchStart] = useState<number | undefined>(undefined);

  useEffect(() => {
    setTimeout(() => setOk(true), 100);
  }, [chosen]);

  return (
    <div css={styles.card(removeOneShadow)}>
      {chosen === undefined ? (
        <>
          <div css={[styles.text, ok ? styles.anim : ""]}>
            <span css={styles.heading}>True or False?</span>
            <p>{question}</p>
          </div>
          <div
            css={styles.choices}
            onTouchStart={(e) => setTouchStart(e.changedTouches[0].pageX)}
            onTouchEnd={(e) => {
              if (touchStart) {
                if (touchStart - e.changedTouches[0].pageX > 100) {
                  if (answer) setScore((s) => s + 1);
                  setChosen(true);
                  setOk(false);
                } else if (e.changedTouches[0].pageX - touchStart > 100) {
                  if (!answer) setScore((s) => s + 1);
                  setChosen(false);
                  setOk(false);
                }
              }
            }}
          >
            <button
              css={[styles.btn, styles.leftBtn]}
              onClick={() => {
                if (!answer) setScore((s) => s + 1);
                setChosen(false);
                setOk(false);
              }}
            >
              <span>False</span>
            </button>
            <button
              css={[styles.btn, styles.rightBtn]}
              onClick={() => {
                if (answer) setScore((s) => s + 1);
                setChosen(true);
                setOk(false);
              }}
            >
              <span>True</span>
            </button>
          </div>
        </>
      ) : (
        <div css={[styles.text, ok ? styles.anim : ""]}>
          <span css={styles.heading}>
            {answer
              ? `${String.fromCodePoint(0x2705)} True`
              : `${String.fromCodePoint(0x274c)} False`}
          </span>
          <p>{explainer}</p>
          <button
            onClick={() => {
              setIndex((i) => i + 1);
              setChosen(undefined);
              setOk(false);
            }}
            css={styles.next}
          >
            Next <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}
    </div>
  );
};

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

const styles = {
  card: (removeOneShadow: boolean) =>
    css({
      position: "relative",
      width: "300px",
      height: "300px",
      backgroundColor: Colours.gray1,
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "32px",
      "&:before": {
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        content: '""',
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: Colours.gray1,
        left: "7px",
        top: "5px",
        zIndex: -1,
        borderRadius: "32px",
      },
      "&:after": {
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        content: '""',
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: Colours.gray1,
        left: "12px",
        top: "10px",
        zIndex: -2,
        borderRadius: "32px",
        display: removeOneShadow ? "none" : "initial",
      },
    }),
  heading: css({
    fontSize: Sizes.large,
    fontWeight: 500,
  }),
  text: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "calc(100% - 1rem)",
    margin: "1rem 1rem",
    fontSize: Sizes.med,
    opacity: 0,
  }),
  choices: css({
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    top: "0",
  }),
  btn: css({
    position: "relative",
    height: "100%",
    width: "50%",
    border: "none",
    padding: "0",
    cursor: "pointer",
    transition: "opacity 0.5s ease-in-out",
    fontSize: Sizes.large,
    fontWeight: 500,
  }),
  leftBtn: css({
    borderTopLeftRadius: "32px",
    borderBottomLeftRadius: "32px",
    backgroundColor: Colours.paleRed,
    opacity: 0,
    "& span": {
      position: "absolute",
      right: "170px",
      top: "136px",
    },
    "&:hover": {
      opacity: 0.7,
    },
  }),
  rightBtn: css({
    borderTopRightRadius: "32px",
    borderBottomRightRadius: "32px",
    backgroundColor: Colours.paleGreen,
    opacity: 0,
    "& span": {
      position: "absolute",
      left: "170px",
      top: "136px",
    },
    "&:hover": {
      opacity: 0.7,
    },
  }),
  anim: css({
    animation: `${fadeIn} 0.7s ease-in forwards`,
  }),
  next: css({
    border: "none",
    padding: "0",
    cursor: "pointer",
    color: Colours.gray4,
    fontSize: Sizes.med,
    backgroundColor: Colours.gray1,
    "&:hover": {
      textDecoration: "underline",
    },
  }),
};

export default GameCard;
