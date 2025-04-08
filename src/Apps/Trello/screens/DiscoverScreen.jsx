import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Mail, Phone, MapPin } from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.role}>Product Manager</Text>
      </View>

      <View style={styles.infoSection}>
        <View style={styles.infoItem}>
          <Mail size={20} color="#71717a" />
          <Text style={styles.infoText}>john.doe@example.com</Text>
        </View>
        <View style={styles.infoItem}>
          <Phone size={20} color="#71717a" />
          <Text style={styles.infoText}>+1 (555) 123-4567</Text>
        </View>
        <View style={styles.infoItem}>
          <MapPin size={20} color="#71717a" />
          <Text style={styles.infoText}>San Francisco, CA</Text>
        </View>
      </View>

      <View style={styles.statsSection}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Boards</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>34</Text>
          <Text style={styles.statLabel}>Tasks</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Teams</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f5',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#ffffff',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontFamily: 'Inter_600SemiBold',
    color: '#18181b',
    marginBottom: 4,
  },
  role: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#71717a',
  },
  infoSection: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  infoText: {
    marginLeft: 12,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#18181b',
  },
  statsSection: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 20,
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    color: '#0055D4',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#71717a',
  },
  editButton: {
    backgroundColor: '#0055D4',
    margin: 20,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Inter_500Medium',
  },
});