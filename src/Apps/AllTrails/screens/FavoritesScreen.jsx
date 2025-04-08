import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MapPin, Navigation2, Star } from 'lucide-react-native';

const SAVED_TRAILS = [
  {
    id: '1',
    name: 'Mount Rainier Skyline Trail',
    location: 'Mount Rainier National Park, WA',
    distance: '5.5',
    rating: 4.8,
    difficulty: 'Moderate',
    image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '2',
    name: 'Angels Landing Trail',
    location: 'Zion National Park, UT',
    distance: '4.4',
    rating: 4.9,
    difficulty: 'Hard',
    image: 'https://images.unsplash.com/photo-1533953263536-c12eabf51c71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  },
];

export default function SavedScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Saved Trails</Text>
      </View>

      <FlatList
        data={SAVED_TRAILS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.trailCard}>
            <Image source={{ uri: item.image }} style={styles.trailImage} />
            <View style={styles.trailInfo}>
              <Text style={styles.trailName}>{item.name}</Text>
              <View style={styles.locationContainer}>
                <MapPin size={14} color="#666666" />
                <Text style={styles.locationText}>{item.location}</Text>
              </View>
              <View style={styles.statsContainer}>
                <View style={styles.stat}>
                  <Navigation2 size={14} color="#666666" />
                  <Text style={styles.statText}>{item.distance} mi</Text>
                </View>
                <View style={styles.stat}>
                  <Star size={14} color="#FFB800" />
                  <Text style={styles.statText}>{item.rating}</Text>
                </View>
                <View style={[styles.difficultyBadge, { backgroundColor: getDifficultyColor(item.difficulty) }]}>
                  <Text style={styles.difficultyText}>{item.difficulty}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
      />
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
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  listContent: {
    padding: 16,
  },
  trailCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
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
});