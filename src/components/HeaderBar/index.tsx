import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';

type HeaderBarProps = {
  variant:
    | 'left-icon-with-text'
    | 'left-icon-with-center-text'
    | 'left-right-icon';
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  text?: string | ReactElement;
};

const headers = {
  'left-icon-with-text': ({
    leftIcon,
    text,
  }: {
    leftIcon?: ReactElement;
    text?: string | ReactElement;
  }) => (
    <View className="flex-row items-center">
      {leftIcon}
      {typeof text === 'string' ? (
        <Text
          className="text-dark text-sm"
          style={{ fontFamily: 'Poppins-Medium' }}
        >
          {text}
        </Text>
      ) : (
        text
      )}
    </View>
  ),
  'left-icon-with-center-text': ({
    leftIcon,
    text,
  }: {
    leftIcon?: ReactElement;
    text?: string | ReactElement;
  }) => (
    <View className="flex-row items-center">
      {leftIcon}
      {text}
    </View>
  ),
  'left-right-icon': ({
    leftIcon,
    rightIcon,
  }: {
    leftIcon?: ReactElement;
    rightIcon?: ReactElement;
  }) => (
    <View className="flex-row items-center justify-between">
      {leftIcon}
      {rightIcon}
    </View>
  ),
};
export default function HeaderBar(props: HeaderBarProps) {
  return headers[props.variant]({ ...props });
}
