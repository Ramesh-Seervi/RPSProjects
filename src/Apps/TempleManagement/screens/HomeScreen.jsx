import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1604873917606-e1034ecc6e0b?w=800' }}
          style={styles.headerImage}
        />
        <Text style={styles.headerTitle}>Sri Venkateshwara Temple</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>150</Text>
          <Text style={styles.statLabel}>Today's Visitors</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>₹25,000</Text>
          <Text style={styles.statLabel}>Today's Donations</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Today's Events</Text>
        <View style={styles.eventCard}>
          <Text style={styles.eventTime}>06:00 AM</Text>
          <Text style={styles.eventTitle}>Morning Aarti</Text>
        </View>
        <View style={styles.eventCard}>
          <Text style={styles.eventTime}>12:00 PM</Text>
          <Text style={styles.eventTitle}>Afternoon Prayers</Text>
        </View>
        <View style={styles.eventCard}>
          <Text style={styles.eventTime}>07:00 PM</Text>
          <Text style={styles.eventTitle}>Evening Aarti</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionGrid}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Book Pooja</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Make Donation</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>View Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Contact Priest</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5E6',
  },
  header: {
    position: 'relative',
    height: 200,
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  headerTitle: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    width: '47%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF8000',
  },
  statLabel: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 15,
  },
  eventCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  eventTime: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF8000',
    width: 80,
  },
  eventTitle: {
    fontSize: 16,
    color: '#333333',
  },
  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: '#FF8000',
    width: '47%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  actionText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});