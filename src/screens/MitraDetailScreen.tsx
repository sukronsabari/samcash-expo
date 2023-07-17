import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';
import {
  ChevronLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import { Shadow } from 'react-native-shadow-2';
import { COLORS } from '../utils/constant';
import WasteTag from '../components/WasteTag';
import ButtonSmall from '../components/ButtonSmall';
import { LocationBoxIcon, NavigationIcon, TurnRightIcon } from '../assets';
import PhotoList from '../components/PhotoList';
import ButtonMedium from '../components/ButtonMedium';
import { MitraDetailScreenProps } from './ScreenType';
import BottomBar from '../components/BottomBar';

const { width, height } = Dimensions.get('window');

export default function MitraDetailScreen({
  navigation,
}: MitraDetailScreenProps) {
  const mitraName = 'Bank Sampah Ramli Graha';
  const address = 'Blk. AF, Air Putih';
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

  const description =
    'Bank Sampah Ramli Graha adalah mitra penukaran sampah yang di kelola oleh warga di daerah Air Putih, Samarinda. Kami menerima pembelian atau penukaran sampah dengan jenis Botol Plastik seperti botol Aqua, Le Mineral, Mizone, dan botol air mineral lain yang sejenis. Selain itu kami juga menerima sampah berupa alumunium dan besi, yang banyak terdapat pada perabotan rumah tangga seperti Panci, Wajan, Dandang dan lain lain.\n\nNote * \n- Kami hanya menerima sampah yang tidak tercampur dengan tanah atau lumpur (Kotor), namun jika sampah yang anda tukarkan hanya memilki sedikit kotoran seperti debu, kami bisa menerima sampah tersebut.';
  const harga = 7000;

  return (
    <SafeAreaView className="flex-1">
      <ScrollView
        className="flex-1 bg-white"
        contentContainerStyle={{
          paddingTop: Constants.statusBarHeight,
          paddingBottom: 100,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* headers */}
        <View
          className="absolute z-10 w-full px-4 flex-row items-center justify-between mt-4"
          style={{ top: Constants.statusBarHeight }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
            className="items-center justify-center rounded-full bg-white"
            style={{ width: 40, height: 40 }}
          >
            <ChevronLeftIcon size={28} stroke={COLORS.textDark} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Search')}
            activeOpacity={0.8}
            className="items-center justify-center rounded-full bg-white"
            style={{ width: 40, height: 40 }}
          >
            <MagnifyingGlassIcon size={28} stroke={COLORS.textDark} />
          </TouchableOpacity>
        </View>

        <View>
          <Image
            source={require('../assets/images/backdrop.png')}
            style={{ width, resizeMode: 'cover' }}
          />
          <LinearGradient
            colors={['transparent', '#ffffff']}
            style={{ width, height: height * 0.4 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0"
          />
        </View>
        <View className="-mt-6 px-4 mb-4">
          <Text
            className="text-dark text-xl"
            style={{ fontFamily: 'Poppins-Bold' }}
          >
            {mitraName}
          </Text>
          <View className="mb-4 flex-row items-center space-x-2">
            <Text
              className="text-slate-400 text-xs"
              style={{ fontFamily: 'Poppins-Regular' }}
            >
              {address}
            </Text>
            <Text
              className="text-slate-400 text-xs"
              style={{ fontFamily: 'Poppins-Regular' }}
            >
              •
            </Text>
            <Text
              className="text-slate-400 text-xs"
              style={{ fontFamily: 'Poppins-Regular' }}
            >
              {distance}km
            </Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {dataSampah.map((item) => (
              <View className="mr-2" key={item.id}>
                <WasteTag tag={item.name} />
              </View>
            ))}
          </ScrollView>
          <View className="mt-8 flex-row items-center space-x-4">
            <View>
              <ButtonSmall.WithIconPrimary
                text="Rute"
                icon={<TurnRightIcon width={20} height={20} />}
              />
            </View>
            <View>
              <ButtonSmall.WithIconSecondary
                text="Mulai"
                icon={<NavigationIcon width={20} height={20} />}
              />
            </View>
          </View>
          <View className="mt-10">
            <Text
              className="text-dark text-base mb-2"
              style={{ fontFamily: 'Poppins-Bold' }}
            >
              Photos
            </Text>
            <PhotoList />
          </View>
          <View className="mt-6">
            <Text
              className="text-dark text-base mb-2"
              style={{ fontFamily: 'Poppins-Bold' }}
            >
              Photos
            </Text>
            <Text
              className="text-dark text-sm"
              style={{ fontFamily: 'Poppins-Regular' }}
            >
              {description}
            </Text>
          </View>
          <View className="mt-6">
            <Text
              className="text-dark text-base mb-2"
              style={{ fontFamily: 'Poppins-Bold' }}
            >
              Buka pada hari
            </Text>
            <Text
              className="text-dark text-sm"
              style={{ fontFamily: 'Poppins-Regular' }}
            >
              Minggu 10.00 - 12.00
            </Text>
          </View>
        </View>
      </ScrollView>
      <BottomBar>
        <View className="flex-row items-end justify-between bg-white px-4">
          <View>
            <Text
              className="text-dark"
              style={{ fontFamily: 'Poppins-Regular', fontSize: 11 }}
            >
              Biaya Penjemputan Sampah
            </Text>
            <Text
              className="text-dark text-xl"
              style={{ fontFamily: 'Poppins-Bold' }}
            >
              Rp. {harga}
            </Text>
          </View>
          <View>
            <ButtonMedium.Primary
              handlePress={() =>
                navigation.navigate('SelectOrder', {
                  mitraId: 'mitra1',
                })
              }
              text="Jemput"
              icon={<LocationBoxIcon width={20} height={20} />}
            />
          </View>
        </View>
      </BottomBar>
    </SafeAreaView>
  );
}
