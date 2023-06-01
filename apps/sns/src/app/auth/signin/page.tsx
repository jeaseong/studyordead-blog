import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";

import Signin from "@components/pages/auth/Signin";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

const SignInPage = async ({ searchParams: { callbackUrl } }: Props) => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }
  const providers = (await getProviders()) ?? {};

  return (
    <section className="flex justify-center mt-[30%]">
      <Signin providers={providers} callbackUrl={callbackUrl ?? "/"} />
    </section>
  );
};

export default SignInPage;
