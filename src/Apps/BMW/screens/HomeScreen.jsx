import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=3327&auto=format&fit=crop' }}
          style={styles.heroImage}
        />
        <Text style={styles.heroTitle}>THE NEW BMW i7</Text>
        <Text style={styles.heroSubtitle}>100% ELECTRIC. 100% LUXURY.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Models</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.modelList}>
          <View href="/models" asChild>
            <Pressable style={styles.modelCard}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=3328&auto=format&fit=crop' }}
                style={styles.modelImage}
              />
              <Text style={styles.modelName}>BMW X5</Text>
              <Text style={styles.modelTag}>THE BOSS.</Text>
            </Pressable>
          </View>
          <View href="/models" asChild>
            <Pressable style={styles.modelCard}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1655226017544-ce9e6c3f0cbb?q=80&w=3348&auto=format&fit=crop' }}
                style={styles.modelImage}
              />
              <Text style={styles.modelName}>BMW M4</Text>
              <Text style={styles.modelTag}>PURE M.</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Latest News</Text>
        <View style={styles.newsCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=3269&auto=format&fit=crop' }}
            style={styles.newsImage}
          />
          <View style={styles.newsContent}>
            <Text style={styles.newsTitle}>The First-Ever BMW XM</Text>
            <Text style={styles.newsDescription}>
              Experience the most powerful BMW M car ever made.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  hero: {
    height: 500,
    justifyContent: 'flex-end',
    padding: 20,
  },
  heroImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  heroTitle: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  heroSubtitle: {
    color: '#1C69D4',
    fontSize: 18,
    marginBottom: 20,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modelList: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  modelCard: {
    width: 280,
    marginRight: 20,
    backgroundColor: '#111',
    borderRadius: 12,
    overflow: 'hidden',
  },
  modelImage: {
    width: '100%',
    height: 180,
  },
  modelName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 16,
    paddingBottom: 4,
  },
  modelTag: {
    color: '#1C69D4',
    fontSize: 16,
    padding: 16,
    paddingTop: 0,
  },
  newsCard: {
    backgroundColor: '#111',
    borderRadius: 12,
    overflow: 'hidden',
  },
  newsImage: {
    width: '100%',
    height: 200,
  },
  newsContent: {
    padding: 16,
  },
  newsTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  newsDescription: {
    color: '#999',
    fontSize: 16,
    lineHeight: 24,
  },
});