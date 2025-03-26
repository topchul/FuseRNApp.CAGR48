import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ActivityContext, ActivityContextType } from '../contexts/ActivityContext';

const ActivityStatus = () => {
  const context = useContext(ActivityContext) as ActivityContextType;

  const { currentActivity, duration, location, geofenceStatus } = context.activityState;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>현재 활동: {currentActivity}</Text>
      <Text>지속 시간: {Math.floor(duration / 60)}분 {duration % 60}초</Text>
      <Text>현재 위치: {location}</Text>
      <Text>지오펜스 상태: {geofenceStatus}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
});

export default ActivityStatus;
