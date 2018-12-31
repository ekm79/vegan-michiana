import React from 'react';
import { Header, Text } from './Styles/sharedStyles';
import Styled from 'styled-components';


const Block= Styled.div `
    display: flex;
    flex-direction: column;
    margin: 20px;
`;

const Endnote = Styled.p `
    font-size: 10px;
    font-style: italic;
`;

const IconBlock = Styled.div `
    display: flex;
    width: 60%;
    justify-content: space-between;
    margin: 20px;
`;

const FB = Styled.img `
    width: 100px;
    height: 100px;
`;

const Newsletter = Styled.div `
    display: flex;
    margin: 20px 0;
    align-items: center;
`;

const Input = Styled.input `
    width: 200px;
    height: 30px;
    
`;

const Button = Styled.button `
    width: 200px;
    height: 40px;
    background: #93b62f
`;

class Contact extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Block>
                <Header>
                    Contact
                </Header>
                <Text>
                Whether you’re vegan, semi-vegan, vegetarian, or simply vegan-curious, we invite you to contact us in any of the below ways:
                </Text>
                <IconBlock>
                    <FB src="./../../images/facebook.png" />
                    <FB src="./../../images/instagram.png" />
                    <FB src="./../../images/email.png" />
                </IconBlock>

                <Text>
                    Please sign up for our newsletter to receive the latest news from Vegan Michiana.
                </Text>
                <Newsletter>
                    <Input 
                        type="text"
                        placeholder="email"/>
                    <Button>Submit</Button>
                </Newsletter>
                
                <Endnote>Privacy Policy: We will never lease, distribute, or sell your personal information to third parties.</Endnote>

            </Block>
        )
    }
}

export default Contact;