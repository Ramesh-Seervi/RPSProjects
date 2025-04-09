import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Tag } from 'lucide-react-native';

export default function ShopScreen() {
  const items = [
    {
      id: 1,
      name: 'Golden Crown',
      price: 1000,
      image: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=500',
      category: 'Accessories',
    },
    {
      id: 2,
      name: 'Dragon Wings',
      price: 2000,
      image: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=500',
      category: 'Back Items',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Avatar Shop</Text>
      </View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemCard}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <View style={styles.itemDetails}>
                <View style={styles.categoryTag}>
                  <Tag size={14} color="#666" />
                  <Text style={styles.categoryText}>{item.category}</Text>
                </View>
                <Text style={styles.priceText}>{item.price} R$</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#ffffff',
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    color: '#000000',
  },
  listContent: {
    padding: 20,
  },
  itemCard: {
    flex: 1,
    margin: 8,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  itemImage: {
    width: '100%',
    height: 150,
  },
  itemInfo: {
    padding: 12,
  },
  itemName: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#000000',
    marginBottom: 8,
  },
  itemDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categoryTag: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#666666',
    marginLeft: 4,
  },
  priceText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#00b894',
  },
});