
const signalmentDetailReducer=(state={
    driving_license:false,
    own_car:false,
},action)=>{
    switch(action.type){
        case 'SIGNALMENT-DETAIL':
        return state=action.signalmentDetail;
         
        default :
        return state;
    }
};
export default signalmentDetailReducer; 