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
    followings: [],
    followers: [],
    bookmarks: [],
  });
};

export const getUserByUsername = (username: string) => {
  return client.fetch(`*[_type == "user" && username == "${username}"][0] {
    ...,
    "id": _id,
    followings[]->{username, image},
    followers[]->{username, image},
    "bookmarks":bookmarks[]->_id
    }`);
};
