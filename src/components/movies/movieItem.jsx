import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IMAGE_BASE_URL} from '../../service/url';
import {useNavigation} from '@react-navigation/native';
import {MOVIEDETAIL} from '../../utils/route';

const MovieItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(MOVIEDETAIL, {movieId: item.id})}
      style={styles.container}>
      <Image
        source={{uri: `${IMAGE_BASE_URL}${item.poster_path}`}}
        style={styles.image}
      />
    </Pressable>
  );
};

export default MovieItem;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
  image: {
    width: 125,
    height: 170,
    resizeMode: 'cover',
    marginVertical: 10,
  },
});
