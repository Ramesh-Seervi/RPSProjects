import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Search, Bell } from 'lucide-react-native';

const CATEGORIES = [
  'All',
  'Popular',
  'Recent',
  'Recommended',
  'Featured',
];

const FEATURED_ITEMS = [
  {
    id: 1,
    title: 'Modern Living Room',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
    price: '$299',
    rating: 4.8,
  },
  {
    id: 2,
    title: 'Cozy Bedroom Set',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
    price: '$499',
    rating: 4.9,
  },
  {
    id: 3,
    title: 'Kitchen Collection',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba',
    price: '$399',
    rating: 4.7,
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.greeting}>Good Morning</Text>
            <Text style={styles.name}>John Doe</Text>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Bell size={24} color="#000" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.searchContainer}>
          <Search size={20} color="#666" style={styles.searchIcon} />
          <Text style={styles.searchPlaceholder}>Search for furniture...</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categories}>
          {CATEGORIES.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.categoryButton,
                index === 0 && styles.categoryButtonActive,
              ]}>
              <Text
                style={[
                  styles.categoryText,
                  index === 0 && styles.categoryTextActive,
                ]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Featured Items</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.featuredItems}>
            {FEATURED_ITEMS.map((item) => (
              <TouchableOpacity key={item.id} style={styles.featuredItem}>
                <Image
                  source={item.image}
                  style={styles.featuredImage}
                  contentFit="cover"
                />
                <View style={styles.featuredContent}>
                  <Text style={styles.featuredTitle}>{item.title}</Text>
                  <View style={styles.featuredFooter}>
                    <Text style={styles.featuredPrice}>{item.price}</Text>
                    <Text style={styles.featuredRating}>★ {item.rating}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.recommendedSection}>
          <Text style={styles.sectionTitle}>Recommended</Text>
          {/* Add recommended items here */}
        </View>
      </ScrollView>
    </View>
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
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#666',
  },
  name: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#000',
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchPlaceholder: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#666',
  },
  categories: {
    padding: 20,
    gap: 12,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
  },
  categoryButtonActive: {
    backgroundColor: '#007AFF',
  },
  categoryText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#666',
  },
  categoryTextActive: {
    color: '#fff',
  },
  featuredSection: {
    padding: 20,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#000',
    marginBottom: 16,
  },
  featuredItems: {
    gap: 16,
  },
  featuredItem: {
    width: 280,
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  featuredImage: {
    width: '100%',
    height: 180,
  },
  featuredContent: {
    padding: 16,
  },
  featuredTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#000',
    marginBottom: 8,
  },
  featuredFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  featuredPrice: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#007AFF',
  },
  featuredRating: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#666',
  },
  recommendedSection: {
    padding: 20,
  },
});