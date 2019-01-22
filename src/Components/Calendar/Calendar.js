import React from 'react';
import Day from './Day';
import Styled from 'styled-components';
import Days from './Days';

const CalContainer = Styled.div `
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    height: auto;
    border: 1px solid black;
    margin: 0 20px;
`;

class Calendar extends React.Component {
    constructor() {
        super();
        this.state = {
            dates: []
        }
    }

    createCalendar = () => {
        const dates = [];
        for (let i = 1; i <= 31; i++) {
            dates.push(i);
            this.setState({dates: dates})
        }
    }

    componentDidMount() {
        this.createCalendar();
    }

    render() {
        return (
            <div>
                <h3>
                    Coming Soon!
                </h3>
                <Days/>
            <CalContainer>
                
                {this.state.dates.map(date => {
                    return <Day date={date}/>
                })
                }


            </CalContainer>
            </div>
        )
    }
}

export default Calendar;