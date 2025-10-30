import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

// ... other imports ...

export default function HomeScreen() {
  return (
    <ParallaxScrollView
// ...
      headerImage={
        <Image
// ...
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">First App Created</ThemedText> ⬅️ **Check: Found the text here**
        <HelloWave />
      </ThemedView>
// ...
    </ParallaxScrollView>
  );
}
// ...
