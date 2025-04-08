import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Shield, Users, Trophy, Star } from 'lucide-react-native';

export default function ClanScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#1a1c2c', '#2a2c3c']}
        style={styles.background}
      />
      <ScrollView style={styles.scrollView}>
        <View style={styles.clanHeader}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=200&h=200&fit=crop' }}
            style={styles.clanBadge}
          />
          <View style={styles.clanInfo}>
            <Text style={styles.clanName}>Dragon Warriors</Text>
            <Text style={styles.clanTag}>#ABC123</Text>
            <View style={styles.clanStats}>
              <View style={styles.statItem}>
                <Trophy size={20} color="#ffd700" />
                <Text style={styles.statText}>35,789</Text>
              </View>
              <View style={styles.statItem}>
                <Users size={20} color="#ffffff" />
                <Text style={styles.statText}>48/50</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.warStatus}>
          <Shield size={24} color="#ff4444" />
          <Text style={styles.warText}>Clan War in Progress</Text>
          <Text style={styles.warTimer}>23:45:12</Text>
        </View>

        <View style={styles.membersList}>
          <Text style={styles.sectionTitle}>Members</Text>
          {[1, 2, 3, 4, 5].map((member, index) => (
            <TouchableOpacity key={index} style={styles.memberCard}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=100&h=100&fit=crop' }}
                style={styles.memberAvatar}
              />
              <View style={styles.memberInfo}>
                <Text style={styles.memberName}>Player {member}</Text>
                <Text style={styles.memberRole}>Elder</Text>
                <View style={styles.memberStats}>
                  <Star size={16} color="#ffd700" />
                  <Text style={styles.trophyCount}>2,345</Text>
                </View>
              </View>
              <View style={styles.donationInfo}>
                <Text style={styles.donationText}>1,234</Text>
                <Text style={styles.donationLabel}>Donated</Text>
              </View>
            </TouchableOpacity>
          ))}
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
  clanHeader: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  clanBadge: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  clanInfo: {
    marginLeft: 20,
    flex: 1,
  },
  clanName: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  clanTag: {
    color: '#8b8b8b',
    fontSize: 16,
  },
  clanStats: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 20,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  statText: {
    color: '#ffffff',
    fontSize: 16,
  },
  warStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,68,68,0.2)',
    margin: 15,
    padding: 15,
    borderRadius: 10,
    gap: 10,
  },
  warText: {
    color: '#ffffff',
    fontSize: 16,
    flex: 1,
  },
  warTimer: {
    color: '#ff4444',
    fontSize: 16,
    fontWeight: 'bold',
  },
  membersList: {
    padding: 15,
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  memberCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  memberAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  memberInfo: {
    flex: 1,
    marginLeft: 15,
  },
  memberName: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  memberRole: {
    color: '#8b8b8b',
    fontSize: 14,
  },
  memberStats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    gap: 5,
  },
  trophyCount: {
    color: '#ffd700',
    fontSize: 14,
  },
  donationInfo: {
    alignItems: 'center',
  },
  donationText: {
    color: '#44ff44',
    fontSize: 16,
    fontWeight: 'bold',
  },
  donationLabel: {
    color: '#8b8b8b',
    fontSize: 12,
  },
});