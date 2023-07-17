import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import WasteTag from '../WasteTag';
import { useNavigation } from '@react-navigation/native';
import { MitraDetailScreenNavigation } from '../../screens/ScreenType';
import PhotoList from '../PhotoList';

export default function MitraItem() {
  const mitraName = 'Bank Sampah Ramli Graha';
  const alamat = 'Jalan Bungtomo No.5';
  const distance = 5;

  const dataSampah = [
    {
      id: 1,
      name: 'Botol Plastik',
    },
    {
      id: 2,
      name: 'Alumunium',
    },
    {
      id: 3,
      name: 'Besi Bekas',
    },
    {
      id: 34,
      name: 'Koran',
    },
  ];

  const navigation = useNavigation<MitraDetailScreenNavigation>();

  return (
    <TouchableWithoutFeedback
      className="mb-4"
      onPress={() => navigation.navigate('MitraDetail', { mitraId: 'mitra1' })}
    >
      <View className="p-5 border border-slate-300 bg-white rounded-lg overflow-hidden">
        <PhotoList />
        <Text
          className="mt-6 text-dark text-base"
          style={{ fontFamily: 'Poppins-Bold' }}
        >
          {mitraName}
        </Text>
        <View className="mb-4 flex-row items-center space-x-2">
          <Text
            className="text-slate-300 text-xs"
            style={{ fontFamily: 'Poppins-Regular' }}
          >
            {alamat}
          </Text>
          <Text
            className="text-slate-300 text-xs"
            style={{ fontFamily: 'Poppins-Regular' }}
          >
            •
          </Text>
          <Text
            className="text-slate-300 text-xs"
            style={{ fontFamily: 'Poppins-Regular' }}
          >
            {distance}km
          </Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {dataSampah.map((item, index) => (
            <View className="mr-2" key={item.id}>
              <WasteTag tag={item.name} />
            </View>
          ))}
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}
