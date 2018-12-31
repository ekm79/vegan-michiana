import React from 'react';
import Styled from 'styled-components';
import Slideshow from './Slideshow';
import { TopLeft,
        BottomRight,
        Line1,
        Line2,
        Line3,
        Line4,
        Tagline,
        TaglineShadow,
        Tagline_Tb,
        TaglineShadow_Tb,
        TextBlock,
        Headline,
        TextBlock_Tb,
        Text} from './Styles/homeStyles';



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
                <Tagline_Tb>
                    We put the 'chia' in Michiana!
                </Tagline_Tb>
                <TaglineShadow_Tb>
                    We put the 'chia' in Michiana!
                </TaglineShadow_Tb>
                <Line4></Line4>
                <Line3></Line3>
                <Line2></Line2>
                <Line1></Line1>

                
                <Slideshow style={{position:"relative"}}/>

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
                    
                </TextBlock>
                <BottomRight>
                <TextBlock_Tb>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <Headline>Welcome! </Headline>
                    <Text>
                    Perhaps you follow us on our Facebook page or perhaps you have attended 
                    some of our events around Michiana! Maybe you have seen our table at the 
                    local Earth Day and other events. Or perhaps you are brand new to a vegan 
                    lifestyle and you are wondering how to find community in our part of the 
                    world. Welcome to all of you and thank you for visiting us.
                    </Text>
                    </div>
                </TextBlock_Tb>
                
                </BottomRight>
                
            </div>
        )
    }
}

export default Home;