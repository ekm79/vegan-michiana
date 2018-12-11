import React from 'react';
import Styled from 'styled-components';
import {leaders} from './MemberData';

const Member = () => {
    return (
        <div>
            {leaders.map(leader => {
                return (
                    <div>
                        <h5>{leader.Name}</h5>
                        <p>{leader.info}</p>
                        <img src={leader.img}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Member;