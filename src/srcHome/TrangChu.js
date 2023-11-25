import React from 'react';
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text,StyleSheet, SafeAreaView,Dimensions,ScrollView,Image,Pressable,TextInput } from 'react-native';
import { useState,useEffect } from 'react';
import Icon5 from 'react-native-vector-icons/MaterialCommunityIcons';

var url="https://6553766e5449cfda0f2ebbf0.mockapi.io/donhang"
const images = [
  'https://www.ahamove.com/_next/image?url=https%3A%2F%2Faha-cms-production.s3.ap-southeast-1.amazonaws.com%2FBanner_Web_51c1e2a78e.png&w=1920&q=75',
  'https://www.ahamove.com/_next/image?url=https%3A%2F%2Faha-cms-production.s3.ap-southeast-1.amazonaws.com%2FBanner_Homepage2_1920x900_0ed7b6a0e2.webp&w=1920&q=75',
  'https://www.ahamove.com/_next/image?url=https%3A%2F%2Faha-cms-production.s3.ap-southeast-1.amazonaws.com%2Fweb_20b845cb84.png&w=1920&q=75'

  
];
const WIDTH=Dimensions.get("window").width;
const HEIGHT=Dimensions.get("window").height;
const TrangChu = () => {
  const[navigation,useNavigation]=useState();
  const [ThoiGian, setThoiGian] = useState();
  const [NoiNhan, setNoiNhan] = useState();
  const [NoiGiao, setNoiGiao] = useState();
  const [SDTGui, setSDTGui] = useState();
  const [SDTNhan, setSDTNhan] = useState();
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

  const[imgActive,setimgActive]=useState(0);
  onchange =(nativeEvent) => {
    if(nativeEvent){
      const slide=Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width);
      if(slide!= imgActive){
        setimgActive(slide);
      }
    }
      
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.wrap}>
         <ScrollView
          onScroll={({nativeEvent})=>onchange(nativeEvent)}
          pagingEnabled={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.wrap}
          >
              {
                images.map((e,index) =>
                <Image
                key={e}
                resizeMode='stretch'
                style={styles.wrap}
                source={{uri:e}}
                />
                )
              }
        </ScrollView>
        <View style={styles.wrapDot}>
          {images.map((e,index)=>
          <Text
          key={e}
          style={imgActive==index ? styles.dotActive:styles.dot}
          >●</Text>
          )}
        </View>
         </View>
         <View style={styles.mid}>
          <Pressable style={styles.buttondathang}   onPress={() => navigation.navigate('HomeScreen')}>
            <Image source={require("../Image/mid3.jpg")} style={styles.imgbutton}/>
            <Text style={{fontWeight:700}}>Giao hàng</Text>
          </Pressable>
          <Pressable style={styles.buttondathang} >
            <Image source={require("../Image/mid2.jpg")} style={styles.imgbutton}/>
            <Text style={{fontWeight:700}}>Xe tải</Text>
          </Pressable>
          <Pressable style={styles.buttondathang} >
            <Image source={require("../Image/mid1.jpg")} style={styles.imgbutton}/>
            <Text style={{fontWeight:700}}>Liên tỉnh</Text>
          </Pressable>
         </View>
         <Pressable style={styles.dathang} >
         <View style={styles.dathang1}>
        <Image source={require("../Image/mid3.jpg")} style={styles.imgdathang1}/>
        <Text style={{fontWeight:700,fontSize:9}}>       GIAO HÀNG</Text>
        </View>
        <View style={styles.dathang2}>
        <Icon5 name="arrow-down-bold-box" size={24} color="green"/>
        <Text style={{color:"#8B8989"}}>   Bạn muốn giao hàng đến đâu?</Text>
        </View>
         </Pressable>
         <View style={styles.taodon}>
              <Text style={styles.Texttaodon}>Thông tin giao hàng </Text>
              <View style={styles.view1}>
                <View style={{width:WIDTH,height:40,justifyContent:"center",backgroundColor:"pink"}}>
                  <Text style={{fontSize:15, fontWeight:500,marginLeft:20}}>Thông tin người gửi</Text>
                </View>
              
                <View style={styles.ThoiGian}>
                
                <TextInput style={styles.textIn}
                  value={ThoiGian}
                  onChangeText={(text) => {
                    setThoiGian(text);
                  }}
                   placeholder="    Thời gian giao"
                  >
                  </TextInput>

                </View>
                <View style={styles.ViewNguoiGui}>
                 
                <TextInput style={styles.textIn}
                  value={SDTGui}
                  onChangeText={(text) => {
                    setSDTGui(text);
                  }}
                   placeholder="    Số điện thoại"
                  >
                  </TextInput>
                  <TextInput style={styles.textIn}
                   value={NoiNhan}
                   onChangeText={(text) => {
                     setNoiNhan(text);
                   }}
                   placeholder="    Địa chỉ"
                  >
                  </TextInput>
                </View>
                <View style={{width:WIDTH,height:40,justifyContent:"center",backgroundColor:"pink"}}>
                  <Text style={{fontSize:15, fontWeight:500,marginLeft:20}}>Thông tin người Nhận</Text>
                </View>
                <View style={styles.ViewNguoiNhan}>
                <TextInput style={styles.textIn}
                  value={SDTNhan}
                  onChangeText={(text) => {
                    setSDTNhan(text);
                  }}
                   placeholder="    Số điện thoại"
                  >
                  </TextInput>
                  <TextInput style={styles.textIn}
                  value={NoiGiao}
                  onChangeText={(text) => {
                    setNoiGiao(text);
                  }}
                  placeholder="    Địa chỉ"
                  >
                  </TextInput>

                </View>
                  
                  
                  
                  
                  
              </View>
              <View style={styles.view2}>
                <Pressable  style={styles.Pre}
                    
                    onPress={() => {
                      fetch(url, {
                        method: "POST",
                        body: JSON.stringify({
                          ThoiGian:ThoiGian,
                          NoiNhan:NoiNhan,
                          NoiGiao:NoiGiao,
                          SDTGui:SDTGui,
                          SDTNhan:SDTNhan
                        }),
                        headers: {
                          "Content-type": "application/json; charset=UTF-8",
                        },
                      });
                    
                      setThoiGian("");
                      setNoiNhan("");
                      setNoiGiao("");
                      setSDTGui("");
                      setSDTNhan("");
                    }}
                
                
                >
                <Text style={styles.textPre}>Đặt ngay</Text>
                </Pressable>
              </View>
         </View>
         <View style={styles.imgfooter}>
          <Image  source={require("../Image/footer.jpg")} style={styles.imgf}/>
        </View>
      </ScrollView>
        

    </SafeAreaView>
  );
};

export default TrangChu;

const styles = StyleSheet.create({
  container:{
    flex:20
  },
  wrap:{
    width:WIDTH,
    height:HEIGHT*0.25
  }, imgf:{
    flex:1,
    backgroundColor:"clyan" ,
    height:HEIGHT*0.3,
   width:WIDTH, 
   resizeMode:"contain"
  },
  wrapDot:{
    position:'absolute',
    bottom:0,
    flexDirection:'row',
    alignSelf:'center'
  },dotActive:{
    margin:3,
    color:"black"
  },
  imgbutton:{
    width:80,
    height:70
  },
  dot:{
    margin:3,
    color:"white"
  },mid:{
    flexDirection:'row',backgroundColor:"#FF66B2"
  },buttondathang:{
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    width:WIDTH*0.333,
    height:HEIGHT*0.15,
    backgroundColor:"white"
  },dathang:{
    width:WIDTH,
    height:HEIGHT*0.1,
    margin:2,backgroundColor:"white"
  },
  imgdathang1:{
    width:15,
    height:15,
    borderRadius: 100
   
  },dathang2:{
    borderRadius:10,
    flexDirection:"row",
    backgroundColor:"#EEE8CD",
    height:28,width:WIDTH*0.8,
    justifyContent:"center",
    alignItems:"center",
    marginLeft:40
  },imgdathang1:{
    width:15,
    height:15,
    borderRadius: 100
  }, dathang1:{
    flexDirection:"row",
    marginLeft:20,
    marginTop:10
  },imgfooter:{
   height:HEIGHT*0.5,
   width:WIDTH,
  },taodon:{
    flex:10,
    backgroundColor:"white",
    width:WIDTH,
    height:450,
    alignItems:"center",borderRadius:10,justifyContent:"center"
  },Texttaodon:{
    fontSize:20,
    fontWeight:500
  },textIn:{
    marginTop:5,
    backgroundColor:"cyan",
    borderRadius:5,
    height:HEIGHT*0.05,
    width:WIDTH*0.9, border: "2px solid #808080",
    margin:10,
    color:"#C0C0C0"
  },view2:{
    backgroundColor:"red",
    margin:10,
    width:250,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:20
  },Pre:{
    backgroundColor:"#EE9A00",
    width:245,
    height:45,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:20
  },
  view1:{
    margin:5,
    backgroundColor:"white",
    width:WIDTH,
    height:320
  },ThoiGian:{
    justifyContent:"center",alignItems:"center"
  },
  ViewNguoiGui:{
    justifyContent:"center",alignItems:"center"
  },ViewNguoiNhan:{
    justifyContent:"center",alignItems:"center"
  },textPre:{
    
    fontSize:25,
    fontWeight:500,color:"white",
    justifyContent:"center",
    alignItems:"center"
  }
  });