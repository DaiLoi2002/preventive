import React, { useState } from 'react';
import { View, Text,StyleSheet,Pressable,Image , Button,Modal} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-web';
import {MaterialIcons} from '@expo/vector-icons'

const TaiKhoan = () => {
  const [modalOpenTaixe,setmodalOpenTaixe]=useState(false);
  const [modalOpenGoiHoiVien,setmodalGoiHoiVien]=useState(false);
  const [modalOpenTaiKhoanCuaToi,setmodalOpenTaiKhoanCuaToi]=useState(false);
  const [modalOpenDiaDiemDaLuu,setDiaDiemDaLuu]=useState(false);
  const [modalOpenDonHangNhap,setmodalDonHangNhap]=useState(false);
  const [modalOpenUuDai,setmodalUuDai]=useState(false);
  const [modalOpenThuThach,setmodalThuThach]=useState(false);
  const [modalOpenGioiThieuBanBe,setmodalGioiThieuBanBe]=useState(false);
  const [modalOpenToi,setmodalOpenToi]=useState(false);
  return (
    
    <ScrollView>
      <View style={styles.container}>
      <Pressable style={styles.press} onPress={()=>setmodalOpenToi(true)} >
      <View style={styles.viewtext}> 
        <Text style={styles.texttaikhoan}>💁  Loidai2002 - TR10</Text>
       <Text style={styles.textTk}>       +84767929064 </Text>
      </View> 
      </Pressable>
      <Pressable style={styles.press} >
      <View style={styles.viewtext}> 
        <Text style={styles.texttaikhoan}>👥️ Thành Viên                            0 điểm</Text>
        </View> 
        </Pressable>
        <Pressable style={styles.press} >
        <View style={styles.viewtext1}> 
       <Text style={styles.textTk}> 👤 Xác thực tài khoản của bạn  </Text>
       <Text> Để tận hưởng các quyền lợi đặc biệt của Ahamove, bạn cần thực xác thực tài khoản. 
        Việc xác thực này chỉ kéo dài trong vòng 5 phút.</Text>
        
          <Pressable style={styles.press} >
          <Text style={{color:"#FF8C00",fontSize:20, border: "1px solid black"}}>Xác Thực Ngay</Text>
        </Pressable>
      </View> 
      </Pressable>
      <Pressable style={styles.press} >
      <View style={styles.viewtext}> 
        <Text style={styles.texttaikhoan}>THANH TOÁN</Text>
      </View> 
      </Pressable>
      <Pressable style={styles.press}  onPress={()=>setmodalOpenTaiKhoanCuaToi(true)}>
      <View style={styles.viewtext}> 
        <Text style={styles.texttaikhoan}>📁 Tài khoản của tôi                        ₫0</Text>
      </View> 
      </Pressable>
      <Pressable style={styles.press} >
      <View style={styles.viewtext}> 
        <Text style={styles.texttaikhoan}>TIỆN ÍCH</Text>
      </View> 
      </Pressable>
      <Pressable style={styles.press} onPress={()=>setDiaDiemDaLuu(true)}>
      <View style={styles.viewtext}> 
        <Text style={styles.texttaikhoan}>🔰 Địa điểm đã lưu</Text>
      </View> 
      </Pressable>
      <Pressable style={styles.press} onPress={()=>setmodalDonHangNhap(true)}>
      <View style={styles.viewtext}> 
        <Text style={styles.texttaikhoan}> 📒 Đơn hàng nháp</Text>
      </View> 
      </Pressable>
      <Pressable style={styles.press} onPress={()=>setmodalUuDai(true)}>
      <View style={styles.viewtext}> 
        <Text style={styles.texttaikhoan}> 🎁 Ưu Đãi</Text>
      </View> 
      </Pressable>
      <Pressable style={styles.press} onPress={()=>setmodalThuThach(true)}>
      <View style={styles.viewtext}> 
        <Text style={styles.texttaikhoan}> 📌 Thử Thách</Text>
      </View> 
      </Pressable>
      <Pressable style={styles.press} onPress={()=>setmodalGioiThieuBanBe(true)}>
      <View style={styles.viewtext}> 
        <Text style={styles.texttaikhoan}> 📣 Giới thiệu bạn bè</Text>
      </View>
      </Pressable>
      <Pressable style={styles.press} onPress={()=>setmodalGoiHoiVien(true)}>
      <View style={styles.viewtext}> 
        <Text style={styles.texttaikhoan}> 📧 Gói hội viên</Text>
      </View>
      </Pressable>
      <Pressable style={styles.press} onPress={()=>setmodalOpenTaixe(true)}>
      <View style={styles.viewtext}> 
        <Text style={styles.texttaikhoan}> 💝 Tài xế yêu thích</Text>
      </View>
      </Pressable>
      <Pressable style={styles.press}  onPress={() => navigation.navigate('DangNhap')}>
      <View style={styles.viewtext} > 
      <Icon 
        name="logout"
        size={25}
        color="#900"
        style={{margin:10 }}
/>
        <Text style={styles.texttaikhoan}>Đăng Xuất</Text>
      </View>
      </Pressable>
      <Modal visible={modalOpenTaixe} animationType='slide'>
      <View style={{backgroundColor:"cyan", margin:5}}>
      <MaterialIcons name='close' size={30} onPress={()=>setmodalOpenTaixe(false)}></MaterialIcons>
      <View style={{justifyContent:"center",alignItems:"center"}}>
      <Image source={require("/src/Image/Taixe1.jpg")} style={{height:600,width:380}}></Image>
      </View>
      </View>
      </Modal>
      <Modal visible={modalOpenGoiHoiVien} animationType='slide'>
      <View style={{backgroundColor:"cyan", margin:5}}>
      <MaterialIcons name='close' size={30} onPress={()=>setmodalGoiHoiVien(false)}></MaterialIcons>
      <View style={{justifyContent:"center",alignItems:"center"}}>
      <Image source={require("/src/Image/GoiHoiVien.jpg")} style={{height:720,width:380}}></Image>
      </View>
     </View>
      </Modal>
      <Modal visible={modalOpenTaiKhoanCuaToi} animationType='slide'>
      <View style={{backgroundColor:"cyan", margin:5}}>
      <MaterialIcons name='close' size={30} onPress={()=>setmodalOpenTaiKhoanCuaToi(false)}></MaterialIcons>
      </View>
      <View style={{justifyContent:"center",alignItems:"center"}}>
      <Image source={require("/src/Image/taikhoancuatoi.jpg")} style={{height:600,width:380}}></Image>
      </View>
      </Modal>
      <Modal visible={modalOpenDiaDiemDaLuu} animationType='slide'>
      <View style={{backgroundColor:"cyan", margin:5}}>
      <MaterialIcons name='close' size={30} onPress={()=>setDiaDiemDaLuu(false)}></MaterialIcons>
      <View style={{justifyContent:"center",alignItems:"center"}}>
      <Image source={require("/src/Image/diadiemdaluu.jpg")} style={{height:670,width:380}}></Image>
      </View>
      </View>
      </Modal>
      <Modal visible={modalOpenDonHangNhap} animationType='slide'>
      <View style={{backgroundColor:"cyan", margin:5}}>
      <MaterialIcons name='close' size={30} onPress={()=>setmodalDonHangNhap(false)}></MaterialIcons>
      <View style={{justifyContent:"center",alignItems:"center", backgroundColor:"red",  resizeMode:"contain"}}>
      <Image source={require("/src/Image/donhangnhap.jpg")} style={{height:600,width:380}}></Image>
      </View>
      </View>
      </Modal>
      <Modal visible={modalOpenUuDai} animationType='slide'>
      <View style={{backgroundColor:"cyan", margin:5}}>
      <MaterialIcons name='close' size={30} onPress={()=>setmodalUuDai(false)}></MaterialIcons>
      <View style={{justifyContent:"center",alignItems:"center"}}>
      <Image source={require("/src/Image/uudai.jpg")} style={{height:670,width:380}}></Image>
      </View>
      </View>
      </Modal>
      <Modal visible={modalOpenThuThach} animationType='slide'>
      <View style={{backgroundColor:"cyan", margin:5}}>
      <MaterialIcons name='close' size={30} onPress={()=>setmodalThuThach(false)}></MaterialIcons>
      <View style={{justifyContent:"center",alignItems:"center"}}>
      <Image source={require("/src/Image/thuthach.jpg")} style={{height:700,width:380}}></Image>
      </View>
      </View>
      </Modal>
      <Modal visible={modalOpenGioiThieuBanBe} animationType='slide'>
      <View style={{backgroundColor:"white", margin:5}}>
      <MaterialIcons name='close' size={30} onPress={()=>setmodalGioiThieuBanBe(false)}></MaterialIcons>
      <View style={{justifyContent:"center",alignItems:"center"}}>
      <Image source={require("/src/Image/gioithieubanbe.jpg")} style={{height:700,width:380}}></Image>
      </View>
      </View>
      </Modal>
      <Modal visible={modalOpenToi} animationType='slide'>
      <View style={{backgroundColor:"cyan", margin:5}}>
      <MaterialIcons name='close' size={30} onPress={()=>setmodalOpenToi(false)}></MaterialIcons>
      <View style={styles.container}>
      <Pressable style={styles.press} >
      
      <View style={styles.viewtext}> 
        <Text style={styles.texttaikhoan}>Loại tài khoản</Text>
       <Text style={styles.textTk}> 🏘  Có kinh doanh, buôn bán</Text>
       <Text>Nhu cầu cá nhân</Text>
      </View> 
      </Pressable>
      <Pressable style={styles.press} >
      
      <View style={styles.viewtext}> 
        <Text style={styles.texttaikhoan}>Thông tin cá nhân                            📑 </Text>
       
      </View> 
      </Pressable>
      <Pressable style={styles.press} >
      
      <View style={styles.viewtext}> 
        <Text style={styles.texttaikhoan}>Tên đầy đủ                  loidai2002 - TR10</Text>
       
      </View> 
      </Pressable>
      <Pressable style={styles.press} >
      
      <View style={styles.viewtext}> 
        <Text style={styles.texttaikhoan}>Số điện thoại                  +84767929064</Text>
       
      </View> 
      </Pressable>
      <Pressable style={styles.press} >
      
      <View style={styles.viewtext}> 
        <Text style={styles.texttaikhoan}>Email                   loidai2002@gmail.com</Text>
       
      </View> 
      </Pressable>
      <Pressable style={styles.press} >
      
      <View style={styles.viewtext}> 
        <Text style={styles.texttaikhoan}>Xóa tài khoản        ❎️</Text>
       
      </View> 
      </Pressable>
      </View>
      
      </View>
      </Modal>
      </View>
    </ScrollView>
  );
};

export default TaiKhoan;

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
    
  },textTk:{
    fontWeight:500,
    width:330
  },
  texttaikhoan:{
    fontWeight:500,
    fontSize:20
  },viewtext:{
    margin:20,
    flexDirection:"row"
  },viewtext1:{
    margin:20,
    flexDirection:"column"
  }

});