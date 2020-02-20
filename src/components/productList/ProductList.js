import React from 'react';
import ProductCard from  './../productCard/ProductCard';
import {connect} from 'react-redux';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { style:{
            columnWidth: '320px',
            columnGap: '15px',
            width: '90%',
            margin: '0 auto',
            textAlign: 'center'
    } };
        this.con = React.createRef();
    }
    renderProducts(){
        
        return this.props.products.map((item, i) => {
            return <ProductCard key={i} product={item} />
        })
    }
    render() { 
        return ( <div ref={this.con} style={this.state.style}>{this.renderProducts()}</div> );
    }
}
 
const mapStateToProps = (state) => {
    return{
        products: state.filterProduct.filterProductList
    }
}
export default connect(mapStateToProps)(ProductList);