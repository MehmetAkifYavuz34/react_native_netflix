import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ThemeColors} from '../../theme/themeColors';

const CategoryItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 5,
  },
  name: {
    color: ThemeColors.WHİTE,
    fontSize: 22,
    fontWeight: 'bold',
  },
});
