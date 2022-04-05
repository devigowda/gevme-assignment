import  actionTypes  from "../../constants/actionTypes";
import userConstants from "../../constants/userConstants";
import axios from 'axios';

export const GetUsers = () => {
    return dispatch => {
        axios.get(userConstants.userInfo)
        .then(res => {
            const persons = res.data;
            dispatch({
                type: actionTypes.ACTION_GET_USERS,
                users: persons
            });
        })
    };
};

export const GetPosts = (id) => {
    return dispatch => {
        axios.get(userConstants.postsById+id)
        .then(res => {
            const posts = res.data;
            dispatch({
                type: actionTypes.ACTION_GET_POSTS,
                posts: posts
            });
        })
    };
};
