import HelmetWrapper from "../components/HelmetWrapper";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { css } from "@emotion/react";
import { breakpoints, Sizes } from "../util/constants";
import { useState } from "react";

const Blog = () => {
  const [isFixed, setIsFixed] = useState<boolean>(false);

  return (
    <div>
      <HelmetWrapper fixed={isFixed} />
      {/*
        //@ts-ignore */}
      <ct></ct>
      <Navbar setIsFixed={setIsFixed} />

      <div css={styles.root}>
        <div>
          I write my thoughts, programming or otherwise, on{" "}
          <a
            href="https://medium.com/@aleung27"
            target="_blank"
            rel="noopener external"
          >
            Medium
          </a>
          .
        </div>
        <div>Feel free to check it out and read some of my articles!</div>
      </div>

      <Footer />
    </div>
  );
};

const styles = {
  root: css(
    breakpoints({
      height: [
        "calc(100vh - 150px)",
        "calc(100vh - 150px)",
        "calc(100vh - 150px)",
        "calc(100vh - 75px)",
      ],
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontSize: Sizes.large,
      margin: "0 1rem",
    })
  ),
};

export default Blog;
