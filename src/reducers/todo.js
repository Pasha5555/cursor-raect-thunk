import {FETCH_USERS_DATA, SAVE_USERS_DATA, FETCH_USERS_TWEETS, SAVE_USERS_TWEETS } from './constants';
import { userData } from '../components/users/usersData'

let initialState = {
    data: userData,
    tweets: []
}
const todoReducer = (state=initialState, action)=>{
    switch(action.type) {
        case FETCH_USERS_DATA:
            state.data = action.payload;
            return {...state}

        case SAVE_USERS_DATA:
            state.data.push(action.payload);
            return {...state}

        case FETCH_USERS_TWEETS:
            return {...state, tweets: action.payload}
    
        case SAVE_USERS_TWEETS:
            state.tweets.push(action.payload);
            console.log(state.tweets)
            return {...state}
        default:
            return state    
    }
}
 export default todoReducer;