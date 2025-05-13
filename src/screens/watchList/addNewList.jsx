import {Formik} from 'formik';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import {useDispatch} from 'react-redux';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';

import NewListSchema from '../../utils/validationScemas';
import {addNewList} from '../../store/slice/whatchListSlice';
import {ThemeColors} from '../../theme/themeColors';
import {useNavigation} from '@react-navigation/native';

const AddNewList = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View
      style={[
        defaultScreenStyle.container,
        {paddingTop: StatusBar.currentHeight},
      ]}>
      <Formik
        initialValues={{
          id: Date.now(),
          title: '',
        }}
        validationSchema={NewListSchema}
        onSubmit={values => {
          dispatch(addNewList(values));
          navigation.goBack();
        }}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <ScrollView>
            <View style={{marginVertical: 'auto'}}>
              <Text
                style={{
                  color: ThemeColors.WHİTE,
                  fontSize: 30,
                  textAlign: 'center',
                  marginVertical: 10,
                }}>
                Ready to watch ?
              </Text>
              <Text
                style={{
                  color: ThemeColors.WHİTE,
                  fontSize: 18,
                  textAlign: 'center',
                  marginVertical: 10,
                }}>
                {' '}
                Open your playlist and start watching
              </Text>
            </View>
            <Input
              eror={errors.title}
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
              title="Whatch List Name"
            />

            <View style={{marginTop: 80}}>
              <Button onPress={handleSubmit} title="CREATE" status="primary" />
            </View>
          </ScrollView>
        )}
      </Formik>
    </View>
  );
};

export default AddNewList;

const styles = StyleSheet.create({});
