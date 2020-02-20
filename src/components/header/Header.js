import React from 'react';
import logo from './apple.svg';
import {connect} from 'react-redux';
import {
    NavLink
  } from "react-router-dom";

const Header = (props) => {
    let noOfItem = 0;
    if(props.cartItem.length > 0){
        let len = props.cartItem.length;
        for(let i =0; i<len; i++){
            noOfItem += props.cartItem[i].noOfItem;
        }
    }
    return (
        <div className="container-fluid bg-dark position-fixed header">
            <nav className="navbar navbar-expand-lg navbar-dark px-0">
                <NavLink className="navbar-brand" to="/supermart"><img style={{width: '50px'}} src={logo} alt="logo" /> SuperMart</NavLink>

                <div className="d-flex justify-content-between flex-grow-1 align-items-center">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/supermart">Products <span className="sr-only">(current)</span></NavLink>
                    </li>
                    </ul>
                    <div className="my-2 my-lg-0">
                    <NavLink to="/supermart/cart" className="btn btn-primary">
                        Cart <span className="badge badge-light">{noOfItem}</span>
                    </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    );
}

const mapStateToState = (state) => {
    return {
        cartItem: state.cartItems,
    }
};
 
export default connect(mapStateToState,{})(Header);