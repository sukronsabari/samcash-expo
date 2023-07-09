import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, Dimensions } from 'react-native';
import { HomeScreenProps } from './ScreenType';

const { width, height } = Dimensions.get('window');

export default function HomeScreen(props: HomeScreenProps) {
  return (
    <View className="flex-1">
      <Text>HomeScreen</Text>
    </View>
  );
}
