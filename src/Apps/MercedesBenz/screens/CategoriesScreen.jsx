import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar, Clock, PenTool as Tool, Shield } from 'lucide-react-native';

const SERVICES = [
  {
    id: '1',
    title: 'Scheduled Maintenance',
    description: 'Regular service intervals to keep your vehicle in peak condition',
    icon: Calendar,
  },
  {
    id: '2',
    title: 'Express Service',
    description: 'Quick maintenance for routine services under 1 hour',
    icon: Clock,
  },
  {
    id: '3',
    title: 'Repair Services',
    description: 'Expert diagnosis and repair for all Mercedes-Benz models',
    icon: Tool,
  },
  {
    id: '4',
    title: 'Extended Warranty',
    description: 'Protect your investment with extended coverage options',
    icon: Shield,
  },
];

export default function ServiceScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Service & Maintenance</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.subtitle}>Schedule Service</Text>
        
        {SERVICES.map((service) => {
          const IconComponent = service.icon;
          return (
            <TouchableOpacity key={service.id} style={styles.serviceCard}>
              <View style={styles.iconContainer}>
                <IconComponent size={24} color="#00A5E0" />
              </View>
              <View style={styles.serviceInfo}>
                <Text style={styles.serviceTitle}>{service.title}</Text>
                <Text style={styles.serviceDescription}>{service.description}</Text>
              </View>
            </TouchableOpacity>
          );
        })}

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Book Appointment</Text>
        </TouchableOpacity>
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
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    color: '#000000',
  },
  serviceCard: {
    flexDirection: 'row',
    alignItems: 'center',
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
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F5F9FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  serviceInfo: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  serviceDescription: {
    fontSize: 14,
    color: '#666666',
  },
  button: {
    backgroundColor: '#00A5E0',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});