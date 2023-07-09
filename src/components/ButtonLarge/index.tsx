import { View, Text, TouchableOpacity } from 'react-native';

type ButtonLargeProps = {
  title: string;
  handlePress: () => void;
};

export default function ButtonLarge({ title, handlePress }: ButtonLargeProps) {
  return (
    <TouchableOpacity
      className="w-full py-3 rounded-lg bg-primary"
      onPress={handlePress}
      activeOpacity={0.9}
    >
      <Text
        className="text-white text-center text-base"
        style={{ fontFamily: 'Poppins-Medium' }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
