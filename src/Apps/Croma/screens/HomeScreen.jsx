import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useMemo } from 'react';

export default function PalettesScreen() {
  const palettes = useMemo(() => generatePalettes(), []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Color Palettes</Text>
        <Text style={styles.subtitle}>Discover beautiful color combinations</Text>
      </View>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {palettes.map((palette, index) => (
          <TouchableOpacity key={index} style={styles.paletteCard}>
            <View style={styles.colorStrip}>
              {palette.colors.map((color, colorIndex) => (
                <View
                  key={colorIndex}
                  style={[styles.colorBlock, { backgroundColor: color }]}
                />
              ))}
            </View>
            <Text style={styles.paletteName}>{palette.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

function generatePalettes() {
  const palettes = [
    {
      name: 'Ocean Breeze',
      colors: ['#48cae4', '#00b4d8', '#0096c7', '#0077b6', '#023e8a'],
    },
    {
      name: 'Sunset Vibes',
      colors: ['#ff7b00', '#ff8800', '#ff9500', '#ffa200', '#ffaa00'],
    },
    {
      name: 'Forest Dream',
      colors: ['#95d5b2', '#74c69d', '#52b788', '#40916c', '#2d6a4f'],
    },
    {
      name: 'Berry Punch',
      colors: ['#ff0a54', '#ff477e', '#ff7096', '#ff8fab', '#ffc2d1'],
    },
    {
      name: 'Lavender Fields',
      colors: ['#7209b7', '#8b2cb9', '#9d4edd', '#c77dff', '#e0aaff'],
    },
  ];

  return palettes;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#ffffff',
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 32,
    color: '#1a1a1a',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#666666',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  paletteCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginBottom: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  colorStrip: {
    flexDirection: 'row',
    height: 80,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 12,
  },
  colorBlock: {
    flex: 1,
  },
  paletteName: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#1a1a1a',
  },
});