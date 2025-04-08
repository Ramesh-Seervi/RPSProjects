import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { Search as SearchIcon } from 'lucide-react-native';

const SEARCH_RESULTS = [
  {
    id: '1',
    name: 'Boeing 787 Dreamliner',
    image: 'https://images.unsplash.com/photo-1559628376-f3fe5f782a2e',
    manufacturer: 'Boeing',
  },
  {
    id: '2',
    name: 'F-22 Raptor',
    image: 'https://images.unsplash.com/photo-1580824456266-c62f17c2cc43',
    manufacturer: 'Lockheed Martin',
  },
  {
    id: '3',
    name: 'Airbus A380',
    image: 'https://images.unsplash.com/photo-1583517271097-659bb7d878b4',
    manufacturer: 'Airbus',
  },
];

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchIcon size={20} color="#666666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search aircraft by name or manufacturer"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <FlatList
        data={SEARCH_RESULTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.resultItem}>
            <Image source={{ uri: item.image }} style={styles.resultImage} />
            <View style={styles.resultInfo}>
              <Text style={styles.resultName}>{item.name}</Text>
              <Text style={styles.resultManufacturer}>{item.manufacturer}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.resultsList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    margin: 20,
    borderRadius: 10,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 15,
    fontSize: 16,
  },
  resultsList: {
    padding: 20,
  },
  resultItem: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  resultImage: {
    width: 100,
    height: 100,
  },
  resultInfo: {
    flex: 1,
    padding: 15,
  },
  resultName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  resultManufacturer: {
    fontSize: 14,
    color: '#666666',
  },
});