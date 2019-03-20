import React from 'react';
import { addProduct } from '../../../Actions';
import { connect } from 'react-redux';
import Styled from 'styled-components';
import Dropdown from './Dropdown';

class AddProduct extends React.Component {
    constructor(){
        super();
        this.state = {
            itemAdded: '',
            store: ''
        }
    }

    handleChange = (event) => {
        this.setState({itemAdded: event.target.value})
        console.log(this.state.itemAdded);
    }

    addNewProduct = () => {
        this.props.addProduct(this.state.itemAdded);
        this.setState({itemAdded: ''})
    }

    setStore = (e) => {
        this.setState({store: e.target.value})
    }
    
    render() {
        return(
            <div>
                <input type="text"
                    value={this.state.itemAdded}
                    placeholder="Add item"
                    onChange={this.handleChange}
                    />
                    <Dropdown setStore={this.setStore}/>
                    <button onClick={this.addNewProduct}>Add</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        stores: state.searchData.stores
    }
  }
  
  const mapActionsToProps = {
      addProduct: addProduct,
  }
  export default connect( mapStateToProps, mapActionsToProps)(AddProduct);