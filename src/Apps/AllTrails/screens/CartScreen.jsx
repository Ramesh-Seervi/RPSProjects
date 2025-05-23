import { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
// import * as Location from 'expo-location';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MapScreen() {
//   const [location, setLocation] = useState({
//     latitude: 37.78825,
//     longitude: -122.4324,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   });

//   useEffect(() => {
//     (async () => {
//       const { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         return;
//       }

//       const currentLocation = await Location.getCurrentPositionAsync({});
//       setLocation({
//         ...location,
//         latitude: currentLocation.coords.latitude,
//         longitude: currentLocation.coords.longitude,
//       });
//     })();
//   }, []);

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        // initialRegion={location}
        showsUserLocation
        showsMyLocationButton
      >
        {/* Add trail markers here */}
      </MapView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});