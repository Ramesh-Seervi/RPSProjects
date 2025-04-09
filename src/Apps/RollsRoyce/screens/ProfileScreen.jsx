import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronRight } from 'lucide-react-native';

const settingsOptions = [
  {
    id: '1',
    title: 'Account',
    items: ['Profile', 'Preferences', 'Notifications'],
  },
  {
    id: '2',
    title: 'Support',
    items: ['Contact Us', 'FAQ', 'Terms of Service', 'Privacy Policy'],
  },
  {
    id: '3',
    title: 'App Settings',
    items: ['Language', 'Dark Mode', 'App Version'],
  },
];

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.pageTitle}>Settings</Text>
        
        {settingsOptions.map((section) => (
          <View key={section.id} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {section.items.map((item, index) => (
              <TouchableOpacity key={index} style={styles.option}>
                <Text style={styles.optionText}>{item}</Text>
                <ChevronRight size={20} color="#666666" />
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollContent: {
    padding: 20,
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: '600',
    color: '#C4A47C',
    marginBottom: 30,
    letterSpacing: 2,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    color: '#C4A47C',
    marginBottom: 15,
    fontWeight: '500',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  optionText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});