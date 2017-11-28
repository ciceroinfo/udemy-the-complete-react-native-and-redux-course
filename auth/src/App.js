import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBWgEz28R9aSyR_85tE3Ji4jFmS775DcKk',
      authDomain: 'authentication-5bea2.firebaseapp.com',
      databaseURL: 'https://authentication-5bea2.firebaseio.com',
      projectId: 'authentication-5bea2',
      storageBucket: 'authentication-5bea2.appspot.com',
      messagingSenderId: '576901082029'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
              <CardSection>
                <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
              </CardSection>
          </Card>
        );
      case false:
        return (<LoginForm />);
      default:
        return (
          <Card>
            <CardSection>
              <Spinner size='small' />
            </CardSection>
          </Card>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
