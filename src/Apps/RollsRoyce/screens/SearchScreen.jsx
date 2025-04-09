import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const carModels = [
  {
    id: '1',
    name: 'Phantom',
    image: 'https://images.unsplash.com/photo-1631297852230-c2765e8ad659?q=80&w=1200',
    price: 'From $460,000',
    description: 'The pinnacle of luxury, a masterpiece of elegance and sophistication.',
  },
  {
    id: '2',
    name: 'Cullinan',
    image: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?q=80&w=1200',
    price: 'From $355,000',
    description: 'The first all-terrain SUV from Rolls-Royce, making luxury effortless everywhere.',
  },
  {
    id: '3',
    name: 'Ghost',
    image: 'https://images.unsplash.com/photo-1632548260498-b7246fa466ea?q=80&w=1200',
    price: 'From $340,000',
    description: 'A slightly more dynamic expression of Rolls-Royce luxury.',
  },
];

export default function ModelsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.pageTitle}>Our Models</Text>
        
        {carModels.map((car) => (
          <TouchableOpacity key={car.id} style={styles.carCard}>
            <Image source={{ uri: car.image }} style={styles.carImage} />
            <View style={styles.carInfo}>
              <Text style={styles.carName}>{car.name}</Text>
              <Text style={styles.carPrice}>{car.price}</Text>
              <Text style={styles.carDescription}>{car.description}</Text>
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
    backgroundColor: '#000000',
  },
  scrollContent: {
    padding: 20,
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: '600',
    color: '#C4A47C',
    marginBottom: 30,
    letterSpacing: 2,
  },
  carCard: {
    marginBottom: 30,
    backgroundColor: '#1A1A1A',
    borderRadius: 15,
    overflow: 'hidden',
  },
  carImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  carInfo: {
    padding: 20,
  },
  carName: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 8,
    fontWeight: '500',
  },
  carPrice: {
    fontSize: 18,
    color: '#C4A47C',
    marginBottom: 12,
  },
  carDescription: {
    fontSize: 16,
    color: '#CCCCCC',
    lineHeight: 24,
  },
});