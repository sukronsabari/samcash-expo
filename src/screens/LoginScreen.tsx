import React, { useEffect, useRef, useState } from 'react';
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
import { LoginScreenProps } from './ScreenType';
import TextInputField from '../components/TextInputField';
import PasswordInputField from '../components/PasswordInputField';
import ButtonLarge from '../components/ButtonLarge';
import { useIsFocused } from '@react-navigation/native';

const { height } = Dimensions.get('window');

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const passwordRef = useRef<TextInput>(null);
  const screenIsFocused = useIsFocused();

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, [screenIsFocused]);

  return (
    <SafeAreaView className="flex-1 px-4 bg-white">
      <KeyboardAwareScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        extraHeight={60}
      >
        <View className="pt-10 flex-row items-center justify-center">
          <Image
            source={require('../assets/images/character-login.png')}
            // style={{ height: height * 0.4 }}
            resizeMode="cover"
          />
        </View>
        <Text
          className="text-3xl mt-8 mb-5"
          style={{ fontFamily: 'Poppins-Bold' }}
        >
          Login
        </Text>
        <View className="mb-3">
          <Text
            style={{ fontFamily: 'Poppins-Regular' }}
            className="text-dark text-sm mb-3"
          >
            Email
          </Text>
          <TextInputField
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
          />
        </View>
        <TouchableOpacity className="items-end" activeOpacity={0.8}>
          <Text
            className="text-primary underline text-sm"
            style={{ fontFamily: 'Poppins-Medium' }}
          >
            Forgot password?
          </Text>
        </TouchableOpacity>
        <View className="mt-8">
          <ButtonLarge title="Login" handlePress={() => {}} />
        </View>
        <View className="mt-8 flex-row justify-center items-center space-x-1">
          <Text
            className="text-dark text-sm"
            style={{ fontFamily: 'Poppins-Regular' }}
          >
            Belum punya akun?
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Register')}
          >
            <Text
              className="text-primary text-sm underline"
              style={{ fontFamily: 'Poppins-Medium' }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
