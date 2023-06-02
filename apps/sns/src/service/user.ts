import { client } from "./sanity";

type OAuthUser = {
  id: string;
  email?: string;
  name: string;
  username: string;
  image?: string | null;
};

export const addUser = async ({
  id,
  username,
  name,
  image,
  email,
}: OAuthUser) => {
  return client.createIfNotExists({
    _id: id,
    _type: "user",
    name,
    username,
    email,
    image,
    following: [],
    followers: [],
    bookmarks: [],
  });
};
