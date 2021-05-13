import React, {useEffect, useState} from 'react';
import {View, Animated, StyleSheet, Text, TouchableOpacity, PanResponder, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NewDragDrop = ({navigation}) => {
    // const {imagePicture} = route.params
    // console.log("item image is",JSON.stringify(imagePicture))
  const startValue = new Animated.Value(1);
  const endValue = 2;
  const duration = 5000;
  const [dropZone, setDropZone] = useState(null)
  
  const  pan = new Animated.ValueXY()
  const [imageval,setImageval] = useState(true)

//   useEffect(() => {
    
//   }, [startValue,endValue, duration]);

 const onclickFun = (passedval)=>{
    Animated.timing(startValue, {
        toValue: passedval,
        duration: duration,
        useNativeDriver: false,
      }).start();
  }

  const setDropZoneValues =(event)=>{
      console.log("event values is",event.nativeEvent.layout)
      setDropZone( event.nativeEvent.layout);
  }

  const isDropZone = (gesture)=>{
        //console.log("gesture is",gesture.moveY)
        const dz = dropZone
        //console.log("drop zone value is",dz.y)
        return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
  }

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder    : () => true,
    onMoveShouldSetPanResponder     : () => true,
    onPanResponderTerminate         : () => console.log("on pan responder terminate"),
    onPanResponderMove              : Animated.event([null,{
        dx  : pan.x,
        dy  : pan.y
    }]),
    onPanResponderRelease           : (e, gesture) => {
        if(isDropZone(gesture)){
            setImageval(false)
           
        }
        else(
            Animated.spring(pan,{toValue:{x:0,y:0}}).start()
        )
    }
});

const dropImageFun = ()=>{
    if(imageval){
        return(
            <Animated.Image
            source = {require("../assets/images/image1.png")}
           style={[pan.getLayout(),
             styles.square,
             {
               transform: [
                 {
                   scale: startValue,
                 },
               ],
             },
           ]}
           {...panResponder.panHandlers}
         />
        )
    }
}

  return (
    <View style={styles.container}>
        
        <TouchableOpacity onPress = {()=>navigation.goBack()} style = {{position:"absolute",top:10,left:20}} >
            <Ionicons name = "arrow-back-circle" size = {30} />
        </TouchableOpacity>
    
      <View style = {styles.dropZoneStyle}   onLayout={setDropZoneValues.bind(this)}>

      </View>
      {dropImageFun()}


      <TouchableOpacity onPress = {()=>onclickFun(1.5)} style = {{backgroundColor:'lightblue',padding:10,position:'absolute',bottom:10,alignSelf:'center',justifyContent:'center',alignItems:'center'}}>

          <Text style = {{fontSize:20}}>Increase Size</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {()=>onclickFun(1)} style = {{backgroundColor:'lightblue',padding:10,position:'absolute',bottom:60,alignSelf:'center',justifyContent:'center',alignItems:'center'}}>

          <Text style = {{fontSize:20}}>Decrese Size</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  square: {
    height: 150,
    width: 150,
    alignSelf:'center',
    marginTop:50,
    zIndex:1000
   // backgroundColor: 'blue',
  },
  dropZoneStyle:{
      width:'100%',
      height:200,
      backgroundColor:'lightcoral',
      marginTop:50
  }
});

export default NewDragDrop;