import { View, Text, StyleSheet, TextInput, ScrollView, Pressable } from 'react-native';
import { MapPin, Phone, Clock } from 'lucide-react-native';

const dealers = [
  {
    id: '1',
    name: 'BMW of Manhattan',
    address: '555 W 57th St, New York, NY 10019',
    phone: '(212) 586-2269',
    hours: 'Mon-Fri: 9AM-7PM, Sat: 10AM-5PM',
  },
  {
    id: '2',
    name: 'BMW of Beverly Hills',
    address: '5070 Wilshire Blvd, Los Angeles, CA 90036',
    phone: '(323) 930-1955',
    hours: 'Mon-Fri: 9AM-8PM, Sat: 9AM-7PM',
  },
  {
    id: '3',
    name: 'BMW of Chicago',
    address: '1040 N Halsted St, Chicago, IL 60642',
    phone: '(312) 397-1000',
    hours: 'Mon-Thu: 9AM-8PM, Fri-Sat: 9AM-6PM',
  },
];

export default function DealersScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Enter ZIP code or city"
          placeholderTextColor="#666"
        />
        <Pressable style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </Pressable>
      </View>

      <ScrollView style={styles.dealerList}>
        {dealers.map((dealer) => (
          <View key={dealer.id} style={styles.dealerCard}>
            <Text style={styles.dealerName}>{dealer.name}</Text>
            
            <View style={styles.infoRow}>
              <MapPin color="#1C69D4" size={20} />
              <Text style={styles.infoText}>{dealer.address}</Text>
            </View>
            
            <View style={styles.infoRow}>
              <Phone color="#1C69D4" size={20} />
              <Text style={styles.infoText}>{dealer.phone}</Text>
            </View>
            
            <View style={styles.infoRow}>
              <Clock color="#1C69D4" size={20} />
              <Text style={styles.infoText}>{dealer.hours}</Text>
            </View>

            <View style={styles.buttonRow}>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Schedule Service</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.secondaryButton]}>
                <Text style={[styles.buttonText, styles.secondaryButtonText]}>Get Directions</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  searchContainer: {
    padding: 20,
    flexDirection: 'row',
    gap: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#111',
    padding: 12,
    borderRadius: 8,
    color: '#fff',
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: '#1C69D4',
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dealerList: {
    padding: 20,
  },
  dealerCard: {
    backgroundColor: '#111',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  dealerName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  infoText: {
    color: '#999',
    fontSize: 16,
    flex: 1,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 16,
  },
  button: {
    flex: 1,
    backgroundColor: '#1C69D4',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#1C69D4',
  },
  secondaryButtonText: {
    color: '#1C69D4',
  },
});