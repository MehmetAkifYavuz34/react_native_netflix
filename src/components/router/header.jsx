import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {ThemeColors} from '../../theme/themeColors';
import foto from '../../assets/image/net.png';
import {Edit2} from 'iconsax-react-nativejs';
import {useNavigation} from '@react-navigation/native';
import {ADDNEWLIST} from '../../utils/route';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          style={{
            width: 110,
            height: 55,
            resizeMode: 'contain',
            marginTop: 30,
          }}
          source={foto}
        />
        <Edit2
          onPress={() => navigation.navigate(ADDNEWLIST)}
          size={32}
          color="white"
          style={{marginLeft: 16, marginTop: 30}}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: ThemeColors.BLACK,
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Düzeltildi
    width: '90%', // Satırı genişlet
    paddingHorizontal: 8,
  },
});
