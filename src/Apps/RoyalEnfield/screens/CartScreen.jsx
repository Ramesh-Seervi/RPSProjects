import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { MapPin, Phone, Clock } from 'lucide-react-native';

const DEALERS = [
  {
    id: 1,
    name: 'Royal Enfield Downtown',
    address: '123 Main Street, Downtown',
    phone: '+1 (555) 123-4567',
    hours: '9:00 AM - 6:00 PM',
  },
  {
    id: 2,
    name: 'Motorcycle Central',
    address: '456 Park Avenue, Midtown',
    phone: '+1 (555) 987-6543',
    hours: '10:00 AM - 7:00 PM',
  },
  {
    id: 3,
    name: 'Classic Motorcycles',
    address: '789 West Street, Uptown',
    phone: '+1 (555) 456-7890',
    hours: '8:30 AM - 5:30 PM',
  },
];

export default function DealersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find a Dealer</Text>
      <ScrollView style={styles.dealersList}>
        {DEALERS.map((dealer) => (
          <View key={dealer.id} style={styles.dealerCard}>
            <Text style={styles.dealerName}>{dealer.name}</Text>
            <View style={styles.infoRow}>
              <MapPin color="#D4AF37" size={20} />
              <Text style={styles.infoText}>{dealer.address}</Text>
            </View>
            <View style={styles.infoRow}>
              <Phone color="#D4AF37" size={20} />
              <Text style={styles.infoText}>{dealer.phone}</Text>
            </View>
            <View style={styles.infoRow}>
              <Clock color="#D4AF37" size={20} />
              <Text style={styles.infoText}>{dealer.hours}</Text>
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
    backgroundColor: '#1A1A1A',
    padding: 16,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  dealersList: {
    flex: 1,
  },
  dealerCard: {
    backgroundColor: '#2A2A2A',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  dealerName: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 12,
  },
});