import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Play, Star } from 'lucide-react-native';

export default function GamesScreen() {
  const games = [
    {
      id: 1,
      title: 'Adopt Me!',
      description: 'Raise, care for, and dress up pets in this fun role-playing game!',
      players: '450K',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1472457897821-70d3819a0e24?w=500',
    },
    {
      id: 2,
      title: 'Blox Fruits',
      description: 'Become the strongest warrior in this action-packed adventure!',
      players: '380K',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=500',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Popular Games</Text>
      </View>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.gameCard}>
            <Image source={{ uri: item.image }} style={styles.gameImage} />
            <View style={styles.gameInfo}>
              <Text style={styles.gameTitle}>{item.title}</Text>
              <Text style={styles.gameDescription}>{item.description}</Text>
              <View style={styles.gameStats}>
                <View style={styles.statItem}>
                  <Play size={16} color="#666" />
                  <Text style={styles.statText}>{item.players}</Text>
                </View>
                <View style={styles.statItem}>
                  <Star size={16} color="#666" />
                  <Text style={styles.statText}>{item.rating}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#ffffff',
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    color: '#000000',
  },
  listContent: {
    padding: 20,
  },
  gameCard: {
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  gameImage: {
    width: '100%',
    height: 200,
  },
  gameInfo: {
    padding: 16,
  },
  gameTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 20,
    marginBottom: 8,
    color: '#000000',
  },
  gameDescription: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#666666',
    marginBottom: 12,
  },
  gameStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  statText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#666666',
    marginLeft: 4,
  },
});