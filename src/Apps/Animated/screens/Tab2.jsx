import { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import { Heart } from 'lucide-react-native';

const { width: WINDOW_WIDTH } = Dimensions.get('window');
const PRODUCT_WIDTH = WINDOW_WIDTH * 0.9;

const products = [
  {
    id: 1,
    name: 'Modern Desk Lamp',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=60',
    description: 'Sleek and minimalist desk lamp with adjustable brightness',
  },
  {
    id: 2,
    name: 'Leather Backpack',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=60',
    description: 'Handcrafted leather backpack with multiple compartments',
  },
  {
    id: 3,
    name: 'Ceramic Planter',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&auto=format&fit=crop&q=60',
    description: 'Modern ceramic planter perfect for indoor plants',
  },
];

export default function ProductsScreen() {
  const insets = useSafeAreaInsets();
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.header}>Featured Products</Text>
      <View style={styles.productsContainer}>
        {products.map((product) => (
          <AnimatedProduct
            key={product.id}
            product={product}
            isSelected={selectedProduct === product.id}
            onSelect={() => setSelectedProduct(product.id)}
          />
        ))}
      </View>
    </View>
  );
}

function AnimatedProduct({ product, isSelected, onSelect }) {
  const scale = useSharedValue(1);
  const rotation = useSharedValue(0);
  const liked = useSharedValue(0);

  const handlePress = () => {
    scale.value = withSpring(0.95, {}, () => {
      scale.value = withSpring(1);
    });
    rotation.value = withTiming(360, { duration: 1000 });
    onSelect();
  };

  const handleLike = () => {
    liked.value = withSpring(liked.value === 0 ? 1 : 0);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: scale.value },
      { rotateY: `${rotation.value}deg` },
    ],
  }));

  const heartStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: interpolate(liked.value, [0, 1], [1, 1.2], Extrapolate.CLAMP) },
    ],
    opacity: interpolate(liked.value, [0, 1], [0.5, 1], Extrapolate.CLAMP),
  }));

  return (
    <Animated.View style={[styles.productCard, animatedStyle]}>
      <Pressable onPress={handlePress}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>${product.price}</Text>
          <Text style={styles.productDescription}>{product.description}</Text>
        </View>
      </Pressable>
      <Pressable style={styles.likeButton} onPress={handleLike}>
        <Animated.View style={heartStyle}>
          <Heart size={24} color="#FF4B6E" fill={liked.value ? "#FF4B6E" : "none"} />
        </Animated.View>
      </Pressable>
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
  productsContainer: {
    padding: 10,
    gap: 20,
  },
  productCard: {
    width: PRODUCT_WIDTH,
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    marginHorizontal: 'auto',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 5,
  },
  productImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  productInfo: {
    padding: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: '700',
    color: '#007AFF',
    marginBottom: 12,
  },
  productDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  likeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 30,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
});