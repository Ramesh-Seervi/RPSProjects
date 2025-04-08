import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MapPin, Phone, Clock } from 'lucide-react-native';

const DEALERSHIPS = [
  {
    id: '1',
    name: 'Mercedes-Benz Manhattan',
    address: '770 11th Avenue, New York, NY 10019',
    phone: '(212) 629-1600',
    hours: 'Mon-Fri: 9AM-7PM, Sat: 10AM-5PM',
  },
  {
    id: '2',
    name: 'Mercedes-Benz of Beverly Hills',
    address: '9250 Beverly Blvd, Beverly Hills, CA 90210',
    phone: '(310) 659-2980',
    hours: 'Mon-Fri: 8AM-8PM, Sat: 9AM-7PM',
  },
  {
    id: '3',
    name: 'Mercedes-Benz of Chicago',
    address: '1520 W North Ave, Chicago, IL 60642',
    phone: '(312) 628-4000',
    hours: 'Mon-Fri: 9AM-8PM, Sat: 9AM-6PM',
  },
];

export default function DealershipsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Find a Dealership</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {DEALERSHIPS.map((dealership) => (
          <View key={dealership.id} style={styles.dealershipCard}>
            <Text style={styles.dealershipName}>{dealership.name}</Text>
            
            <View style={styles.infoRow}>
              <MapPin size={20} color="#666666" />
              <Text style={styles.infoText}>{dealership.address}</Text>
            </View>

            <View style={styles.infoRow}>
              <Phone size={20} color="#666666" />
              <Text style={styles.infoText}>{dealership.phone}</Text>
            </View>

            <View style={styles.infoRow}>
              <Clock size={20} color="#666666" />
              <Text style={styles.infoText}>{dealership.hours}</Text>
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
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  dealershipCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  dealershipName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoText: {
    marginLeft: 12,
    fontSize: 14,
    color: '#666666',
    flex: 1,
  },
});