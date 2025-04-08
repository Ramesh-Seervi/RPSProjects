import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LayoutGrid, Bookmark, Settings, User } from 'lucide-react-native';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import DiscoverScreen from './screens/DiscoverScreen';

const Tab = createBottomTabNavigator();

export default function TrelloNavigation() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: {
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderTopColor: '#e5e5e5',
      },
      tabBarActiveTintColor: '#0055D4',
      tabBarInactiveTintColor: '#71717a',
      headerShown: false,
    }}>
      <Tab.Screen
        name="Boards"
        component={HomeScreen}
        options={{
          title: 'Boards',
          tabBarIcon: ({ color, size }) => (
            <LayoutGrid size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={DiscoverScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <User size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Settings size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
