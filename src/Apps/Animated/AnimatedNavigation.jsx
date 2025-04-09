import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Car, MapPin, Heart, Settings } from 'lucide-react-native';
import Tab1 from './screens/Tab1';
import Tab2 from './screens/Tab2';
import Tab3 from './screens/Tab3';
import Tab4 from './screens/Tab4';
import Tab5 from './screens/Tab5';
import Tab6 from './screens/Tab6';
import Tab7 from './screens/Tab7';
import Tab8 from './screens/Tab8';
import Tab9 from './screens/Tab9';
import Tab10 from './screens/Tab10';
import Tab11 from './screens/Tab11';
import Tab12 from './screens/Tab12';
import Tab13 from './screens/Tab13';
import Tab14 from './screens/Tab14';
import Tab15 from './screens/Tab15';

const Tab = createBottomTabNavigator();

export default function AnimatedNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          height: 60,
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
      }}>
      <Tab.Screen
        name="Tab1"
        component={Tab1}
        options={{
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Tab2"
        component={Tab2}
        options={{
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Tab3"
        component={Tab3}
        options={{
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Tab4"
        component={Tab4}
        options={{
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Tab5"
        component={Tab5}
        options={{
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Tab6"
        component={Tab6}
        options={{
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Tab7"
        component={Tab7}
        options={{
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Tab8"
        component={Tab8}
        options={{
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Tab9"
        component={Tab9}
        options={{
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Tab10"
        component={Tab10}
        options={{
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      {/* <Tab.Screen
        name="Tab11"
        component={Tab11}
        options={{
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Tab12"
        component={Tab12}
        options={{
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Tab13"
        component={Tab13}
        options={{
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Tab14"
        component={Tab14}
        options={{
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Tab15"
        component={Tab15}
        options={{
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      /> */}
    </Tab.Navigator>
  );
}
