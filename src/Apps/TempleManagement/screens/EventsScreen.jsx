import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Calendar as CalendarIcon, Clock } from 'lucide-react-native';

export default function EventsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Upcoming Events</Text>
      </View>

      <View style={styles.calendarContainer}>
        {/* Calendar component would go here */}
      </View>

      <View style={styles.eventsList}>
        <TouchableOpacity style={styles.eventCard}>
          <View style={styles.eventDateBadge}>
            <Text style={styles.eventDate}>15</Text>
            <Text style={styles.eventMonth}>MAR</Text>
          </View>
          <View style={styles.eventDetails}>
            <Text style={styles.eventTitle}>Ram Navami Celebration</Text>
            <View style={styles.eventMeta}>
              <Clock size={16} color="#666666" />
              <Text style={styles.eventTime}>9:00 AM - 12:00 PM</Text>
            </View>
            <Text style={styles.eventDescription}>Special prayers and cultural program</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.eventCard}>
          <View style={styles.eventDateBadge}>
            <Text style={styles.eventDate}>20</Text>
            <Text style={styles.eventMonth}>MAR</Text>
          </View>
          <View style={styles.eventDetails}>
            <Text style={styles.eventTitle}>Monthly Abhishekam</Text>
            <View style={styles.eventMeta}>
              <Clock size={16} color="#666666" />
              <Text style={styles.eventTime}>7:00 AM - 9:00 AM</Text>
            </View>
            <Text style={styles.eventDescription}>Special monthly ritual with milk and honey</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.eventCard}>
          <View style={styles.eventDateBadge}>
            <Text style={styles.eventDate}>25</Text>
            <Text style={styles.eventMonth}>MAR</Text>
          </View>
          <View style={styles.eventDetails}>
            <Text style={styles.eventTitle}>Bhajan Evening</Text>
            <View style={styles.eventMeta}>
              <Clock size={16} color="#666666" />
              <Text style={styles.eventTime}>6:00 PM - 8:00 PM</Text>
            </View>
            <Text style={styles.eventDescription}>Devotional songs and spiritual discourse</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add New Event</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5E6',
  },
  header: {
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  calendarContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginBottom: 20,
  },
  eventsList: {
    padding: 20,
  },
  eventCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  eventDateBadge: {
    backgroundColor: '#FF8000',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
  },
  eventDate: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  eventMonth: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  eventDetails: {
    marginLeft: 15,
    flex: 1,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 5,
  },
  eventMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  eventTime: {
    color: '#666666',
    marginLeft: 5,
    fontSize: 14,
  },
  eventDescription: {
    color: '#666666',
    fontSize: 14,
  },
  addButton: {
    backgroundColor: '#FF8000',
    margin: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});