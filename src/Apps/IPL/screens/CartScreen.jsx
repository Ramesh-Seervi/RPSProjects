import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';


const DUMMY_TEAMS = [
  {
    id: '1',
    name: 'Mumbai Indians',
    shortName: 'MI',
    logo: 'https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=320',
    captain: 'Rohit Sharma',
    homeGround: 'Wankhede Stadium',
    titles: 5,
  },
  {
    id: '2',
    name: 'Chennai Super Kings',
    shortName: 'CSK',
    logo: 'https://images.unsplash.com/photo-1609587312261-05d3b8147182?w=320',
    captain: 'MS Dhoni',
    homeGround: 'M. A. Chidambaram Stadium',
    titles: 4,
  },
];

export default function TeamsScreen() {
  const [teams, setTeams] = useState(DUMMY_TEAMS);

  return (
    <ScrollView style={styles.container}>
      {teams.map((team) => (
        <TouchableOpacity key={team.id} style={styles.teamCard}>
          <Image source={{ uri: team.logo }} style={styles.teamLogo} />
          <View style={styles.teamInfo}>
            <View style={styles.header}>
              <Text style={styles.teamName}>{team.name}</Text>
              <View style={styles.titlesBadge}>
                <Text style={styles.titlesText}>{team.titles} Titles</Text>
              </View>
            </View>
            <Text style={styles.captain}>Captain: {team.captain}</Text>
            <Text style={styles.homeGround}>Home: {team.homeGround}</Text>
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
  teamCard: {
    flexDirection: 'row',
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
  teamLogo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  teamInfo: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  teamName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  titlesBadge: {
    backgroundColor: '#1e40af',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  titlesText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '500',
  },
  captain: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 4,
  },
  homeGround: {
    fontSize: 14,
    color: '#64748b',
  },
});