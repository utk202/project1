// parameters are state and action, depending on the action type we return either the state or changes based on the current action
// Here our state is current posts.
import { FETCH_ALL,CREATE,DELETE,LIKE,UPDATE } from "../constants/actionTypes";
export default(posts=[], action) => {
    switch (action.type) {
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        case UPDATE:
        case LIKE: 
            return posts.map((post) => post._id === action.payload._id ? action.payload : post ) ;           //returning an array of updates.
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        default:
            return posts;
    }
};