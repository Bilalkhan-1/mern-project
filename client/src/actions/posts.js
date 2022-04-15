import * as api from "../api";

//action creators
//dispatching action due to redux thunk

//action creators are functions that create actions that just has a type and a payload
// a payload is just storage of the data

// an action creator is reusable, portable and easy to test
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data }); //this is only an action
  } catch (error) {
    console.log(error.message);
  }
};
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
