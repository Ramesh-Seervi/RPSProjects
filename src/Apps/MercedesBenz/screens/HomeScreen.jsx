import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const VEHICLES = [
  {
    id: '1',
    name: 'EQS Sedan',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80',
    price: 'Starting at $104,400',
    type: 'Electric',
  },
  {
    id: '2',
    name: 'S-Class Sedan',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
    price: 'Starting at $114,500',
    type: 'Luxury',
  },
  {
    id: '3',
    name: 'AMG GT Coupe',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
    price: 'Starting at $118,600',
    type: 'Performance',
  },
];

export default function VehiclesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://www.mercedes-benz.com/content/dam/brandhub/global/logos/MB-star_n_web.svg' }}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Mercedes-Benz</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Featured Vehicles</Text>
        
        {VEHICLES.map((vehicle) => (
          <TouchableOpacity key={vehicle.id} style={styles.vehicleCard}>
            <Image source={{ uri: vehicle.image }} style={styles.vehicleImage} />
            <View style={styles.vehicleInfo}>
              <Text style={styles.vehicleName}>{vehicle.name}</Text>
              <Text style={styles.vehicleType}>{vehicle.type}</Text>
              <Text style={styles.vehiclePrice}>{vehicle.price}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  logo: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginLeft: 12,
    color: '#000000',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
    color: '#000000',
  },
  vehicleCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  vehicleImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  vehicleInfo: {
    padding: 16,
  },
  vehicleName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  vehicleType: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  vehiclePrice: {
    fontSize: 16,
    color: '#00A5E0',
    fontWeight: '500',
  },
});