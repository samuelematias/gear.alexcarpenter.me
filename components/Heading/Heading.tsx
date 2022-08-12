import type { Sprinkles } from "@/styles/sprinkles.css";
import clsx from "clsx";
import { sprinkles } from "@/styles/sprinkles.css";

interface HeadingProps {
  as?: "h1" | "h2" | "h3";
  fontSize?: Sprinkles["fontSize"];
  children: React.ReactNode;
}

export const Heading = ({
  as: Component = "h2",
  children,
  fontSize = "md",
}: HeadingProps) => {
  return (
    <Component
      className={clsx(
        sprinkles({
          fontSize,
        })
      )}
    >
      {children}
    </Component>
  );
};
