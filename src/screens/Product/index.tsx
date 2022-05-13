import React from 'react';

import { TouchableOpacity } from 'react-native';
import { ButtonBack } from '../../components/ButtonBack';
import { Photo } from '../../components/Photo';

import { Container, Header, Title, DeleteLabel, Upload, PickImageButton } from './styles';

export function Product() {
  return (
    <Container>
      <Header>
        <ButtonBack />
        <Title>Cadastrar</Title>
        <TouchableOpacity>
          <DeleteLabel>Deletar</DeleteLabel>
        </TouchableOpacity>
      </Header>

      <Upload>
        <Photo uri="" />
        <PickImageButton title="Carregar" type="secondary" />
      </Upload>
    </Container>
  );
};