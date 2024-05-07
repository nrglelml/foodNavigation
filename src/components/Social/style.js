import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;

export default style = StyleSheet.create({
  view1: {
    marginTop: windowWidth * 0.09,
    flexDirection: 'row',
    alignItems: 'center',
  },
  view2: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  text1: {
    paddingHorizontal: 10,
  },
  view3: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: windowWidth * 0.05,
  },
  text2: {
    fontSize: windowWidth * 0.04,
    fontWeight: 'bold',
  },
  view4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: windowWidth * 0.05,
  },
  image: {
    width: windowWidth * 0.09,
    height: windowWidth * 0.09,
    //borderRadius: windowWidth * 0.07,
  },
});
