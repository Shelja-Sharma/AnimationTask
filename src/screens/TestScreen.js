// import { transform } from '@babel/core';
// import React, { Component } from 'react'
// import { Animated, Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
// import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';



// export default class  TestScreen extends Component {

//     state = {
//       animation: new Animated.ValueXY({x:100,y:100}),
//     };
  
//     // componentDidMount() {
//     //   Animated.timing(this.state.animation, {
//     //     toValue: {x:100,y:responsiveHeight(100)},
//     //     duration:2000
//     //   }).start();
//     // }
  
//     render() {
//       const moveInterpolate = this.style

//       const onMoveBall = ()=>{
//         Animated.timing(this.state.animation,{
//           toValue: {x:100,y:responsiveHeight(100)},
//           duration:2000,
//           useNativeDriver:true,
//         }).start(),
//         Animated.timing(this.state.animation,{
//           toValue:{x:responsiveWidth(100),y:100},
//           duration:2000,
//           useNativeDriver:true
//         })
//       }
  
//       return (
//         <View style={styles.container}>
//           <TouchableOpacity onPress = {()=>onMoveBall()}>
//             <Animated.View style={[styles.box,boxStyle]} />
//             <View style={styles.box2} />
//           </TouchableOpacity>
//         </View>
//       );
//     }
//   }
  
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       // alignItems: "center",
//       // justifyContent: "center",
//     },
//     box: {
//       width: 100,
//       height: 100,
//       position:'absolute',top:0,left:0,
//       backgroundColor: "tomato",
//     },
//     box2: {
//       width: 100,
//       height: 100,
//       backgroundColor: "blue",
//     },
//   });

import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';
import CustomTabContent from '../component/CustomTabContent';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import CustomDropDown from '../component/CustomDropDown';

const Tab = createBottomTabNavigator();

const TestScreen = ()=>{
 const mobileItem = [
 {lable:'Select your mobile'},
 {lable:'Android',value:'Android'},
 {lable:'iphone 6',value:'iphone 6'},
 {lable:'iphone 11',value:'iphone 11'},
 {lable:'iphone 12',value:'iphone 12'}
]

  return(
      <View>
          <CustomDropDown
            item = {mobileItem} 
            pic = {true}
          />
      </View>
  )
}

export default TestScreen