import { useState } from 'react';
import { View, StyleSheet, Text, Dimensions, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import { Palette } from 'lucide-react-native';

const { width: WINDOW_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = WINDOW_WIDTH * 0.9;
const CARD_HEIGHT = 200;

const gradients = [
  {
    name: 'Sunset',
    colors: ['#FF512F', '#F09819', '#FF512F'],
  },
  {
    name: 'Ocean',
    colors: ['#2193b0', '#6dd5ed', '#2193b0'],
  },
  {
    name: 'Purple Rain',
    colors: ['#8E2DE2', '#4A00E0', '#8E2DE2'],
  },
  {
    name: 'Forest',
    colors: ['#134E5E', '#71B280', '#134E5E'],
  },
];

export default function GradientsScreen() {
  const insets = useSafeAreaInsets();
  const [selectedGradient, setSelectedGradient] = useState(null);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.header}>Color Gradients</Text>
      <Text style={styles.subheader}>Tap to animate • Hold to expand</Text>

      <View style={styles.cardsContainer}>
        {gradients.map((gradient, index) => (
          <AnimatedGradientCard
            key={index}
            gradient={gradient}
            index={index}
            isSelected={selectedGradient === index}
            onSelect={() => setSelectedGradient(index === selectedGradient ? null : index)}
          />
        ))}
      </View>
    </View>
  );
}

function AnimatedGradientCard({ gradient, index, isSelected, onSelect }) {
  const scale = useSharedValue(1);
  const progress = useSharedValue(0);
  const height = useSharedValue(CARD_HEIGHT);

  const handlePress = () => {
    progress.value = withTiming(isSelected ? 0 : 1, { duration: 1000 });
    scale.value = withSpring(isSelected ? 1 : 1.02);
    height.value = withSpring(isSelected ? CARD_HEIGHT : CARD_HEIGHT * 1.5);
    onSelect();
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    height: height.value,
  }));

  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${progress.value * 360}deg` }],
  }));

  return (
    <Pressable onPress={handlePress}>
      <Animated.View style={[styles.card, animatedStyle]}>
        <LinearGradient
          colors={gradient.colors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}>
          <View style={styles.cardContent}>
            <View style={styles.cardHeader}>
              <Text style={styles.gradientName}>{gradient.name}</Text>
              <Animated.View style={iconStyle}>
                <Palette size={24} color="#fff" />
              </Animated.View>
            </View>
            
            {isSelected && (
              <View style={styles.colorCodes}>
                {gradient.colors.map((color, i) => (
                  <Text key={i} style={styles.colorCode}>{color}</Text>
                ))}
              </View>
            )}
          </View>
        </LinearGradient>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 34,
    fontWeight: '700',
    color: '#1a1a1a',
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  subheader: {
    fontSize: 16,
    color: '#666',
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  cardsContainer: {
    padding: 20,
    gap: 20,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 25,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 5,
  },
  gradient: {
    flex: 1,
    padding: 20,
  },
  cardContent: {
    flex: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gradientName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
  },
  colorCodes: {
    marginTop: 20,
    gap: 10,
  },
  colorCode: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
  },
});