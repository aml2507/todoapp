import React, { Component } from 'react';
import firebase from './firebase';
require('firebase/auth');
require('firebase/database');

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.login=this.login.bind(this);
    }

    login(){
        const provider= new firebase.auth.GoogleAuthProvider();


        firebase.auth().signInWithPopup(provider).then((result) => {
            console.log('Access Token y User Info', result);
            window.location.replace('/todos');
        });
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




