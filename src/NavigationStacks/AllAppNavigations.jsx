import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ECommerceBottomNavigation from '../Apps/ECommerce/ECommerceBottomNavigation';
import AllApps from '../AllApps';
import VillageCommunityNavigation from '../Apps/VillageCommunity/VillageCommunityNavigation';
import SocialMediaNavigation from '../Apps/SocialMediaApps/SocialMediaNavigation';
import FoodDeliveryNavigation from '../Apps/FoodDelivery/FoodDeliveryNavigation';
import RidesBookingNavigation from '../Apps/RidesBooking/RidesBookingNavigation';
import EducationAppsNavigation from '../Apps/EducationApps/EducationAppsNavigation';
import GamingAppsNavigation from '../Apps/GamingApps/GamingAppsNavigation';
import FinanceAppsNavigation from '../Apps/FinanceApps/FinanceAppsNavigation';
import EventTicketingNavigation from '../Apps/EventTicketing/EventTicketingNavigation';
import LiveStreamingNavigation from '../Apps/LiveStreaming/LiveStreamingNavigation';
import RealEstateNavigation from '../Apps/RealEstate/RealEstateNavigation';
import JobFreelanceNavigation from '../Apps/JobFreelance/JobFreelanceNavigation';

const AllAppNav = createStackNavigator();

const AllAppNavigations = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <AllAppNav.Navigator initialRouteName="AllApps">
                <AllAppNav.Screen name="AllApps" component={AllApps} options={{ headerShown: false }} />
                <AllAppNav.Screen name="ECommerce" component={ECommerceBottomNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="VillageCommunity" component={VillageCommunityNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="SocialMedia" component={SocialMediaNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="FoodDelivery" component={FoodDeliveryNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="RidesBooking" component={RidesBookingNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="EducationApps" component={EducationAppsNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="GamingApps" component={GamingAppsNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="Finance" component={FinanceAppsNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="EventTicketing" component={EventTicketingNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="LiveStreaming" component={LiveStreamingNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="RealEstate" component={RealEstateNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="JobFreelance" component={JobFreelanceNavigation} options={{ headerShown: false }} />
                </AllAppNav.Navigator>
            {/* <ECommerceBottomNavigation /> */}
        </GestureHandlerRootView>
    );
};

export default AllAppNavigations;