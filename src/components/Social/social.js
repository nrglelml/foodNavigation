import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {google, facebook, twitter} from '../../assets/icons';
import style from './style';
const social = () => {
  return (
    <View>
      <View style={style.view1}>
        <View style={style.view2} />
        <Text style={style.text1}>OR</Text>
        <View style={style.view2} />
      </View>
      <View style={style.view3}>
        <Text style={style.text2}>Sign in using:</Text>
        <View style={style.view4}>
          <Image source={google} style={style.image} />
          <Image source={facebook} style={style.image} />
          <Image source={twitter} style={style.image} />
        </View>
      </View>
    </View>
  );
};

export default social;
