import { useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  withSpring,
  Easing,
  withSequence,
} from 'react-native-reanimated';
import { Compass as CompassIcon, Navigation } from 'lucide-react-native';

const { width: WINDOW_WIDTH } = Dimensions.get('window');
const COMPASS_SIZE = WINDOW_WIDTH * 0.8;

const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

export default function CompassScreen() {
  const insets = useSafeAreaInsets();
  const rotation = useSharedValue(0);
  const scale = useSharedValue(1);
  const navigationRotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 10000,
        easing: Easing.linear,
      }),
      -1
    );

    navigationRotation.value = withRepeat(
      withSequence(
        withTiming(-30, {
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
        }),
        withTiming(30, {
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
        })
      ),
      -1,
      true
    );

    scale.value = withRepeat(
      withSequence(
        withSpring(1.05),
        withSpring(1)
      ),
      -1,
      true
    );
  }, []);

  const compassStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: scale.value },
      { rotate: `${rotation.value}deg` },
    ],
  }));

  const navigationStyle = useAnimatedStyle(() => ({
    transform: [
      { rotate: `${navigationRotation.value}deg` },
    ],
  }));

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.header}>Digital Compass</Text>
      <Text style={styles.subheader}>Find your way • Follow your path</Text>

      <View style={styles.compassContainer}>
        <Animated.View style={[styles.compass, compassStyle]}>
          <CompassIcon size={COMPASS_SIZE} color="#1a1a1a" />
          {directions.map((direction, index) => (
            <Text
              key={direction}
              style={[
                styles.direction,
                {
                  transform: [
                    { rotate: `${index * 45}deg` },
                    { translateY: -COMPASS_SIZE / 2 + 30 },
                  ],
                },
              ]}>
              {direction}
            </Text>
          ))}
        </Animated.View>

        <Animated.View style={[styles.navigation, navigationStyle]}>
          <Navigation size={40} color="#007AFF" />
        </Animated.View>
      </View>

      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statValue}>234°</Text>
          <Text style={styles.statLabel}>Heading</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>12.5m</Text>
          <Text style={styles.statLabel}>Altitude</Text>
        </View>
      </View>
    </View>
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
  compassContainer: {
    width: COMPASS_SIZE,
    height: COMPASS_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  compass: {
    width: COMPASS_SIZE,
    height: COMPASS_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  direction: {
    position: 'absolute',
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  navigation: {
    position: 'absolute',
  },
  stats: {
    flexDirection: 'row',
    gap: 40,
    marginTop: 60,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#007AFF',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
});