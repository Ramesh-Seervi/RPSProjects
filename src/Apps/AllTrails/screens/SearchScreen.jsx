import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, MapPin, Navigation2 } from 'lucide-react-native';

const SAMPLE_TRAILS = [
  {
    id: '1',
    name: 'Mount Rainier Skyline Trail',
    location: 'Mount Rainier National Park, WA',
    distance: '5.5 mi',
    difficulty: 'Moderate',
  },
  {
    id: '2',
    name: 'Angels Landing Trail',
    location: 'Zion National Park, UT',
    distance: '4.4 mi',
    difficulty: 'Hard',
  },
  {
    id: '3',
    name: 'Emerald Lake Trail',
    location: 'Rocky Mountain National Park, CO',
    distance: '3.1 mi',
    difficulty: 'Easy',
  },
];

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTrails, setFilteredTrails] = useState(SAMPLE_TRAILS);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    const filtered = SAMPLE_TRAILS.filter(trail =>
      trail.name.toLowerCase().includes(text.toLowerCase()) ||
      trail.location.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredTrails(filtered);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Search size={20} color="#666666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search trails, parks, or cities"
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>
      </View>

      <FlatList
        data={filteredTrails}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.trailItem}>
            <View style={styles.trailInfo}>
              <Text style={styles.trailName}>{item.name}</Text>
              <View style={styles.locationContainer}>
                <MapPin size={16} color="#666666" />
                <Text style={styles.locationText}>{item.location}</Text>
              </View>
              <View style={styles.detailsContainer}>
                <View style={styles.detail}>
                  <Navigation2 size={16} color="#666666" />
                  <Text style={styles.detailText}>{item.distance}</Text>
                </View>
                <Text style={[
                  styles.difficultyBadge,
                  { backgroundColor: getDifficultyColor(item.difficulty) }
                ]}>
                  {item.difficulty}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
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
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1A1A1A',
  },
  trailItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  trailInfo: {
    flex: 1,
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
    marginBottom: 8,
  },
  locationText: {
    fontSize: 14,
    color: '#666666',
    marginLeft: 4,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 14,
    color: '#666666',
    marginLeft: 4,
  },
  difficultyBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },
});