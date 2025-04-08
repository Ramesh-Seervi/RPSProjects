import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Star, Trophy, Swords } from 'lucide-react-native';

export default function BattlesScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#1a1c2c', '#2a2c3c']}
        style={styles.background}
      />
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <View style={styles.trophyContainer}>
            <Trophy size={24} color="#ffd700" />
            <Text style={styles.trophyCount}>2,345</Text>
          </View>
          <TouchableOpacity style={styles.findMatchButton}>
            <Swords size={24} color="#ffffff" />
            <Text style={styles.findMatchText}>Find Match</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.battleLog}>
          <Text style={styles.sectionTitle}>Battle Log</Text>
          {[1, 2, 3, 4, 5].map((battle, index) => (
            <View key={index} style={styles.battleCard}>
              <View style={styles.battleHeader}>
                <View style={styles.playerInfo}>
                  <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=50&h=50&fit=crop' }}
                    style={styles.playerAvatar}
                  />
                  <Text style={styles.playerName}>Opponent {battle}</Text>
                </View>
                <View style={styles.battleResult}>
                  <View style={styles.stars}>
                    {[1, 2, 3].map((star, i) => (
                      <Star
                        key={i}
                        size={20}
                        color={i < 2 ? '#ffd700' : '#4a4a4a'}
                        fill={i < 2 ? '#ffd700' : 'transparent'}
                      />
                    ))}
                  </View>
                  <Text style={styles.percentage}>67%</Text>
                </View>
              </View>
              <View style={styles.battleFooter}>
                <Text style={styles.trophyChange}>+28</Text>
                <Text style={styles.timeAgo}>2h ago</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.leagueInfo}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=100&h=100&fit=crop' }}
            style={styles.leagueBadge}
          />
          <View style={styles.leagueDetails}>
            <Text style={styles.leagueName}>Crystal League I</Text>
            <Text style={styles.leagueProgress}>2,345 / 2,600</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '80%' }]} />
            </View>
          </View>
        </View>
      </ScrollView>
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
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  trophyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 20,
  },
  trophyCount: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  findMatchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#44b700',
    padding: 12,
    borderRadius: 20,
    gap: 10,
  },
  findMatchText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  battleLog: {
    padding: 15,
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  battleCard: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  battleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  playerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  playerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  playerName: {
    color: '#ffffff',
    fontSize: 16,
  },
  battleResult: {
    alignItems: 'flex-end',
  },
  stars: {
    flexDirection: 'row',
    gap: 2,
  },
  percentage: {
    color: '#ffffff',
    fontSize: 14,
    marginTop: 5,
  },
  battleFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
  },
  trophyChange: {
    color: '#44ff44',
    fontSize: 16,
    fontWeight: 'bold',
  },
  timeAgo: {
    color: '#8b8b8b',
    fontSize: 14,
  },
  leagueInfo: {
    flexDirection: 'row',
    margin: 15,
    padding: 15,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
    alignItems: 'center',
  },
  leagueBadge: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  leagueDetails: {
    flex: 1,
    marginLeft: 15,
  },
  leagueName: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  leagueProgress: {
    color: '#8b8b8b',
    fontSize: 14,
    marginTop: 5,
  },
  progressBar: {
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 2,
    marginTop: 10,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#44b700',
    borderRadius: 2,
  },
});