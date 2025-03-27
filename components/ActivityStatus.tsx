// components/ActivityStatus.tsx
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ActivityContext, ActivityContextType } from '../contexts/ActivityContext';
import CustomButton from './CustomButton';

const ActivityStatus = () => {
  const context = useContext(ActivityContext) as ActivityContextType;

  const { currentActivity, duration, location, geofenceStatus } = context.activityState;
  const { setActivityState } = context;

  const changeActivity = (newActivity: string) => {
    setActivityState(prev => ({
      ...prev, 
      currentActivity: newActivity,
      duration: 0, // 상태 바뀌면 시간 초기화
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>현재 활동: {currentActivity}</Text>
      <Text>지속 시간: {Math.floor(duration / 60)}분 {duration % 60}초</Text>
      <Text>현재 위치: {location}</Text>
      <Text>지오펜스 상태: {geofenceStatus}</Text>

      <View style={styles.buttonRow}>
        <CustomButton title="앉기" onPress={() => changeActivity('앉아있음')} />
        <CustomButton title="걷기" onPress={() => changeActivity('걷는 중')} />
        <CustomButton title="달리기" onPress={() => changeActivity('달리는 중')} />
        <CustomButton title="차량 이동" onPress={() => changeActivity('이동 중')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },

  // 버튼 컨테이너에 flexWrap 적용
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',          // 자동 줄바꿈
    marginTop: 20,
  },
});

export default ActivityStatus;
