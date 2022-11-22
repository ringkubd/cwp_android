import React, {useEffect} from 'react';
import Background from '../../components/Background';
import Header from '../../components/Header';
import {useSelector} from 'react-redux';
import {useGetAccountListMutation} from '../../services/Account';

const ServerHomeScreen = ({navigation, route}) => {
  const activeServer = useSelector(state => state.server_list);
  const [data, {isLoading, errors}] = useGetAccountListMutation({
    action: 'list',
    key: activeServer.api_key,
  });

  useEffect(() => {
    data();
  }, []);
  return (
    <Background>
      <Header>Server Home Page</Header>
    </Background>
  );
};

export default ServerHomeScreen;
