import { View, Text } from 'react-native';

type WasteTag = {
  tag: string;
};

export default function WasteTag({ tag }: WasteTag) {
  return (
    <View className="px-3 py-1 bg-secondary rounded-sm">
      <Text
        className="text-primary text-center"
        style={{ fontFamily: 'Poppins-Medium', fontSize: 10 }}
      >
        {tag}
      </Text>
    </View>
  );
}
