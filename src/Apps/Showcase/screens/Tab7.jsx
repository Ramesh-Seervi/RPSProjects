import { useCallback } from 'react';
import { View, StyleSheet, Text, Dimensions, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withSequence,
  withDelay,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const { width: WINDOW_WIDTH } = Dimensions.get('window');
const SHAPE_SIZE = WINDOW_WIDTH * 0.25;
const GRID_SIZE = 3;
const GAP = 20;

const shapes = [
  { type: 'circle', color: '#FF6B6B' },
  { type: 'square', color: '#4ECDC4' },
  { type: 'triangle', color: '#45B7D1' },
  { type: 'pentagon', color: '#96CEB4' },
  { type: 'hexagon', color: '#FFEEAD' },
  { type: 'star', color: '#D4A5A5' },
  { type: 'heart', color: '#FF8C94' },
  { type: 'diamond', color: '#A8E6CF' },
  { type: 'octagon', color: '#D291BC' },
];

export default function ShapesScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.header}>Geometric Shapes</Text>
      <Text style={styles.subheader}>Tap shapes to animate</Text>

      <View style={styles.grid}>
        {shapes.map((shape, index) => (
          <AnimatedShape
            key={index}
            shape={shape}
            index={index}
          />
        ))}
      </View>
    </View>
  );
}

function AnimatedShape({ shape, index }) {
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
        withTiming(360, {
          duration: 1000,
          easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        }),
        withTiming(0, {
          duration: 0,
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

  const getShapePath = () => {
    switch (shape.type) {
      case 'triangle':
        return 'polygon(50% 0%, 0% 100%, 100% 100%)';
      case 'pentagon':
        return 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)';
      case 'hexagon':
        return 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
      case 'star':
        return 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';
      case 'heart':
        return 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)';
      case 'diamond':
        return 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)';
      case 'octagon':
        return 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)';
      default:
        return '';
    }
  };

  return (
    <Pressable onPress={animate}>
      <Animated.View
        style={[
          styles.shape,
          {
            backgroundColor: shape.color,
            borderRadius: shape.type === 'circle' ? SHAPE_SIZE / 2 : 0,
            ...(shape.type !== 'circle' && shape.type !== 'square' && {
              clipPath: getShapePath(),
            }),
          },
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
    fontSize: 34,
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
  shape: {
    width: SHAPE_SIZE,
    height: SHAPE_SIZE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
});