import React from 'react'
import Styled from 'styled-components';
import {Link} from 'react-router-dom';

const NavContainer = Styled.div `
    display: flex;
    justify-content: space-between;
    width: 100vw;
    padding: 20px;
    align-items: center;
    border-bottom: 3px green solid;
    background: #efebcb;
    position: relative;
    z-index: 5;
`;

const Links = Styled.div `
    display: flex;
    width: 60%;
    justify-content: space-between;
    padding: 20px 50px 20px 20px;
    @media (max-width: 500px) {
        display: none;
    }
   
`;

const NavLink = Styled.p `
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    @media (max-width: 800px) {
        font-size: 16px;
    }
`;

const Beanburger = Styled.div `
    display: none;
    height: 100px;
    width: 100px;
    @media (max-width: 500px) {
        display: flex;
    }
    &:hover {
    }
`;

const Logo = Styled.img `
    width: 20%;
`;

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <NavContainer>
                <img src="/images/vm-logo-small-final.jpg" alt="logo" width="200px" height="auto"/>
                <Links>
                    <NavLink><Link to="/">Home</Link></NavLink>
                    <NavLink><Link to="/about">About</Link></NavLink>
                    <NavLink>Resources</NavLink>
                    <NavLink>Calendar</NavLink>
                    <NavLink>Blog</NavLink>
                    <NavLink>Contact</NavLink>
                </Links>
                <Beanburger>
                    <img src="/images/hamburger.png" width="100px" height="100px"/>
                </Beanburger>
            
                
            </NavContainer>
            
        )
    }
}

export default NavBar;