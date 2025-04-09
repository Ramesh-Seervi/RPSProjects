import { useState, useCallback } from 'react';
import { View, StyleSheet, Text, Pressable, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  withSequence,
  withDelay,
  Easing,
} from 'react-native-reanimated';
import { Shuffle } from 'lucide-react-native';

const { width: WINDOW_WIDTH } = Dimensions.get('window');
const BOX_SIZE = WINDOW_WIDTH * 0.25;
const GAP = 10;
const GRID_SIZE = 3;

const generateBoxes = () => {
  return Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, i) => ({
    id: i,
    color: `hsl(${(360 / (GRID_SIZE * GRID_SIZE)) * i}, 70%, 75%)`,
  }));
};

export default function BoxesScreen() {
  const insets = useSafeAreaInsets();
  const [boxes, setBoxes] = useState(generateBoxes());
  const shuffleScale = useSharedValue(1);

  const handleShuffle = () => {
    shuffleScale.value = withSequence(
      withSpring(0.9),
      withSpring(1.1),
      withSpring(1)
    );
    
    setBoxes(boxes => {
      const shuffled = [...boxes];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    });
  };

  const shuffleStyle = useAnimatedStyle(() => ({
    transform: [{ scale: shuffleScale.value }],
  }));

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.header}>Animated Boxes</Text>
      <Text style={styles.subheader}>Tap boxes to animate • Press shuffle to mix</Text>

      <View style={styles.grid}>
        {boxes.map((box, index) => (
          <AnimatedBox
            key={box.id}
            color={box.color}
            index={index}
          />
        ))}
      </View>

      <Animated.View style={[styles.shuffleButton, shuffleStyle]}>
        <Pressable onPress={handleShuffle} style={styles.shuffleTouchable}>
          <Shuffle size={24} color="#fff" />
          <Text style={styles.shuffleText}>Shuffle</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}

function AnimatedBox({ color, index }) {
  const scale = useSharedValue(1);
  const rotate = useSharedValue(0);
  const translateY = useSharedValue(0);

  const animate = useCallback(() => {
    const delay = index * 100;
    scale.value = withDelay(
      delay,
      withSequence(
        withSpring(1.2),
        withSpring(1)
      )
    );
    rotate.value = withDelay(
      delay,
      withSequence(
        withTiming(180, {
          duration: 500,
          easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        }),
        withTiming(0, {
          duration: 500,
          easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        })
      )
    );
    translateY.value = withDelay(
      delay,
      withSequence(
        withSpring(-30),
        withSpring(0)
      )
    );
  }, [index]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: scale.value },
      { rotate: `${rotate.value}deg` },
      { translateY: translateY.value },
    ],
  }));

  return (
    <Pressable onPress={animate}>
      <Animated.View
        style={[
          styles.box,
          { backgroundColor: color },
          animatedStyle,
        ]}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  header: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  subheader: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: GAP,
    padding: GAP,
    justifyContent: 'center',
  },
  box: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  shuffleButton: {
    position: 'absolute',
    bottom: 40,
    backgroundColor: '#007AFF',
    borderRadius: 20,
    overflow: 'hidden',
  },
  shuffleTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    gap: 10,
  },
  shuffleText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});