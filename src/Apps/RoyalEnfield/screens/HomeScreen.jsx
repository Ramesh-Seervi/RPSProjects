import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useCallback } from 'react';

const MOTORCYCLES = [
  {
    id: 1,
    name: 'Continental GT 650',
    price: '$6,199',
    image: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?w=800',
    specs: '648cc Twin Cylinder',
  },
  {
    id: 2,
    name: 'Interceptor 650',
    price: '$5,999',
    image: 'https://images.unsplash.com/photo-1558981001-1995369a39cd?w=800',
    specs: '648cc Twin Cylinder',
  },
  {
    id: 3,
    name: 'Himalayan',
    price: '$5,299',
    image: 'https://images.unsplash.com/photo-1631276893368-478c4c4e4612?w=800',
    specs: '411cc Single Cylinder',
  },
];

export default function MotorcyclesScreen() {
  const renderMotorcycle = useCallback(({ id, name, price, image, specs }) => (
    <TouchableOpacity key={id} style={styles.motorcycleCard}>
      <Image source={{ uri: image }} style={styles.motorcycleImage} />
      <View style={styles.motorcycleInfo}>
        <Text style={styles.motorcycleName}>{name}</Text>
        <Text style={styles.motorcycleSpecs}>{specs}</Text>
        <Text style={styles.motorcyclePrice}>{price}</Text>
      </View>
    </TouchableOpacity>
  ), []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1589397986426-acf2ecc42e1a?w=800' }}
          style={styles.headerImage}
        />
        <Text style={styles.headerTitle}>Royal Enfield</Text>
        <Text style={styles.headerSubtitle}>Pure Motorcycling</Text>
      </View>
      <ScrollView style={styles.motorcycleList}>
        {MOTORCYCLES.map(renderMotorcycle)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  header: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.5,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  headerSubtitle: {
    color: '#D4AF37',
    fontSize: 18,
    marginTop: 8,
  },
  motorcycleList: {
    flex: 1,
    padding: 16,
  },
  motorcycleCard: {
    backgroundColor: '#2A2A2A',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
  },
  motorcycleImage: {
    width: '100%',
    height: 200,
  },
  motorcycleInfo: {
    padding: 16,
  },
  motorcycleName: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  motorcycleSpecs: {
    color: '#888888',
    fontSize: 16,
    marginTop: 4,
  },
  motorcyclePrice: {
    color: '#D4AF37',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
  },
});