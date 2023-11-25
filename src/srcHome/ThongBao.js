import React from 'react';
import { View, Text,StyleSheet,Pressable } from 'react-native';
import Icon3 from 'react-native-vector-icons/Octicons';
import { ScrollView } from 'react-native-web';

const ThongBao = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
      <Pressable style={styles.press} >
      <Icon3 name="bell" size={24} style={styles.Icon} />
      <View style={styles.viewtext}> 
        <Text style={styles.texttintuc}>TIN TỨC</Text>
       <Text style={styles.textTb}>💥ĐỒNG GIÁ 15,000/ĐƠN HÀNG - NHẬP NGAY KẺO LỠ</Text>
      </View> 
      </Pressable>
      <Pressable style={styles.press} >
      <Icon3 name="bell" size={24} style={styles.Icon} />
      <View style={styles.viewtext}> 
        <Text style={styles.texttintuc}>TIN TỨC</Text>
       <Text style={styles.textTb}>💥ĐỒNG GIÁ 15,000/ĐƠN HÀNG - NHẬP NGAY KẺO LỠ</Text>
      </View> 
      </Pressable>
      <Pressable style={styles.press} >
      <Icon3 name="bell" size={24} style={styles.Icon} />
      <View style={styles.viewtext}> 
        <Text style={styles.texttintuc}>TIN TỨC</Text>
       <Text style={styles.textTb}>💥ĐỒNG GIÁ 15,000/ĐƠN HÀNG - NHẬP NGAY KẺO LỠ</Text>
      </View> 
      </Pressable>
      <Pressable style={styles.press} >
      <Icon3 name="bell" size={24} style={styles.Icon} />
      <View style={styles.viewtext}> 
        <Text style={styles.texttintuc}>TIN TỨC</Text>
       <Text style={styles.textTb}>💥ĐỒNG GIÁ 15,000/ĐƠN HÀNG - NHẬP NGAY KẺO LỠ</Text>
      </View> 
      </Pressable>
      <Pressable style={styles.press} >
      <Icon3 name="bell" size={24} style={styles.Icon} />
      <View style={styles.viewtext}> 
        <Text style={styles.texttintuc}>TIN TỨC</Text>
       <Text style={styles.textTb}>💥ĐỒNG GIÁ 15,000/ĐƠN HÀNG - NHẬP NGAY KẺO LỠ</Text>
      </View> 
      </Pressable>
      <Pressable style={styles.press} >
      <Icon3 name="bell" size={24} style={styles.Icon} />
      <View style={styles.viewtext}> 
        <Text style={styles.texttintuc}>TIN TỨC</Text>
       <Text style={styles.textTb}>💥ĐỒNG GIÁ 15,000/ĐƠN HÀNG - NHẬP NGAY KẺO LỠ</Text>
      </View> 
      </Pressable>
      <Pressable style={styles.press} >
      <Icon3 name="bell" size={24} style={styles.Icon} />
      <View style={styles.viewtext}> 
        <Text style={styles.texttintuc}>TIN TỨC</Text>
       <Text style={styles.textTb}>💥ĐỒNG GIÁ 15,000/ĐƠN HÀNG - NHẬP NGAY KẺO LỠ</Text>
      </View> 
      </Pressable>
      </View>
    </ScrollView>
  );
};

export default ThongBao;

const styles = StyleSheet.create({
    container: {
      flex: 1,backgroundColor:"#C0C0C0"
    },
    press:{
      justifyContent: 'flex-start', 
      alignItems: 'flex-start',
      backgroundColor:"white",
      flexDirection:"row", 
      margin:0.2
    },Icon:{
      top:35,
      left:15,
      color:"green"
      
    },textTb:{
      fontWeight:500,
      width:330
    },
    texttintuc:{
      fontWeight:500,
      fontSize:10
    },viewtext:{
      margin:30
    }
  });