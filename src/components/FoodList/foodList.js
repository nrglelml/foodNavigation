import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {DATA} from '../../assets/menuData';
import style from './style';
import {useNavigation} from '@react-navigation/native';

const foodList = (props) => {
  const navigation = useNavigation();
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={style.item}
      onPress={() => navigation.navigate('Detail', {item})}>
      <Image source={{uri: item.image}} style={style.image} />
      <Text style={style.title}>{item.title}</Text>
      <Text style={style.price}>Price: ${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default foodList;
