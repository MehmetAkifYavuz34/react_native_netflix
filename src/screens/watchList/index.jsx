//import liraries
import React from 'react';
import {View, Text, FlatList, Pressable} from 'react-native';

import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useSelector} from 'react-redux';
import WhatchListItem from '../../components/whatchList/whatchListItem';

// create a component
const WatchList = () => {
  const {whatchList} = useSelector(state => state.whatchList);
  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        contentContainerStyle={{
          alignItems: 'center',

          flexGrow: 1,
        }}
        numColumns={2}
        data={whatchList}
        renderItem={({item}) => <WhatchListItem item={item} />}
        ListHeaderComponent={
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              fontWeight: 'bold',
              marginVertical: 30,
            }}>
            Who's Watching?
          </Text>
        }
      />
    </View>
  );
};

//make this component available to the app
export default WatchList;
