import React from 'react';
import { TouchableOpacity, ImageBackground, ImageSourcePropType, TouchableOpacityProps, Text } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import { styles } from './styles';
import { THEME } from '../../theme';

export interface GameCardProps {
  ads: string;
  cover: ImageSourcePropType;
  id: string;
  name: string;
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps;
}

export function GameCard({ data, ...rest }: Props): JSX.Element {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.cover} source={data.cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{data.name}</Text>
    
          <Text style={styles.ads}>{data.ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
