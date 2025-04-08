import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function VillageScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#1a1c2c', '#2a2c3c']}
        style={styles.background}
      />
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <View style={styles.resourceContainer}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1633511090690-0b7f2fec0e1d?w=50&h=50&fit=crop' }}
              style={styles.resourceIcon}
            />
            <Text style={styles.resourceText}>1,234,567</Text>
          </View>
          <View style={styles.resourceContainer}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1633511090690-0b7f2fec0e1d?w=50&h=50&fit=crop' }}
              style={styles.resourceIcon}
            />
            <Text style={styles.resourceText}>890,123</Text>
          </View>
        </View>
        
        <View style={styles.villageView}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=600&h=400&fit=crop' }}
            style={styles.villageImage}
          />
        </View>

        <View style={styles.buildingsList}>
          <Text style={styles.sectionTitle}>Buildings</Text>
          {['Town Hall', 'Barracks', 'Gold Mine', 'Elixir Collector'].map((building, index) => (
            <View key={index} style={styles.buildingItem}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?w=100&h=100&fit=crop' }}
                style={styles.buildingIcon}
              />
              <View style={styles.buildingInfo}>
                <Text style={styles.buildingName}>{building}</Text>
                <Text style={styles.buildingLevel}>Level 10</Text>
              </View>
            </View>
          ))}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  resourceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 8,
    borderRadius: 20,
  },
  resourceIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  resourceText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  villageView: {
    height: 300,
    margin: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  villageImage: {
    width: '100%',
    height: '100%',
  },
  buildingsList: {
    padding: 15,
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  buildingItem: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  buildingIcon: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  buildingInfo: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  buildingName: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buildingLevel: {
    color: '#ffd700',
    fontSize: 14,
  },
});