import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { darkBlue, yellow, lightGrey } from './style/globalConstant';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// -- pages
import Counter from './screens/counterScreen';
import Config from './screens/configScreen';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="Counter"
        tabBarOptions={{
          activeTintColor: yellow,
          inactiveTintColor: lightGrey,
          style: { backgroundColor: darkBlue },  
        }}
      >
        <Tab.Screen name="Counter" component={Counter} options={{
            tabBarLabel: 'Counter',
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={ faStar } size={size} style={{color}}/>
            ),
          }}
        />
        <Tab.Screen name="Config" component={Config} options={{
            tabBarLabel: 'Config',
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={ faStar } size={size} style={{color}}/>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}