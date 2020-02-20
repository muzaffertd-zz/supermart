import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {updateCart} from './../../actions';
import delCart from './trash-alt-solid.svg';
import './Cart.css';
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            totalAmt: 0
         }
    }
    componentDidMount(){
        let totalAmt = 0;
        if(this.props.cartItems.length){
            let len = this.props.cartItems.length;
            for(let i =0; i< len; i++){
                totalAmt += this.props.cartItems[i].noOfItem * this.props.products[this.props.cartItems[i].id-1].price;
            }
        }
        this.setState({
            totalAmt
        })
    }
    componentDidUpdate(prevProps){
        let totalAmt = 0;
        if(prevProps !== this.props){
            if(this.props.cartItems.length){
                let len = this.props.cartItems.length;
                for(let i =0; i< len; i++){
                    totalAmt += this.props.cartItems[i].noOfItem * this.props.products[this.props.cartItems[i].id-1].price;
                }
            }
            this.setState({
                totalAmt
            })
        }
    }
    renderCartItem = ()=>{
        if(this.props.cartItems.length){
            return this.props.cartItems.map((item,i)=>{
                return (<div key={i} className="media">
                    <figure className="align-self-start mr-3" style={{height: 100, overflow: 'hidden', width: 100}}>
                    <img style={{maxWidth:'100%',height: '100%', minWidth: '100%'}} src={`https://think.design/workspace/muzaffer/grocery_images/${this.props.products[item.id-1].filename}`}  alt="..." />
                    </figure>
                    <div className="media-body">
                        <div className="d-flex justify-content-between flex-column flex-md-row">
                            <h5>{this.props.products[item.id-1].title}</h5>
                            <div className="w-25 text-right d-flex justify-content-between align-items-center">
                                <span className="mx-md-4 qty-block" >Qty: 
                                <button onClick={()=>{this.props.updateCart({id: item.id, op: 'inc'})}}>+</button> 
                                <span className="qty-cont">{item.noOfItem}</span> 
                                <button onClick={()=>{this.props.updateCart({id: item.id, op: 'dec'})}}>-</button></span>
                                <span className="ml-4">${(item.noOfItem * this.props.products[item.id-1].price).toFixed(2)}</span>
                                <button className="btn" onClick={()=>{this.props.updateCart({id: item.id, op: 'del'})}}><img style={{display:'inline-block',width:20}} src={delCart} alt="delete icon" /></button>
                            </div>
                        </div>
                    </div>
                </div>);
            })
        }
        else{
            return <Link to="/supermart" style={{fontSize: '20px', fontWeight: 'bold', color: '#2d91fb', textDecoration: 'underline'}}>Add Item To Cart</Link>;
        }
    }
    render() { 
        return ( <div className="container mt-4">
            <h3>Cart Items</h3>
            <div className="mt-5">
            {this.renderCartItem()}
            </div>
            <div className="border-top mt-4 pt-4 text-right">
                <h3>Total: {this.state.totalAmt.toFixed(2)}</h3>
            </div>
        </div> );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        cartItems: state.cartItems
    }
};
 
export default connect(mapStateToProps,{updateCart})(Cart);