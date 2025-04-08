import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const troops = [
  { name: 'Barbarian', level: 7, capacity: 1, training: 20 },
  { name: 'Archer', level: 6, capacity: 1, training: 25 },
  { name: 'Giant', level: 8, capacity: 5, training: 120 },
  { name: 'Wizard', level: 5, capacity: 4, training: 180 },
];

export default function ArmyScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#1a1c2c', '#2a2c3c']}
        style={styles.background}
      />
      <ScrollView style={styles.scrollView}>
        <View style={styles.armyInfo}>
          <View style={styles.campInfo}>
            <Text style={styles.campTitle}>Army Camps</Text>
            <Text style={styles.campCapacity}>220/240</Text>
          </View>
          
          <View style={styles.troopsList}>
            {troops.map((troop, index) => (
              <TouchableOpacity key={index} style={styles.troopCard}>
                <Image
                  source={{ uri: 'https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=150&h=150&fit=crop' }}
                  style={styles.troopImage}
                />
                <View style={styles.troopInfo}>
                  <Text style={styles.troopName}>{troop.name}</Text>
                  <Text style={styles.troopLevel}>Level {troop.level}</Text>
                  <View style={styles.troopStats}>
                    <Text style={styles.statText}>Capacity: {troop.capacity}</Text>
                    <Text style={styles.statText}>{troop.training}s</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
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
  scrollView: {
    flex: 1,
  },
  armyInfo: {
    padding: 15,
  },
  campInfo: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  campTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  campCapacity: {
    color: '#ffd700',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
  },
  troopsList: {
    gap: 15,
  },
  troopCard: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  troopImage: {
    width: 100,
    height: 100,
  },
  troopInfo: {
    flex: 1,
    padding: 15,
  },
  troopName: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  troopLevel: {
    color: '#ffd700',
    fontSize: 14,
    marginTop: 5,
  },
  troopStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  statText: {
    color: '#8b8b8b',
    fontSize: 12,
  },
});