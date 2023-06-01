"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";

import HomeFillIcon from "@components/ui/icons/HomeFillIcon";
import HomeIcon from "@components/ui/icons/HomeIcon";
import NewFillIcon from "@components/ui/icons/NewFillIcon";
import NewIcon from "@components/ui/icons/NewIcon";
import SearchFillIcon from "@components/ui/icons/SearchFillIcon";
import SearchIcon from "@components/ui/icons/SearchIcon";
import ColorButton from "@components/ui/button/ColorButton";

const MENU = [
  {
    href: "/",
    icon: <HomeIcon />,
    clickedIcon: <HomeFillIcon />,
  },
  {
    href: "/search",
    icon: <SearchIcon />,
    clickedIcon: <SearchFillIcon />,
  },
  {
    href: "/new",
    icon: <NewIcon />,
    clickedIcon: <NewFillIcon />,
  },
];

const Navigation = () => {
  const path = usePathname();
  const { data: session } = useSession();

  return (
    <nav className="flex items-center gap-3">
      {MENU.map((link) => (
        <Link key={link.href} href={link.href}>
          {path === link.href ? link.clickedIcon : link.icon}
        </Link>
      ))}

      {session ? (
        <ColorButton text="sign out" onClick={() => signOut()} />
      ) : (
        <ColorButton text="sign in" onClick={() => signIn()} />
      )}
    </nav>
  );
};

export default Navigation;
