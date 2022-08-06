import * as React from "react";
import { createElement } from "react";
import type { PolymorphicComponentProps } from "types";
import type { Sprinkles } from "@/styles/sprinkles.css";
import { sprinkles } from "@/styles/sprinkles.css";
import clsx from "clsx";

export type BoxProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  Sprinkles
>;

export const Box = <C extends React.ElementType = "div">({
  as,
  position,
  className,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingX,
  paddingY,
  display,
  flexDirection,
  alignItems,
  justifyContent,
  placeItems,
  gap,
  columnGap,
  rowGap,
  gridTemplateColumns,
  gridColumnStart,
  gridColumnEnd,
  width,
  height,
  aspectRatio,
  ...restProps
}: BoxProps<C>) => {
  const atomClasses = clsx(
    sprinkles({
      position,
      padding,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      paddingX,
      paddingY,
      display,
      flexDirection,
      alignItems,
      justifyContent,
      placeItems,
      gap,
      columnGap,
      rowGap,
      gridTemplateColumns,
      gridColumnStart,
      gridColumnEnd,
      width,
      height,
      aspectRatio,
    }),
    className
  );
  const component = as || "div";
  return createElement(component, { className: atomClasses, ...restProps });
};
