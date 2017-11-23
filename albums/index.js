//

// Import a library to help create a component
import React from 'react';
//one way
//import ReactNative from 'react-native';
//another better way
import { Text, AppRegistry } from 'react-native';

// Create a component
//one way
/*
const App = () => {
  return (
    <Text>Some Text<Text>
  );
};*/

//another better way
const App = () => (
    <Text>Some Text<Text>;
);

// Render it to the device
//one way
//ReactNative.AppRegistry.registerComponent('albums', () => App);
//another better way
AppRegistry.registerComponent('albums', () => App);
