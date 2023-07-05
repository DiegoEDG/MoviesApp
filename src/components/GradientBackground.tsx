import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useContext} from 'react';
import {GradientContext} from '../context';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const GradientBackground = ({children}: Props) => {
  const {colors} = useContext(GradientContext);

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
        end={{x: 1, y: 0.6}}
      />
      {children}
    </View>
  );
};

export default GradientBackground;
