// Import a library to help create a component
import React from 'react';
//one way
//import ReactNative from 'react-native';
//another better way
import { AppRegistry } from 'react-native';
import Header from './src/components/header';
// Create a component
//one way
/*
const App = () => {
  return (
    <Text>Some Text<Text>
  );
};*/

//another better way
/* OLD HEADER
const App = () => (
    <Text>Some Text</Text>
);
*/
const App = () => (
    <Header />
);


// Render it to the device
//one way
//ReactNative.AppRegistry.registerComponent('albums', () => App);
//another better way
AppRegistry.registerComponent('albums', () => App);
