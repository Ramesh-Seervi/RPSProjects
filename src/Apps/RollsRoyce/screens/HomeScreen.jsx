import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?q=80&w=1200' }}
            style={styles.headerImage}
          />
          <Text style={styles.brandName}>ROLLS-ROYCE</Text>
          <Text style={styles.tagline}>STRIVE FOR PERFECTION</Text>
        </View>

        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Latest Release</Text>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1632548260498-b7246fa466ea?q=80&w=1200' }}
            style={styles.featuredImage}
          />
          <Text style={styles.carName}>Rolls-Royce Spectre</Text>
          <Text style={styles.carDescription}>
            The first all-electric Rolls-Royce, representing a new era of luxury.
          </Text>
        </View>

        <View style={styles.highlightsSection}>
          <Text style={styles.sectionTitle}>Highlights</Text>
          <View style={styles.highlightCard}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1631297852230-c2765e8ad659?q=80&w=1200' }}
              style={styles.highlightImage}
            />
            <Text style={styles.highlightTitle}>Phantom Series II</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    alignItems: 'center',
    padding: 20,
  },
  headerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  brandName: {
    fontSize: 32,
    fontWeight: '600',
    color: '#C4A47C',
    letterSpacing: 4,
  },
  tagline: {
    fontSize: 14,
    color: '#FFFFFF',
    letterSpacing: 2,
    marginTop: 8,
  },
  featuredSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 20,
    fontWeight: '500',
  },
  featuredImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 15,
  },
  carName: {
    fontSize: 20,
    color: '#C4A47C',
    marginBottom: 8,
  },
  carDescription: {
    fontSize: 16,
    color: '#CCCCCC',
    lineHeight: 24,
  },
  highlightsSection: {
    padding: 20,
  },
  highlightCard: {
    marginBottom: 20,
  },
  highlightImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  highlightTitle: {
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 8,
  },
});