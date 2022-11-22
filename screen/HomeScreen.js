import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Pressable, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import EncryptedStorage from 'react-native-encrypted-storage';

import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import {Button, Surface, Text} from 'react-native-paper';
import {theme} from '../utils/theme';
import {setCredentials} from '../store/slice/ServerSlice';

const HomeScreen = ({navigation}) => {
  const [servers, setServers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    serverList();
  }, []);

  const serverList = async () => {
    try {
      const servers = await EncryptedStorage.getItem('server_list');
      if (servers) {
        setServers(JSON.parse(servers));
        dispatch(setCredentials(JSON.parse(servers)));
      }
    } catch (e) {
      console.log(e);
      Alert.alert('Error', 'Error');
    }
  };

  const activateServer = server => {
    dispatch(setCredentials(server));
    navigation.navigate('ServerHomepage');
  };
  return (
    <Background>
      <Logo />
      <Header>CentOS Web Panel</Header>
      <Button onPress={() => navigation.navigate('AddServer')} mode="contained">
        Add New Server
      </Button>
      <View style={{flex: 1, flexDirection: 'row'}}>
        {servers.map((s, i) => {
          return (
            <Pressable key={i} onPress={() => activateServer(s)}>
              <Surface style={styles.surface}>
                <Text>{s.name}</Text>
              </Surface>
            </Pressable>
          );
        })}
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  surface: {
    flexDirection: 'column',
    padding: 8,
    height: 80,
    width: 80,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: theme.colors.primaryContainer,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default HomeScreen;
