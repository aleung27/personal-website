import facepaint from "facepaint";

export const Colours = {
  black: "#000000",
  white: "#ffffff",
  page: "#fbfbf8",
  menubar: "#eaeac8",
  header: "#ededde",
  gray1: "#f5f5f5",
  gray2: "#f2f2f2",
  gray3: "#c4c4c4",
  gray4: "#707070",
  paleRed: "#ff8080",
  paleGreen: "#7dea7d",
};

export const Sizes = {
  small: "14px",
  med: "18px",
  large: "24px",
  xl: "36px",
  xxl: "48px",
};

export const breakpoints = facepaint([
  "@media only screen and (min-width: 600px)", // Larger phones/portrait ipads
  "@media only screen and (min-width: 768px)", // Ipads and higher
  "@media only screen and (min-width: 992px)", // Laptops and higher
]);
