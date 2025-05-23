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
import TravelTourismNavigation from '../Apps/TravelTourism/TravelTourismNavigation';
import B2BAppNavigation from '../Apps/B2BApp/B2BAppNavigation';
import NewsMagazineNavigation from '../Apps/NewsMagazine/NewsMagazineNavigation';
import SmartHomeManagementNavigation from '../Apps/SmartHomeManagement/SmartHomeManagementNavigation';
import DatingAppSetupNavigation from '../Apps/DatingAppSetup/DatingAppSetupNavigation';
import DashboardManagementNavigation from '../Apps/DashboardManagement/DashboardManagementNavigation';
import FashionTrendAppsNavigation from '../Apps/FashionTrendApps/FashionTrendAppsNavigation';
import SportsFitnessNavigation from '../Apps/SportsFitness/SportsFitnessNavigation';
import FlipkartNavigation from '../Apps/Flipkart/FlipkartNavigation';
import TwitterNavigation from '../Apps/Twitter/TwitterNavigation';
import MyntraNavigation from '../Apps/Myntra/MyntraNavigation';
import TruecallerNavigation from '../Apps/Truecaller/TruecallerNavigation';
import BigBasketNavigation from '../Apps/BigBasket/BigBasketNavigation';
import SnapdealNavigation from '../Apps/Snapdeal/SnapdealNavigation';
import CanvaNavigation from '../Apps/Canva/CanvaNavigation';
import ProductDetailsNavigation from '../Apps/ProductDetails/ProductDetailsNavigation';
import NotionNavigation from '../Apps/Notion/NotionNavigation';
import AllTrailsNavigation from '../Apps/AllTrails/AllTrailsNavigation';
import TrelloNavigation from '../Apps/Trello/TrelloNavigation';
import TempleManagementNavigation from '../Apps/TempleManagement/TempleManagementNavigation';
import AircraftNavigation from '../Apps/Aircraft/AircraftNavigation';
import MercedesBenzNavigation from '../Apps/MercedesBenz/MercedesBenzNavigation';
import IPLNavigation from '../Apps/IPL/IPLNavigation';
import ClashofClansNavigation from '../Apps/ClashofClans/ClashofClansNavigation';
import MyTalkingTomNavigation from '../Apps/MyTalkingTom/MyTalkingTomNavigation';
import PUBGBattlegroundNavigation from '../Apps/PUBGBattleground/PUBGBattlegroundNavigation';
import RoyalEnfieldNavigation from '../Apps/RoyalEnfield/RoyalEnfieldNavigation';
import RollsRoyceNavigation from '../Apps/RollsRoyce/RollsRoyceNavigation';
import BMWNavigation from '../Apps/BMW/BMWNavigation';
import CromaNavigation from '../Apps/Croma/CromaNavigation';
import LudoKingNavigation from '../Apps/LudoKing/LudoKingNavigation';
import RobloxNavigation from '../Apps/Roblox/RobloxNavigation';
import AnimatedNavigation from '../Apps/Animated/AnimatedNavigation';
import ShowcaseNavigation from '../Apps/Showcase/ShowcaseNavigation';

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
                <AllAppNav.Screen name="TravelTourism" component={TravelTourismNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="B2BApp" component={B2BAppNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="SmartHomeManagement" component={SmartHomeManagementNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="DatingAppSetup" component={DatingAppSetupNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="DashboardManagement" component={DashboardManagementNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="FashionTrendApps" component={FashionTrendAppsNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="SportsFitness" component={SportsFitnessNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="Twitter" component={TwitterNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="Myntra" component={MyntraNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="Truecaller" component={TruecallerNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="BigBasket" component={BigBasketNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="Snapdeal" component={SnapdealNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="Canva" component={CanvaNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="ProductDetails" component={ProductDetailsNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="Notion" component={NotionNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="AllTrails" component={AllTrailsNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="Trello" component={TrelloNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="TempleManagement" component={TempleManagementNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="Aircraft" component={AircraftNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="MercedesBenz" component={MercedesBenzNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="IPL" component={IPLNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="ClashofClans" component={ClashofClansNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="MyTalkingTom" component={MyTalkingTomNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="PUBGBattleground" component={PUBGBattlegroundNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="RoyalEnfield" component={RoyalEnfieldNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="RollsRoyce" component={RollsRoyceNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="BMW" component={BMWNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="Croma" component={CromaNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="LudoKing" component={LudoKingNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="Roblox" component={RobloxNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="Animated" component={AnimatedNavigation} options={{ headerShown: false }} />
                <AllAppNav.Screen name="Showcase" component={ShowcaseNavigation} options={{ headerShown: false }} />
                </AllAppNav.Navigator>
            {/* <ECommerceBottomNavigation /> */}
        </GestureHandlerRootView>
    );
};

export default AllAppNavigations;