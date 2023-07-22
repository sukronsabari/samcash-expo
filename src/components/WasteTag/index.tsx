import { View, Text } from 'react-native';

type WasteTag = {
  tag: string;
};

export default function WasteTag({ tag }: WasteTag) {
  return (
    <View className="px-3 py-1 bg-slate-100 rounded-sm">
      <Text
        className="text-slate-400 text-center"
        style={{ fontFamily: 'Poppins-Medium', fontSize: 10 }}
      >
        {tag}
      </Text>
    </View>
  );
}
