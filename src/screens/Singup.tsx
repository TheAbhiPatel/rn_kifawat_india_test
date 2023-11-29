import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {FC, useState} from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootNativeStackParamList} from '../routes/StackRoutes';
import {useDispatch} from 'react-redux';
import {addUser} from '../store/userSlice';
import {validateEmail} from '../utils';

type ScreenProps = NativeStackScreenProps<RootNativeStackParamList, 'Signup'>;

const Singup: FC<ScreenProps> = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPassError, setIsPassError] = useState(false);
  const dispatch = useDispatch();

  const handleSignup = () => {
    if (!name || !email || !password || !cpassword) {
      setIsError(true);
    } else if (!validateEmail(email)) {
      setIsError(false);
      setIsEmailError(true);
    } else if (password !== cpassword) {
      setIsError(false);
      setIsEmailError(false);
      setIsPassError(true);
    } else {
      setIsError(false);
      setIsPassError(false);
      setIsEmailError(false);
      dispatch(addUser({name, email, password}));
      navigation.navigate('Login');
      setName('');
      setEmail('');
      setPassword('');
      setCPassword('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formBox}>
        <Text style={{fontSize: 25, textAlign: 'center', color: 'blue'}}>
          Singup
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Your Name..."
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          keyboardType="email-address"
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
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={cpassword}
          onChangeText={text => setCPassword(text)}
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
            * Password should match !
          </Text>
        )}

        <View style={{marginTop: 30}} />
        <Button onPress={handleSignup} title="Signup now" color={'blue'} />
        <View style={{marginTop: 20}} />
        <Text
          onPress={() => navigation.navigate('Login')}
          style={{fontSize: 15, textAlign: 'center', color: 'black'}}>
          Already have an account ?{' '}
          <Text style={{color: 'blue', fontWeight: 'bold'}}>Login</Text>
        </Text>
      </View>
    </View>
  );
};

export default Singup;

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
