import React from 'react';
import { addMenuItem, addRestaurant } from '../../../Actions';
import { connect } from 'react-redux';
import Styled from 'styled-components';

class AddItem extends React.Component {
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
                    <button onClick={this.addMenuItem}>Add</button>
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
      addMenuItem: addMenuItem,
      addRestaurant: addRestaurant
  }
  export default connect( mapStateToProps, mapActionsToProps)(AddItem);