import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TrangChu from './srcHome/TrangChu';
import DonHang from './srcHome/DonHang';
import ThongBao from './srcHome/ThongBao';
import TaiKhoan from './srcHome/TaiKhoan';
import Icon1 from 'react-native-vector-icons/Foundation';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/Octicons';
import Icon4 from 'react-native-vector-icons/MaterialIcons';
import Icon5 from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

function Home({ navigation }) {
    return (
        <Tab.Navigator>
       <Tab.Screen name="Trang chủ" component={TrangChu} options={{ tabBarIcon: ({color}) => (
        <Icon1 name="home" size={24} color={color} />
      ), headerShown: false 
    }}/>
        <Tab.Screen name="Đơn hàng" component={DonHang}  options={{ tabBarIcon: ({color}) => (
        <Icon2 name="clock" size={24} color={color} />
      )
    }} />
        <Tab.Screen name="Thông Báo" component={ThongBao} options={{ tabBarIcon: ({color}) => (
        <Icon3 name="bell" size={24} color={color} />
      )
    }} />
        <Tab.Screen name="Tài Khoản" component={TaiKhoan} options={{ tabBarIcon: ({color}) => (
        <Icon4 name="account-box" size={24} color={color} />
      ), headerShown: false 
    }} />
      </Tab.Navigator>
    );
  }
  export default Home