import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withSequence,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { Minus, Plus, ShoppingBag } from 'lucide-react-native';

const cartItems = [
  {
    id: 1,
    name: 'Modern Desk Lamp',
    price: 129.99,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Leather Backpack',
    price: 199.99,
    quantity: 1,
  },
];

export default function CartScreen() {
  const insets = useSafeAreaInsets();
  const [items, setItems] = useState(cartItems);
  const checkoutScale = useSharedValue(1);
  
  const handleCheckout = () => {
    checkoutScale.value = withSequence(
      withSpring(0.95),
      withSpring(1.1),
      withSpring(1)
    );
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const checkoutStyle = useAnimatedStyle(() => ({
    transform: [{ scale: checkoutScale.value }],
  }));

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.header}>Shopping Cart</Text>
      
      <View style={styles.cartContainer}>
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateQuantity={(quantity) => {
              setItems(items.map((i) =>
                i.id === item.id ? { ...i, quantity } : i
              ));
            }}
          />
        ))}
      </View>

      <View style={styles.summary}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Subtotal</Text>
          <Text style={styles.summaryValue}>${total.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Shipping</Text>
          <Text style={styles.summaryValue}>Free</Text>
        </View>
        <View style={[styles.summaryRow, styles.totalRow]}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
        </View>

        <Animated.View style={[styles.checkoutButton, checkoutStyle]}>
          <Pressable onPress={handleCheckout} style={styles.checkoutTouchable}>
            <ShoppingBag size={24} color="#fff" />
            <Text style={styles.checkoutText}>Checkout</Text>
          </Pressable>
        </Animated.View>
      </View>
    </View>
  );
}

function CartItem({ item, onUpdateQuantity }) {
  const itemScale = useSharedValue(1);
  const itemRotate = useSharedValue(0);

  const handleQuantityChange = (delta) => {
    const newQuantity = Math.max(0, item.quantity + delta);
    itemScale.value = withSequence(
      withSpring(1.1),
      withSpring(1)
    );
    itemRotate.value = withTiming(360, {
      duration: 500,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
    onUpdateQuantity(newQuantity);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: itemScale.value },
      { rotateX: `${itemRotate.value}deg` },
    ],
  }));

  return (
    <Animated.View style={[styles.cartItem, animatedStyle]}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
      </View>
      
      <View style={styles.quantityControls}>
        <Pressable
          onPress={() => handleQuantityChange(-1)}
          style={styles.quantityButton}>
          <Minus size={20} color="#666" />
        </Pressable>
        
        <Text style={styles.quantity}>{item.quantity}</Text>
        
        <Pressable
          onPress={() => handleQuantityChange(1)}
          style={styles.quantityButton}>
          <Plus size={20} color="#666" />
        </Pressable>
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
  cartContainer: {
    flex: 1,
    padding: 20,
    gap: 15,
  },
  cartItem: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  quantityButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 8,
  },
  quantity: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    minWidth: 30,
    textAlign: 'center',
  },
  summary: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    gap: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summaryLabel: {
    fontSize: 16,
    color: '#666',
  },
  summaryValue: {
    fontSize: 16,
    color: '#1a1a1a',
    fontWeight: '600',
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 15,
    marginTop: 5,
  },
  totalLabel: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  totalValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#007AFF',
  },
  checkoutButton: {
    backgroundColor: '#007AFF',
    borderRadius: 15,
    marginTop: 20,
    overflow: 'hidden',
  },
  checkoutTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 10,
  },
  checkoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});