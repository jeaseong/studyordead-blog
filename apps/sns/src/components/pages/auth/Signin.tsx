"use client";

import ColorButton from "@components/ui/button/ColorButton";
import { ClientSafeProvider, signIn } from "next-auth/react";

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};

const Signin = ({ providers, callbackUrl }: Props) => {
  return (
    <div>
      {Object.values(providers).map(({ name, id }) => (
        <ColorButton
          key={name}
          text={`Sign In with ${name}`}
          onClick={() => signIn(id, { callbackUrl })}
          size="big"
        />
      ))}
    </div>
  );
};

export default Signin;
