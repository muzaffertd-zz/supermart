import React from 'react';
import './productCard.css';
import StarRatings from 'react-star-ratings';
import {addToCart} from './../../actions';
import {connect} from 'react-redux';

const ProductCard = (props) => {
    return (
        <div className="column">
            <div className="product-card card">
                <img src={`https://think.design/workspace/muzaffer/grocery_images/${props.product.filename}`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.product.title}</h5>
                    <p className="card-text">{props.product.description}</p>
                    <StarRatings
                        rating={props.product.rating}
                        starRatedColor="#ffbc63"
                        starDimension="20px"
                        starSpacing="1px"
                        numberOfStars={5}
                        name='rating'
                        />
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <h6>${props.product.price.toFixed(2)}</h6>
                        <button onClick={()=>{props.addToCart(props.product.id)}} className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
};

export default connect(mapStateToProps, {addToCart})(ProductCard);