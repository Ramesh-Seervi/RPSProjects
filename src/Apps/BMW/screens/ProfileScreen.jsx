import { View, Text, StyleSheet, Pressable, Switch } from 'react-native';
import { Bell, Globe, Moon, Shield, CircleHelp as HelpCircle } from 'lucide-react-native';
import { useState } from 'react';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.section}>
        <View style={styles.settingRow}>
          <View style={styles.settingInfo}>
            <Bell color="#1C69D4" size={24} />
            <Text style={styles.settingText}>Notifications</Text>
          </View>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: '#333', true: '#1C69D4' }}
            thumbColor="#fff"
          />
        </View>

        <View style={styles.settingRow}>
          <View style={styles.settingInfo}>
            <Moon color="#1C69D4" size={24} />
            <Text style={styles.settingText}>Dark Mode</Text>
          </View>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: '#333', true: '#1C69D4' }}
            thumbColor="#fff"
          />
        </View>

        <Pressable style={styles.settingRow}>
          <View style={styles.settingInfo}>
            <Globe color="#1C69D4" size={24} />
            <Text style={styles.settingText}>Language</Text>
          </View>
          <Text style={styles.settingValue}>English</Text>
        </Pressable>

        <Pressable style={styles.settingRow}>
          <View style={styles.settingInfo}>
            <Shield color="#1C69D4" size={24} />
            <Text style={styles.settingText}>Privacy Policy</Text>
          </View>
        </Pressable>

        <Pressable style={styles.settingRow}>
          <View style={styles.settingInfo}>
            <HelpCircle color="#1C69D4" size={24} />
            <Text style={styles.settingText}>Help & Support</Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.footer}>
        <Text style={styles.version}>Version 1.0.0</Text>
        <Pressable style={styles.logoutButton}>
          <Text style={styles.logoutText}>Log Out</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    padding: 20,
  },
  section: {
    backgroundColor: '#111',
    borderRadius: 12,
    margin: 20,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  settingText: {
    color: '#fff',
    fontSize: 16,
  },
  settingValue: {
    color: '#666',
    fontSize: 16,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  version: {
    color: '#666',
    fontSize: 14,
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: '#111',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ff4444',
  },
  logoutText: {
    color: '#ff4444',
    fontSize: 16,
    fontWeight: 'bold',
  },
});