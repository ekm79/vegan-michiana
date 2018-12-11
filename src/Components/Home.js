import React from 'react';
import Styled from 'styled-components';
import Slideshow from './Slideshow';

const TopLeft = Styled.div `
    width: 0;
    height: 0;
    border-top: 400px solid #9b0624;
    border-right: 550px solid transparent;
    opacity: 0.7;
    position: absolute;
    z-index: 2;
    @media (max-width: 800px) {
        border-top: 300px solid #9b0624;
        border-right: 450px solid transparent;
    }
`;

const BottomRight = Styled.div `
    width: 0;
    height: 0;
    border-bottom: 350px solid #9b0624;
    border-left: 500px solid transparent;
    opacity: 0.7;
    right: 0;
    bottom: 0;
    position: absolute;
    z-index: 2;
    @media (max-width: 800px) {
        border-bottom: 250px solid #9b0624;
    border-left: 400px solid transparent;
    }
`;

const Line1 = Styled.hr `
    width: 400px;
    transform: rotate(-34deg);
    border: 1px solid #93b62f;
    position: absolute;
    top: 300px;
    left: -50px;
    z-index: 4;
    @media (max-width: 800px) {
        left: -80px;
    }
    @media (max-width: 500px) {
        
    }
`;


const Line2 = Styled.hr `
    width: 500px;
    transform: rotate(-34deg);
    border: 22px solid #93b62f;
    opacity: 0.5;
    position: absolute;
    top: 250px;
    left: -60px;
    z-index: 3;
    @media (max-width: 800px) {
        left: -100px;
    }
    @media (max-width: 500px) {
        
    }
`;

const Line3 = Styled.hr `
    width: 300px;
    transform: rotate(-34deg);
    border: 2px solid #4d8ffb;
    opacity: 0.5;
    position: absolute;
    top: 250px;
    left: -50px;
    z-index: 4;
    @media (max-width: 800px) {
        left: -60px;
    }
    @media (max-width: 500px) {
        
    }
`;

const Line4 = Styled.hr `
    width: 280px;
    transform: rotate(-34deg);
    border: 2px solid #4d8ffb;
    opacity: 0.7;
    position: absolute;
    top: 220px;
    left: 280px;
    z-index: 4;
    @media (max-width: 800px) {
        left: 200px;
    }
    @media (max-width: 500px) {
        
    }
`;

const TextBlock = Styled.div `
    display: flex;
    width: 300px;
    position: absolute;
    z-index: 5;
    bottom: 0px;
    right: 20px;
    
`;

const Headline = Styled.div `
    font-size: 22px;
    color: #93b62f;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    text-align: right;
`;

const Text = Styled.p `
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    text-align: right;
`;

const Shape = Styled.div `
    width: 400px;
    height: 300px;
    shape-outside: polygon(0 0, 0 100%, 100% 100%);
    float: right;
   
    position: absolute;
    z-index: 5;
`;

const Tagline = Styled.h2 `
    font-size: 66px;
    color: white;
    font-family: 'Alex Brush', cursive;
    position: absolute;
    z-index: 5;
    transform: rotate(-34deg);
    top: 150px;
    text-align: center;
`;

const TaglineShadow = Styled.h2 `
    font-size: 66px;
    color: #470717;
    font-family: 'Alex Brush', cursive;
    position: absolute;
    z-index: 4;
    transform: rotate(-34deg);
    top: 155px;
    left: -5px;
    text-align: center;
`;


class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TopLeft></TopLeft>
                <Tagline>
                    We put the <br></br>'chia' in Michiana!
                </Tagline>
                <TaglineShadow>
                    We put the <br></br>'chia' in Michiana!
                </TaglineShadow>
                <Line4></Line4>
                <Line3></Line3>
                <Line2></Line2>
                <Line1></Line1>

                <Slideshow/>

                <TextBlock>
                    <div style={{display:"flex", flexDirection:"column"}}>
                    <Headline>Welcome! </Headline>
                    <Text>
                    Perhaps you follow us <br></br>on our Facebook page or <br></br>perhaps you have attended 
                    some <br></br>of our events around Michiana! Maybe <br></br>you have seen our table at the 
                    local Earth Day and other events. Or perhaps you are brand new to a vegan 
                    lifestyle and you are wondering how to find community in our part of the 
                    world. Welcome to all of you and thank you for visiting us.
                    </Text>
                    </div>
                    <Shape></Shape>
                </TextBlock>
                
                <BottomRight></BottomRight>
                
            </div>
        )
    }
}

export default Home;