// components/CustomButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  style?: ViewStyle; // 추가 스타일 확장 가능
};

const CustomButton = ({ title, onPress, style }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 4,

    // 버튼 크기 조절
    flexShrink: 1,     // 공간 부족 시 버튼이 줄어들거나 줄바꿈 허용
    maxWidth: 100,     // 적절한 최대 폭을 지정 (화면 상황에 맞춰 조절 가능)

    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',

    // 여러 줄 표시 가능
    flexWrap: 'wrap',
  },
});

export default CustomButton;
