import axios from 'axios';

const baseURL = 'http://localhost:3000/';
const fetchAllPostsURL = 'http://localhost:3000/dashboard/getall';
const createNewPostURL = 'http://localhost:3000/dashboard/create';
const deletePostURL = 'http://localhost:3000/dashboard/delete';

export const fetchPosts = () => axios.get(fetchAllPostsURL);

export const createPost = (newPost) => axios.post(createNewPostURL, newPost);

export const deletePost = (id) => axios.delete(`${baseURL})/${id}`);

export const axiosCreate = axios.create({ baseURL });
