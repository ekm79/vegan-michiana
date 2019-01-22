import React from 'react';
import Styled from 'styled-components';

const Square = Styled.div `
    display: flex;
    flex-direction: column
    height: 20%;
    width: 14.1%;
    border: 1px solid black;
`;

const Date = Styled.h3 `
    font-weight: bold;
    align-self: flex-end;
    padding: 10px;
`;

const Event = Styled.p `
    padding: 10px;
`;

const Day = props => {
    return (
        <Square>
            <Date>{props.date}</Date>
            <Event>(event)</Event>
        </Square>
    )
}

export default Day;