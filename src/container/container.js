import React from 'react';
import {connect} from 'react-redux';

const List=(props)=>(
    <div>
        {props.userDetail[props.userDetail.length-1] && props.userDetail[props.userDetail.length-1].email}
        
    </div>
);
const mapStateToPropss=(state)=>{
    return {
        userDetail:state.userDetail,
        
    };
};

const connectList=connect(mapStateToPropss)(List);

export default connectList;
