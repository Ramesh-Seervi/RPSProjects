import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { Bell, Moon, Globe, Lock, CircleHelp as HelpCircle, Info } from 'lucide-react-native';

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        
        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Bell size={24} color="#FF8000" />
            <View style={styles.settingText}>
              <Text style={styles.settingTitle}>Notifications</Text>
              <Text style={styles.settingDescription}>Event and donation alerts</Text>
            </View>
          </View>
          <Switch value={true} onValueChange={() => {}} />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Moon size={24} color="#FF8000" />
            <View style={styles.settingText}>
              <Text style={styles.settingTitle}>Dark Mode</Text>
              <Text style={styles.settingDescription}>Toggle dark theme</Text>
            </View>
          </View>
          <Switch value={false} onValueChange={() => {}} />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Globe size={24} color="#FF8000" />
            <View style={styles.settingText}>
              <Text style={styles.settingTitle}>Language</Text>
              <Text style={styles.settingDescription}>Choose your language</Text>
            </View>
          </View>
          <Text style={styles.settingValue}>English</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Security</Text>
        
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Lock size={24} color="#FF8000" />
            <View style={styles.settingText}>
              <Text style={styles.settingTitle}>Change Password</Text>
              <Text style={styles.settingDescription}>Update your password</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>
        
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <HelpCircle size={24} color="#FF8000" />
            <View style={styles.settingText}>
              <Text style={styles.settingTitle}>Help Center</Text>
              <Text style={styles.settingDescription}>Get help and support</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <Info size={24} color="#FF8000" />
            <View style={styles.settingText}>
              <Text style={styles.settingTitle}>About</Text>
              <Text style={styles.settingDescription}>App version and info</Text>
            </View>
          </View>
          <Text style={styles.settingValue}>v1.0.0</Text>
        </TouchableOpacity>
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
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 15,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingText: {
    marginLeft: 15,
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
  },
  settingDescription: {
    fontSize: 14,
    color: '#666666',
    marginTop: 2,
  },
  settingValue: {
    fontSize: 14,
    color: '#666666',
  },
});