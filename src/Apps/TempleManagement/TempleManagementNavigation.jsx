import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Chrome as Home, Calendar, Heart, Settings, DollarSign } from 'lucide-react-native';
import HomeScreen from './screens/HomeScreen';
import EventsScreen from './screens/EventsScreen';
import MarketplaceScreen from './screens/MarketplaceScreen';
import CommunityScreen from './screens/CommunityScreen';
import DirectoryScreen from './screens/DirectoryScreen';

const Tab = createBottomTabNavigator();

export default function TempleManagementNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#FFF5E6',
          borderTopColor: '#FFB266',
        },
        tabBarActiveTintColor: '#FF8000',
        tabBarInactiveTintColor: '#666666',
        headerStyle: {
          backgroundColor: '#FFF5E6',
        },
        headerTintColor: '#FF8000',
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
        name="Events"
        component={EventsScreen}
        options={{
          title: 'Events',
          tabBarIcon: ({ color, size }) => (
            <Calendar size={size} color={color} />
          ),
        }}
      />
       <Tab.Screen
        name="Donations"
        component={MarketplaceScreen}
        options={{
          title: 'Donations',
          tabBarIcon: ({ color, size }) => (
            <DollarSign size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Devotees"
        component={CommunityScreen}
        options={{
          title: 'Devotees',
          tabBarIcon: ({ color, size }) => (
            <Heart size={size} color={color} />
          ),
        }}
      />
     
      <Tab.Screen
        name="Settings"
        component={DirectoryScreen}
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
