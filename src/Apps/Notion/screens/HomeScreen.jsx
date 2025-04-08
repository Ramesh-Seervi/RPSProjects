import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Plus, ChevronRight } from 'lucide-react-native';

export default function HomeScreen() {
  const quickActions = [
    { title: 'New Page', icon: Plus },
    { title: 'Meeting Notes', icon: Plus },
    { title: 'Task List', icon: Plus },
  ];

  const recentPages = [
    { title: 'Project Planning', lastEdited: '2 hours ago' },
    { title: 'Meeting Notes', lastEdited: 'Yesterday' },
    { title: 'Ideas & Thoughts', lastEdited: '2 days ago' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Good morning</Text>
        <Text style={styles.name}>John Doe</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickActions}>
          {quickActions.map((action, index) => (
            <TouchableOpacity key={index} style={styles.actionButton}>
              <action.icon size={24} color="#000" />
              <Text style={styles.actionText}>{action.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Pages</Text>
        {recentPages.map((page, index) => (
          <TouchableOpacity key={index} style={styles.pageItem}>
            <View>
              <Text style={styles.pageTitle}>{page.title}</Text>
              <Text style={styles.pageSubtitle}>{page.lastEdited}</Text>
            </View>
            <ChevronRight size={20} color="#666" />
          </TouchableOpacity>
        ))}
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
  greeting: {
    fontSize: 16,
    color: '#666',
    fontFamily: 'Inter_400Regular',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 4,
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
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: '#f7f7f7',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
  },
  actionText: {
    marginTop: 8,
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
  },
  pageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  pageTitle: {
    fontSize: 16,
    fontFamily: 'Inter_500Medium',
  },
  pageSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
    fontFamily: 'Inter_400Regular',
  },
});