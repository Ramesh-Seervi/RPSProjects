import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Trophy, Users2, Settings } from 'lucide-react-native';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import SocialScreen from './screens/SocialScreen';

const Tab = createBottomTabNavigator();

export default function RobloxNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1A1A2E',
          borderTopWidth: 0,
          height: 70,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: '#FFD700',
        tabBarInactiveTintColor: '#666',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Home size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Tournaments"
        component={CategoriesScreen}
        options={{
          title: 'Tournaments',
          tabBarIcon: ({ color, size }) => (
            <Trophy size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Friends"
        component={CartScreen}
        options={{
          title: 'Friends',
          tabBarIcon: ({ color, size }) => (
            <Users2 size={size} color={color} />
          ),
        }}
      />
       <Tab.Screen
        name="Friendsss"
        component={SocialScreen}
        options={{
          title: 'Friends',
          tabBarIcon: ({ color, size }) => (
            <Users2 size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={ProfileScreen}
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
