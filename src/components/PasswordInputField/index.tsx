import { forwardRef } from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputSubmitEditingEventData,
  View,
} from 'react-native';
import { EyeIcon, EyeSlashIcon } from 'react-native-heroicons/outline';
import { COLORS } from '../../utils/constant';

type PasswordInputFieldProps = {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmitEditing?: () => void;
  onEndEditing?: (
    event: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void;
  placeholder?: string;
};
const PasswordInputField = forwardRef<TextInput, PasswordInputFieldProps>(
  (
    {
      password,
      setPassword,
      placeholder = '******',
      showPassword,
      setShowPassword,
      onSubmitEditing = () => {},
      onEndEditing = () => {},
    },
    ref
  ) => {
    const toggleShowPassword = () => {
      setShowPassword((prev: boolean) => !prev);
    };

    return (
      <View className="px-3 flex-row justify-between items-center overflow-hidden rounded-xl border border-slate-300">
        <TextInput
          ref={ref}
          className="flex-1 py-2 text-dark text-sm"
          style={{ fontFamily: 'Poppins-Regular' }}
          placeholderTextColor={COLORS.placeholder}
          value={password}
          onChangeText={setPassword}
          placeholder={placeholder}
          secureTextEntry={!showPassword ? true : false}
          onSubmitEditing={onSubmitEditing}
          onEndEditing={onEndEditing}
          cursorColor={COLORS.primary}
        />
        {!showPassword ? (
          <EyeIcon onPress={toggleShowPassword} color={COLORS.placeholder} />
        ) : (
          <EyeSlashIcon
            onPress={toggleShowPassword}
            color={COLORS.placeholder}
          />
        )}
      </View>
    );
  }
);

export default PasswordInputField;
