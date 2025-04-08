import { useState, useRef } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import Animated, { 
  useAnimatedStyle, 
  withSpring, 
  withSequence,
  withTiming,
  useSharedValue
} from 'react-native-reanimated';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';

export default function TalkingTomScreen() {
  const [happiness, setHappiness] = useState(100);
  const [energy, setEnergy] = useState(100);
  
  const scale = useSharedValue(1);
  const rotation = useSharedValue(0);
  
  const tapGesture = Gesture.Tap()
    .onStart(() => {
      scale.value = withSequence(
        withSpring(1.2),
        withSpring(1)
      );
      rotation.value = withSequence(
        withTiming(0.1),
        withTiming(-0.1),
        withTiming(0)
      );
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: scale.value },
      { rotate: `${rotation.value}rad` }
    ],
  }));

  const tomImage = "https://images.unsplash.com/photo-1615796153287-98eacf0abb13?w=800&auto=format&fit=crop";

  return (
    <View style={styles.container}>
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Happiness</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${happiness}%`, backgroundColor: '#FF6B6B' }]} />
          </View>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Energy</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${energy}%`, backgroundColor: '#4ECDC4' }]} />
          </View>
        </View>
      </View>

      <GestureDetector gesture={tapGesture}>
        <Animated.View style={[styles.characterContainer, animatedStyle]}>
          <Image
            source={{ uri: tomImage }}
            style={styles.character}
          />
        </Animated.View>
      </GestureDetector>

      <View style={styles.actionsContainer}>
        <Pressable 
          style={styles.actionButton}
          onPress={() => setHappiness(prev => Math.min(100, prev + 10))}>
          <Text style={styles.actionButtonText}>Pet</Text>
        </Pressable>
        <Pressable 
          style={styles.actionButton}
          onPress={() => setEnergy(prev => Math.min(100, prev + 20))}>
          <Text style={styles.actionButtonText}>Feed</Text>
        </Pressable>
        <Pressable 
          style={styles.actionButton}
          onPress={() => {
            setEnergy(prev => Math.max(0, prev - 10));
            setHappiness(prev => Math.min(100, prev + 5));
          }}>
          <Text style={styles.actionButtonText}>Play</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    padding: 20,
  },
  statsContainer: {
    marginTop: 60,
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statItem: {
    marginBottom: 10,
  },
  statLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },
  progressBar: {
    height: 10,
    backgroundColor: '#EEE',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 5,
  },
  characterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  character: {
    width: 280,
    height: 280,
    borderRadius: 140,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionButton: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    minWidth: 100,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});