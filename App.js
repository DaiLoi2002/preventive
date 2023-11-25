import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DangKi from './src/DangKi';
import DangNhap from './src/DangNhap';
import Home from './src/Home';
import GiaoHang from './src/GiaoHang';
import HomeScreen from './src/GiaoHang';

const Stack = createNativeStackNavigator();




function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DangNhap" component={DangNhap} options={{headerShown: false}} />
        <Stack.Screen name="DangKi" component={DangKi} options={{headerShown: false}} />
        
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;