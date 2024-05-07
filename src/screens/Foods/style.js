import {StyleSheet, Dimensions} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;

export default style = StyleSheet.create({
  item: {
    flex: 1,
    margin: windowWidth * 0.01,
    backgroundColor: '#f0e9e4',
    borderRadius: windowWidth * 0.05,
    padding: windowWidth * 0.03,
    alignItems: 'center',
  },
  title: {
    fontSize: windowWidth * 0.06,
    //fontWeight: 'bold',
    color: 'black',
    marginTop: windowWidth * 0.02,
  },
  price: {
    fontSize: windowWidth * 0.04,
    marginTop: windowWidth * 0.01,
    fontWeight:'bold',
  },
  image: {
    width: windowWidth*0.4,
    height:  windowWidth*0.4,
    borderRadius:  windowWidth * 0.05,
  },
});
