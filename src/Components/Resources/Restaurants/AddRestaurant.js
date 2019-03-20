import React from 'react';
import { addRestaurant } from '../../../Actions';
import { connect } from 'react-redux';
import Styled from 'styled-components';

class AddRestaurant extends React.Component {
    constructor(){
        super();
        this.state = {
            itemAdded: ''
        }
    }

    handleChange = (event) => {
        this.setState({itemAdded: event.target.value})
        console.log(this.state.itemAdded);
    }

    render() {
        return(
            <div>
                <input type="text"
                    value={this.state.itemAdded}
                    placeholder="Add item"
                    onChange={this.handleChange}
                    />
                    <button onClick={this.addRestaurant}>Add</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        restaurants: state.searchData.restaurants
      
    }
  }
  
  const mapActionsToProps = {
      addRestaurant: addRestaurant
  }
  export default connect( mapStateToProps, mapActionsToProps)(AddRestaurant);