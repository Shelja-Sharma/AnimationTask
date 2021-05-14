


// import React, { useRef, useState } from 'react'
// import { FlatList, StyleSheet, Text, TouchableOpacity, View, Animated, Image, ScrollView } from 'react-native'
// import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import HomeScreen from './HomeScreen';
// import SettingScreen from './SettingScreen';
// import CheckScreen from './CheckScree';

// const Tab = createMaterialTopTabNavigator();

// const UserProfile = () => {

//   const ballAnimatedValue = useRef(new Animated.Value(0)).current;
//   const nameAnimatedValue = useRef(new Animated.Value(0)).current;
//   // const moveBall = () => {
//   //   Animated.timing(ballAnimatedValue, {
//   //     toValue: 1,
//   //     duration: 4000,
//   //     useNativeDriver: true,

//   //   }).start();
//   // };

//   const diffClamp = Animated.diffClamp(ballAnimatedValue, 0, 0)
//   const nameYValue = nameAnimatedValue.interpolate({
//     inputRange: [0, 60],
//     outputRange: [0, -60]
//   })
//   const nameOpacity = nameAnimatedValue.interpolate({
//     inputRange: [0, 60],
//     outputRange: [1, 0]
//   })


//   const xVal = ballAnimatedValue.interpolate({
//     inputRange: [0, 90, 180],
//     outputRange: [0, 95, 190],
//     extrapolate: 'clamp'
//   });

//   const yVal = ballAnimatedValue.interpolate({
//     inputRange: [0, 90, 180],
//     outputRange: [0, -55, -110],
//     extrapolate: 'clamp'
//   });
//   // const imageopacity = ballAnimatedValue.interpolate({
//   //     inputRange:[0,10],
//   //     outputRange:[1,0]
//   // })
//   const scaleVal = ballAnimatedValue.interpolate({
//     inputRange: [0, 180],
//     outputRange: [1, 0.3],
//     extrapolate: 'clamp'
//   })

//   const animStyle = {
//     transform: [
//       {
//         translateY: yVal
//       },
//       { translateX: xVal },
//       {
//         scale: scaleVal
//       }
//     ],
//   };
//   const event = Animated.event([
//     {
//       nativeEvent: {
//         contentOffset: {
//           y: ballAnimatedValue,

//         }
//       }
//     }
//   ])

//   const renderDataItem = ({ item, index }) => {
//     return (
//       <View style={{ width: responsiveWidth(90), justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue', padding: 10, marginBottom: 2 }}>
//         <Text style={{ fontSize: responsiveFontSize(2) }}>{item}</Text>
//       </View>
//     )
//   }
//   return (
//     <View style={styles.container}>
//       <Text style={{ fontSize: responsiveFontSize(3), alignSelf: 'center', marginBottom: responsiveHeight(2.5) }}>Google account</Text>

//       <Animated.View style={[styles.ball, animStyle, { zIndex: 100 }]}>
//         <Image source={require('../assets/images/userImage.jpeg')}
//           //  resizeMode ='contain' 
//           style={{ flex: 1, width: 90, height: 110, borderRadius: 100 }} />
//       </Animated.View>

//       <Animated.View style={{ transform: [{ translateY: nameYValue }], opacity: nameOpacity, alignItems: "center", justifyContent: 'center', marginTop: responsiveHeight(2), height: 60, zIndex: 100, position: 'absolute', top: responsiveHeight(20) }}>
//         <Text style={{ fontSize: responsiveFontSize(2.5) }}>Shelja Sharma</Text>
//         <Text style={{ fontSize: responsiveFontSize(2) }}>sheljasharma@gmail.com</Text>
//       </Animated.View>


//       {/* <FlatList data={[1,2,3,4,5,6,7,8,9,11,32,65,89,76,54,43,432,9,34,76,87,76,56,43]}
//         renderItem = {renderDataItem} 
//         contentContainerStyle = {{marginTop:responsiveHeight(20),padding:20}} 
//         onScroll ={(e)=>{
//           console.log("animation value is",e.nativeEvent.contentOffset)
//           ballAnimatedValue.setValue(e.nativeEvent.contentOffset.y),
//           nameAnimatedValue.setValue(e.nativeEvent.contentOffset.y)
//         }}
//         // onScroll = {event}
//         //onScrollBeginDrag = {()=>moveBall()}  
//         /> */}

//       <ScrollView
//         contentContainerStyle={{ marginTop: responsiveHeight(20) }}


//         onScroll={(e) => {
//           console.log("animation value is", e.nativeEvent.contentOffset)
//           ballAnimatedValue.setValue(e.nativeEvent.contentOffset.y),
//             nameAnimatedValue.setValue(e.nativeEvent.contentOffset.y)
//         }}
//       // onScroll = {event}
//       //onScrollBeginDrag = {()=>moveBall()}  
//       >
//         <Tab.Navigator style = {{backgroundColor:'red',width:responsiveWidth(90)}} 
//         tabBarOptions = {{labelStyle:{fontSize:responsiveFontSize(1.6),fontWeight:'bold'}}}>
//           <Tab.Screen name="Home" component={HomeScreen} />
//           <Tab.Screen name="Information" component={SettingScreen} />
//           <Tab.Screen name="Setting" component={CheckScreen} />

//         </Tab.Navigator>



//       </ScrollView>



//     </View>
//   );
// };




// export default UserProfile
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingVertical: responsiveHeight(3),
//     // justifyContent:'center',
//     alignItems: 'center',
//     // marginTop:100
//   },
//   ball: {
//     flex: 1,
//     width: 90,
//     height: 90,
//     borderRadius: 100,
//     // backgroundColor: 'red',
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignSelf: 'center',
//     position: 'absolute',
//     top: responsiveHeight(10), left: responsiveWidth(40),
//   },
//   text: {
//     fontWeight: 'bold',
//     color: 'white',
//     fontSize: 32
//   }
// });




//14th may  changes 

import React, { useRef, useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Animated, Image, ScrollView } from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';
import CheckScreen from './CheckScree';

const Tab = createMaterialTopTabNavigator();

const UserProfile = () => {

  const ballAnimatedValue = useRef(new Animated.Value(0)).current;
  const nameAnimatedValue = useRef(new Animated.Value(0)).current;
  // const moveBall = () => {
  //   Animated.timing(ballAnimatedValue, {
  //     toValue: 1,
  //     duration: 4000,
  //     useNativeDriver: true,

  //   }).start();
  // };

  const diffClamp = Animated.diffClamp(ballAnimatedValue, 0, 0)
  const nameYValue = nameAnimatedValue.interpolate({
    inputRange: [0, responsiveHeight(10)],
    outputRange: [0, -responsiveHeight(10)]
  })
  const nameOpacity = nameAnimatedValue.interpolate({
    inputRange: [0, responsiveHeight(10)],
    outputRange: [1, 0]
  })


  const xVal = ballAnimatedValue.interpolate({
    inputRange: [0, 90, 180],
    outputRange: [0, responsiveWidth(45) * 0.5, responsiveWidth(45)],
    extrapolate: 'clamp'
  });

  const yVal = ballAnimatedValue.interpolate({
    inputRange: [0, 90, 180],
    outputRange: [0, -responsiveHeight(12) * 0.5, -responsiveHeight(12)],
    extrapolate: 'clamp'
  });
  // const imageopacity = ballAnimatedValue.interpolate({
  //     inputRange:[0,10],
  //     outputRange:[1,0]
  // })
  const scaleVal = ballAnimatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: [1, 0.4],
    extrapolate: 'clamp'
  })

  const animStyle = {
    transform: [
      {
        translateY: yVal
      },
      { translateX: xVal },
      {
        scale: scaleVal
      }
    ],
  };
  const event = Animated.event([
    {
      nativeEvent: {
        contentOffset: {
          y: ballAnimatedValue,

        }
      }
    }
  ])

  // const renderDataItem = ({ item, index }) => {
  //   return (
  //     <View style={{ width: responsiveWidth(90), justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue', padding: 10, marginBottom: 2 }}>
  //       <Text style={{ fontSize: responsiveFontSize(2) }}>{item}</Text>
  //     </View>
  //   )
  // }
  return (
    <View style={styles.container}>
      <Text style={styles.headingStyle}>Google account</Text>

      <Animated.View style={[styles.ball, animStyle, { zIndex: 100 }]}>
        <Image source={require('../assets/images/userImage.jpeg')}
          style={styles.imageStyle}
        />
      </Animated.View>

      <Animated.View style={[{
        transform: [{ translateY: nameYValue }],
      }, styles.detailsStyle, { opacity: nameOpacity, }

      ]}>
        <Text style={{ fontSize: responsiveFontSize(2.5) }}>Shelja Sharma</Text>
        <Text style={{ fontSize: responsiveFontSize(2) }}>sheljasharma@gmail.com</Text>
      </Animated.View>


      {/* <FlatList data={[1,2,3,4,5,6,7,8,9,11,32,65,89,76,54,43,432,9,34,76,87,76,56,43]}
        renderItem = {renderDataItem} 
        contentContainerStyle = {{marginTop:responsiveHeight(20),padding:20}} 
        onScroll ={(e)=>{
          console.log("animation value is",e.nativeEvent.contentOffset)
          ballAnimatedValue.setValue(e.nativeEvent.contentOffset.y),
          nameAnimatedValue.setValue(e.nativeEvent.contentOffset.y)
        }}
        // onScroll = {event}
        //onScrollBeginDrag = {()=>moveBall()}  
        /> */}

      <ScrollView
        contentContainerStyle={{ marginTop: responsiveHeight(23) }}

        onScroll={(e) => {
          console.log("animation value is", e.nativeEvent.contentOffset)
          ballAnimatedValue.setValue(e.nativeEvent.contentOffset.y),
            nameAnimatedValue.setValue(e.nativeEvent.contentOffset.y)
        }}
      // onScroll = {event}
      //onScrollBeginDrag = {()=>moveBall()}  
      >
        <Tab.Navigator style={{ backgroundColor: 'red', width: responsiveWidth(90) }}
          tabBarOptions={{ labelStyle: { fontWeight: 'bold' } }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Information" component={SettingScreen} />
          <Tab.Screen name="Setting" component={CheckScreen} />

        </Tab.Navigator>



      </ScrollView>



    </View>
  );
};




export default UserProfile
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: responsiveHeight(3),
    // justifyContent:'center',
    alignItems: 'center',
    // marginTop:100
  },
  ball: {
    flex: 1,
    width: responsiveWidth(20),
    height: responsiveHeight(10),
    borderRadius: 100,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top: responsiveHeight(10), left: responsiveWidth(40),
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 32
  },
  headingStyle: {
    fontSize: responsiveFontSize(3),
    alignSelf: 'center',
    marginBottom: responsiveHeight(2.5)
  },
  imageStyle: {
    flex: 1,
    width: responsiveWidth(20),
    height: responsiveHeight(10),
    borderRadius: 100
  },
  detailsStyle: {

    alignItems: "center",
    justifyContent: 'center',
    marginTop: responsiveHeight(2),
    height: responsiveHeight(10),
    zIndex: 100, position: 'absolute', top: responsiveHeight(20)
  }
});



//end 14th may change

