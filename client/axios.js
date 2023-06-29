import axios from 'axios';

const fetchAllPostsURL = 'http://localhost:3000/dashboard/getall';
const createNewPostURL = 'http://localhost:3000/dashboard/create';

export const fetchPosts = () => axios.get(fetchAllPostsURL);

export const createPost = (newPost) => axios.post(createNewPostURL, newPost);
