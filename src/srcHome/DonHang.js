import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const TopTab = createMaterialTopTabNavigator();


import DaDat from './srcDonHang/DaDat';
import DatTruoc from './srcDonHang/DatTruoc';
const DonHang = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Đã Đặt" component={DaDat} />
      <TopTab.Screen name="Đặt Trước" component={DatTruoc} /> 
    </TopTab.Navigator>
  );
};


export default DonHang;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center' ,
      backgroundColor:"red"
    }
  });