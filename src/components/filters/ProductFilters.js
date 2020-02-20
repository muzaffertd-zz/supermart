import React, { useEffect } from 'react';
import {filterItem} from './../../actions';
import {connect} from 'react-redux';

const ProductFilters = (props) => {
    useEffect(() => {
        if(window.innerWidth > 500){
            document.querySelector('.filter-btn-group .btn.active').classList.remove('active');
            document.querySelectorAll('.filter-btn-group .btn')[props.ind].classList.add('active');
        }
        else{
            document.querySelector('.filter-options select').selectedIndex = props.ind;
        }
      });

      const renderItem = () => {
         
          if(window.innerWidth > 500){
              return (
                <div className="text-center filter-btn-group">
                    <button type="button" onClick={(e) => {props.filterItem({category: 'all', ind: 0})}} className="btn btn-secondary mx-2 active">All</button>
                    <button type="button" onClick={(e) => {props.filterItem({category: 'dairy', ind: 1})}} className="btn btn-secondary mx-2">Dairy</button>
                    <button type="button" onClick={(e) => {props.filterItem({category: 'meat', ind: 2})}} className="btn btn-secondary mx-2">Meat</button>
                    <button type="button" onClick={(e) => {props.filterItem({category: 'fruit', ind: 3})}} className="btn btn-secondary mx-2">Fruits</button>
                    <button type="button" onClick={(e) => {props.filterItem({category: 'vegetable', ind: 4})}} className="btn btn-secondary mx-2">Vegetables</button>
                </div>
              );
          }
          else{
              return (
                  <div className="filter-options">
                      <select className="form-control" onChange={(e)=>{props.filterItem({category: e.target.value,ind:e.target.selectedIndex})}}>
                          <option value="all">All</option>
                          <option value="dairy">Dairy</option>
                          <option value="meat">Meat</option>
                          <option value="fruit">Fruits</option>
                          <option value="vegetable">Vegetables</option>
                      </select>
                  </div>
              )
          }
      }
      
    return (
        renderItem()
    );
};

const mapStateToProps = (state) => {
    return {
        ind: state.filterProduct.ind
    }
}

export default connect(mapStateToProps, {filterItem})(ProductFilters);