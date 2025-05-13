import {FlatList, View} from 'react-native';
import React, {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {getCategories} from '../store/actions/movieActions';
import CategoryItem from '../components/widgets/categoryItem';

const Categories = () => {
  const {categories} = useSelector(state => state.movie);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <View style={{paddingVertical: 8}}>
      <FlatList
        horizontal
        data={categories}
        renderItem={({item}) => <CategoryItem item={item} />}
      />
    </View>
  );
};

export default Categories;
