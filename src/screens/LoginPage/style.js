import {View, Text, StyleSheet, Dimensions, Animated} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default style = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  image: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    borderRadius: windowWidth * 0.09,
    alignSelf: 'flex-start',
  },
  view2: {
    marginTop: windowWidth * 0.03,
    alignSelf: 'center',
    backgroundColor: '#cf6d23',
    width: windowWidth * 0.5,
    height: windowWidth * 0.15,
    borderRadius: windowWidth * 0.09,
  },
  text2: {
    color: 'white',
    fontSize: windowWidth * 0.04,
    textAlign: 'center',
    marginTop: windowWidth * 0.03,
    fontWeight: 'bold',
  },
});
