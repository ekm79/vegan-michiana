import React from 'react';
import Styled from 'styled-components';
import {Header, Text} from './../Styles/sharedStyles';

const LeaderImage = Styled.img `
    width: 200px;
    height: 220px;
    margin: 10px 0 10px 10px;
    float: right;
`;

const LeaderBox = Styled.div `
    display: flex;
    background: #efebcb;   
    padding: 20px; 
`;

const LeaderInfo = Styled.div `
    display: flex;
    flex-direction: column;   
`;

const Innerbox = Styled.div `
    
`;

const Member = (props) => {
    return (
        <LeaderBox>
            <LeaderInfo>
                <Header leader>{props.name}</Header>
                <Innerbox>
                    <LeaderImage src={props.img}/>
                    <Text>{props.info}</Text>
                    
                </Innerbox>
            </LeaderInfo>
            
        </LeaderBox>
    )
}

export default Member;