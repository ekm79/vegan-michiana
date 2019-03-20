import React from 'react';
import { toggleDropdown } from '../../../Actions';
import { connect } from 'react-redux';
import Styled from 'styled-components';

const DropdownContainer = Styled.div `
    display: flex;
    flex-direction: column;
    background: gray;
    border: 1px solid black;
    height: auto;
`;

const DropdownItem = Styled.li `
    width: 50px;
    height: 10px;
    border-top: 1px solid black;
`;

const DropdownHeader = Styled.h5 `
    width: 100px;
    height: 30px;
    `;

class Dropdown extends React.Component {
    constructor() {
        super();
        this.state = {
            store: ''
        }
    }

    openDropdown = () => {
        this.props.toggleDropdown()
    }



    render() {
        return (
            <div>
                <DropdownHeader onClick={this.openDropdown}>
                    Store
                </DropdownHeader>
                {this.props.showDropdown == true ? 
                    <DropdownContainer>
                        <ul>
                            {this.props.stores.map(store => {
                                return (
                                    <DropdownItem onClick={this.setStore}>
                                        {store.storename}
                                    </DropdownItem>
                                )
                            })}
                        </ul>
                    </DropdownContainer>
                : null}
            </div>

            
        )
    }
}

const mapStateToProps = state => {
    return {
        stores: state.searchData.stores,
        showDropdown: state.toggle.showDropdown
    }
  }
  
  const mapActionsToProps = {
      toggleDropdown: toggleDropdown,
  }
  export default connect( mapStateToProps, mapActionsToProps)(Dropdown);