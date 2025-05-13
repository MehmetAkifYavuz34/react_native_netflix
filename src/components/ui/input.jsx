import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {ThemeColors} from '../../theme/themeColors';

const Input = props => {
  const {title, eror} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput {...props} style={styles.input} />
      {eror && (
        <Text style={{marginTop: 5, color: ThemeColors.RED}}>{eror}</Text>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: 'gray',
    height: 100,
    borderRadius: 5,
    padding: 5,
  },
  title: {
    fontSize: 18,

    fontWeight: 'bold',
    marginBottom: 5,
    color: ThemeColors.WHİTE,
  },
  input: {
    padding: 10,

    fontSize: 25,
    borderRadius: 5,
    paddingVertical: 15,

    color: ThemeColors.WHİTE,
  },
});
