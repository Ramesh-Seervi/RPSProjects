import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';

const CUSTOMIZATION_OPTIONS = [
  {
    id: 1,
    title: 'Exhaust Systems',
    description: 'Performance and sound upgrades',
  },
  {
    id: 2,
    title: 'Seats & Comfort',
    description: 'Custom seats and ergonomic accessories',
  },
  {
    id: 3,
    title: 'Protection',
    description: 'Guards and protective accessories',
  },
  {
    id: 4,
    title: 'Lighting',
    description: 'LED upgrades and auxiliary lights',
  },
  {
    id: 5,
    title: 'Luggage',
    description: 'Panniers and luggage solutions',
  },
];

export default function CustomizeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customize Your Ride</Text>
      <ScrollView style={styles.optionsList}>
        {CUSTOMIZATION_OPTIONS.map((option) => (
          <TouchableOpacity key={option.id} style={styles.optionCard}>
            <View style={styles.optionInfo}>
              <Text style={styles.optionTitle}>{option.title}</Text>
              <Text style={styles.optionDescription}>{option.description}</Text>
            </View>
            <ChevronRight color="#D4AF37" size={24} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    padding: 16,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  optionsList: {
    flex: 1,
  },
  optionCard: {
    backgroundColor: '#2A2A2A',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionInfo: {
    flex: 1,
  },
  optionTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  optionDescription: {
    color: '#888888',
    fontSize: 16,
    marginTop: 4,
  },
});