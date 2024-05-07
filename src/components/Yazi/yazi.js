import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import style from './style';

const yazi = props => {
  const {} = props;
  return (
    <View>
      <View style={style.view1}>
        <Text style={style.text1}>Sign In</Text>
        <Text style={style.text2}>Sign Up</Text>
      </View>
      <View style={style.line} />
    </View>
  );
};

export default yazi;
