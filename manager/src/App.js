import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBP-Q5s6RouDxstNcStLJsCfT7gWuxfIB4',
      authDomain: 'manager-417e0.firebaseapp.com',
      databaseURL: 'https://manager-417e0.firebaseio.com',
      projectId: 'manager-417e0',
      storageBucket: 'manager-417e0.appspot.com',
      messagingSenderId: '617547828891'
      };

      firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
