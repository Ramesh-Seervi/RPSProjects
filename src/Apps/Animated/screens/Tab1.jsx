import { View, StyleSheet, Dimensions, Text, Image } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');
const CARD_WIDTH = WINDOW_WIDTH * 0.85;
const CARD_HEIGHT = WINDOW_HEIGHT * 0.6;
const SPACING = 20;

const cards = [
  {
    id: 1,
    title: 'Serenity Beach',
    description: 'Experience the tranquility of pristine shores',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60',
    color: 'hsl(200, 70%, 95%)',
  },
  {
    id: 2,
    title: 'Mountain Peaks',
    description: 'Reach new heights in your journey',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=60',
    color: 'hsl(120, 70%, 95%)',
  },
  {
    id: 3,
    title: 'Urban Nights',
    description: 'Discover the city that never sleeps',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=60',
    color: 'hsl(280, 70%, 95%)',
  },
  {
    id: 4,
    title: 'Forest Dreams',
    description: 'Lost in the enchanted wilderness',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=60',
    color: 'hsl(150, 70%, 95%)',
  },
];

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const scrollX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.header}>Discover</Text>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        decelerationRate="fast"
        snapToInterval={CARD_WIDTH + SPACING}
        contentContainerStyle={styles.scrollContent}>
        {cards.map((card, index) => (
          <AnimatedCard
            key={card.id}
            index={index}
            scrollX={scrollX}
            {...card}
          />
        ))}
      </Animated.ScrollView>
    </View>
  );
}

function AnimatedCard({ index, scrollX, title, description, image, color }) {
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * (CARD_WIDTH + SPACING),
      index * (CARD_WIDTH + SPACING),
      (index + 1) * (CARD_WIDTH + SPACING),
    ];

    const scale = interpolate(
      scrollX.value,
      inputRange,
      [0.8, 1, 0.8],
      'clamp'
    );

    const opacity = interpolate(
      scrollX.value,
      inputRange,
      [0.4, 1, 0.4],
      'clamp'
    );

    const translateY = interpolate(
      scrollX.value,
      inputRange,
      [50, 0, 50],
      'clamp'
    );

    const rotateZ = interpolate(
      scrollX.value,
      inputRange,
      [-5, 0, 5],
      'clamp'
    );

    return {
      transform: [
        { scale },
        { translateY },
        { rotateZ: `${rotateZ}deg` },
      ],
      opacity,
    };
  });

  return (
    <Animated.View style={[styles.cardContainer, animatedStyle]}>
      <View style={[styles.card, { backgroundColor: color }]}>
        <Image source={{ uri: image }} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardDescription}>{description}</Text>
        </View>
      </View>
    </Animated.View>
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
    paddingVertical: 20,
  },
  scrollContent: {
    paddingHorizontal: SPACING,
    paddingVertical: 20,
    gap: SPACING,
  },
  cardContainer: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.15,
    shadowRadius: 30,
    elevation: 10,
  },
  card: {
    flex: 1,
    borderRadius: 30,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
  },
  cardContent: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
});