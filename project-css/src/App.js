import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false
    }
  }

  toggleEdit() {
    this.setState({ toggle: !this.state.toggle })
}
  render() {
    console.log(this.state.toggle)
    return (
        <div className = 'container'>
            <nav className = 'navbar navbar-fixed'>
                <h1>Start Bootstraps</h1>
                <menu className = 'dropdown'>
                    <button
                    onClick = {() => this.toggleEdit()}>
                    MENU</button>
                    {this.state.toggle
                    ?
                    <div className = 'smooth'>
                      <ul>
                      <li>SERVICES</li>
                      <li>PORTFOLIO</li>
                      <li>ABOUT</li>
                      <li>TEAM</li>
                      <li>CONTACT</li>
                      </ul>
                    </div>
                    :
                    <div></div>
                    }
                </menu>
                <div className = 'menu2'>
                  <p className = 'liste2'>SERVICES</p>
                  <p className = 'liste2'>PORTFOLIO</p>
                  <p className = 'liste2'>ABOUT</p>
                  <p className = 'liste2'>TEAM</p>
                  <p className = 'liste2'>CONTACT</p>
                </div>
            </nav>
            <div className = 'insideBox' >
                <h4>Welcome To Our Studio</h4>
                <h3>IT'S NICE TO MEET YOU!</h3>
                <button className ='button2' >TELL ME MORE</button>
            </div>
        </div>
    );
  }
}

export default App;
