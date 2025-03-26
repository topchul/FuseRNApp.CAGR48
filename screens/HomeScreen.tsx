import React from 'react';
import { View, StyleSheet } from 'react-native';
import ActivityStatus from '../components/ActivityStatus';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityStatus />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default HomeScreen;
