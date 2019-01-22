import React from 'react';
import Styled from 'styled-components';

const DayContainer = Styled.div `
    margin: 20px 20px 0 20px;
    display: flex;
    width: 90%
`;

const DayBox = Styled.div `
    width: 14.1%;
    background: #efebcb;
    border: 1px solid #efebcb;
    text-align: center;
`;

const Day = Styled.h4 `
    font-weight: bold;
`;

const Days = props => {
    return (
        <DayContainer>
            <DayBox><Day>Sunday</Day></DayBox>
            <DayBox><Day>Monday</Day></DayBox>
            <DayBox><Day>Tuesday</Day></DayBox>
            <DayBox><Day>Wednesday</Day></DayBox>
            <DayBox><Day>Thursday</Day></DayBox>
            <DayBox><Day>Friday</Day></DayBox>
            <DayBox><Day>Saturday</Day></DayBox>
        </DayContainer>
    )
}

export default Days;