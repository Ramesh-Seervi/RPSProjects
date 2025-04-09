import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const experiences = [
  {
    id: '1',
    title: 'Bespoke Design',
    image: 'https://images.unsplash.com/photo-1631297852230-c2765e8ad659?q=80&w=1200',
    description: 'Create your perfect Rolls-Royce with our bespoke design service.',
  },
  {
    id: '2',
    title: 'Craftsmanship',
    image: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?q=80&w=1200',
    description: 'Discover the exceptional attention to detail in every Rolls-Royce.',
  },
  {
    id: '3',
    title: 'Heritage',
    image: 'https://images.unsplash.com/photo-1632548260498-b7246fa466ea?q=80&w=1200',
    description: 'Explore over a century of luxury automotive excellence.',
  },
];

export default function ExperienceScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.pageTitle}>The Experience</Text>
        
        {experiences.map((exp) => (
          <View key={exp.id} style={styles.experienceCard}>
            <Image source={{ uri: exp.image }} style={styles.experienceImage} />
            <View style={styles.overlay} />
            <View style={styles.textContainer}>
              <Text style={styles.experienceTitle}>{exp.title}</Text>
              <Text style={styles.experienceDescription}>{exp.description}</Text>
            </View>
          </View>
        ))}
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
    padding: 20,
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: '600',
    color: '#C4A47C',
    marginBottom: 30,
    letterSpacing: 2,
  },
  experienceCard: {
    marginBottom: 30,
    height: 300,
    borderRadius: 15,
    overflow: 'hidden',
    position: 'relative',
  },
  experienceImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
  },
  experienceTitle: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 8,
    fontWeight: '500',
  },
  experienceDescription: {
    fontSize: 16,
    color: '#FFFFFF',
    lineHeight: 24,
  },
});