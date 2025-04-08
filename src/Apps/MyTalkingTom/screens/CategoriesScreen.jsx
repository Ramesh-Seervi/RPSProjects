import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';

export default function GamesScreen() {
  const games = [
    { id: 1, name: 'Catch the Ball', description: 'Help Tom catch falling balls!' },
    { id: 2, name: 'Dance Party', description: 'Dance with Tom to earn points!' },
    { id: 3, name: 'Memory Match', description: 'Match cards with Tom!' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Mini Games</Text>
      <View style={styles.gamesGrid}>
        {games.map(game => (
          <Pressable key={game.id} style={styles.gameCard}>
            <Text style={styles.gameName}>{game.name}</Text>
            <Text style={styles.gameDescription}>{game.description}</Text>
            <Text style={styles.playButton}>Play Now</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    padding: 20,
    marginTop: 40,
  },
  gamesGrid: {
    padding: 10,
  },
  gameCard: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  gameName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  gameDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  playButton: {
    color: '#FF6B6B',
    fontWeight: '600',
    fontSize: 16,
  },
});