import React from 'react';
import { ImageBackground } from 'react-native';

import backgroundImage from '../../assets/background-galaxy.png'

import { styles } from './styles';

interface Props {
  children: React.ReactNode
}

export function Background({ children }: Props): JSX.Element {
  return (
    <ImageBackground source={backgroundImage} defaultSource={backgroundImage} style={styles.container}>
      {children}
    </ImageBackground>
  );
}
