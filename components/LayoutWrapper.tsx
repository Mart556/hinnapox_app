import React from 'react';
import { ScrollView, View } from 'react-native';

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex-1 bg-white">{children}</View>
    </ScrollView>
  );
};

export default LayoutWrapper;
