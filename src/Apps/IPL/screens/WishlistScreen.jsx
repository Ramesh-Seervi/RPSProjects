import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';


const DUMMY_PLAYERS = [
  {
    id: '1',
    name: 'Virat Kohli',
    team: 'Royal Challengers Bangalore',
    role: 'Batsman',
    nationality: 'Indian',
    image: 'https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=320',
    stats: {
      matches: 223,
      runs: 6624,
      wickets: 4,
      average: 36.2,
    },
  },
  {
    id: '2',
    name: 'MS Dhoni',
    team: 'Chennai Super Kings',
    role: 'Wicket-keeper Batsman',
    nationality: 'Indian',
    image: 'https://images.unsplash.com/photo-1609587312261-05d3b8147182?w=320',
    stats: {
      matches: 234,
      runs: 4978,
      wickets: 0,
      average: 39.2,
    },
  },
];

export default function PlayersScreen() {
  const [players, setPlayers] = useState(DUMMY_PLAYERS);

  return (
    <ScrollView style={styles.container}>
      {players.map((player) => (
        <TouchableOpacity key={player.id} style={styles.playerCard}>
          <Image source={{ uri: player.image }} style={styles.playerImage} />
          <View style={styles.playerInfo}>
            <Text style={styles.playerName}>{player.name}</Text>
            <Text style={styles.teamName}>{player.team}</Text>
            <View style={styles.roleContainer}>
              <Text style={styles.role}>{player.role}</Text>
              <Text style={styles.nationality}>{player.nationality}</Text>
            </View>
            <View style={styles.stats}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{player.stats.matches}</Text>
                <Text style={styles.statLabel}>Matches</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{player.stats.runs}</Text>
                <Text style={styles.statLabel}>Runs</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{player.stats.average}</Text>
                <Text style={styles.statLabel}>Average</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    padding: 16,
  },
  playerCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  playerImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  playerInfo: {
    flex: 1,
  },
  playerName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  teamName: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 8,
  },
  roleContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  role: {
    fontSize: 14,
    color: '#1e40af',
    backgroundColor: '#dbeafe',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },
  nationality: {
    fontSize: 14,
    color: '#059669',
    backgroundColor: '#d1fae5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    paddingTop: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#64748b',
  },
});