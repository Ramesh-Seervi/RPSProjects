import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Trophy, Users, Clock } from 'lucide-react-native';

const tournaments = [
  {
    id: '1',
    title: 'Weekend Championship',
    prize: '$1000',
    players: 64,
    timeLeft: '2d 5h',
    image: 'https://images.unsplash.com/photo-1611254016699-495d429c6293',
  },
  {
    id: '2',
    title: 'Pro League Finals',
    prize: '$2500',
    players: 128,
    timeLeft: '5d 12h',
    image: 'https://images.unsplash.com/photo-1587302912306-cf1ed9c33146',
  },
];

export default function TournamentsScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#1A1A2E', '#16213E']}
        style={styles.background}
      />

      <View style={styles.header}>
        <Text style={styles.title}>Tournaments</Text>
      </View>

      <FlatList
        data={tournaments}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.tournamentCard}>
            <Image source={{ uri: item.image }} style={styles.tournamentImage} />
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.8)']}
              style={styles.gradient}
            />
            <View style={styles.cardContent}>
              <Text style={styles.tournamentTitle}>{item.title}</Text>
              
              <View style={styles.tournamentInfo}>
                <View style={styles.infoItem}>
                  <Trophy color="#FFD700" size={16} />
                  <Text style={styles.infoText}>{item.prize}</Text>
                </View>
                
                <View style={styles.infoItem}>
                  <Users color="#FFD700" size={16} />
                  <Text style={styles.infoText}>{item.players} players</Text>
                </View>
                
                <View style={styles.infoItem}>
                  <Clock color="#FFD700" size={16} />
                  <Text style={styles.infoText}>{item.timeLeft}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  header: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    color: '#FFF',
    fontSize: 28,
    fontFamily: 'Poppins_700Bold',
  },
  listContent: {
    padding: 20,
  },
  tournamentCard: {
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
  },
  tournamentImage: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '70%',
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
  },
  tournamentTitle: {
    color: '#FFF',
    fontSize: 20,
    marginBottom: 10,
    fontFamily: 'Poppins_600SemiBold',
  },
  tournamentInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    color: '#FFF',
    marginLeft: 5,
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
  },
});