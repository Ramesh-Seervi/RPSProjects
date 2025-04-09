import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Play, Star } from 'lucide-react-native';

export default function HomeScreen() {
  const featuredGames = [
    {
      id: 1,
      title: 'Adopt Me!',
      players: '450K',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1472457897821-70d3819a0e24?w=500',
    },
    {
      id: 2,
      title: 'Blox Fruits',
      players: '380K',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=500',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome back,</Text>
        <Text style={styles.username}>Player123!</Text>
      </View>

      <View style={styles.featuredSection}>
        <Text style={styles.sectionTitle}>Featured Games</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {featuredGames.map((game) => (
            <TouchableOpacity key={game.id} style={styles.gameCard}>
              <Image source={{ uri: game.image }} style={styles.gameImage} />
              <View style={styles.gameInfo}>
                <Text style={styles.gameTitle}>{game.title}</Text>
                <View style={styles.gameStats}>
                  <View style={styles.statItem}>
                    <Play size={16} color="#666" />
                    <Text style={styles.statText}>{game.players}</Text>
                  </View>
                  <View style={styles.statItem}>
                    <Star size={16} color="#666" />
                    <Text style={styles.statText}>{game.rating}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
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
  welcomeText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#666666',
  },
  username: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    color: '#000000',
    marginTop: 4,
  },
  featuredSection: {
    padding: 20,
  },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 20,
    marginBottom: 16,
    color: '#000000',
  },
  gameCard: {
    width: 280,
    marginRight: 16,
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
    height: 160,
  },
  gameInfo: {
    padding: 16,
  },
  gameTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    marginBottom: 8,
    color: '#000000',
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