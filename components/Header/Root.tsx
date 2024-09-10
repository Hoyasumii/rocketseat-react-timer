import { Svg } from "@/components";
import { ComponentProps } from "react";

export function Root({ children, ...props }: ComponentProps<"header">) {
  return (
    <header {...props}>
      <Svg.Logo />
      {children}
    </header>
  );
}
