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
    @media (max-width: 768px) {
        flex-direction: column;
    }
    @media (max-width: 480px) {
        flex-direction: row;
        align-items: center;
    }

`;

const Links = Styled.div `
    display: flex;
    width: 70%;
    justify-content: space-between;
    padding: 20px 50px 20px 20px;
    @media (max-width: 768px) {
        width: 90%;
    }
    @media (max-width: 480px) {
        display: none;
    }
   
`;

const NavLink = Styled.p `
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const Beanburger = Styled.div `
    display: none;
    height: 80px;
    width: 80px;
    padding: 5% 10% 10% 10%;
    @media (max-width: 480px) {
        display: flex;
    }
    &:hover {
    }
`;

const Logo = Styled.img `
    width: 100%
`;

const ImageContainer = Styled.div `
    width: 18%;
    @media (max-width: 768px) {
        width: 30%;
    }
    @media (max-width: 480px) {
        width: 60%;
    }
`;

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <NavContainer>
                <ImageContainer>
                    <Logo src="/images/vm-logo-small-final.jpg" alt="logo"/>
                </ImageContainer>
                
                <Links>
                    <NavLink><Link to="/" style={{textDecoration: "none", color: "black"}}>Home</Link></NavLink>
                    <NavLink><Link to="/about" style={{textDecoration: "none", color: "black"}}>About</Link></NavLink>
                    <NavLink><Link to="/resources" style={{textDecoration: "none", color: "black"}}>Resources</Link></NavLink>
                    <NavLink><Link to="/calendar" style={{textDecoration: "none", color: "black"}}>Calendar</Link></NavLink>
                    <NavLink><Link to="/blog" style={{textDecoration: "none", color: "black"}}>Blog</Link></NavLink>
                    <NavLink><Link to="/contact" style={{textDecoration: "none", color: "black"}}>Contact</Link></NavLink>
                </Links>
                <Beanburger>
                    <img src="/images/hamburger.png" width="100px" height="100px"/>
                </Beanburger>
            
                
            </NavContainer>
            
        )
    }
}

export default NavBar;