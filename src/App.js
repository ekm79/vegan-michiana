import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About/About';
import Contact from './Components/Contact';
import Blog from './Components/Blog/BlogRoot';
import Calendar from './Components/Calendar';
import Resources from './Components/Resources/ResourcesRoot';
import Styled from 'styled-components';

const Body = Styled.div `
    height: 100%;
    overflow: hidden;
    
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      toggleLeader: false,
    }
  }

  openLeader = () => {
    this.setState({openLeader: true});
}

  render() {
    return (
      <Body>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/about" render = {(props) => <About toggleLeader={this.openLeader} />} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
        <Route path="/resources" component={Resources} />
        <Route path="/calendar" component={Calendar} />
      </Body>
    );
  }
}

export default App;
