import React from 'react';
import {connect} from 'react-redux';

const List=(props)=>(
    <div>
        {props.userDetail.email}
        
    </div>
);
const mapStateToPropss=(state)=>{
    return {
        userDetail:state.userDetail,
        
    };
};

const connectList=connect(mapStateToPropss)(List);

export default connectList;
