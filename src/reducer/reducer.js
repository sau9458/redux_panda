import addUserDetail from '../action/action';
const userDetailReducer=(state={},action)=>{
    switch(action.type){
        case 'ADD-USER':
        return[...state,action.userdetail];

        default :
        return state;
    }
};
export default userDetailReducer;
