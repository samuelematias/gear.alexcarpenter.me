import { globalFontFace, globalStyle } from "@vanilla-extract/css";
import { tokens } from "./tokens.css";
import { themeVars } from "./theme.css";

globalFontFace("Inter var", {
  fontStyle: "normal",
  fontWeight: "100 900",
  fontDisplay: "swap",
  src: 'url(/fonts/Inter.var.woff2) format("woff2")',
});

globalStyle("html", {
  lineHeight: 1.45,
  WebkitTextSizeAdjust: "100%",
});

globalStyle("body, #__next, .container", {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

globalStyle("body", {
  overflowX: "hidden",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  textRendering: "optimizeLegibility",
  fontFamily: tokens.font.sans,
  backgroundColor: themeVars.color.page,
  color: themeVars.color.foreground,
});

globalStyle("svg", {
  maxWidth: "100%",
  height: "auto",
});
