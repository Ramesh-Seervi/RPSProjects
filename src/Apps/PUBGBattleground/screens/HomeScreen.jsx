import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070' }}
        style={styles.header}>
        <LinearGradient
          colors={['transparent', '#000']}
          style={styles.gradient}>
          <Text style={styles.welcomeText}>Welcome Back, Soldier!</Text>
          <Text style={styles.subtitle}>Season 28 is now live</Text>
        </LinearGradient>
      </ImageBackground>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Match</Text>
          <View style={styles.matchTypes}>
            <TouchableOpacity style={styles.matchButton}>
              <Text style={styles.matchButtonText}>SOLO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.matchButton}>
              <Text style={styles.matchButtonText}>DUO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.matchButton}>
              <Text style={styles.matchButtonText}>SQUAD</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Latest News</Text>
          <View style={styles.newsCard}>
            <ImageBackground
              source={{ uri: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070' }}
              style={styles.newsImage}
              imageStyle={styles.newsImageStyle}>
              <View style={styles.newsContent}>
                <Text style={styles.newsTitle}>New Map: Arctic Storm</Text>
                <Text style={styles.newsDescription}>Experience intense battles in the frozen wilderness</Text>
              </View>
            </ImageBackground>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Daily Missions</Text>
          <View style={styles.missionCard}>
            <Text style={styles.missionTitle}>Survive 20 minutes</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progress, { width: '70%' }]} />
            </View>
            <Text style={styles.missionReward}>Reward: 500 BP</Text>
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
    height: 300,
    justifyContent: 'flex-end',
  },
  gradient: {
    height: '100%',
    justifyContent: 'flex-end',
    padding: 20,
  },
  welcomeText: {
    color: '#fff',
    fontFamily: 'Rajdhani-Bold',
    fontSize: 32,
    marginBottom: 8,
  },
  subtitle: {
    color: '#F6AA1C',
    fontFamily: 'Rajdhani-Medium',
    fontSize: 18,
    marginBottom: 20,
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    color: '#fff',
    fontFamily: 'Rajdhani-Bold',
    fontSize: 24,
    marginBottom: 15,
  },
  matchTypes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  matchButton: {
    backgroundColor: '#1A1A1A',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#F6AA1C',
    padding: 15,
    width: '30%',
    alignItems: 'center',
  },
  matchButtonText: {
    color: '#F6AA1C',
    fontFamily: 'Rajdhani-Bold',
    fontSize: 16,
  },
  newsCard: {
    borderRadius: 12,
    overflow: 'hidden',
    height: 200,
  },
  newsImage: {
    width: '100%',
    height: '100%',
  },
  newsImageStyle: {
    borderRadius: 12,
  },
  newsContent: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  newsTitle: {
    color: '#fff',
    fontFamily: 'Rajdhani-Bold',
    fontSize: 20,
    marginBottom: 5,
  },
  newsDescription: {
    color: '#ccc',
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
  },
  missionCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    padding: 20,
  },
  missionTitle: {
    color: '#fff',
    fontFamily: 'Rajdhani-Medium',
    fontSize: 18,
    marginBottom: 10,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#333',
    borderRadius: 4,
    marginBottom: 10,
  },
  progress: {
    height: '100%',
    backgroundColor: '#F6AA1C',
    borderRadius: 4,
  },
  missionReward: {
    color: '#F6AA1C',
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
  },
});