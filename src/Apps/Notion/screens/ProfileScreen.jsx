import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { ChevronRight, Moon, Bell, Lock, CircleHelp as HelpCircle, LogOut } from 'lucide-react-native';

export default function SettingsScreen() {
  const settingsGroups = [
    {
      title: 'Preferences',
      items: [
        { icon: Moon, title: 'Dark Mode', type: 'switch' },
        { icon: Bell, title: 'Notifications', type: 'link' },
      ],
    },
    {
      title: 'Account',
      items: [
        { icon: Lock, title: 'Privacy', type: 'link' },
        { icon: HelpCircle, title: 'Help & Support', type: 'link' },
        { icon: LogOut, title: 'Log Out', type: 'link' },
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>

      {settingsGroups.map((group, groupIndex) => (
        <View key={groupIndex} style={styles.section}>
          <Text style={styles.sectionTitle}>{group.title}</Text>
          {group.items.map((item, itemIndex) => (
            <TouchableOpacity
              key={itemIndex}
              style={styles.settingItem}
              onPress={() => {}}>
              <View style={styles.settingLeft}>
                <item.icon size={20} color="#000" style={styles.settingIcon} />
                <Text style={styles.settingTitle}>{item.title}</Text>
              </View>
              {item.type === 'switch' ? (
                <Switch value={false} onValueChange={() => {}} />
              ) : (
                <ChevronRight size={20} color="#666" />
              )}
            </TouchableOpacity>
          ))}
        </View>
      ))}

      <View style={styles.footer}>
        <Text style={styles.version}>Version 1.0.0</Text>
      </View>
    </ScrollView>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    fontFamily: 'Inter_700Bold',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    fontFamily: 'Inter_600SemiBold',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingIcon: {
    marginRight: 12,
  },
  settingTitle: {
    fontSize: 16,
    fontFamily: 'Inter_500Medium',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  version: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Inter_400Regular',
  },
});