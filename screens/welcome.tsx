import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import SubmitButton from '../components/submitButton';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    textAlign: 'center',
  },
  headerText: {
    fontSize: 28,
    lineHeight: 34,
    fontFamily: 'Kumbh Sans',
    fontWeight: 'bold',
    marginTop: 30,
    paddingBottom: 10,
  },
  subText: {
    fontSize: 18,
    lineHeight: 23,
    fontFamily: 'Kumbh Sans',
    fontWeight: '100',
    paddingHorizontal: 40,
  },
  carousel: {
    height: 380,
  },
});

const Welcome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/picstop-logo.png')} />
      <Text style={styles.headerText}>
        Lorem ipsum dolor sit amet consectetur adipiscing elit
      </Text>
      <Text style={styles.subText}>
        Title and subtitle can be whatever you think explains the app in a few
        words.
      </Text>
      <View style={styles.carousel} />
      <SubmitButton />
    </SafeAreaView>
  );
};

export default Welcome;
