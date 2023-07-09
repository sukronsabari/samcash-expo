import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import OtpInputField from '../components/OtpInputField';
import { KeyboardAwareScrollView } from '@pietile-native-kit/keyboard-aware-scrollview';
import ButtonLarge from '../components/ButtonLarge';

const { height } = Dimensions.get('window');

export default function VerifyOtpScreen() {
  return (
    <SafeAreaView className="flex-1 px-4 bg-white">
      <KeyboardAwareScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        extraHeight={60}
      >
        <View className="pt-14 flex-row items-center justify-center">
          <Image
            source={require('../assets/images/otp.png')}
            // style={{ height: height * 0.3 }}
            resizeMode="cover"
          />
        </View>
        <Text
          className="text-3xl mt-10 mb-1 text-center"
          style={{ fontFamily: 'Poppins-Bold' }}
        >
          Verifikasi OTP
        </Text>
        <Text
          className="text-center text-sm"
          style={{ fontFamily: 'Poppins-Regular' }}
        >
          We sent OTP code to verify your email
        </Text>
        <View className="mt-10 px-6">
          <OtpInputField />
        </View>
        <TouchableOpacity activeOpacity={0.8} className="mt-24">
          <Text
            className="text-sm text-dark underline text-center"
            style={{ fontFamily: 'Poppins-Medium' }}
          >
            Resend OTP
          </Text>
        </TouchableOpacity>
        <View className="mt-8">
          <ButtonLarge title="Verifikasi" handlePress={() => {}} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
