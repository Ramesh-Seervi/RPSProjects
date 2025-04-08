import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MapPin, Star, Navigation2 } from 'lucide-react-native';

const FEATURED_TRAILS = [
  {
    id: 1,
    name: 'Mount Rainier Skyline Trail',
    location: 'Mount Rainier National Park, WA',
    distance: '5.5',
    rating: 4.8,
    difficulty: 'Moderate',
    image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    name: 'Angels Landing Trail',
    location: 'Zion National Park, UT',
    distance: '4.4',
    rating: 4.9,
    difficulty: 'Hard',
    image: 'https://images.unsplash.com/photo-1533953263536-c12eabf51c71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    name: 'Emerald Lake Trail',
    location: 'Rocky Mountain National Park, CO',
    distance: '3.1',
    rating: 4.7,
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  },
];

export default function ExploreScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate refresh
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.header}>
          <Text style={styles.title}>Discover Trails</Text>
          <Text style={styles.subtitle}>Find your next adventure</Text>
        </View>

        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Featured Trails</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {FEATURED_TRAILS.map((trail) => (
              <TouchableOpacity key={trail.id} style={styles.trailCard}>
                <Image source={{ uri: trail.image }} style={styles.trailImage} />
                <View style={styles.trailInfo}>
                  <Text style={styles.trailName}>{trail.name}</Text>
                  <View style={styles.locationContainer}>
                    <MapPin size={14} color="#666666" />
                    <Text style={styles.locationText}>{trail.location}</Text>
                  </View>
                  <View style={styles.statsContainer}>
                    <View style={styles.stat}>
                      <Navigation2 size={14} color="#666666" />
                      <Text style={styles.statText}>{trail.distance} mi</Text>
                    </View>
                    <View style={styles.stat}>
                      <Star size={14} color="#FFB800" />
                      <Text style={styles.statText}>{trail.rating}</Text>
                    </View>
                    <View style={[styles.difficultyBadge, { backgroundColor: getDifficultyColor(trail.difficulty) }]}>
                      <Text style={styles.difficultyText}>{trail.difficulty}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.categoriesSection}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <View style={styles.categoriesGrid}>
            {['Waterfall', 'Lake', 'Forest', 'Mountain', 'Beach', 'River'].map((category) => (
              <TouchableOpacity key={category} style={styles.categoryCard}>
                <Text style={styles.categoryText}>{category}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case 'easy':
      return '#4CAF50';
    case 'moderate':
      return '#FFA000';
    case 'hard':
      return '#F44336';
    default:
      return '#757575';
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    marginTop: 4,
  },
  featuredSection: {
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1A1A1A',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  trailCard: {
    width: 300,
    marginLeft: 20,
    marginRight: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  trailImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  trailInfo: {
    padding: 16,
  },
  trailName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  locationText: {
    fontSize: 14,
    color: '#666666',
    marginLeft: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    fontSize: 14,
    color: '#666666',
    marginLeft: 4,
  },
  difficultyBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  difficultyText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  categoriesSection: {
    paddingVertical: 20,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    gap: 12,
  },
  categoryCard: {
    width: '30%',
    aspectRatio: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1A1A1A',
  },
});