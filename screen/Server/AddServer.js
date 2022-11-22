import React from 'react';
import Background from '../../components/Background';
import {Formik} from 'formik';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import * as Yup from 'yup';
import TextInput from '../../components/TextInput';
import {isServerExist, isValidUrl, retrieveServer} from '../../utils/common';
import EncryptedStorage from 'react-native-encrypted-storage';
import {useDispatch} from 'react-redux';

const initialValue = {
  name: '',
  base_url: '',
  api_key: '',
};
const serverSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  base_url: Yup.string()
    .test('is-url-valid', 'URL is not valid', value => isValidUrl(value))
    .test('is-url-exist', 'URL already exist.', value => isServerExist(value))
    .required('Please enter website'),
  api_key: Yup.string().required('Api key is required.'),
});

const AddServer = ({navigation}) => {
  const submit = async values => {
    const serverList = await retrieveServer();
    const newServerList = serverList.concat(values);
    try {
      await EncryptedStorage.setItem(
        'server_list',
        JSON.stringify(newServerList),
      );

      // Congrats! You've just stored your first value!
    } catch (error) {
      // There was an error on the native side
    }
  };
  return (
    <Background>
      <View style={{flex: 1, width: '100%', borderRadius: 10}}>
        <Formik
          initialValues={initialValue}
          onSubmit={submit}
          validationSchema={serverSchema}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <View style={{padding: 5, margin: 5}}>
              <View style={{marginVertical: 5}}>
                <TextInput
                  label="Name"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  error={errors.name ? true : false}
                  errorText={errors.name}
                />
              </View>
              <View style={{marginVertical: 5}}>
                <TextInput
                  label="Base URL"
                  onChangeText={handleChange('base_url')}
                  onBlur={handleBlur('base_url')}
                  error={errors.base_url ? true : false}
                  errorText={errors.base_url}
                />
              </View>
              <View style={{marginVertical: 5}}>
                <TextInput
                  label="Api Key"
                  onChangeText={handleChange('api_key')}
                  onBlur={handleBlur('api_key')}
                  error={errors.api_key ? true : false}
                  errorText={errors.api_key}
                />
              </View>
              <View style={{marginVertical: 5}}>
                <Button mode="contained" onPress={() => handleSubmit()}>
                  Submit
                </Button>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </Background>
  );
};

export default AddServer;
