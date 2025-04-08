import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Compass, Search, MapPin, BookMarked, User } from 'lucide-react-native';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import SearchScreen from './screens/SearchScreen';

const Tab = createBottomTabNavigator();

export default function AllTrailsNavigation() {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderTopColor: '#e5e5e5',
      },
      tabBarActiveTintColor: '#2B8A3E',
      tabBarInactiveTintColor: '#666666',
    }}>
    <Tab.Screen
      name="index"
        component={HomeScreen}
        options={{
        title: 'Explore',
        tabBarIcon: ({ color, size }) => <Compass size={size} color={color} />,
      }}
    />
    <Tab.Screen
      name="search"
        component={SearchScreen}
        options={{
        title: 'Search',
        tabBarIcon: ({ color, size }) => <Search size={size} color={color} />,
      }}
    />
    <Tab.Screen
      name="MapPin"
        component={CartScreen}
        options={{
        title: 'MapPin',
        tabBarIcon: ({ color, size }) => <MapPin size={size} color={color} />,
      }}
    />
    <Tab.Screen
      name="Saved"
        component={FavoritesScreen}
        options={{
        title: 'Saved',
        tabBarIcon: ({ color, size }) => <BookMarked size={size} color={color} />,
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
