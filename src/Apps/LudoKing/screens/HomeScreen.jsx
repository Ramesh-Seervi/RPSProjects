import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Play, Crown, Users } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#1A1A2E', '#16213E']}
        style={styles.background}
      />
      
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61' }}
          style={styles.avatar}
        />
        <View style={styles.headerText}>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.username}>John Doe</Text>
        </View>
      </View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.playButton}>
          <LinearGradient
            colors={['#FFD700', '#FFA500']}
            style={styles.buttonGradient}
          >
            <Play color="#1A1A2E" size={32} />
            <Text style={styles.playButtonText}>Play Now</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.gameModes}>
          <TouchableOpacity style={styles.modeCard}>
            <Crown color="#FFD700" size={32} />
            <Text style={styles.modeTitle}>Tournament</Text>
            <Text style={styles.modeDescription}>Compete for prizes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.modeCard}>
            <Users color="#FFD700" size={32} />
            <Text style={styles.modeTitle}>With Friends</Text>
            <Text style={styles.modeDescription}>Play together</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  headerText: {
    flex: 1,
  },
  welcomeText: {
    color: '#666',
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
  },
  username: {
    color: '#FFF',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  playButton: {
    marginVertical: 30,
  },
  buttonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 12,
  },
  playButtonText: {
    color: '#1A1A2E',
    fontSize: 20,
    marginLeft: 10,
    fontFamily: 'Poppins_700Bold',
  },
  gameModes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modeCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 20,
    borderRadius: 12,
    width: '48%',
    alignItems: 'center',
  },
  modeTitle: {
    color: '#FFF',
    fontSize: 16,
    marginTop: 10,
    fontFamily: 'Poppins_600SemiBold',
  },
  modeDescription: {
    color: '#666',
    fontSize: 12,
    marginTop: 5,
    fontFamily: 'Poppins_400Regular',
  },
});