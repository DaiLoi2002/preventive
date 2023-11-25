import React from 'react';
import { View, Text,StyleSheet,Button,FlatList,Image,Pressable } from 'react-native';
var array = [
    {
      image: require('/Image/4h.jpg'),
      noinhan: '148 Hoàng Hoa Thám, Phường 12, Tân Bình, Thành phố Hồ Chí Minh',
      price: "69.000đ",
      noigiao:'3837 Hẻm 38, Tây Thạnh, Tân Phú, Thành phố Hồ Chí Minh',
      des: 'show something',
      trangthai: 'Thành Công',
      thoigian: '06/04/2023|23:34',
    },
    {
      image: require('/Image/tietkiem.jpg'),
      noinhan: '140 Lê Trọng Tấn, Tây Thạnh, Tân Phú, Thành phố Hồ Chí Minh',
      price: "",
      noigiao:'49 Đường Trần Hưng Đạo, Tân Thành, Tân Phú, Thành phố Hồ Chí Minh 700000',
      thoigian: '03/06/2023|09:18',
      trangthai: 'Đã Huỷ',
    },
    {
      image: require('/Image/sieutoc_doan.jpg'),
      noinhan: '53 Phạm Văn Chiêu, Phường 9, Gò Vấp, Thành phố Hồ Chí Minh',
      price: "250.000đ",
      noigiao:'28 - 30 Trần Triệu Luật, Phường 6, Tân Bình, Thành phố Hồ Chí Minh 700000',
      des: 'show something',
      trangthai: 'Thành Công',
      thoigian: '08/10/2023|11:38',
    },
    {
      image: require('/Image/sieutoc.jpg'),
      noinhan: ' 170/1c Đường Vườn Lài, Tân Phú, Thành phố Hồ Chí Minh',
      price: "",
      noigiao:'246 Đ. Nguyễn Hồng Đào, Phường 13, Tân Bình, Thành phố Hồ Chí Minh',
      des: 'show something',
      trangthai: 'Đã Huỷ',
      thoigian: '02/05/2023|13:33',
    },
    {
      image: require('/Image/sieucap.jpg'),
      noinhan: 'NHA KHOA THANH BÌNH, Đường số 1, phường 10, Tân Bình, Thành phố Hồ Chí Minh',
      price: "27.000đ",
      noigiao:'131 Trịnh Đình Trọng, Phú Trung, Tân Phú, Thành phố Hồ Chí Minh',
      des: 'show something',
      trangthai: 'Thành Công',
      thoigian: '14/11/2023|22:03',
    },{
      image: require('/Image/sieucap.jpg'),
      noinhan: 'NHA KHOA THANH BÌNH, Đường số 1, phường 10, Tân Bình, Thành phố Hồ Chí Minh',
      price: "27.000đ",
      noigiao:'131 Trịnh Đình Trọng, Phú Trung, Tân Phú, Thành phố Hồ Chí Minh',
      des: 'show something',
      trangthai: 'Thành Công',
      thoigian: '14/11/2023|22:03',
    }
  ];
function DaDat() {
    var [state, setState] = React.useState(array);
    var [color, setColor] = React.useState(1);
    return (
      <View style={styles.container}>
        <View style={styles.phanloai}>
        <Pressable
          style={
            ([{ borderWidth: '1px',borderColor: 'red', padding: '5px' },
            (color == 1 ? { backgroundColor: 'red' } : null)])
          }
          title="All"
          onPress={() => {
            setState(array);  
            setColor(1);
          }}>
          <Text style={{color:"#FF8C00",fontSize:20}}>Tất cả</Text>
        </Pressable>
        <Pressable
          style={
            ([{ borderWidth: '1px', borderColor: 'red', padding: '5px' },
            (color == 2 ? { backgroundColor: 'red' } : null)])
          }
          title="Thành Công"
          onPress={() => {
            var newarr = array.filter((item) => {
              return item.trangthai == 'Thành Công';
            });
            setState(newarr);
            setColor(2);
          }}>
          <Text style={{color:"#FF8C00",fontSize:20}}>Thành Công</Text>
        </Pressable>
        <Pressable
          style={
            ([{ borderWidth: '1px',  borderColor: 'red', padding: '5px' },
            (color == 3 ? { backgroundColor: 'red' } : null)])
          }
          title="Đã huỷ"
          onPress={() => {
            var newarr = array.filter((item) => {
              return item.trangthai == 'Đã Huỷ';
            });
            setState(newarr);
            setColor(3);
          }}>
          <Text style={{color:"#FF8C00",fontSize:20}}>Đã Huỷ</Text>
        </Pressable>
        </View>
        <View   style={{ flex: 8 }} >
        <FlatList
    numColumns={1}
    data={state}
    renderItem={({ item }) => {
      return (
        <Pressable
        
          style={{
            alignItems: 'center',
            height: '130px',
            width: '90  %',
            
            backgroundColor: 'pink',
            shadowOffset: { width: '3px', height: '3px' },
            shadowColor: 'grey',
            shadowOpacity: '0.5',
            margin: '10px',
            marginLeft:15
          }}>
            <View style={{flexDirection:'column',flex:1}}>
                
                 <View style={{flex:0.333,flexDirection:'row'}}>
                 <Image source={item.image} resizeMode="contain" style={{width:30,height:30, border: '2px solid orange',margin:5}}/>
                 <View style={{flexDirection:'column'}}>
                 <Text style={{fontSize:18, fontWeight:500}} >{item.thoigian}</Text>
                 <Text style={{color:"#9ACD32", fontSize:"15"}}>{item.price}</Text>
                 </View>
                
                <Text style={{color:"green",marginLeft:100, fontWeight:"500"}}>{item.trangthai}</Text>
                </View>
            <Text style={{fontSize:15,fontWeight:400,flex:0.333,backgroundColor:'white'}}>  📦  {item.noinhan}</Text>
            <Text style={{fontSize:15,fontWeight:400,flex:0.333,backgroundColor:'white'}}>  📥  {item.noigiao} </Text>
            </View>
            
        </Pressable>
      );
    }}
  />

        </View>
      </View>
    );
  }


  export default DaDat
  const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center'
    },phanloai:{ flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
    
  });