import { View, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../../utils/constant';

type ButtonLargeProps = {
  title: string;
  handlePress: () => void;
  roundedFull?: boolean;
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
};

export default function ButtonLarge({
  title,
  handlePress,
  roundedFull,
  backgroundColor = COLORS.primary,
  color = 'white',
  borderColor = 'transparent',
}: ButtonLargeProps) {
  return (
    <TouchableOpacity
      style={{ backgroundColor, borderColor, borderWidth: 1 }}
      className={`w-full py-3 ${roundedFull ? 'rounded-full' : 'rounded-lg'}`}
      onPress={handlePress}
      activeOpacity={0.9}
    >
      <Text
        className="text-center text-base"
        style={{ fontFamily: 'Poppins-Medium', color }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
