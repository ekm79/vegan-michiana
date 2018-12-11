import React from 'react';
import Styled from 'styled-components';
import Member from './Member';

const Header = Styled.div `
    font-size: 22px;
    color: #93b62f;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
`;

const Text = Styled.p `
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
`;

const Block= Styled.div `
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 20px;
`;

const PrimaryBlock = Styled.div `
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 20px;
    background: ${props => props.images ? "#efebcb" : null};
    padding: ${props => props.images ? "10px" : null};

`;

const ImageBlock = Styled.div `
    display: flex;
    justify-content: space-around;
    height: 100px;
    margin: 10px;
`;

const ImgWidget = Styled.img `
    border-radius: 50%;
`;

const Rule = Styled.hr `
    width: 80%;
    border: 2px solid #9b0624;
`;

const SecondaryBlock = Styled.div `
    display: flex;
`;

class About extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
            <PrimaryBlock>
                <Header>About us</Header>
                <Text>We are building a web presence to serve our vegan living community 
                    here in South Bend and surrounding areas. It is an exciting time 
                    to be living vegan! In merely the past 3 years, there have been 
                    enormous changes in the vegan scene. We have seen new restaurants 
                    open with vegan menus, like Tapastrie, The Crooked Ewe, and Render; 
                    smaller cafes with a vegan-heavy menu like The Black Crow.
                    </Text>
                    <Text>
                    There are more and more vegan products in our grocery stores! Target, 
                    Walmart and Costco have significantly more vegan products. Regional 
                    supermarkets like Martin’s and Meijer have also been consistently 
                    improving in that area. Discount grocers like Aldi’s are also getting 
                    in on the game. Our group of vegans has also been growing, and we are 
                    finding each other to offer and receive support and encouragement! See 
                    our calendar for our upcoming events.</Text>
            </PrimaryBlock>

            <Rule/>

            <PrimaryBlock images>
                <Header>
                    Leadership
                </Header>
                <ImageBlock>
                    <ImgWidget src='/images/rama.jpg' width="100px"  onMouseOver={<Member/>}/>
                    <ImgWidget src='/images/nekeisha.jpg' width="100px" height="auto"/>
                    <ImgWidget src='/images/crystal.jpg' width="100px" height="auto"/>
                    <ImgWidget src='/images/tonia.jpg' width="100px" height="auto"/>
                </ImageBlock>
            </PrimaryBlock>

            <Rule />

        <SecondaryBlock>
            <Block>
                <Header>Events</Header>
                <Text>Our group of vegans has also been growing, and we are finding each other 
                    to offer and receive support and encouragement! See our Calendar for 
                    our upcoming events, including demos (free of charge), cooking classes, 
                    restaurant meetups, and what we are calling grocery store walk-thrus. 
                    We have already had our very first Michiana VegFest in March! Many more 
                    great events are in the planning stages and will be announced soon!</Text>
            </Block>

            <Block>
                <Header>Stay in touch</Header>
                <Text>We look forward to connecting with you. You can find us on Facebook and 
                    on Instagram, and you can easily reach us on our Contact page. We also 
                    invite you to sign-up for our newsletter so we can email you about 
                    upcoming events or tell you the latest vegan news. Sign-up on the 
                    sidebar or the Contact page.</Text>
            </Block>
        </SecondaryBlock>
            
            </div>
        )
    }
}

export default About;