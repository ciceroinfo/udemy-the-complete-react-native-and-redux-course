import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBWgEz28R9aSyR_85tE3Ji4jFmS775DcKk',
      authDomain: 'authentication-5bea2.firebaseapp.com',
      databaseURL: 'https://authentication-5bea2.firebaseio.com',
      projectId: 'authentication-5bea2',
      storageBucket: 'authentication-5bea2.appspot.com',
      messagingSenderId: '576901082029'
    });
  }

  renderContent() {
    if (this.state.loggedIn) {
      return (<Button>Log Out</Button>);
    }

    return (<LoginForm />);
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent}
      </View>
    );
  }
}

export default App;
