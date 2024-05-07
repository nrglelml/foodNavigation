import {View, Text, StyleSheet, Dimensions, Animated} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;

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
  view1: {
    marginTop: windowWidth * 0.04,
    marginLeft: windowWidth * 0.04,
    marginRight: windowWidth * 0.04,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  text1: {
    fontSize: windowWidth * 0.07,
    fontWeight: 'bold',
    color: '#cf6d23',
    // textDecorationLine: 'underline',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    // opacity: 0.5,
  },
  text2: {
    fontSize: windowWidth * 0.07,
    fontWeight: 'bold',
    color: '#cf6d23',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    opacity: 0.5,
  },
  line: {
    width: '48%',
    height: 2,
    backgroundColor: '#cf6d23',
    marginLeft: windowWidth * 0.04,
  },
});
