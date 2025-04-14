import { useCallback, useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withSequence,
  withDelay,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ChevronRight } from 'lucide-react-native';

const GRID_SIZE = 4;
const CELL_SIZE = 80;
const SPACING = 10;

const colors = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4',
  '#FFEEAD', '#D4A5A5', '#9B786F', '#588C7E',
  '#FF8C94', '#A8E6CF', '#DCEDC1', '#FFD3B6',
  '#D291BC', '#957DAD', '#7EA8BE', '#8FC1A9',
];

export default function AnimationsScreen() {
  const insets = useSafeAreaInsets();
  const [isExpanded, setIsExpanded] = useState(false);
  
  const createGrid = useCallback(() => {
    return Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, i) => {
      const row = Math.floor(i / GRID_SIZE);
      const col = i % GRID_SIZE;
      return { id: i, row, col, color: colors[i] };
    });
  }, []);

  const gridScale = useSharedValue(1);
  const gridRotate = useSharedValue(0);

  const handleGridPress = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      gridScale.value = withSpring(1.2);
      gridRotate.value = withTiming(360, {
        duration: 1000,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
    } else {
      gridScale.value = withSpring(1);
      gridRotate.value = withTiming(0, {
        duration: 1000,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
    }
  };

  const gridStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: gridScale.value },
      { rotate: `${gridRotate.value}deg` },
    ],
  }));

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.header}>Interactive Grid</Text>
      <Text style={styles.subheader}>Tap cells to animate • Press grid to transform</Text>
      
      <Pressable onPress={handleGridPress}>
        <Animated.View style={[styles.grid, gridStyle]}>
          {createGrid().map((item) => (
            <AnimatedCell
              key={item.id}
              row={item.row}
              col={item.col}
              color={item.color}
              isExpanded={isExpanded}
            />
          ))}
        </Animated.View>
      </Pressable>

      <View style={styles.hint}>
        <ChevronRight size={20} color="#666" />
        <Text style={styles.hintText}>Try tapping the entire grid</Text>
      </View>
    </View>
  );
}

function AnimatedCell({ row, col, color, isExpanded }) {
  const scale = useSharedValue(1);
  const rotate = useSharedValue(0);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const animate = () => {
    const delay = (row * GRID_SIZE + col) * 50;
    scale.value = withDelay(
      delay,
      withSequence(
        withSpring(1.3),
        withSpring(1)
      )
    );
    rotate.value = withDelay(
      delay,
      withSequence(
        withSpring(180),
        withSpring(0)
      )
    );

    if (isExpanded) {
      translateX.value = withSpring((Math.random() - 0.5) * 100);
      translateY.value = withSpring((Math.random() - 0.5) * 100);
    } else {
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    }
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: scale.value },
      { rotate: `${rotate.value}deg` },
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));

  return (
    <Animated.View
      style={[
        styles.cell,
        {
          top: row * (CELL_SIZE + SPACING),
          left: col * (CELL_SIZE + SPACING),
          backgroundColor: color,
        },
        animatedStyle,
      ]}
      onTouchEnd={animate}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    paddingTop: 40,
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
    width: GRID_SIZE * (CELL_SIZE + SPACING) - SPACING,
    height: GRID_SIZE * (CELL_SIZE + SPACING) - SPACING,
    position: 'relative',
  },
  cell: {
    position: 'absolute',
    width: CELL_SIZE,
    height: CELL_SIZE,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  hint: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  hintText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#666',
  },
});