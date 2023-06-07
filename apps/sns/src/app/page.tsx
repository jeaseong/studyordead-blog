import Aside from "@components/pages/home/Aside";
import FollowingList from "@components/pages/home/FollowingList";
import PostList from "@components/pages/home/PostList";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) {
    redirect("/auth/signin");
  }
  return (
    <section className="flex flex-col w-full max-w-screen-sm p-5 md:flex-row">
      <section className="w-full mr-5 basis-3/4">
        <FollowingList />
        <PostList />
      </section>
      <Aside user={user} />
    </section>
  );
}
