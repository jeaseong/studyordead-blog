import { client } from "./sanity";

const simplePostProjection = `
    ...,
    "username":author->username,
    "userImage": author->image,
    "image": photo,
    "likes": likes[]->username,
    "text": comments[0].comment,
    "comments": count(comments),
    "id":_id,
    "createdAt":_createdAt
`;

export const getFollowingAllPosts = async (username: string) => {
  return client.fetch(
    `*[_type == "post" && author->username == "${username}" 
        || author._ref in *[_type == "user" && username == "${username}"].followings[]._ref] 
    | order(_createdAt desc){${simplePostProjection}}
    `
  );
};
