import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

export const root = style({
  position: "relative",
  display: "flex",
  overflow: "hidden",
  ":after": {
    content: "",
    position: "absolute",
    inset: 0,
    backgroundImage: `linear-gradient(to right, ${themeVars.color.page} 0%, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0) 90%, ${themeVars.color.page} 100%)`,
    pointerEvents: "none",
  },
});

export const scroller = style({
  display: "flex",
  flexShrink: 0,
  whiteSpace: "nowrap",
});

export const item = style({
  paddingRight: tokens.spacing.xl,
  display: "grid",
  placeItems: "center",
  flexShrink: 0,
  color: themeVars.color.foregroundNeutral,
});
