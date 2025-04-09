import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Settings, Gift, Trophy, Star } from 'lucide-react-native';

export default function ProfileScreen() {
  const userStats = {
    friends: 234,
    following: 156,
    followers: 892,
  };

  const achievements = [
    {
      id: 1,
      title: 'Game Master',
      description: 'Played 100 different games',
      progress: 75,
    },
    {
      id: 2,
      title: 'Social Butterfly',
      description: 'Made 50 friends',
      progress: 90,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.settingsButton}>
          <Settings size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200' }}
          style={styles.avatar}
        />
        <Text style={styles.username}>Player123</Text>
        <Text style={styles.bio}>🎮 Roblox enthusiast | Adventure seeker</Text>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{userStats.friends}</Text>
            <Text style={styles.statLabel}>Friends</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{userStats.following}</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{userStats.followers}</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Achievements</Text>
        {achievements.map((achievement) => (
          <View key={achievement.id} style={styles.achievementCard}>
            <Trophy size={24} color="#FFD700" />
            <View style={styles.achievementInfo}>
              <Text style={styles.achievementTitle}>{achievement.title}</Text>
              <Text style={styles.achievementDescription}>{achievement.description}</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: `${achievement.progress}%` }]} />
              </View>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <Gift size={24} color="#000" />
            <Text style={styles.actionText}>Inventory</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Star size={24} color="#000" />
            <Text style={styles.actionText}>Favorites</Text>
          </TouchableOpacity>
        </View>
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
    alignItems: 'flex-end',
  },
  settingsButton: {
    padding: 8,
  },
  profileSection: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  username: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    color: '#000000',
    marginBottom: 8,
  },
  bio: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#666666',
    marginBottom: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 32,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontFamily: 'Inter_700Bold',
    fontSize: 20,
    color: '#000000',
  },
  statLabel: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#666666',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 20,
    color: '#000000',
    marginBottom: 16,
  },
  achievementCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  achievementInfo: {
    flex: 1,
    marginLeft: 16,
  },
  achievementTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#000000',
    marginBottom: 4,
  },
  achievementDescription: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#f0f0f0',
    borderRadius: 2,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#00b894',
    borderRadius: 2,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionButton: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    width: '45%',
  },
  actionText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#000000',
    marginTop: 8,
  },
});