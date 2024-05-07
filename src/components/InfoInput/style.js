import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;

export default style = StyleSheet.create({
  view1: {
    marginTop: windowWidth * 0.04,
    marginLeft: windowWidth * 0.04,
    marginRight: windowWidth * 0.04,
    marginBottom: windowWidth * 0.04,
  },
  text: {
    fontSize: windowWidth * 0.05,
    fontWeight: 'bold',
    color: 'black',
  },
  inputBox: {
    width: windowWidth * 0.9,
    height: windowWidth * 0.14,
    //backgroundColor: 'red',
    marginTop: windowWidth * 0.03,
    borderRadius: windowWidth * 0.03,
    shadowOpacity: windowWidth * 0.8,
    shadowRadius: windowWidth * 1,
    backgroundColor: '#f0e9e4',
    //padding: windowWidth * 0.04,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  rememberText: {
    marginLeft: 10,
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
