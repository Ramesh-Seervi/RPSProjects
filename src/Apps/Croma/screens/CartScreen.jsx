import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Favorites</Text>
        <Text style={styles.subtitle}>Your saved color palettes</Text>
      </View>
      
      <ScrollView style={styles.content} contentContainerStyle={styles.emptyState}>
        <Text style={styles.emptyStateText}>No favorite palettes yet</Text>
        <Text style={styles.emptyStateSubtext}>
          Save your favorite color combinations here
        </Text>
      </ScrollView>
    </View>
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
    backgroundColor: '#ffffff',
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 32,
    color: '#1a1a1a',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#666666',
  },
  content: {
    flex: 1,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyStateText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#1a1a1a',
    marginBottom: 8,
  },
  emptyStateSubtext: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
  },
});