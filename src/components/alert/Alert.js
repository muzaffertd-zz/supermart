import React from 'react';
import './alert.css';
import {connect} from 'react-redux';

const Alert = (props) => {
    if(props.alertMsg !==''){
        console.log('props recieved');
        document.querySelector('.alert-box').classList.remove('active');
        setTimeout(()=>{
            document.querySelector('.alert-box').classList.add('active');
        },200)
    }
    return(
        <div className="alert-box">
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                {props.alertMsg}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        alertMsg: state.alertMsg
    }
}

export default connect(mapStateToProps)(Alert);