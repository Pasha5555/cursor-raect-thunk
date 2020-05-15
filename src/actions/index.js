// export const addTodo = (payload) => (dispatch)=>{
//     dispatch(payload);
// }

import { FETCH_USERS_DATA, SAVE_USERS_DATA, FETCH_USERS_TWEETS, SAVE_USERS_TWEETS } from '../reducers/constants';

export function fetchUsersDataSuccess(obj){
    return {
        type: FETCH_USERS_DATA,
        payload:obj
    }
}

export  function fetchUsersData(url){
    return (dispatch)=>{
        fetch(url)
        .then(response=>{
            if(!response.ok){
                throw new Error(response.statusText)
            }
            return response;
        })
        .then(response=>response.json())
        .then(  obj=>{
             dispatch(fetchUsersDataSuccess(obj.data))
        })
    }
}

export function pushUsersDataSuccess(data){
    console.log(data)
    return{
        type: SAVE_USERS_DATA,
        payload: data
    }
}



export function fetchUsersTweetsSuccess(obj){
    return {
        type: FETCH_USERS_TWEETS,
        payload: obj
    }
}

export  function fetchUsersTweets(url){
    return (dispatch)=>{
        fetch(url)
        .then(response=>{
            if(!response.ok){
                throw new Error(response.statusText)
            }
            return response;
        })
        .then(response=>response.json())
        .then(  obj=>{
             dispatch(fetchUsersTweetsSuccess(obj.data))
        })
    }
}

export function saveUsersTweetsSuccess(data){
    console.log(data)
    return{
        type: SAVE_USERS_TWEETS,
        payload: data
    }
}

