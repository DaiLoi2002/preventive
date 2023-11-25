import * as React from 'react';
import { useNavigation, useRoute } from "@react-navigation/native";

import {  StyleSheet,
  View,
  Text} from 'react-native';


function GiaoHang() {
  const navigation = useNavigation();

  

    return (
      <View style={styles.container}>
      

      <View>
       <Text>Đây là nơi giao Hàng</Text>
      </View>

     
    </View>
    );
  }
  export default GiaoHang;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 30,
    }
  });