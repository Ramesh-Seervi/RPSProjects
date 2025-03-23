import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ECommerceBottomNavigation from '../Apps/ECommerce/ECommerceBottomNavigation';
import AllApps from '../AllApps';
import VillageCommunityNavigation from '../Apps/VillageCommunity/VillageCommunityNavigation';

const AllAppNav = createStackNavigator();

const AllAppNavigations = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <AllAppNav.Navigator initialRouteName="AllApps">
                <AllAppNav.Screen name="AllApps" component={AllApps} options={{ headerShown: false }} />
                <AllAppNav.Screen name="ECommerce" component={ECommerceBottomNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="VillageCommunity" component={VillageCommunityNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="CategoriesWise" component={ECommerceBottomNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="SignIn" component={ECommerceBottomNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="VerifyingNumber" component={ECommerceBottomNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="ProdectDetails" component={ECommerceBottomNavigation} options={{ headerShown: false }} />
            </AllAppNav.Navigator>
            {/* <ECommerceBottomNavigation /> */}
        </GestureHandlerRootView>
    );
};

export default AllAppNavigations;