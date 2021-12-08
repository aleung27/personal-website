import gameData from "./data/GameConstants";
import GameCard from "./atomic/GameCard";
import React, { useState } from "react";
import { css, keyframes } from "@emotion/react";
import { Sizes, Colours } from "../util/constants";

const Game = () => {
  const [score, setScore] = useState<number>(0);
  const [index, setIndex] = useState<number>(0);

  return (
    <div css={styles.root}>
      {index < gameData.length ? (
        <GameCard
          question={gameData[index].question}
          answer={gameData[index].answer}
          explainer={gameData[index].explainer}
          setIndex={setIndex}
          setScore={setScore}
          removeOneShadow={index === gameData.length - 1}
        />
      ) : (
        <div css={styles.card}>
          <div css={styles.text}>
            <span css={styles.heading}>
              &#x1F389; {score}/{gameData.length} &#x1F389;
            </span>
            <p>
              {score === 0
                ? "Frankly impressive to be able to get 0..."
                : score < 5
                ? `Not too bad! Why not shoot me a message to get to know me better ${String.fromCodePoint(
                    0x1f4ac
                  )}`
                : score === gameData.length
                ? `Wow! You must pretty much be me at this point`
                : `Nice job! Why not shoot me a message to get to know me better ${String.fromCodePoint(
                    0x1f4ac
                  )}`}
            </p>
            <button
              onClick={() => {
                setScore(0);
                setIndex(0);
              }}
              css={styles.btn}
            >
              Play Again
            </button>
          </div>
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
  root: css({
    textAlign: "center",
  }),
  card: css({
    position: "relative",
    width: "300px",
    height: "300px",
    backgroundColor: Colours.gray1,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    backdropFilter: "blur(15px)",
    borderRadius: "32px",
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
    animation: `${fadeIn} 0.7s ease-in forwards`,
  }),
  heading: css({
    fontSize: Sizes.xl,
    fontWeight: 500,
  }),
  btn: css({
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

export default Game;
