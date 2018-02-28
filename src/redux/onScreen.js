import React from 'react';
import {connect} from 'react-redux';
const List=(props)=>(
    <div>
        <p>grfedgd</p>
        {props.userDetail[1]}
    </div>
);
const mapStateToProps=(state)=>{
    return {
        userDetail:state.userDetail
    };
};

const connectList=connect(mapStateToProps)(List);

export default connectList;