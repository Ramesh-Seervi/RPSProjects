import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { UserPlus, MessageCircle } from 'lucide-react-native';

const friends = [
  {
    id: '1',
    name: 'Sarah Johnson',
    status: 'Online',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    level: 42,
  },
  {
    id: '2',
    name: 'Mike Peterson',
    status: 'In Game',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    level: 38,
  },
];

export default function FriendsScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#1A1A2E', '#16213E']}
        style={styles.background}
      />

      <View style={styles.header}>
        <Text style={styles.title}>Friends</Text>
        <TouchableOpacity style={styles.addButton}>
          <UserPlus color="#FFD700" size={24} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={friends}
        renderItem={({ item }) => (
          <View style={styles.friendCard}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            
            <View style={styles.friendInfo}>
              <Text style={styles.friendName}>{item.name}</Text>
              <View style={styles.statusContainer}>
                <View style={[styles.statusDot, { backgroundColor: item.status === 'Online' ? '#4CAF50' : '#FFA500' }]} />
                <Text style={styles.statusText}>{item.status}</Text>
              </View>
            </View>

            <View style={styles.rightContent}>
              <Text style={styles.levelText}>Lvl {item.level}</Text>
              <TouchableOpacity style={styles.messageButton}>
                <MessageCircle color="#FFD700" size={20} />
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    color: '#FFF',
    fontSize: 28,
    fontFamily: 'Poppins_700Bold',
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContent: {
    padding: 20,
  },
  friendCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  friendInfo: {
    flex: 1,
    marginLeft: 15,
  },
  friendName: {
    color: '#FFF',
    fontSize: 16,
    marginBottom: 5,
    fontFamily: 'Poppins_600SemiBold',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 5,
  },
  statusText: {
    color: '#666',
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
  },
  rightContent: {
    alignItems: 'flex-end',
  },
  levelText: {
    color: '#FFD700',
    fontSize: 14,
    marginBottom: 5,
    fontFamily: 'Poppins_600SemiBold',
  },
  messageButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});