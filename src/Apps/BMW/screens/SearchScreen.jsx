import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';

const models = [
  {
    id: '1',
    name: 'BMW 7 Series',
    image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=3327&auto=format&fit=crop',
    price: 'From $93,300',
    description: 'The 7: Driving luxury',
  },
  {
    id: '2',
    name: 'BMW X5',
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=3328&auto=format&fit=crop',
    price: 'From $65,200',
    description: 'The boss of all terrains',
  },
  {
    id: '3',
    name: 'BMW M4',
    image: 'https://images.unsplash.com/photo-1655226017544-ce9e6c3f0cbb?q=80&w=3348&auto=format&fit=crop',
    price: 'From $74,700',
    description: 'Pure M performance',
  },
];

export default function ModelsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>BMW Models</Text>
      {models.map((model) => (
        <Pressable key={model.id} style={styles.modelCard}>
          <Image source={{ uri: model.image }} style={styles.modelImage} />
          <View style={styles.modelInfo}>
            <Text style={styles.modelName}>{model.name}</Text>
            <Text style={styles.modelPrice}>{model.price}</Text>
            <Text style={styles.modelDescription}>{model.description}</Text>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Build Yours</Text>
            </Pressable>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    padding: 20,
  },
  modelCard: {
    backgroundColor: '#111',
    borderRadius: 12,
    marginHorizontal: 20,
    marginBottom: 20,
    overflow: 'hidden',
  },
  modelImage: {
    width: '100%',
    height: 240,
  },
  modelInfo: {
    padding: 20,
  },
  modelName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  modelPrice: {
    color: '#1C69D4',
    fontSize: 18,
    marginBottom: 8,
  },
  modelDescription: {
    color: '#999',
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1C69D4',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});