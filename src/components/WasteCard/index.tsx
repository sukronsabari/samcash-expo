import { View, Text, Image } from 'react-native';
import ButtonSmall from '../ButtonSmall';

type WasteCardProps = {
  wasteName: string;
  point: number;
};

export default function WasteCard({ wasteName, point }: WasteCardProps) {
  return (
    <View
      className="border border-slate-300 rounded-lg overflow-hidden"
      style={{ width: 200 }}
    >
      <Image
        source={require('../../assets/images/sample-waste.png')}
        style={{ width: '100%' }}
      />
      <View className="px-4 pb-4">
        <Text
          className="mt-4 text-center text-sm text-dark"
          style={{ fontFamily: 'Poppins-Regular' }}
        >
          {wasteName}
        </Text>
        <Text
          className="mt-4 text-center text-sm text-primary"
          style={{ fontFamily: 'Poppins-Bold' }}
        >
          {point}/kg
        </Text>
        <View className="mt-3">
          <ButtonSmall text="Pilih" />
        </View>
      </View>
    </View>
  );
}
