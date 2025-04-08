import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Calendar, Heart, Trophy, Settings, Users2 } from 'lucide-react-native';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import WishlistScreen from './screens/WishlistScreen';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function IPLNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#1e40af',
        tabBarInactiveTintColor: '#64748b',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#e2e8f0',
        },
        headerStyle: {
          backgroundColor: '#1e40af',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name="Vehicles"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerTitle: 'IPL 2025',
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={CategoriesScreen}
        options={{
          title: 'Schedule',
          headerTitle: 'Match Schedule',
          tabBarIcon: ({ color, size }) => <Calendar size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Service"
        component={CartScreen}
        options={{
          title: 'Teams',
          headerTitle: 'IPL Teams',
          tabBarIcon: ({ color, size }) => <Trophy size={size} color={color} />,
        }}
      />
       <Tab.Screen
        name="Players"
        component={WishlistScreen}
        options={{
          title: 'Players',
          headerTitle: 'Players',
          tabBarIcon: ({ color, size }) => <Users2 size={size} color={color} />,
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