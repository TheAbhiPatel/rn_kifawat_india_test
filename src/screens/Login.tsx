import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {FC, useState} from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootNativeStackParamList} from '../routes/StackRoutes';
import {useAppSelector} from '../store/hooks';
import {validateEmail} from '../utils';

type ScreenProps = NativeStackScreenProps<RootNativeStackParamList, 'Login'>;

const Login: FC<ScreenProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [isPassError, setIsPassError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const user = useAppSelector(state => state.user);

  const handleLogin = () => {
    if (!email || !password) {
      setIsError(true);
    } else if (!validateEmail(email)) {
      setIsError(false);
      setIsPassError(false);
      setIsEmailError(true);
    } else if (password !== user.password || email !== user.email) {
      setIsError(false);
      setIsEmailError(false);
      setIsPassError(true);
    } else {
      setIsError(false);
      setIsPassError(false);
      navigation.navigate('Home');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formBox}>
        <Text style={{fontSize: 25, textAlign: 'center', color: 'blue'}}>
          Login
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
        />
        {isError && (
          <Text
            style={{
              fontSize: 15,
              textAlign: 'left',
              color: 'red',
              marginTop: 5,
            }}>
            * All field requried !
          </Text>
        )}
        {isEmailError && (
          <Text
            style={{
              fontSize: 15,
              textAlign: 'left',
              color: 'red',
              marginTop: 5,
            }}>
            * Please enter valid Email !
          </Text>
        )}

        {isPassError && (
          <Text
            style={{
              fontSize: 15,
              textAlign: 'left',
              color: 'red',
              marginTop: 5,
            }}>
            * Wrong Password or Email !
          </Text>
        )}
        <View style={{marginTop: 30}} />
        <Button onPress={handleLogin} title="Login now" color={'blue'} />
        <View style={{marginTop: 20}} />
        <Text
          onPress={() => navigation.navigate('Signup')}
          style={{fontSize: 15, textAlign: 'center', color: 'black'}}>
          Don't have an account ?{' '}
          <Text style={{color: 'blue', fontWeight: 'bold'}}>Signup</Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formBox: {
    width: '85%',
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
    padding: 10,
    paddingVertical: 20,
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: 'gray',
    fontSize: 16,
  },
});
