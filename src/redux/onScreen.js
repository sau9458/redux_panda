import React from 'react';
import {connect} from 'react-redux';
const List=(props)=>(
    <div>
        <p>g</p>
        
    {props.userDetail.length}
    </div>
);
const mapStateToProps=(state)=>{
    return {
        userDetail:state.userDetail
    };
};

const connectList=connect(mapStateToProps)(List);

export default connectList;