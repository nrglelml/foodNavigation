import {Text, View, Image, SafeAreaView} from 'react-native';
import React from 'react';
import {FoodList} from '../../components/index';

const Foods = ({navigation}) => {
  return (
    <SafeAreaView>
      <FoodList />
    </SafeAreaView>
  );
};

export default Foods;
