import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=2132dasdadsasdjij0900909erewrerewrewrewa12321321';
export const FETCH_POSTS = 'FETCH_POSTS';
export function fetchPosts(){
  const request = axios.get(`${ROOT_URL}/posts/${API_KEY}`);
  return {
    type : FETCH_POSTS,
    payload : request
  }
}
