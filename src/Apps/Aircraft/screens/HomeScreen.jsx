import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const FEATURED_AIRCRAFT = [
  {
    id: '1',
    name: 'Boeing 787 Dreamliner',
    image: 'https://images.unsplash.com/photo-1559628376-f3fe5f782a2e',
    category: 'Commercial',
    description: 'Long-range, mid-size widebody, twin-engine jet airliner',
  },
  {
    id: '2',
    name: 'F-22 Raptor',
    image: 'https://images.unsplash.com/photo-1580824456266-c62f17c2cc43',
    category: 'Military',
    description: 'Fifth-generation, single-seat, twin-engine tactical fighter aircraft',
  },
  {
    id: '3',
    name: 'Airbus A380',
    image: 'https://images.unsplash.com/photo-1583517271097-659bb7d878b4',
    category: 'Commercial',
    description: 'Double-deck, wide-body, four-engine jet airliner',
  },
];

const CATEGORIES = ['All', 'Commercial', 'Military', 'Private', 'Helicopter'];

export default function DiscoverScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Discover Aircraft</Text>
        <Text style={styles.subtitle}>Explore the world of aviation</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}>
        {CATEGORIES.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.categoryButtonActive,
            ]}
            onPress={() => setSelectedCategory(category)}>
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.categoryTextActive,
              ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.featuredSection}>
        <Text style={styles.sectionTitle}>Featured Aircraft</Text>
        {FEATURED_AIRCRAFT.map((aircraft) => (
          <View href={`/aircraft/${aircraft.id}`} key={aircraft.id} asChild>
            <TouchableOpacity style={styles.aircraftCard}>
              <Image
                source={{ uri: aircraft.image }}
                style={styles.aircraftImage}
                resizeMode="cover"
              />
              <View style={styles.aircraftInfo}>
                <Text style={styles.aircraftCategory}>{aircraft.category}</Text>
                <Text style={styles.aircraftName}>{aircraft.name}</Text>
                <Text style={styles.aircraftDescription} numberOfLines={2}>
                  {aircraft.description}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    marginTop: 4,
  },
  categoriesContainer: {
    padding: 20,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },
  categoryButtonActive: {
    backgroundColor: '#0066cc',
    borderColor: '#0066cc',
  },
  categoryText: {
    fontSize: 14,
    color: '#666666',
  },
  categoryTextActive: {
    color: '#ffffff',
  },
  featuredSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#1a1a1a',
  },
  aircraftCard: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  aircraftImage: {
    width: SCREEN_WIDTH - 40,
    height: 200,
  },
  aircraftInfo: {
    padding: 15,
  },
  aircraftCategory: {
    fontSize: 12,
    color: '#0066cc',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  aircraftName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  aircraftDescription: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
});