"use client";

import { Clock, Scroll } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentProps } from "react";

type Props = ComponentProps<"nav"> & {
  children?: never;
};

export function Nav({ ...props }: Props) {
  const pathname = usePathname();
  const items = { "/": Clock, "/history": Scroll };

  return (
    <nav {...props}>
      {Object.entries(items).map(([key, Value], index) => (
        <Link className="p-1" href={key} key={`nav-item-${index}`}>
          <Value
            size={28}
            weight="regular"
            className={`${
              pathname === key ? "text-product-light" : "text-gray-100"
            } duration-300 transition-all hover:scale-105 active:scale-100`}
          />
        </Link>
      ))}
    </nav>
  );
}
