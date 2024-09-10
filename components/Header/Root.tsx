import { Svg } from "@/components";
import { ComponentProps } from "react";

type Props = ComponentProps<"header"> & {
  className?: never;
};

export function Root({ children, className, ...props }: Props) {
  return (
    <header className="px-10 pt-10 flex gap-4 justify-between" {...props}>
      <Svg.Logo />
      {children}
    </header>
  );
}
