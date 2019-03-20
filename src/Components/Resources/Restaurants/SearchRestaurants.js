import React from 'react';
import { toggleAdd, getRestaurants, searchData, searchByLocation } from '../../../Actions';
import { connect } from 'react-redux';
import Styled from 'styled-components';
import AddItem from './AddItem';
import AddRestaurant from './AddRestaurant';
import { withRouter } from 'react-router-dom';


const ResultsList = Styled.div `
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    
`;

const Result = Styled.div `
    width: 300px;
    height: 300px;
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

class SearchRestaurants extends React.Component {
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
        this.setState({[event.target.name]: event.target.value})
        console.log(this.state.searchTerm);
    }

    searchRestaurants = (e) => {
    let result = this.props.searchData(this.state.searchTerm);
    this.setState({searchTerm: ''});
    this.setState({restaurants: result});
}

    toggleAddItem = () => {
        this.props.toggleAdd();
    }


    componentDidMount() {
        this.props.getRestaurants();
        console.log(this.state.restaurants);
    }


    render() {
        return (
            <div>
                
                <SearchContainer>
                <SearchBox>
                    <h3>Search for a restaurant:</h3>
                    <input type="text"
                        name="searchTerm"
                        placeholder='Restaurant'
                        value={this.state.searchTerm}
                        onChange={this.handleSearch}
                        />
                        
                        <button onClick={this.searchRestaurants}> Search Restaurants</button>
                </SearchBox>
                <SearchBox>
                    <h3>Search by location:</h3>
                    <input type="text"
                        name="location"
                        placeholder='Location'
                        value={this.state.location}
                        onChange={this.handleSearch}
                        />
                         <button onClick={this.searchRestaurants}> Search Restaurants</button>
                </SearchBox>
                </SearchContainer>
                {this.props.restaurants == [] ? <h4>Your search returned no results.</h4> :
                <ResultsList>
                    <p>Missing a vegan-friendly restaurant? Add it <a onClick={this.toggleAdd}>here</a></p>
                       {this.showAdd ? <AddRestaurant/> : null}
                {this.props.restaurants.map(r => {
                    return <Result>
                       <h4>{r.restaurantname}</h4> 
                       <p>{r.description}</p>
                       <p>{r.location}</p>
                       <p>{r.phone}</p>
                       <p>Missing a menu item? Add it <a onClick={this.toggleAdd}>here</a></p>
                       {this.showAdd ? <AddItem/> : null}
                       <p>{r.menuitems.map(item => {
                           return <ul><li>{item.menuitemname}</li></ul>
                       })}</p>
                       </Result>
                })}
                </ResultsList>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        restaurants: state.searchData.restaurants,
        showAdd: state.toggle.showAdd
    }
  }
  
  const mapActionsToProps = {
      getRestaurants: getRestaurants,
      searchData: searchData,
      searchByLocation: searchByLocation,
      toggleAdd: toggleAdd
  }
  export default withRouter(connect( mapStateToProps, mapActionsToProps)(SearchRestaurants));

