// import { FETCH_ALL } from '../constants/actionTypes.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes.js';

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    
    case CREATE:
      console.log(` this is reduser create`);
      return [...posts, action.payload];
   
    default:
      return posts;
  }
};

//  posts;