import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { DollarSign, TrendingUp } from 'lucide-react-native';

export default function DonationsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Donations</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Total Donations</Text>
          <Text style={styles.statAmount}>₹1,25,000</Text>
          <View style={styles.statTrend}>
            <TrendingUp size={16} color="#4CAF50" />
            <Text style={styles.statTrendText}>+15% this month</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Donations</Text>
        <View style={styles.donationsList}>
          <View style={styles.donationCard}>
            <View style={styles.donationInfo}>
              <Text style={styles.donorName}>Rajesh Kumar</Text>
              <Text style={styles.donationDate}>March 15, 2024</Text>
            </View>
            <Text style={styles.donationAmount}>₹5,000</Text>
          </View>

          <View style={styles.donationCard}>
            <View style={styles.donationInfo}>
              <Text style={styles.donorName}>Priya Sharma</Text>
              <Text style={styles.donationDate}>March 14, 2024</Text>
            </View>
            <Text style={styles.donationAmount}>₹2,500</Text>
          </View>

          <View style={styles.donationCard}>
            <View style={styles.donationInfo}>
              <Text style={styles.donorName}>Amit Patel</Text>
              <Text style={styles.donationDate}>March 13, 2024</Text>
            </View>
            <Text style={styles.donationAmount}>₹10,000</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Make a Donation</Text>
        <View style={styles.donationOptions}>
          <TouchableOpacity style={styles.donationOption}>
            <DollarSign size={24} color="#FF8000" />
            <Text style={styles.optionTitle}>General Donation</Text>
            <Text style={styles.optionDescription}>Support temple maintenance</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.donationOption}>
            <DollarSign size={24} color="#FF8000" />
            <Text style={styles.optionTitle}>Pooja Sponsorship</Text>
            <Text style={styles.optionDescription}>Sponsor temple rituals</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.donationOption}>
            <DollarSign size={24} color="#FF8000" />
            <Text style={styles.optionTitle}>Annadanam</Text>
            <Text style={styles.optionDescription}>Sponsor food for devotees</Text>
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
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  statsContainer: {
    padding: 20,
  },
  statCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statLabel: {
    fontSize: 16,
    color: '#666666',
  },
  statAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    marginVertical: 5,
  },
  statTrend: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statTrendText: {
    marginLeft: 5,
    color: '#4CAF50',
    fontSize: 14,
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
  donationsList: {
    gap: 10,
  },
  donationCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  donationInfo: {
    flex: 1,
  },
  donorName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
  },
  donationDate: {
    fontSize: 14,
    color: '#666666',
    marginTop: 2,
  },
  donationAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF8000',
  },
  donationOptions: {
    gap: 10,
  },
  donationOption: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333333',
    marginTop: 10,
  },
  optionDescription: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
    textAlign: 'center',
  },
});