import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import { ActivityProvider } from './contexts/ActivityContext';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <ActivityProvider>
      <SafeAreaView style={styles.container}>
        <HomeScreen />
      </SafeAreaView>
    </ActivityProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
