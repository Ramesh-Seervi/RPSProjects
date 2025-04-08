import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Sword, Heart, Castle, Gamepad2, Trophy } from 'lucide-react-native';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function PUBGBattlegroundNavigation() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: {
        backgroundColor: '#1a1c2c',
        borderTopColor: '#2a2c3c',
      },
      tabBarActiveTintColor: '#ffd700',
      tabBarInactiveTintColor: '#8b8b8b',
      headerStyle: {
        backgroundColor: '#1a1c2c',
      },
      headerTintColor: '#ffffff',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerTitle: 'IPL 2025',
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
    
      
      <Tab.Screen
        name="Play"
        component={ProfileScreen}
        options={{
          title: 'Play',
          tabBarIcon: ({ color, size }) => <Gamepad2 size={size} color={color} />,
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