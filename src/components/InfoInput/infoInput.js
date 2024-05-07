import {Text, TextInput, View, TouchableWithoutFeedback} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import {useNavigation} from '@react-navigation/native';
//import CheckBox from '@react-native-community/checkbox';

const infoInput = props => {
  // const {name, input} = props;
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const handleLogin = () => {
    if (email === 'admin@admin.com' && password === '123456') {
      navigation.navigate('Foods');
    } else {
      alert('Hatalı giriş bilgileri. Lütfen tekrar deneyin.');
    }
  };
  return (
    <View>
      <View style={style.view1}>
        <Text style={style.text}>Email Address</Text>
        <TextInput
          style={style.inputBox}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
        />
      </View>
      <View style={style.view1}>
        <Text style={style.text}>Password</Text>
        <TextInput
          style={style.inputBox}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>
      <View style={style.rememberContainer}>
        <TouchableWithoutFeedback onPress={() => setRemember(!remember)}>
          <View
            style={[style.checkbox, remember ? style.checkboxChecked : null]}
          />
        </TouchableWithoutFeedback>
        <Text style={style.rememberText}>Remember me</Text>
      </View>
      <TouchableWithoutFeedback onPress={handleLogin}>
        <View style={style.view2}>
          <Text style={style.text2}>Log In</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default infoInput;
