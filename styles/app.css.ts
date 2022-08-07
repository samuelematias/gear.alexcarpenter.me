import { globalFontFace, globalStyle } from "@vanilla-extract/css";
import { tokens } from "./tokens.css";
import { themeVars } from "./theme.css";

// globalFontFace("Inter", {
//   fontStyle: "normal",
//   fontWeight: "100 900",
//   fontDisplay: "optional",
//   src: 'url(/fonts/inter-var-latin.woff2) format("woff2")',
//   unicodeRange:
//     "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
// });

// globalFontFace("JetBrains Mono Web", {
//   fontStyle: "normal",
//   fontDisplay: "optional",
//   src: 'url(/fonts/JetBrainsMono.woff2) format("woff2")',
// });

globalStyle("html", {
  lineHeight: 1.5,
  WebkitTextSizeAdjust: "100%",
});

globalStyle("body", {
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  textRendering: "optimizeLegibility",
  paddingTop: tokens.spacing.xl,
  paddingRight: tokens.spacing.md,
  paddingBottom: tokens.spacing.xl,
  paddingLeft: tokens.spacing.md,
  fontFamily: tokens.font.sans,
  backgroundColor: themeVars.color.page,
  color: themeVars.color.foreground,
});

globalStyle("a:not([class])", {
  textDecoration: "underline",
  textDecorationColor: themeVars.color.underline,
  textDecorationThickness: 2,
});

globalStyle("a:not([class]):hover", {
  textDecorationColor: themeVars.color.underlineHover,
});

globalStyle("a:focus-visible", {
  outlineWidth: "2px",
  outlineStyle: "solid",
  outlineOffset: "2px",
  outlineColor: "#3e91f7",
});

globalStyle("time", {
  fontFamily: tokens.font.mono,
  // fontSize: tokens.fontSize.sm,
  color: themeVars.color.foregroundSecondary,
});

globalStyle(".container", {
  marginInline: "auto",
  maxWidth: "48rem",
});
