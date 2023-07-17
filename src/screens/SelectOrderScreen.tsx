import { View, Text, ScrollView, SafeAreaView, FlatList } from 'react-native';
import ButtonSmall from '../components/ButtonSmall';
import { COLORS } from '../utils/constant';
import { useState } from 'react';
import WasteCard from '../components/WasteCard';
import BottomBar from '../components/BottomBar';
import ButtonLarge from '../components/ButtonLarge';
import { SelectOrderScreenProps } from './ScreenType';

export default function SelectOrderScreen({
  navigation,
}: SelectOrderScreenProps) {
  const [isActive, setIsActive] = useState('organik');

  const wasteData = [
    {
      id: 1,
      name: 'Sisa Sayuran',
    },
    {
      id: 2,
      name: 'Serbuk Kayu',
    },
    {
      id: 3,
      name: 'Daun Kering',
    },
  ];

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1 pt-4 px-4 bg-white">
        <Text
          className="text-dark text-sm"
          style={{ fontFamily: 'Poppins-Medium' }}
        >
          Jenis Sampah
        </Text>
        <ScrollView
          horizontal
          contentContainerStyle={{ gap: 10, marginTop: 15 }}
        >
          <ButtonSmall
            handlePress={() => setIsActive('organik')}
            text="Organik"
            backgroundColor={isActive === 'organik' ? COLORS.primary : 'white'}
            color={isActive === 'organik' ? 'white' : COLORS.primary}
            borderColor={COLORS.primary}
          />
          <ButtonSmall
            handlePress={() => setIsActive('non-organik')}
            text="Non-Organik"
            backgroundColor={
              isActive === 'non-organik' ? COLORS.primary : 'white'
            }
            color={isActive === 'non-organik' ? 'white' : COLORS.primary}
            borderColor={COLORS.primary}
          />
          <ButtonSmall
            handlePress={() => setIsActive('logam')}
            text="Logam"
            backgroundColor={isActive === 'logam' ? COLORS.primary : 'white'}
            color={isActive === 'logam' ? 'white' : COLORS.primary}
            borderColor={COLORS.primary}
          />
        </ScrollView>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ marginTop: 25 }}
          data={wasteData}
          renderItem={({ item }) => (
            <View className="mr-3">
              <WasteCard wasteName={item.name} point={150} />
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />

        <Text
          className="text-dark text-xs mt-6"
          style={{ fontFamily: 'Poppins-Regular' }}
        >
          * Harga bisa berubah di mitra yang berbeda
        </Text>
        <Text
          className="text-dark text-xs"
          style={{ fontFamily: 'Poppins-Regular' }}
        >
          * Harga dalam satuan Kilogram
        </Text>
      </ScrollView>
      <BottomBar>
        <View className="px-4">
          <ButtonLarge
            title="Selanjutnya"
            handlePress={() => navigation.navigate('SetAddress')}
            roundedFull
          />
        </View>
      </BottomBar>
    </SafeAreaView>
  );
}
