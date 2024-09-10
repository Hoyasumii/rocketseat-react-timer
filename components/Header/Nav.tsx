"use client";

import { Clock, Icon, Scroll, Sun } from "@phosphor-icons/react";
import Link from "next/link";
import React, { ComponentProps } from "react";

type Props = ComponentProps<"nav"> & {
  children?: never;
};

export function Nav({ ...props }: Props) {
  const items =  { "/": Clock, "/history": Scroll };

  return (
    <nav {...props}>
      {Object.entries(items).map(([key, Value], index) => (
        <Link href={key} key={`nav-item-${index}`}>
          <Value weight="regular" />
        </Link>
      ))}
    </nav>
  );
}
