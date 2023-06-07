"use client";

import useSWR from "swr";
import { PropagateLoader } from "react-spinners";

import { DetailUser } from "@model/user";
import Link from "next/link";
import Avatar from "@components/ui/Avatar";
import ScrollableBar from "@components/ui/ScrollableBar";

const FollowingList = () => {
  const { data, isLoading } = useSWR<DetailUser>("/api/account");

  const users = data?.followings && [
    ...data.followings,
    ...data.followings,
    ...data.followings,
  ];
  // const users = undefined;
  return (
    <section className="flex items-center justify-center w-full p-5 rounded-lg shadow-sm shadow-neutral-300 min-h-[90px] overflow-x-auto">
      {isLoading ? (
        <PropagateLoader size={8} color="#36d7b7" />
      ) : (
        (!users || users.length === 0) && <p>너 친구가 없네...</p>
      )}
      {users && users.length > 0 && (
        <ScrollableBar>
          {users.map(({ image, username }) => (
            <Link
              key={username}
              className="flex flex-col items-center w-20"
              href={`/user/${username}`}
            >
              <Avatar image={image} />
              <p className="w-full overflow-hidden text-xs text-center text-ellipsis">
                {username}
              </p>
            </Link>
          ))}
        </ScrollableBar>
      )}
    </section>
  );
};

export default FollowingList;
