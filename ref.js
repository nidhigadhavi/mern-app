import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import logo from '../logo.svg'

class NavBar extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu stackable>
                <Menu.Item>
                    <img src={logo} />
                </Menu.Item>

                <Menu.Item
                    name='feed'
                    active={activeItem === 'feed'}
                    onClick={this.handleItemClick}
                    href='/feed'
                >
                    Feed
        </Menu.Item>

                <Menu.Item
                    name='card'
                    active={activeItem === 'card'}
                    onClick={this.handleItemClick}
                    href='/card'
                >
                    Card
        </Menu.Item>
            </Menu>
        )
    }
}
export default NavBar

// app.js
import React, { Component } from 'react';
import './App.css';
import NavBar from './components//navBar';

class App extends Component {
    render() {
        return (
            <div >
                <NavBar />
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;

// routes.jsx
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './App'
import Feed from './components/feedComponent';
import Card from './components/myFirstComponent';


const Routes = () => (
    <App>
        <Switch>
            <Route exact path="/feed" component={Feed} />
            <Route exact path="/card" component={Card} />
        </Switch>
    </App>)

export default Routes

// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();

import React, { Component } from 'react';

class RegistrationComponent extends Component {

    render() {
        return (
            <div>Hello Register
                </div>
        )
    }
}

export default RegistrationComponent
