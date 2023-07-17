import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { KeyboardAwareScrollView } from '@pietile-native-kit/keyboard-aware-scrollview';
import { RegisterScreenProps } from './ScreenType';
import TextInputField from '../components/TextInputField';
import PasswordInputField from '../components/PasswordInputField';
import ButtonLarge from '../components/ButtonLarge';
import { useAuth } from '../context/AuthContext';

const { height } = Dimensions.get('window');

export default function RegisterScreen({ navigation }: RegisterScreenProps) {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const referralCodeRef = useRef<TextInput>(null);

  const { onRegister } = useAuth();

  const register = async () => {
    const result = await onRegister!(email, password);
  };

  return (
    <SafeAreaView className="flex-1 px-4 bg-white">
      <KeyboardAwareScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        extraHeight={60}
      >
        <View className="pb-14">
          <View className="pt-10 flex-row items-center justify-center">
            <Image
              source={require('../assets/images/character-register.png')}
              // style={{ height: height * 0.3 }}
              resizeMode="cover"
            />
          </View>
          <Text
            className="text-3xl mt-6 mb-5"
            style={{ fontFamily: 'Poppins-Bold' }}
          >
            Register
          </Text>
          <View className="mb-3">
            <Text
              style={{ fontFamily: 'Poppins-Regular' }}
              className="text-dark text-sm mb-3"
            >
              Fullname
            </Text>
            <TextInputField
              value={fullname}
              setValue={setFullname}
              placeholder="Fullname"
              onSubmitEditing={() => emailRef.current?.focus()}
            />
          </View>
          <View className="mb-3">
            <Text
              style={{ fontFamily: 'Poppins-Regular' }}
              className="text-dark text-sm mb-3"
            >
              Email
            </Text>
            <TextInputField
              ref={emailRef}
              value={email}
              setValue={setEmail}
              placeholder="Email"
              onSubmitEditing={() => passwordRef.current?.focus()}
            />
          </View>
          <View className="mb-3">
            <Text
              style={{ fontFamily: 'Poppins-Regular' }}
              className="text-dark text-sm mb-3"
            >
              Password
            </Text>
            <PasswordInputField
              ref={passwordRef}
              password={password}
              setPassword={setPassword}
              placeholder="Password"
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              onSubmitEditing={() => referralCodeRef.current?.focus()}
            />
          </View>
          <View className="mb-3">
            <Text
              style={{ fontFamily: 'Poppins-Regular' }}
              className="text-dark text-sm mb-3"
            >
              Referral Code (Opsional)
            </Text>
            <TextInputField
              ref={referralCodeRef}
              value={referralCode}
              setValue={setReferralCode}
            />
          </View>
          <View className="mt-8">
            <ButtonLarge title="Register" handlePress={() => {}} />
          </View>
          <View className="mt-8 flex-row justify-center items-center space-x-1">
            <Text
              className="text-dark text-sm"
              style={{ fontFamily: 'Poppins-Regular' }}
            >
              Sudah punya akun?
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Login')}
            >
              <Text
                className="text-primary text-sm underline"
                style={{ fontFamily: 'Poppins-Medium' }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
