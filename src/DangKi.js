import * as React from 'react';
import { useNavigation, useRoute } from "@react-navigation/native";
import  { useEffect, useState } from "react";
import {  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
var url="https://6553766e5449cfda0f2ebbf0.mockapi.io/user"
const DangKi=()=> {
  const navigation = useNavigation();
  const [mail, setMail] = useState();
  const [pass, setPass] = useState();
  const [name, setName] = useState();
  const [state, setState] = useState([]);
  const route = useRoute();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setState(data);
        console.log("====================================");
        console.log(data);
        console.log("====================================");
      });
  }, [state]);


    return (
      <View style={styles.container}>
        <View style={{flexDirection:"row"}}>
        <Pressable style={{borderBottomWidth: 3,borderBottomColor: '#808080',width:120,height:40,justifyContent:"center",alignItems:"center"}} onPress={() => navigation.navigate('DangNhap')}>
        <Text style={{fontSize:18,fontWeight:500, color:"#808080"}}>Đăng Nhập</Text>
        </Pressable>
        <Pressable style={{borderBottomWidth: 3,borderBottomColor: 'red',width:120,height:40,justifyContent:"center",alignItems:"center"}} >
        <Text style={{fontSize:18,fontWeight:500}}>Đăng Ký</Text>
        </Pressable>
        </View>
      

      <View style={styles.view1}>
        <TextInput
          style={styles.textIn}
          value={mail}
          onChangeText={(text) => {
            setMail(text);
          }}
          placeholder="Email"
        />
        <TextInput
          style={styles.textIn}
          value={pass}
          onChangeText={(text) => {
            setPass(text);
          }}
          placeholder="Password"
        />
         <TextInput
          style={styles.textIn}
          value={name}
          onChangeText={(text) => {
            setName(text);
          }}
          placeholder="Tên đầy đủ"
        />
         <TextInput
          style={styles.textIn}
          
          placeholder="Mã giới thiệu (Có thể trống)"
        />
        
      </View>

      <View style={styles.view2}>
        <Text>Bằng cách nhấp vào Đăng ký, bạn đồng ý với <span style={{color: '#808080'}}>Điều khoản và điều kiện</span> của chúng tôi</Text>
        <Pressable
          style={styles.Pre}
          onPress={() => {
            fetch(url, {
              method: "POST",
              body: JSON.stringify({
                Name:name,
                email: mail,
                pass: pass,
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            });
            
            setMail("");
            setPass("");
            setName("")
          }}
        >
          <Text style={styles.textPre}>Đăng Ký</Text>
        </Pressable>
      </View>
    </View>
    );
  }
  export default DangKi;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 30,
    },
    view: {
      alignItems: "center",
      marginTop: 60,
    },
    view1: {
      alignItems: "center",
    },
    view2: {
     
      height:400,
      marginTop:30,
      width:350,
      alignItems: "center",
    },
    text: {
      fontSize: 30,
      fontFamily: "Arial",
      fontWeight: 700,
    },
    textIn: {
      height: 50,
      width: 330,
      backgroundColor: "#EE9A00",
      marginTop: 30,
      borderRadius: 20,
      padding: 20,
      color: "#fff",
      fontSize: 16,
    },
    Pre: {
      height: 50,
      width: 200,
      borderRadius: 30,
      backgroundColor: "#51a551",
      alignItems: "center",
      justifyContent: "center",
      marginTop:40
    },
    textPre: {
      color: "#fff",
      fontSize: 20,
      fontWeight: 700,
    },
  });