import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Car, MapPin, Heart, Wrench, User } from 'lucide-react-native';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import WishlistScreen from './screens/WishlistScreen';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function MercedesBenzNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#00A5E0',
        tabBarInactiveTintColor: '#666666',
      }}>
      <Tab.Screen
        name="Vehicles"
        component={HomeScreen}
        options={{
          title: 'Vehicles',
          tabBarIcon: ({ color, size }) => <Car size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Dealerships"
        component={CategoriesScreen}
        options={{
          title: 'Dealerships',
          tabBarIcon: ({ color, size }) => <MapPin size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Service"
        component={CartScreen}
        options={{
          title: 'Service',
          tabBarIcon: ({ color, size }) => <Wrench size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
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