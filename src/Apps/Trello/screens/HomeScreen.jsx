import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Plus } from 'lucide-react-native';

const BOARDS = [
  {
    id: '1',
    title: 'Personal Tasks',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: '2',
    title: 'Work Projects',
    image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: '3',
    title: 'Travel Plans',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop&q=60',
  },
];

export default function BoardsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Boards</Text>
        <TouchableOpacity style={styles.createButton}>
          <Plus size={24} color="#ffffff" />
          <Text style={styles.createButtonText}>Create Board</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.boardsGrid}>
          {BOARDS.map((board) => (
            <TouchableOpacity key={board.id} style={styles.boardCard}>
              <Image
                source={{ uri: board.image }}
                style={styles.boardImage}
              />
              <View style={styles.boardOverlay} />
              <Text style={styles.boardTitle}>{board.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f5',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  title: {
    fontSize: 28,
    fontFamily: 'Inter_600SemiBold',
    color: '#18181b',
    marginBottom: 16,
  },
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0055D4',
    padding: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  createButtonText: {
    color: '#ffffff',
    marginLeft: 8,
    fontSize: 16,
    fontFamily: 'Inter_500Medium',
  },
  scrollView: {
    flex: 1,
  },
  boardsGrid: {
    padding: 16,
  },
  boardCard: {
    height: 160,
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  boardImage: {
    width: '100%',
    height: '100%',
  },
  boardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  boardTitle: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'Inter_600SemiBold',
  },
});