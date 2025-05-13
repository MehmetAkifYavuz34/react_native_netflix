import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {sections} from '../utils/contants';
import Section from '../components/widgets/section';

const Sections = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={sections}
        renderItem={({item}) => <Section item={item} />}
      />
    </View>
  );
};

export default Sections;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
