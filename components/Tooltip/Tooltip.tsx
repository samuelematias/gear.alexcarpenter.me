import * as React from "react";
import type { TooltipProps } from "@radix-ui/react-tooltip";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as styles from "./Tooltip.css";

const Tooltip = ({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  ...props
}: TooltipProps & { content: string }) => {
  return (
    <TooltipPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
    >
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Content className={styles.content} {...props}>
        {content}
        <TooltipPrimitive.Arrow
          className={styles.arrow}
          width={11}
          height={5}
        />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  );
};

export { Tooltip };
