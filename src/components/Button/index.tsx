import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, TextButton, Loading, TypeProps } from './styles';

type ButtonProps = RectButtonProps & {
  title: string;
  type?: TypeProps;
  loading?: boolean;
};

export function Button({
  title,
  type = 'primary',
  loading = false,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <Container type={type} enabled={!loading} {...rest}>
      {loading ? <Loading /> : <TextButton>{title}</TextButton>}
    </Container>
  );
}