import {combineReducers} from 'redux';

import products from './../data/products.json';

const defaultCart = [{id: 1, noOfItem: 1},
    {id: 13, noOfItem: 1},
    {id: 38, noOfItem: 2},
    {id: 26, noOfItem: 1}];

const productsList = (state = products, action) => {
    return state;
}

const alertMsg = (msg = '', action)=> {
    if(action.type === 'ADD_TO_CART'){
        let index = products.findIndex(item => item.id === action.payload);
        msg = products[index].title;
        return `${msg} added to cart.`;
    }
    return msg;
};

const cartItems = (state = defaultCart, action) => {
    if(action.type === 'ADD_TO_CART'){
        let index = state.findIndex(item => item.id === action.payload);
        
        if( index !== -1){
            state[index].noOfItem+=1;
            return [...state];
        }
        else{
            return [...state, {id: action.payload, noOfItem: 1}];
        }
    }
    if(action.type === 'UPDATE_CART'){
        if(action.payload.op === 'del')
            return state.filter((item)=>item.id!==action.payload.id);
        else if(action.payload.op === 'inc'){
            return state.map((item)=>{
                if(item.id === action.payload.id){
                    item.noOfItem++;
                }
                return item;
            })
        }
        else if(action.payload.op === 'dec'){
            let updatedCartItems = state.map((item)=>{
                if(item.id === action.payload.id){
                    --item.noOfItem;
                }
                return item;
            });
            updatedCartItems = updatedCartItems.filter((item)=>item.noOfItem!==0);
            return updatedCartItems;
        }
    }
    return state;
}

const filterItem = (state = {filterProductList:products,ind:0}, action) => {
    let filterProductList =[];
    if(action.type === 'FILTER_ITEM'){
        state.products = productsList();
        if(action.payload.category !== 'all'){
            let len = state.products.length;
            for(let i =0; i<len; i++){
                if(state.products[i].type === action.payload.category){
                    filterProductList.push(state.products[i])
                }
            }
            return {filterProductList,ind:action.payload.ind};
        }
        else{
            return {filterProductList:state.products,ind:0};
        }
    }
    else{
        return {filterProductList:state.filterProductList,ind:state.ind};
    }
}

export default combineReducers({
    products: productsList,
    cartItems,
    filterProduct: filterItem,
    alertMsg
})
