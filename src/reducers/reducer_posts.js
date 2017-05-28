import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function(state={}, action) {
  switch (action.type) {

  case FETCH_POST:
    // ES5 way
    // const post = action.payload.data;
    // const newState = { ...state };
    // newState[post.id] = post;
    // return newState;

    // ES6 way below.  The same thing as above.  Making a new key and adding a value to it.
    return { ...state, [action.payload.data.id]: action.payload.data };

  case FETCH_POSTS:
    return _.mapKeys(action.payload.data, 'id'); //receives an array in this case, so change it to object by id using lodash mapKeys.
    // example:
    // const posts = [
    //   { id: 4, title: 'hi' },
    //   { id: 25, title: 'bye' },
    //   { id: 36, title: 'How are you'}
    // ];
    // state = _.mapKeys(posts, 'id')
    // This will turn into
    //   {"4":{"id":4,"title":"hi"},"25":{"id":25,"title":"bye"},"36":{"id":36,"title":"How are you"}}

  // If action.type is not FETCH_POSTS, then return state as default.
  default:
    return state;
  }
}
