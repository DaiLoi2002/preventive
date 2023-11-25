import React from 'react';
import { View, Text,StyleSheet,Pressable , Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-web';

const TaiKhoan = () => {
  return (
    
    <ScrollView>
      <View style={styles.container}>
      <Pressable style={styles.press} >
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
      <Pressable style={styles.press} >
      <View style={styles.viewtext}> 
        <Text style={styles.texttaikhoan}>📁 Tài khoản của tôi                        ₫0</Text>
      </View> 
      </Pressable>
      <Pressable style={styles.press} >
      <View style={styles.viewtext}> 
        <Text style={styles.texttaikhoan}>TIỆN ÍCH</Text>
      </View> 
      </Pressable>
      <Pressable style={styles.press} >
      <View style={styles.viewtext}> 
        <Text style={styles.texttaikhoan}>🔰 Địa điểm đã lưu</Text>
      </View> 
      </Pressable>
      <Pressable style={styles.press} >
      <View style={styles.viewtext}> 
        <Text style={styles.texttaikhoan}> 📒 Đơn hàng nháp</Text>
      </View> 
      </Pressable>
      <Pressable style={styles.press} >
      <View style={styles.viewtext}> 
        <Text style={styles.texttaikhoan}> 🎁 Ưu Đãi</Text>
      </View> 
      </Pressable>
      <Pressable style={styles.press} >
      <View style={styles.viewtext}> 
        <Text style={styles.texttaikhoan}> 📌 Thử Thách</Text>
      </View> 
      </Pressable>
      <Pressable style={styles.press} >
      <View style={styles.viewtext}> 
        <Text style={styles.texttaikhoan}> 📣 Giới thiệu bạn bè</Text>
      </View>
      </Pressable>
      <Pressable style={styles.press} >
      <View style={styles.viewtext}> 
        <Text style={styles.texttaikhoan}> 📧 Gói hội viên</Text>
      </View>
      </Pressable>
      <Pressable style={styles.press} >
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