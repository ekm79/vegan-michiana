import Styled from 'styled-components';

export const TopLeft = Styled.div `
    width: 0;
    height: 0;
    border-top: 45vw solid #9b0624;
    border-right: 60vw solid transparent;
    opacity: 0.7;
    position: absolute;
    z-index: 2;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const BottomRight = Styled.div `
    width: 0;
    height: 0;
    border-bottom: 350px solid #9b0624;
    border-left: 500px solid transparent;
    opacity: 0.7;
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 2;
    margin: 0;
    @media (max-width: 768px) {
        width: 100vw;
        height: 200px;
        background: #9b0624;
        border-bottom: 0;
        border-left: 0;
        opacity: 1;
    }

`;

export const Line1 = Styled.hr `
    width: 400px;
    transform: rotate(-36deg);
    border: 1px solid #93b62f;
    position: absolute;
    top: 300px;
    left: -50px;
    z-index: 3;
    @media (max-width: 768px) {
        transform: rotate(0deg);
        left: -80px;
    }
    @media (max-width: 500px) {
        
    }
`;


export const Line2 = Styled.hr `
    width: 500px;
    transform: rotate(-36deg);
    border: 22px solid #93b62f;
    opacity: 0.5;
    position: absolute;
    top: 250px;
    left: -60px;
    z-index: 2;
    @media (max-width: 768px) {
        transform: rotate(0deg);
        left: -100px;
    }
    @media (max-width: 500px) {
        
    }
`;

export const Line3 = Styled.hr `
    width: 300px;
    transform: rotate(-36deg);
    border: 2px solid #4d8ffb;
    opacity: 0.5;
    position: absolute;
    top: 250px;
    left: -50px;
    z-index: 4;
    @media (max-width: 768px) {
        transform: rotate(0deg);
        left: -60px;
        top: 280px;
    }
    @media (max-width: 500px) {
        
    }
`;

export const Line4 = Styled.hr `
    width: 20em;
    transform: rotate(-36deg);
    border: 2px solid #4d8ffb;
    opacity: 0.7;
    position: absolute;
    top: 220px;
    left: 280px;
    z-index: 4;
    @media (max-width: 768px) {
        transform: rotate(0deg);
        left: 200px;
        top: 250px;
    }
    @media (max-width: 500px) {
        
    }
`;

export const TextBlock = Styled.div `
    display: flex;
    width: 300px;
    position: fixed;
    z-index: 5;
    bottom: 0px;
    right: 20px;
    padding-left: 20px;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const TextBlock_Tb = Styled.div `
    display: flex;
    width: 100vw;
    padding-left: 20px;
    position: fixed;
    z-index: 5;
    bottom: 20px;
    right: 20px;
    @media (min-width: 768px) {
        display: none;
    }
`;

export const Headline = Styled.div `
    font-size: 22px;
    color: #93b62f;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    text-align: right;
`;

export const Text = Styled.p `
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    text-align: right;
`;

export const Shape = Styled.div `
    width: 400px;
    height: 300px;
    shape-outside: polygon(0 0, 0 100%, 100% 100%);
    float: right;
   
    position: absolute;
    z-index: 5;
`;

export const Tagline = Styled.h2 `
    font-size: 7vw;
    color: white;
    font-family: 'Alex Brush', cursive;
    position: absolute;
    z-index: 5;
    transform: rotate(-34deg);
    top: 16vw;
    left: -20px;
    text-align: center;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const TaglineShadow = Styled.h2 `
    font-size: 7vw;
    color: #470717;
    font-family: 'Alex Brush', cursive;
    position: absolute;
    z-index: 4;
    transform: rotate(-34deg);
    top: 17vw;
    left: -25px;
    text-align: center;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const Tagline_Tb = Styled.h2 `
    font-size: 8vw;
    color: white;
    font-family: 'Alex Brush', cursive;
    position: absolute;
    z-index: 5;
    top: 220px;
    left: 15px;
    text-align: center;
    @media (min-width: 768px) {
        display: none;
    }
`;

export const TaglineShadow_Tb = Styled.h2 `
    font-size: 8vw;
    color: #470717;
    font-family: 'Alex Brush', cursive;
    position: absolute;
    z-index: 4;
    top: 225px;
    left: 10px;
    text-align: center;
    @media (min-width: 768px) {
        display: none;
    }
`;
