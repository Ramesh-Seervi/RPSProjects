import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { Users as Users2, User, Users } from 'lucide-react-native';

export default function PlayScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Select Game Mode</Text>
      </View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.modeCard}>
          <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1947' }}
            style={styles.modeBackground}
            imageStyle={styles.modeBackgroundImage}>
            <View style={styles.modeContent}>
              <User size={24} color="#F6AA1C" />
              <Text style={styles.modeName}>SOLO</Text>
              <Text style={styles.modeDescription}>Every soldier for themselves</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity style={styles.modeCard}>
          <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1536972781967-a8a88696130a?q=80&w=2070' }}
            style={styles.modeBackground}
            imageStyle={styles.modeBackgroundImage}>
            <View style={styles.modeContent}>
              <Users size={24} color="#F6AA1C" />
              <Text style={styles.modeName}>DUO</Text>
              <Text style={styles.modeDescription}>Team up with a partner</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity style={styles.modeCard}>
          <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=2070' }}
            style={styles.modeBackground}
            imageStyle={styles.modeBackgroundImage}>
            <View style={styles.modeContent}>
              <Users2 size={24} color="#F6AA1C" />
              <Text style={styles.modeName}>SQUAD</Text>
              <Text style={styles.modeDescription}>4-player tactical combat</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <View style={styles.statsContainer}>
          <Text style={styles.statsTitle}>Current Season Stats</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statBox}>
              <Text style={styles.statValue}>24</Text>
              <Text style={styles.statLabel}>Matches</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statValue}>12</Text>
              <Text style={styles.statLabel}>Wins</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statValue}>2.5</Text>
              <Text style={styles.statLabel}>K/D Ratio</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    color: '#fff',
    fontFamily: 'Rajdhani-Bold',
    fontSize: 32,
    marginBottom: 20,
  },
  content: {
    padding: 20,
  },
  modeCard: {
    height: 150,
    marginBottom: 20,
    borderRadius: 12,
    overflow: 'hidden',
  },
  modeBackground: {
    width: '100%',
    height: '100%',
  },
  modeBackgroundImage: {
    borderRadius: 12,
  },
  modeContent: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 20,
    justifyContent: 'center',
  },
  modeName: {
    color: '#fff',
    fontFamily: 'Rajdhani-Bold',
    fontSize: 24,
    marginTop: 10,
  },
  modeDescription: {
    color: '#ccc',
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    marginTop: 5,
  },
  statsContainer: {
    marginTop: 20,
  },
  statsTitle: {
    color: '#fff',
    fontFamily: 'Rajdhani-Bold',
    fontSize: 24,
    marginBottom: 15,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statBox: {
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    padding: 15,
    width: '30%',
    alignItems: 'center',
  },
  statValue: {
    color: '#F6AA1C',
    fontFamily: 'Rajdhani-Bold',
    fontSize: 24,
    marginBottom: 5,
  },
  statLabel: {
    color: '#fff',
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
  },
});