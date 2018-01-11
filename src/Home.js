import React, { Component } from 'react';
import logo from './communityBank.svg'
import Auth0Lock from 'auth0-lock'
import axios from 'axios'

class Home extends Component {
constructor() {
    super();
    this.state = {

    }
    this.lock = null;
    this.login = this.login.bind(this);

}
componentDidMount() {
this.lock = new Auth0Lock(process.env.REACT_APP_AUTH0_CLIENT_ID, process.env.REACT_APP_AUTH0_DOMAIN);
    this.lock.on('authenticated', authResult  => {
    this.lock.getUserInfo(authResult.acessToken, (error, user) => {
 axios.post('/login', ( {userId: user.sub })).then(response => {
     this.props.login(response.data.user);
     this.props.history.push('/private');
 })
    })
    })

}
login() {
this.lock.show();
}



    render() {
        return (
            <div className='App'>
                
                 
                 <img src={logo} elt="" width="500" height="300" className="logo" />
                 <div className="actions">
                 <button onClick={this.login}>Log in</button>
                 </div>
                 
            </div>
        );
    }
}

export default Home;