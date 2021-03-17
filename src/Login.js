import React, { Component } from 'react';
import TodoList from './components/TodoList';
import { BrowserRouter as Router, Route,Redirect } from "react-router-dom";
import firebase from './firebase';
require('firebase/auth');
require('firebase/database');

export default class Login extends Component {
    constructor(props) {
        super(props);
    this.login=this.login.bind(this);
    }
    login(){
        let provider= new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
        return(
            <Router>
            <div>
              <Route exact path='./components/TodoList' component={TodoList} />
              <Redirect push to="/components/TodoList"/>
            </div>
          </Router>
        )      
}

render(){
    return (
        <div>
            <button variant="contained" onClick={this.login} className="btnGoogle">
                LogIn with Google
            </button>
        </div>
    );
}
}




