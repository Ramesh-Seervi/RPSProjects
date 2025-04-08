import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Heart } from 'lucide-react-native';

const FAVORITE_AIRCRAFT = [
  {
    id: '1',
    name: 'Boeing 787 Dreamliner',
    image: 'https://images.unsplash.com/photo-1559628376-f3fe5f782a2e',
    addedDate: '2024-02-15',
  },
  {
    id: '2',
    name: 'F-22 Raptor',
    image: 'https://images.unsplash.com/photo-1580824456266-c62f17c2cc43',
    addedDate: '2024-02-14',
  },
];

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Favorites</Text>
        <Text style={styles.subtitle}>{FAVORITE_AIRCRAFT.length} aircraft saved</Text>
      </View>

      <FlatList
        data={FAVORITE_AIRCRAFT}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.favoriteItem}>
            <Image source={{ uri: item.image }} style={styles.favoriteImage} />
            <View style={styles.favoriteInfo}>
              <Text style={styles.favoriteName}>{item.name}</Text>
              <Text style={styles.favoriteDate}>Added on {item.addedDate}</Text>
            </View>
            <TouchableOpacity style={styles.heartButton}>
              <Heart size={24} color="#ff3b30" fill="#ff3b30" />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.favoritesList}
      />
    </View>
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
  favoritesList: {
    padding: 20,
  },
  favoriteItem: {
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
  favoriteImage: {
    width: 100,
    height: 100,
  },
  favoriteInfo: {
    flex: 1,
    padding: 15,
  },
  favoriteName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  favoriteDate: {
    fontSize: 14,
    color: '#666666',
  },
  heartButton: {
    padding: 15,
    justifyContent: 'center',
  },
});