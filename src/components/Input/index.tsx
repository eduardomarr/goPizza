import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, TypeProps } from './styles';

type InputProps = TextInputProps & {
  type?: TypeProps
}

function Input({ type = 'primary', ...rest }: InputProps) {
  return <Container type={type} {...rest} />
};

export default Input;
