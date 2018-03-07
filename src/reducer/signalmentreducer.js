
const signalmentDetailReducer=(state={},action)=>{
    switch(action.type){
        case 'SIGNALMENT-DETAIL':
        return[...state,action.signalmentDetail];
         
        default :
        return state;
    }
};
export default signalmentDetailReducer; 