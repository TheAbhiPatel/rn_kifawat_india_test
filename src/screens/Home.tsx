import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAppSelector} from '../store/hooks';

const Home = () => {
  const user = useAppSelector(state => state.user);

  console.log('--- user --->', user);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 22}}>welcome </Text>
      <Text
        style={{
          fontSize: 32,
          color: 'blue',
          fontWeight: 'bold',
          textTransform: 'capitalize',
          letterSpacing: 6,
        }}>
        {' '}
        {user.name}
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
