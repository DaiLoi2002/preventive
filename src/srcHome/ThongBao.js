import  { useState } from 'react';
import { View, Text,StyleSheet,Pressable,Modal,Image } from 'react-native';
import Icon3 from 'react-native-vector-icons/Octicons';
import Icon4 from 'react-native-vector-icons/AntDesign';
import {MaterialIcons} from '@expo/vector-icons'
import { ScrollView } from 'react-native-web';

const ThongBao = () => {
  const [modalOpen,setmodalOpen]=useState(false);
  
  return (
    <ScrollView>
      <View style={styles.container}>
        


      <Pressable style={styles.press} onPress={()=>setmodalOpen(true)}>
      <Icon3 name="bell" size={24} style={styles.Icon} />
      <View style={styles.viewtext}> 
        <Text style={styles.texttintuc}>TIN TỨC</Text>
       <Text style={styles.textTb}>💥ĐỒNG GIÁ 15,000/ĐƠN HÀNG - NHẬP NGAY KẺO LỠ</Text>
      </View> 
      </Pressable>
      <Pressable style={styles.press} onPress={()=>setmodalOpen(true)}>
      <Icon3 name="bell" size={24} style={styles.Icon} />
      <View style={styles.viewtext}> 
        <Text style={styles.texttintuc}>TIN TỨC</Text>
       <Text style={styles.textTb}>💥ĐỒNG GIÁ 15,000/ĐƠN HÀNG - NHẬP NGAY KẺO LỠ</Text>
      </View> 
      </Pressable>
      <Pressable style={styles.press} onPress={()=>setmodalOpen(true)}>
      <Icon3 name="bell" size={24} style={styles.Icon} />
      <View style={styles.viewtext}> 
        <Text style={styles.texttintuc}>TIN TỨC</Text>
       <Text style={styles.textTb}>💥ĐỒNG GIÁ 15,000/ĐƠN HÀNG - NHẬP NGAY KẺO LỠ</Text>
      </View> 
      </Pressable>
      <Pressable style={styles.press} onPress={()=>setmodalOpen(true)}>
      <Icon3 name="bell" size={24} style={styles.Icon} />
      <View style={styles.viewtext}> 
        <Text style={styles.texttintuc}>TIN TỨC</Text>
       <Text style={styles.textTb}>💥ĐỒNG GIÁ 15,000/ĐƠN HÀNG - NHẬP NGAY KẺO LỠ</Text>
      </View> 
      </Pressable>
      <Pressable style={styles.press} onPress={()=>setmodalOpen(true)} >
      <Icon3 name="bell" size={24} style={styles.Icon} />
      <View style={styles.viewtext}> 
        <Text style={styles.texttintuc}>TIN TỨC</Text>
       <Text style={styles.textTb}>💥ĐỒNG GIÁ 15,000/ĐƠN HÀNG - NHẬP NGAY KẺO LỠ</Text>
      </View> 
      </Pressable>
      <Pressable style={styles.press} onPress={()=>setmodalOpen(true)}>
      <Icon3 name="bell" size={24} style={styles.Icon} />
      <View style={styles.viewtext}> 
        <Text style={styles.texttintuc}>TIN TỨC</Text>
       <Text style={styles.textTb}>💥ĐỒNG GIÁ 15,000/ĐƠN HÀNG - NHẬP NGAY KẺO LỠ</Text>
      </View> 
      </Pressable>
      <Pressable style={styles.press} onPress={()=>setmodalOpen(true)}>
      <Icon3 name="bell" size={24} style={styles.Icon} />
      <View style={styles.viewtext}> 
        <Text style={styles.texttintuc}>TIN TỨC</Text>
       <Text style={styles.textTb}>💥ĐỒNG GIÁ 15,000/ĐƠN HÀNG - NHẬP NGAY KẺO LỠ</Text>
      </View> 
      </Pressable>
      </View>
      <Modal visible={modalOpen} animationType='slide'>
        <ScrollView>
        <View style={{backgroundColor:"cyan", margin:5}}>
        <MaterialIcons name='close' size={30} onPress={()=>setmodalOpen(false)}></MaterialIcons>
        <Image source={require("/src/Image/ưuđãixịn.jpg")} style={{height:230,width:400,marginBottom:10}}></Image>
        <View style={{backgroundColor:"white",flexDirection:'column'}}>
          <View style={{flexDirection:"row", marginLeft:20}}>
          <Icon4 name="notification" size={24} style={{color:"green"}} />
          <Text style={{fontWeight:500,fontSize:20,
      width:330}} >    Tin Tức</Text>
          </View>
          <Text style={{fontWeight:500,fontSize:20,margin:10,
      width:330}}>💥ĐỒNG GIÁ 15,000/ ĐƠN HÀNG - NHẬP NGAY KẺO LỠ</Text>
        </View>
        <View style={{width:380,height:400,backgroundColor:"white",marginTop:5}}>
            <View style={{flexDirection:"column"}}>
              <Text> Ahamove dành tặng riêng bạn đơn ĐỒNG GIÁ 15,000 (chỉ áp dụng cho dịch vụ xe máy) </Text>
              <Text style={{marginTop:10,fontSize:15}}>🔥 Nhập Ngay: AHANHOBAN</Text>
              <Text style={{marginLeft:10,fontSize:15}}>🔻 Lưu ý: <br/> -Chỉ áp dụng với các tài khoản nhận được thông báo này.<br/>-Số lượng mã có hạn, có thể hết trước thời hạn.<br/>-Áp dụng cho tất cả dịch vụ giao hàng bằng xe máy.</Text>
            </View>
            <Text>
              <Text style={{marginLeft:10}}>Đội ngũ Ahamove<br/>Trân trọng</Text>
            </Text>
        </View>
        
      </View>
        </ScrollView>
      
      </Modal>
     
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
    },
    press1:{
      justifyContent: 'flex-start', 
      alignItems: 'flex-start',
      backgroundColor:"white",
      flexDirection:"row", 
      margin:0.2,
      backgroundColor:"blue"
    }
  });