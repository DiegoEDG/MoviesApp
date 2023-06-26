import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
          backgroundColor: '#1C212A',
        }}>
        <Text style={{alignSelf: 'center', color: '#C5C3BB'}}>Movies App</Text>
      </View>
    </NavigationContainer>
  );
};

export default App;
