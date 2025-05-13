import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ThemeColors} from '../../theme/themeColors';
import {useSelector} from 'react-redux';
import MovieItem from '../movies/movieItem';

const Section = ({item}) => {
  const {topRatedMovies, populerMovies, upcomingMovies} = useSelector(
    state => state.movie,
  );
  const setData = () => {
    switch (item.id) {
      case 1:
        return topRatedMovies;
      case 2:
        return populerMovies;
      case 3:
        return upcomingMovies;
      case 4:
        return populerMovies;
      default:
        return topRatedMovies;
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <FlatList
        horizontal
        data={setData()}
        renderItem={({item}) => <MovieItem item={item} />}
      />
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    color: ThemeColors.WHİTE,
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 10,
    marginBottom: 20,
  },
});
