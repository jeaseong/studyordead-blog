"use client";

import Avatar from "@components/ui/Avatar";
import { User } from "@model/user";
import { useSession } from "next-auth/react";
import Link from "next/link";

const LINK = [
  {
    text: "About",
    href: "",
  },
  {
    text: "Help",
    href: "",
  },
  {
    text: "Press",
    href: "",
  },
  {
    text: "API",
    href: "",
  },
  {
    text: "Jobs",
    href: "",
  },
  {
    text: "Privacy",
    href: "",
  },
  {
    text: "Terms",
    href: "",
  },
  {
    text: "Location",
    href: "",
  },
  {
    text: "Language",
    href: "",
  },
];

type Props = {
  user: User;
};

const Aside = ({ user: { name, username, image } }: Props) => {
  return (
    <aside className="flex flex-col gap-5">
      <section className="flex items-center gap-2">
        <Avatar image={image} border="none" />
        <div className="flex flex-col ">
          <span className="text-sm font-bold ">{username}</span>
          <span className="text-sm leading-3">{name}</span>
        </div>
      </section>
      <section className="flex flex-wrap gap-2 text-xs text-gray-500">
        {LINK.map((link) => (
          <span key={link.text}>{link.text}</span>
        ))}
      </section>
      <section>
        <h3 className="font-bold text-gray-400 text-md">
          @Copyright 나의 sns from js
        </h3>
      </section>
    </aside>
  );
};

export default Aside;
