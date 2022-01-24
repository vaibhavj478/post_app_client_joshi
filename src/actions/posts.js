import { CREATE, FETCH_ALL } from "../constants/actionTypes";
import * as api from '../api/index'



export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    console.log(`this is action getpost ${data}`)
    dispatch({ type: FETCH_ALL, payload: data });
    console.log(`this is action getpost ${data}`)
  } catch (error) {
    console.log(error.message);
  }
};


export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    console.log(`this is action create post `)
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
