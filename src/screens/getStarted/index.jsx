import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ThemeColors} from '../../theme/themeColors';

const GetStarted = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 3, backgroundColor: 'blue'}}>
        <Image
          source={require('../../assets/image/image1.png')}
          style={{
            height: '100%',
            width: '100%',
            resizeMode: 'cover',
          }}
        />
        <View style={{position: 'absolute', bottom: 0}}>
          <Text style={{fontSize: 24, color: ThemeColors.WHİTE}}>
            Unlimited entertainment, one low price.
          </Text>
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: 'red'}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GetStarted;
