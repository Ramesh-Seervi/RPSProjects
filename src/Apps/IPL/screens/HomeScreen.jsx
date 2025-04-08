import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';

const DUMMY_MATCHES = [
  {
    id: '1',
    team1: 'Mumbai Indians',
    team2: 'Chennai Super Kings',
    venue: 'Wankhede Stadium, Mumbai',
    time: '7:30 PM IST',
    team1Logo: 'https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=320',
    team2Logo: 'https://images.unsplash.com/photo-1609587312261-05d3b8147182?w=320',
    status: 'live',
  },
  {
    id: '2',
    team1: 'Royal Challengers Bangalore',
    team2: 'Kolkata Knight Riders',
    venue: 'M. Chinnaswamy Stadium, Bangalore',
    time: '3:30 PM IST',
    team1Logo: 'https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=320',
    team2Logo: 'https://images.unsplash.com/photo-1609587312261-05d3b8147182?w=320',
    status: 'upcoming',
  },
];

export default function HomeScreen() {
  const [matches, setMatches] = useState(DUMMY_MATCHES);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Live Matches</Text>
        {matches
          .filter((match) => match.status === 'live')
          .map((match) => (
            <TouchableOpacity key={match.id} style={styles.matchCard}>
              <View style={styles.matchHeader}>
                <Text style={styles.venue}>{match.venue}</Text>
                <Text style={styles.time}>{match.time}</Text>
              </View>
              <View style={styles.teamsContainer}>
                <View style={styles.teamInfo}>
                  <Image source={{ uri: match.team1Logo }} style={styles.teamLogo} />
                  <Text style={styles.teamName}>{match.team1}</Text>
                </View>
                <Text style={styles.vs}>VS</Text>
                <View style={styles.teamInfo}>
                  <Image source={{ uri: match.team2Logo }} style={styles.teamLogo} />
                  <Text style={styles.teamName}>{match.team2}</Text>
                </View>
              </View>
              <View style={styles.liveIndicator}>
                <View style={styles.liveDot} />
                <Text style={styles.liveText}>LIVE</Text>
              </View>
            </TouchableOpacity>
          ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming Matches</Text>
        {matches
          .filter((match) => match.status === 'upcoming')
          .map((match) => (
            <TouchableOpacity key={match.id} style={styles.matchCard}>
              <View style={styles.matchHeader}>
                <Text style={styles.venue}>{match.venue}</Text>
                <Text style={styles.time}>{match.time}</Text>
              </View>
              <View style={styles.teamsContainer}>
                <View style={styles.teamInfo}>
                  <Image source={{ uri: match.team1Logo }} style={styles.teamLogo} />
                  <Text style={styles.teamName}>{match.team1}</Text>
                </View>
                <Text style={styles.vs}>VS</Text>
                <View style={styles.teamInfo}>
                  <Image source={{ uri: match.team2Logo }} style={styles.teamLogo} />
                  <Text style={styles.teamName}>{match.team2}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1e293b',
  },
  matchCard: {
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
  matchHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  venue: {
    fontSize: 14,
    color: '#64748b',
  },
  time: {
    fontSize: 14,
    color: '#64748b',
    fontWeight: '500',
  },
  teamsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  teamInfo: {
    flex: 1,
    alignItems: 'center',
  },
  teamLogo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  teamName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
    textAlign: 'center',
  },
  vs: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#64748b',
    marginHorizontal: 16,
  },
  liveIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ef4444',
    marginRight: 6,
  },
  liveText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ef4444',
  },
});