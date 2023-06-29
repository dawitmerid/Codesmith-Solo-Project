import axios from 'axios';

const postsURL = 'http://localhost:3000/dashboard';

export const fetchPosts = () => axios.get(postsURL);
