import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import {DATA} from '../../assets/menuData';
import style from './style';
import {Yazi, InfoInput, Social} from '../../components';

const selectedItem = DATA.find(item => item.id === '4');

const Login = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={style.container}>
        <Image source={{uri: selectedItem.image}} style={style.image} />
      </View>
      <Yazi />
      <InfoInput  />

      <Social />
    </SafeAreaView>
  );
};

export default Login;
