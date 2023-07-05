import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigation} from './src/navigation';
import {GradientProvider} from './src/context';

const App = () => {
  return (
    <GradientProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </GradientProvider>
  );
};

export default App;
