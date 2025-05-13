import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ThemeColors} from '../../theme/themeColors';
import Button from '../../components/ui/button';
import {WATCHLIST} from '../../utils/route';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 5}}>
        <Image
          source={require('../../assets/image/image1.png')}
          style={{
            height: '100%',
            width: '100%',
            resizeMode: 'cover',
          }}
        />
        <View
          style={{
            width: '100%',
            height: '15%',
            position: 'absolute',
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            padding: 5,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 28,
              color: ThemeColors.WHİTE,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            Unlimited entertainment, one low price.
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: ThemeColors.WHİTE,
              textAlign: 'center',
              fontWeight: '500',
            }}>
            All of Netflix, starting at just ₹149.00/month.
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: ThemeColors.BLACK,
          justifyContent: 'center',
        }}>
        <Button
          onPress={() => navigation.navigate(WATCHLIST)}
          title="GET STARTED"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default GetStarted;
