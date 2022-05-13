import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { Button } from '../../components/Button';

import brandImg from '../../assets/brand.png';

import Input from '../../components/Input';

import {
  Container,
  Content,
  Title,
  BrandImage,
  ForgotPasswordButton,
  ForgotPasswordLabel,
} from './styles';
import { useAuth } from '../../hooks/useAuth';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, isLogging, forgotPassword } = useAuth();

  async function handleSignIn() {

    if (!email) {
      Alert.alert('Login', 'Preencha o e-mail');
      return;
    }

    if (!password) {
      Alert.alert('Login', 'Preencha a senha');
      return;
    }

    try {
      await signIn(email, password);
      // await forgotPassword(email);
    } catch (error) {
      Alert.alert('Login', error.message);
    }
  };

  async function handleForgotPassword() {
    if (!email) {
      Alert.alert('Login', 'Preencha o e-mail');
      return;
    }
    await forgotPassword(email);
  };

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <BrandImage source={brandImg} />
        <Content bounces={false}>
          <Input
            placeholder='E-mail'
            type='secondary'
            autoCorrect={false}
            autoCapitalize='none'
            value={email}
            onChangeText={setEmail}
          />

          <Input
            placeholder='Senha'
            type='secondary'
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <ForgotPasswordButton onPress={() => handleForgotPassword()}>
            <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
          </ForgotPasswordButton>

          <Button
            title='Entrar'
            type='secondary'
            onPress={() => handleSignIn()}
          />
        </Content>
      </KeyboardAvoidingView>

    </Container>
  );
};