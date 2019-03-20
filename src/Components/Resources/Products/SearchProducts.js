import React from 'react';
import { toggleAdd, getProducts, searchProducts } from '../../../Actions';
import { connect } from 'react-redux';
import Styled from 'styled-components';
import AddProduct from './AddProduct';
import { withRouter } from 'react-router-dom';


const ResultsList = Styled.div `
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    
`;

const Result = Styled.div `
    width: 300px;
    height: auto;
    margin: 50px;
`;

const SearchBox = Styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

const SearchContainer = Styled.div `
    display: flex;
    justify-content: space-evenly;
`;

class SearchProducts extends React.Component {
    constructor() {
        super();
        this.state = {
            products: ["1", "2", "3"],
            searchTerm: "",
        }
    }

    handleSearch = (event) => {
        this.setState({searchTerm: event.target.value})
        console.log(this.state.searchTerm);
    }

    searchProducts = (e) => {
    let result = this.props.searchProducts(this.state.searchTerm);
    this.setState({searchTerm: ''});
}

toggleAddItem = () => {
    this.props.toggleAdd();
}

    componentDidMount() {
        this.props.getProducts();
        console.log(this.state.restaurants);
    }


    render() {
        return (
            <div>
                
                <SearchContainer>
                <SearchBox>
                    <h3>Search for a product:</h3>
                    <input type="text"
                        placeholder="Product name"
                        value={this.state.searchTerm}
                        onChange={this.handleSearch}
                        />
                        <button onClick={this.searchProducts}> Search Products</button>
                </SearchBox>
                </SearchContainer>
                {this.props.products == [] ? <h4>Your search returned no results.</h4> :
                <ResultsList>
                {this.props.products.map(item => {
                    return <Result>
                       <h4>{item.productname}</h4> 
                       {item.stores.map(store => {
                           return <ul>
                                    <li>
                                        <div>
                                            <h5>{store.storename}</h5>
                                            <p>{store.location}</p>
                                            <p>{store.phone}</p>
                                        </div>
                                    </li>
                                    {this.props.showAdd==true ? <AddProduct/> : <p>Missing a product? Add it <button onClick={this.toggleAddItem}>here</button></p>}
                                </ul>
                       })}
                       </Result>
                })}
                </ResultsList>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        showAdd: state.toggle.showAdd,
        products: state.searchData.products,
    }
  }
  
  const mapActionsToProps = {
      getProducts: getProducts,
      searchProducts: searchProducts,
      toggleAdd: toggleAdd
  }
  export default withRouter(connect( mapStateToProps, mapActionsToProps)(SearchProducts));

