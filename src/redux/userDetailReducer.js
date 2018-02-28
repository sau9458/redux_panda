import {createStore,combineReducers} from 'redux';

export const addUserDetail=({email,password}={})=>({
type:'ADD-USER',
userdetail:{
    email,
    password
}
});

export const userDetailReducer=(state={},action)=>{
    switch(action.type){
        case 'ADD-USER':
        return[...state,action.userdetail];

        default :
        return state;
    }
};

export const store=createStore(combineReducers({
    userDetail:userDetailReducer
}
));


console.log(store.getState());
