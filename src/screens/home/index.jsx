import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {
  getCategories,
  getPopulerMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '../../store/actions/movieActions';

import Categories from '../../widgets/categories';
import Sections from '../../widgets/section';

const Home = () => {
  const {topRatedMovies, categories} = useSelector(state => state.movie);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getTopRatedMovies());
    dispatch(getPopulerMovies());
    dispatch(getUpcomingMovies());
  }, []);
  return (
    <View style={defaultScreenStyle.container}>
      <Categories />
      <Sections />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
