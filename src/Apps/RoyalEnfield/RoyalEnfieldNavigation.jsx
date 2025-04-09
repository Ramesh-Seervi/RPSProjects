import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  Bike, Wrench, MapPin, Heart, Settings } from 'lucide-react-native';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';

const Tab = createBottomTabNavigator();

export default function RoyalEnfieldNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#1A1A1A',
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#D4AF37',
        tabBarInactiveTintColor: '#888888',
        headerStyle: {
          backgroundColor: '#1A1A1A',
        },
        headerTitleStyle: {
          color: '#FFFFFF',
          fontFamily: 'Inter-Bold',
        },
      }}>
      <Tab.Screen
        name="index"
        component={HomeScreen}
        options={{
          title: 'Motorcycles',
          tabBarIcon: ({ color, size }) => <Bike size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="search"
        component={SearchScreen}
        options={{
          title: 'Customize',
          tabBarIcon: ({ color, size }) => <Wrench size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Dealers"
        component={CartScreen}
        options={{
          title: 'Dealers',
          tabBarIcon: ({ color, size }) => <MapPin size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={ProfileScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => <Settings size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
