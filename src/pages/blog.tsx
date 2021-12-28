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
            rel="noopener noreferrer external"
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
      height: ["80vh", "80vh", "80vh", "90vh"],
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
