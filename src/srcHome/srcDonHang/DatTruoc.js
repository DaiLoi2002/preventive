import React, { useEffect, useState } from 'react';
import { View, Text,StyleSheet, Pressable } from 'react-native';
import { ScrollView } from 'react-native-web';

var data = [];
var url = "https://6553766e5449cfda0f2ebbf0.mockapi.io/donhang";
const DatTruoc = ( )=> {


  // Function to fetch data from the API
  const fetchData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json));
  };
  // Fetch data on initial component load
  useEffect(() => {
    fetchData();
  }, []);
  // Function to handle refreshing data
  const handleRefresh = () => {
    fetchData();
  };
  
  var [data, setData] = useState([]);
  var fc = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        data = json;
        setData(data);
      });
  };
  useEffect(fc, []);
  const handleDelete = (id) => {
    const newData = data.filter(item => item.id !== id);
    setData(newData);
  }
    return (
      <View style={{flex:1}}>
         <Pressable
        style={{
          backgroundColor: "#FF8C00",
          padding: 10,
          margin: 10,
          borderRadius: 10,
          alignItems: 'center',
        }}
        onPress={handleRefresh} // Trigger the refresh function when pressed
      >
        <Text style={{ color: "white", fontWeight: "500" }}>Refresh</Text>
      </Pressable>
        <ScrollView>
        {data.map((item) => {
        return (
          <View
            style={{
              alignItems: 'center',
              height: '130px',
              width: '90  %',
              flexDirection:"row",
              backgroundColor: 'pink',
              shadowOffset: { width: '3px', height: '3px' },
              shadowColor: 'grey',
              shadowOpacity: '0.5',
              margin: '10px',
              marginLeft:15
            }}
            key={item.id}
          >
          <View style={{flexDirection:"column",flex:1}}>
            
            <Text style={{marginLeft:5,fontSize:15, fontWeight:500}}>Thời Gian Giao:{item.ThoiGian}</Text>
            <View style={{flexDirection:"row",flex:1}}>
            <Text style={{fontSize:13,borderRadius:10,margin:3,fontWeight:500,flex:0.5,backgroundColor:'white'}}> SĐT Gửi: {item.SDTGui}</Text>
            <Text style={{fontSize:13,borderRadius:10,margin:3,fontWeight:500,flex:0.5,backgroundColor:'white'}}> SĐT Nhận: {item.SDTNhan}</Text>
            </View>
            <Text style={{fontSize:15,borderRadius:10,margin:3,fontWeight:500,flex:0.333,backgroundColor:'white'}}>  📦  {item.NoiNhan}</Text>
            <Text style={{fontSize:15,borderRadius:10,margin:3,fontWeight:500,flex:0.333,backgroundColor:'white'}}>  📥  {item.NoiGiao} </Text>
            
          </View>
            <View style={{flexDirection:"column"}}>
            <Pressable
              style={{ backgroundColor: "#FF8C00", padding: 10,margin:5, borderRadius: 10 }}
              onPress={() => {
                var link = url + "/" + item.id;
                fetch(link, {
                  method: "DELETE",
                }).then((result) => {
                  console.log(result);
                  if (result.ok) fc();
                  
                });
              }}
            >
              <Text style={{ color: "white",fontWeight:"500" }}>Xoá</Text>
            </Pressable>
            <Pressable  style={{ backgroundColor: "#FF8C00", padding: 10,margin:5, borderRadius: 10 }}
              onPress={() => {
                
              }}>
                  <Text style={{ color: "white",fontWeight:"500" }}>Giao Ngay</Text>
            </Pressable>
            </View>
            
          </View>
        );
      })}
        </ScrollView>
          


      </View>
    );
  }
  export default DatTruoc