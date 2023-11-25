import * as React from 'react';
import { useNavigation, useRoute } from "@react-navigation/native";

import { Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  StyleSheet,View,Text} from 'react-native';


 function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
  export default HomeScreen;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 30,
    }
  });