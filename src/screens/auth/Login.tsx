import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useState} from 'react';
import InputField from '../../components/InputField';
import Btn from '../../components/Btn';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = (props: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: '#fff',
          fontSize: 38,
          fontWeight: 'bold',
          marginBottom: 30,
        }}>
        Login
      </Text>

      <View>
        <InputField
          onChangeText={(text: any) => setEmail(text)}
          placeholder="Enter email"
          fieldBg="#142F3A"
          keyboardType="email-address"
          value={email}
        />
        <InputField
          onChangeText={(text: any) => setPassword(text)}
          placeholder="Enter password"
          fieldBg="#142F3A"
          secureTextEntry={true}
          value={password}
        />
      </View>

      <Btn
        title="Login"
        onPress={() => props.navigation.navigate('Dashboard')}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#163848',
    height: windowHeight,
    width: windowWidth,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    paddingTop: 200,
  },
});
