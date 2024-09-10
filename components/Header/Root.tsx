import { Svg } from "@/components";
import { ComponentProps } from "react";

type Props = ComponentProps<"header">;

export function Root({ children, ...props }: Props) {
  return (
    <header {...props}>
      <Svg.Logo />
      {children}
    </header>
  );
}
