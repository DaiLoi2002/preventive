import * as React from 'react';
import { StyleSheet,Button, View, Text, TextInput,
  Pressable,Image,ScrollView,
  Alert, } from 'react-native';
  import { useEffect, useState } from "react";
  import { useNavigation, useRoute } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
var url = "https://6553766e5449cfda0f2ebbf0.mockapi.io/user";
const DangNhap=()=> {
  const navigation = useNavigation();
  const [mail, setMail] = useState();
  const [pass, setPass] = useState();
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
  const headerCheck = () => {
    const user = state.find((user) => user.email == mail);

    if (user) {
      navigation.navigate("Home", user);
    } else {
      alert("Bạn chưa đăng kí tài khoản");
      setPass("");
    }
  };

    return (
      <View style={styles.container}>
        <View style={styles.imgheader}>
          <Image source={require("./Image/xe.jpg")} style={styles.img}></Image>

        </View>
        <ScrollView style={{ borderRadius: 10,backgroundColor:"white",bottom:5}}>
        <View style={styles.view}>
        <Text style={styles.text}>Đăng Nhập</Text>
        
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
      </View>

      <View style={styles.view2}>
        <Text style={{fontSize:15,fontWeight:500}}>Bạn chưa có tài khoản?</Text>
        <Pressable style={{borderRadius:20,  border: "2px solid red",height:40,width:100,alignItems:"center",justifyContent:"center",marginLeft:30}} onPress={()=>{navigation.navigate('DangKi')}}>
            <Text style={{textDecorationLine: 'underline',fontSize:18,fontWeight:500}}>Đăng ký</Text>
        </Pressable>
      </View>

      <View style={styles.view2}>
        <Pressable
          style={styles.Pre}
          onPress={() => {
            headerCheck();
          }}
        >
          <Text style={styles.textPre}>Đăng Nhập</Text>
        </Pressable>
      </View>
        </ScrollView>
      
    </View>
      
    
    );
  }
  export default DangNhap;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
     
    },
    view: {
      alignItems: "center",
      marginTop: 60,
      alignItems:"flex-start",
      marginLeft:30
    },
    view1: {
      alignItems: "center",
    },
    view2: {
      margin: 30,
      alignItems: "center",
      flexDirection:"row",
      justifyContent:"center"
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
      backgroundColor: "#EE9A00",
      alignItems: "center",
      justifyContent: "center",
      border: "2px solid black"

    },
    textPre: {
      color: "#fff",
      fontSize: 20,
      fontWeight: 700,
    },imgheader:{
      backgroundColor:"red"
    },img:{
      height:150,
      width:400
    }
  });