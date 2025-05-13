import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TAB} from '../../utils/route';

const WhatchListItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.replace(TAB)} style={styles.container}>
      <Image
        style={{width: 100, height: 100, borderRadius: 10}}
        source={item.image}
      />
      <Text
        style={{
          color: 'white',
          fontSize: 18,
          fontWeight: '500',
          marginTop: 10,
        }}>
        {item.title}
      </Text>
    </Pressable>
  );
};

export default WhatchListItem;

const styles = StyleSheet.create({
  container: {
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginVertical: 40,
  },
});
