import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";
// Temp data
// const users  = [
//     {id:1,name:'Tom'},
//     {id:2,name:'Jerry'},
//     {id:3,name:'Kane'},
//     {id:4,name:'Peter'}
// ]
// const posts = [
// {id:1, title:'post 1', body:'.....', userId:1},
// {id:2, title:'post 2', body:'.....', userId:2},
// {id:3, title:'post 3', body:'.....', userId:3},
// {id:4, title:'post 4', body:'.....', userId:4},
// ];
export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
