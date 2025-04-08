import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Search, UserPlus } from 'lucide-react-native';

export default function DevoteesScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Devotees Directory</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Search size={20} color="#666666" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search devotees..."
            placeholderTextColor="#666666"
          />
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Devotees</Text>
          <TouchableOpacity style={styles.addButton}>
            <UserPlus size={20} color="#FF8000" />
            <Text style={styles.addButtonText}>Add New</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.devoteesList}>
          <TouchableOpacity style={styles.devoteeCard}>
            <View style={styles.devoteeInfo}>
              <Text style={styles.devoteeName}>Ramesh Iyer</Text>
              <Text style={styles.devoteeDetails}>Member since: Jan 2024</Text>
              <Text style={styles.devoteeDetails}>Last Visit: 2 days ago</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.devoteeCard}>
            <View style={styles.devoteeInfo}>
              <Text style={styles.devoteeName}>Lakshmi Devi</Text>
              <Text style={styles.devoteeDetails}>Member since: Feb 2024</Text>
              <Text style={styles.devoteeDetails}>Last Visit: 5 days ago</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.devoteeCard}>
            <View style={styles.devoteeInfo}>
              <Text style={styles.devoteeName}>Suresh Kumar</Text>
              <Text style={styles.devoteeDetails}>Member since: Mar 2024</Text>
              <Text style={styles.devoteeDetails}>Last Visit: Today</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <View style={styles.categoriesList}>
          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryTitle}>Regular Visitors</Text>
            <Text style={styles.categoryCount}>125 devotees</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryTitle}>Donors</Text>
            <Text style={styles.categoryCount}>75 devotees</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryCard}>
            <Text style={styles.categoryTitle}>Volunteers</Text>
            <Text style={styles.categoryCount}>30 devotees</Text>
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
  searchContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333333',
  },
  section: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FF8000',
    marginLeft: 5,
    fontSize: 16,
  },
  devoteesList: {
    gap: 10,
  },
  devoteeCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  devoteeInfo: {
    flex: 1,
  },
  devoteeName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
    marginBottom: 5,
  },
  devoteeDetails: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 2,
  },
  categoriesList: {
    gap: 10,
  },
  categoryCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
  },
  categoryCount: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
  },
});