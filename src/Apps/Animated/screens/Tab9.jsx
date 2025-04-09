import { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
  withSequence,
  Easing,
} from 'react-native-reanimated';
import { Play, Pause, RotateCcw } from 'lucide-react-native';

const { width: WINDOW_WIDTH } = Dimensions.get('window');
const PROGRESS_WIDTH = WINDOW_WIDTH * 0.8;
const CIRCLE_SIZE = WINDOW_WIDTH * 0.6;

export default function ProgressScreen() {
  const insets = useSafeAreaInsets();
  const [isPlaying, setIsPlaying] = useState(false);
  const progress = useSharedValue(0);
  const scale = useSharedValue(1);

  useEffect(() => {
    if (isPlaying) {
      progress.value = withTiming(1, {
        duration: 5000,
        easing: Easing.linear,
      });
    } else {
      progress.value = withTiming(progress.value, {
        duration: 0,
      });
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    scale.value = withSequence(
      withSpring(0.9),
      withSpring(1.1),
      withSpring(1)
    );
  };

  const handleReset = () => {
    setIsPlaying(false);
    progress.value = withTiming(0, {
      duration: 300,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
  };

  const progressStyle = useAnimatedStyle(() => ({
    width: `${progress.value * 100}%`,
  }));

  const circleStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: scale.value },
      { rotate: `${progress.value * 360}deg` },
    ],
  }));

  const buttonStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.header}>Progress Indicators</Text>
      <Text style={styles.subheader}>Linear & Circular Progress</Text>

      <View style={styles.progressContainer}>
        <View style={styles.linearProgress}>
          <View style={styles.progressTrack}>
            <Animated.View style={[styles.progressFill, progressStyle]} />
          </View>
          <Text style={styles.progressText}>
            {Math.round(progress.value * 100)}%
          </Text>
        </View>

        <Animated.View style={[styles.circle, circleStyle]}>
          <View style={styles.circleInner} />
        </Animated.View>
      </View>

      <View style={styles.controls}>
        <Pressable onPress={handleReset} style={styles.controlButton}>
          <RotateCcw size={24} color="#666" />
        </Pressable>

        <Animated.View style={buttonStyle}>
          <Pressable onPress={handlePlayPause} style={styles.playButton}>
            {isPlaying ? (
              <Pause size={24} color="#fff" />
            ) : (
              <Play size={24} color="#fff" />
            )}
          </Pressable>
        </Animated.View>

        <View style={styles.controlButton} />
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
    marginBottom: 60,
  },
  progressContainer: {
    alignItems: 'center',
    gap: 60,
  },
  linearProgress: {
    width: PROGRESS_WIDTH,
    alignItems: 'center',
    gap: 20,
  },
  progressTrack: {
    width: '100%',
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#007AFF',
  },
  progressText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    borderWidth: 10,
    borderColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleInner: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#007AFF',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
    marginTop: 60,
  },
  controlButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});