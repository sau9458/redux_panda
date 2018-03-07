import React from 'react';
import {connect} from 'react-redux';

const List=(props)=>(
    <div>
        {props.userDetail[props.userDetail.length-1] && props.userDetail[props.userDetail.length-1].email}
        {/* {props.singlamentDetail[props.singlamentDetail.length] && 
        props.singlamentDetail[props.singlamentDetail.length].Distance} */}

    </div>
);
const mapStateToProps=(state)=>{
    return {
        userDetail:state.userDetail,
        singlamentDetail:state.singlamentDetail
    };
};

const connectList=connect(mapStateToProps)(List);

export default connectList;
