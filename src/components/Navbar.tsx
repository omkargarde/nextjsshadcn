"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed inset-x-0 top-10 z-50 mx-auto max-w-2xl", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="home">
            test
          </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All courses</HoveredLink>
            <HoveredLink href="/courses">Basic music theory</HoveredLink>
            <HoveredLink href="/courses">Advacned compostion</HoveredLink>
            <HoveredLink href="/courses">Songwriting</HoveredLink>
            <HoveredLink href="/courses">Music production</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
