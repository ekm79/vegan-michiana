import React from 'react';
import { getRestaurants, searchData } from '../../Actions';
import { connect } from 'react-redux';
import Styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';
import SearchProducts from './Products/SearchProducts';
import AddProduct from './Products/AddProduct';
// import SearchRestaurants from './Restaurants/SearchRestaurants';


const LinksContainer = Styled.div `
    display: flex;
    flex-direction: column;
    
`;



class Resources extends React.Component {
    constructor() {
        super();
        this.state = {
            restaurants: ["1", "2", "3"],
            searchTerm: "",
            product: "",
            location: ""
        }
    }

    handleSearch = (event) => {
        this.setState({searchTerm: event.target.value})
        console.log(this.state.searchTerm);
    }

    searchNotes = (e) => {
    let result = this.props.searchData(this.state.searchTerm);
    this.setState({searchTerm: ''});
    this.setState({restaurants: result});
}


    componentDidMount() {
        this.props.getRestaurants();
        console.log(this.state.restaurants);
    }


    render() {
        return (
            <LinksContainer>
                
                <Link to="/resources/search/restaurants" >Search restaurants</Link>
                <Link to="/resources/search/products" >Search products</Link>
            </LinksContainer>
        )
    }
}

const mapStateToProps = state => {
    return {
        restaurants: state.searchData.restaurants
      
    }
  }
  
  const mapActionsToProps = {
      getRestaurants: getRestaurants,
      searchData: searchData
  }
  export default withRouter(connect( mapStateToProps, mapActionsToProps)(Resources));
