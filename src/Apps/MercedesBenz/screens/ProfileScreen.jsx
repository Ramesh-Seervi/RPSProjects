import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronRight, Car, Bell, CreditCard, Settings, CircleHelp as HelpCircle } from 'lucide-react-native';

const MENU_ITEMS = [
  {
    id: '1',
    title: 'My Vehicles',
    icon: Car,
  },
  {
    id: '2',
    title: 'Notifications',
    icon: Bell,
  },
  {
    id: '3',
    title: 'Payment Methods',
    icon: CreditCard,
  },
  {
    id: '4',
    title: 'Settings',
    icon: Settings,
  },
  {
    id: '5',
    title: 'Help & Support',
    icon: HelpCircle,
  },
];

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.profileSection}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=200&q=80' }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>John Smith</Text>
            <Text style={styles.email}>john.smith@example.com</Text>
          </View>
        </View>

        <View style={styles.menuSection}>
          {MENU_ITEMS.map((item) => {
            const IconComponent = item.icon;
            return (
              <TouchableOpacity key={item.id} style={styles.menuItem}>
                <View style={styles.menuItemLeft}>
                  <IconComponent size={24} color="#666666" />
                  <Text style={styles.menuItemText}>{item.title}</Text>
                </View>
                <ChevronRight size={20} color="#666666" />
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Log Out</Text>
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
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileInfo: {
    marginLeft: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#666666',
  },
  menuSection: {
    paddingVertical: 12,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    marginLeft: 12,
    color: '#000000',
  },
  logoutButton: {
    margin: 20,
    padding: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    alignItems: 'center',
  },
  logoutText: {
    color: '#FF3B30',
    fontSize: 16,
    fontWeight: '600',
  },
});