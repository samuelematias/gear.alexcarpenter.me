import { style } from "@vanilla-extract/css";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

export const root = style({
  position: "sticky",
  top: 0,
  left: 0,
  width: "100%",
  background: "hsla(210, 16.7%, 97.6%, .9)",
  backdropFilter: "blur(15px)",
  zIndex: 1,
});

export const nav = style({
  display: "flex",
  gap: tokens.spacing.md,
  maxWidth: tokens.maxWidth.md,
  marginInline: "auto",
});

export const anchor = style({
  position: "relative",
  paddingBlock: tokens.spacing.md,
  borderTop: "4px solid transparent",
});

export const highlight = style({
  position: "absolute",
  top: -4,
  left: 0,
  width: "100%",
  height: 4,
  backgroundColor: themeVars.color.borderNeutral,
});
