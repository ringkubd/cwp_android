import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {theme} from '../utils/theme';
import HomeScreen from '../screen/HomeScreen';
import AddServer from '../screen/Server/AddServer';

const Stack = createStackNavigator();
const MainNavigation = () => {
  const headerTitleStyle = {
    fontSize: 18,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 14,
  };
  return (
    <Stack.Navigator screenOptions={{headerTitleStyle: headerTitleStyle}}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddServer"
        component={AddServer}
        options={{
          title: 'Add New Server',
        }}
      />
    </Stack.Navigator>
  );
};
export default MainNavigation;
