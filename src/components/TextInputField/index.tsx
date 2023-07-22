import { forwardRef } from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputSubmitEditingEventData,
} from 'react-native';
import { COLORS } from '../../utils/constant';

type TextInputFieldProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onSubmitEditing?: () => void;
  onEndEditing?: (
    event: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void;
  placeholder?: string;
};

const TextInputField = forwardRef<TextInput, TextInputFieldProps>(
  (
    {
      value,
      setValue,
      placeholder,
      onSubmitEditing = () => {},
      onEndEditing = () => {},
    },
    ref
  ) => {
    return (
      <TextInput
        ref={ref}
        className="w-full px-3 py-2 rounded-xl text-dark text-sm border border-slate-300"
        placeholderTextColor={COLORS.placeholder}
        style={{ fontFamily: 'Poppins-Regular' }}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        onSubmitEditing={onSubmitEditing}
        onEndEditing={onEndEditing}
        cursorColor={COLORS.primary}
      />
    );
  }
);

export default TextInputField;
