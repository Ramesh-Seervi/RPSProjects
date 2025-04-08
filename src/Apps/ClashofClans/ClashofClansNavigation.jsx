import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Sword, Heart, Castle, Settings, Trophy } from 'lucide-react-native';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import WishlistScreen from './screens/WishlistScreen';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function ClashofClansNavigation() {
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
          tabBarIcon: ({ color, size }) => <Sword size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Clan"
        component={CartScreen}
        options={{
          title: 'Clan',
          tabBarIcon: ({ color, size }) => <Castle size={size} color={color} />,
        }}
      />
       <Tab.Screen
        name="Battles"
        component={WishlistScreen}
        options={{
          title: 'Battles',
          tabBarIcon: ({ color, size }) => <Trophy size={size} color={color} />,
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