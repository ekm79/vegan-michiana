import React from 'react';
import Styled from 'styled-components';
import Member from './Member';
import {leaders} from './MemberData';
import { Header, Text } from './../Styles/sharedStyles';
import { toggleLeaderRama, 
    toggleLeaderCrystal, 
    toggleLeaderNekeisha, 
    toggleLeaderTonia } from './../../Actions';
import { connect } from 'react-redux';



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
    box-shadow: -2px 5px 10px 5px grey;
    cursor: pointer;
`;

const Rule = Styled.hr `
    width: 80%;
    border: 1px solid #9b0624;
`;

const SecondaryBlock = Styled.div `
    display: flex;
`;

const LeaderBlock = Styled.div `
    position: absolute;
    z-index: 5;
    width: 60%;
    box-shadow: -2px 5px 10px 5px grey;
`;



class About extends React.Component {
    constructor(props) {
        super(props);

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
                   {/* {leaders.map(leader => {
                        return (
                            <div>
                            <ImgWidget src={leader.img} width="100px" key={leader.Name} onMouseOver={this.props.toggleLeader} onMouseLeave={this.props.toggleLeader}/>
                            {this.props.showLeader ? 
                                <LeaderBlock>
                                    <Member name={leader.Name} info={leader.info} img={leader.img} key={leader.name}/>
                                </LeaderBlock> : null}
                            </div>
                        )
                    })}*/}

                    <ImgWidget src={leaders[0].img} width="100px" onClick={this.props.toggleLeaderRama} />
                        {this.props.showLeaderRama ? 
                                <LeaderBlock onClick={this.props.toggleLeaderRama}>
                                    <Member name={leaders[0].Name} info={leaders[0].info} img={leaders[0].img} />
                                </LeaderBlock> : null}
                    <ImgWidget src={leaders[1].img} width="100px" onClick={this.props.toggleLeaderNekeisha} />
                        {this.props.showLeaderNekeisha ? 
                                <LeaderBlock onClick={this.props.toggleLeaderNekeisha}>
                                    <Member name={leaders[1].Name} info={leaders[1].info} img={leaders[1].img}/>
                                </LeaderBlock> : null}
                    <ImgWidget src={leaders[2].img} width="100px" onClick={this.props.toggleLeaderCrystal} />
                        {this.props.showLeaderCrystal ? 
                                <LeaderBlock onClick={this.props.toggleLeaderCrystal}>
                                    <Member name={leaders[2].Name} info={leaders[2].info} img={leaders[2].img} />
                                </LeaderBlock> : null}
                    <ImgWidget src={leaders[3].img} width="100px" onClick={this.props.toggleLeaderTonia} />
                        {this.props.showLeaderTonia ? 
                                <LeaderBlock onClick={this.props.toggleLeaderTonia} >
                                    <Member name={leaders[3].Name} info={leaders[3].info} img={leaders[3].img} />
                                </LeaderBlock> : null}
                    
                    

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

const mapStateToProps = state => {
    return {
      showLeaderRama: state.toggle.showLeaderRama,
      showLeaderNekeisha: state.toggle.showLeaderNekeisha,
      showLeaderCrystal: state.toggle.showLeaderCrystal,
      showLeaderTonia: state.toggle.showLeaderTonia,
      
    }
  }
  
  const mapActionsToProps = {
    toggleLeaderRama: toggleLeaderRama,
    toggleLeaderNekeisha: toggleLeaderNekeisha,
    toggleLeaderCrystal: toggleLeaderCrystal,
    toggleLeaderTonia: toggleLeaderTonia
  }
  export default connect( mapStateToProps, mapActionsToProps)(About);
