import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';

export default function CalendarScreen() {
  const events = [
    { title: 'Team Meeting', time: '10:00 AM', duration: '1h' },
    { title: 'Project Review', time: '2:00 PM', duration: '30m' },
    { title: 'Client Call', time: '4:30 PM', duration: '1h' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Calendar</Text>
        <View style={styles.dateSelector}>
          <TouchableOpacity>
            <ChevronLeft size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.currentDate}>March 2025</Text>
          <TouchableOpacity>
            <ChevronRight size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.calendar}>
          {/* Calendar grid would go here */}
        </View>

        <View style={styles.events}>
          <Text style={styles.sectionTitle}>Today's Events</Text>
          {events.map((event, index) => (
            <View key={index} style={styles.eventItem}>
              <View style={styles.eventTime}>
                <Text style={styles.timeText}>{event.time}</Text>
                <Text style={styles.durationText}>{event.duration}</Text>
              </View>
              <View style={styles.eventContent}>
                <Text style={styles.eventTitle}>{event.title}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    fontFamily: 'Inter_700Bold',
  },
  dateSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  currentDate: {
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
  },
  content: {
    flex: 1,
  },
  calendar: {
    padding: 20,
  },
  events: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    fontFamily: 'Inter_600SemiBold',
  },
  eventItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  eventTime: {
    width: 100,
  },
  timeText: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Inter_500Medium',
  },
  durationText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
    fontFamily: 'Inter_400Regular',
  },
  eventContent: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 16,
    borderRadius: 12,
  },
  eventTitle: {
    fontSize: 16,
    fontFamily: 'Inter_500Medium',
  },
});