// Import libraries for making a registerComponent
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {

  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#4d2e00',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    //fontWeight: 'bold',
    color: 'white',
    fontSize: 20
  }
};

// Make the component available to other parts of the App
export default Header;
