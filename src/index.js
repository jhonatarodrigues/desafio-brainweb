import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// -- pages
import Counter from './screens/counterScreen';
import Config from './screens/configScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Counter" component={Counter} />
        <Tab.Screen name="Config" component={Config} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}