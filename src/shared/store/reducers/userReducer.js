 import  actionTypes  from "../../constants/actionTypes";

  const INITIAL_STATE = {
    Users: [],
    Posts:[],
    loading : false,
  };

  export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
      case actionTypes.ACTION_GET_USERS: {
        return {
          ...state,
          Users: action.users,
          loading: false
        };
      }
      case actionTypes.ACTION_GET_POSTS: {
        return {
          ...state,
          Posts: action.posts,
          loading: false
        };
      }
      default:
        return state;
    }
  };