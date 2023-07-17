import { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function CustomBottomSheet() {
  const [data, setData] = useState([1, 2, 3, 4, 5]);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['40%', '60%', '100%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <GestureHandlerRootView className="flex-1">
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        style={{ backgroundColor: 'white' }}
        enablePanDownToClose
      >
        <View className="flex-1">
          <Text>KONTOL</Text>
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}
