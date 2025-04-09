import { useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  withDelay,
  Easing,
} from 'react-native-reanimated';

const { width: WINDOW_WIDTH } = Dimensions.get('window');
const CENTER_SIZE = 80;
const ORBIT_SIZE = WINDOW_WIDTH * 0.8;
const SATELLITE_SIZE = 40;
const SATELLITE_COUNT = 8;

const satellites = Array.from({ length: SATELLITE_COUNT }, (_, i) => ({
  id: i,
  color: `hsl(${(360 / SATELLITE_COUNT) * i}, 70%, 70%)`,
}));

export default function OrbitScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.header}>Orbital System</Text>
      <Text style={styles.subheader}>Watch the cosmic dance</Text>

      <View style={styles.orbitContainer}>
        <View style={styles.center} />
        
        {satellites.map((satellite) => (
          <OrbitingSatellite
            key={satellite.id}
            color={satellite.color}
            index={satellite.id}
          />
        ))}
      </View>
    </View>
  );
}

function OrbitingSatellite({ color, index }) {
  const rotation = useSharedValue(0);
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  useEffect(() => {
    const delay = index * 500;
    
    rotation.value = withDelay(
      delay,
      withRepeat(
        withTiming(360, {
          duration: 10000,
          easing: Easing.linear,
        }),
        -1
      )
    );

    scale.value = withDelay(
      delay,
      withRepeat(
        withTiming(1.2, {
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
        }),
        -1,
        true
      )
    );

    opacity.value = withDelay(
      delay,
      withRepeat(
        withTiming(0.6, {
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
        }),
        -1,
        true
      )
    );
  }, [index]);

  const orbitStyle = useAnimatedStyle(() => ({
    transform: [
      { rotate: `${rotation.value}deg` },
    ],
  }));

  const satelliteStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: scale.value },
      { rotate: `${-rotation.value}deg` },
    ],
    opacity: opacity.value,
  }));

  const angle = (2 * Math.PI * index) / SATELLITE_COUNT;
  const radius = ORBIT_SIZE / 2 - SATELLITE_SIZE / 2;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <Animated.View
      style={[
        styles.orbitPath,
        {
          transform: [
            { rotate: `${(360 / SATELLITE_COUNT) * index}deg` },
          ],
        },
        orbitStyle,
      ]}>
      <Animated.View
        style={[
          styles.satellite,
          {
            backgroundColor: color,
            transform: [
              { translateX: radius },
            ],
          },
          satelliteStyle,
        ]}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
  },
  header: {
    fontSize: 34,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
  },
  subheader: {
    fontSize: 16,
    color: '#999',
    marginBottom: 60,
  },
  orbitContainer: {
    width: ORBIT_SIZE,
    height: ORBIT_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    width: CENTER_SIZE,
    height: CENTER_SIZE,
    borderRadius: CENTER_SIZE / 2,
    backgroundColor: '#fff',
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  orbitPath: {
    position: 'absolute',
    width: 20,
    height: 20,
    left: ORBIT_SIZE / 2 - 10,
    top: ORBIT_SIZE / 2 - 10,
  },
  satellite: {
    width: SATELLITE_SIZE,
    height: SATELLITE_SIZE,
    borderRadius: SATELLITE_SIZE / 2,
    position: 'absolute',
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
});