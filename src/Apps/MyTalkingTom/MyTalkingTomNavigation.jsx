import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Chrome as Home, TowerControl as GameController, Settings } from 'lucide-react-native';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function MyTalkingTomNavigation() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: {
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#eee',
      },
      tabBarActiveTintColor: '#FF6B6B',
      tabBarInactiveTintColor: '#999',
      headerShown: false,
    }}>
      <Tab.Screen
        name="Village"
        component={HomeScreen}
        options={{
          title: 'Village',
          headerTitle: 'IPL 2025',
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Army"
        component={CategoriesScreen}
        options={{
          title: 'Army',
          tabBarIcon: ({ color, size }) => <GameController size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => <Settings size={size} color={color} />,
        }}
      />

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    height: 70,
    paddingBottom: 8,
  },
});