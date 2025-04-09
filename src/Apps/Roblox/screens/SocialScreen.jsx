import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { MessageCircle, ThumbsUp } from 'lucide-react-native';

export default function SocialScreen() {
  const posts = [
    {
      id: 1,
      username: 'GamerPro123',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100',
      content: 'Just reached level 100 in Adopt Me! 🎮✨',
      likes: 245,
      comments: 23,
      time: '2h ago',
    },
    {
      id: 2,
      username: 'BlockMaster',
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100',
      content: 'Looking for teammates in Blox Fruits! Anyone interested? 🤝',
      likes: 182,
      comments: 45,
      time: '4h ago',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Social Feed</Text>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.postCard}>
            <View style={styles.postHeader}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <View>
                <Text style={styles.username}>{item.username}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
            </View>
            <Text style={styles.content}>{item.content}</Text>
            <View style={styles.actions}>
              <TouchableOpacity style={styles.actionButton}>
                <ThumbsUp size={20} color="#666" />
                <Text style={styles.actionText}>{item.likes}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <MessageCircle size={20} color="#666" />
                <Text style={styles.actionText}>{item.comments}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={styles.listContent}
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
  postCard: {
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  username: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#000000',
  },
  time: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#666666',
  },
  content: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#000000',
    marginBottom: 12,
  },
  actions: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  actionText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#666666',
    marginLeft: 6,
  },
});