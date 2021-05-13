// import React, { useState } from 'react'
// import { Animated, Dimensions, PanResponder, StyleSheet, Text, View } from 'react-native'
// let CIRCLE_RADIUS = 36;
// let Window = Dimensions.get('window');


// const DragDrop = () => {
//     const pan = new Animated.ValueXY()
//     const [dragable, setDragable] = useState(true)
//     const [dropZone, setdropZone] = useState(null)
//     const renderDraggable = () => {
//         if (dragable) {
//             return (
//                 <View style={styles.draggableContainer}>
//                     <Animated.View style={[pan.getLayout(), styles.circle]}
//                         {...panResponder.panHandlers}>
//                         <Text style={styles.text}>Drag me!</Text>
//                     </Animated.View>
//                 </View>
//             );
//         }

//     }
//     const setDropZoneValues = (event) => {      //Step 1
//         setdropZone(event.nativeEvent.layout);
//     }
//     const isDropZone = (gesture) => {     //Step 2
//         var dz = dropZone;
//         return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
//     }
//     const panResponder = PanResponder.create({    //Step 2
//         onStartShouldSetPanResponder: () => true,
//         onPanResponderMove: Animated.event([null, { //Step 3
//             dx: pan.x,
//             dy: pan.y
//         }],

//         ),
//         onPanResponderRelease: (e, gesture) => {
//             if (isDropZone(gesture)) { //Step 1
//                 setDragable({
//                     dragable: false //Step 3
//                 });
//             } else {
//                 Animated.spring(
//                    pan,
//                     { toValue: { x: 0, y: 0 } }
//                 ).start();
//             }
//         } //Step 4
//     });
//     return (
//         <View style={styles.mainContainer}>
//             <View style={styles.dropZone} onLayout={setDropZoneValues.bind(this)}  >
//                 <Text style={styles.text}>Drop me here!</Text>
//             </View>

//             {renderDraggable()}
//         </View>
//     );

// }

// export default DragDrop

// let styles = StyleSheet.create({
//     mainContainer: {
//         flex: 1
//     },
//     dropZone: {
//         height: 100,
//         backgroundColor: '#2c3e50'
//     },
//     text: {
//         marginTop: 25,
//         marginLeft: 5,
//         marginRight: 5,
//         textAlign: 'center',
//         color: '#fff'
//     },
//     draggableContainer: {
//         position: 'absolute',
//         top: Window.height / 2 - CIRCLE_RADIUS,
//         left: Window.width / 2 - CIRCLE_RADIUS,
//     },
//     circle: {
//         backgroundColor: '#1abc9c',
//         width: CIRCLE_RADIUS * 2,
//         height: CIRCLE_RADIUS * 2,
//         borderRadius: CIRCLE_RADIUS
//     }
// });


import React,{ Component } from 'react';
import { 
    StyleSheet,
    View,
    Text,
    PanResponder,
    Animated,
    Easing,
    Dimensions, 
    Image
} from 'react-native';

let CIRCLE_RADIUS = 36;
let Window = Dimensions.get('window');
export default class DragDrop extends Component{
    constructor(props){
        super(props);

        this.state = {
            showDraggable   : true,
            dropZoneValues  : null,
            pan             : new Animated.ValueXY()
        };

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder    : () => true,
            onMoveShouldSetPanResponder     : () => true,
            onPanResponderTerminate         : () => console.log("on pan responder terminate"),
            onPanResponderMove              : Animated.event([null,{
                dx  : this.state.pan.x,
                dy  : this.state.pan.y
            }]),
            onPanResponderRelease           : (e, gesture) => {
                console.log("gesture is ",gesture)
                if(this.isDropZone(gesture)){
                    this.setState({
                        showDraggable : false
                    });
                }else{
                    Animated.spring(
                        this.state.pan,
                        {toValue:{x:0,y:0}}
                    ).start();
                    //this.state.pan.flattenOffset()
                }
            }
        });
    }

    isDropZone(gesture){
        console.log('gesture movey',gesture.moveY)
      
        var dz = this.state.dropZoneValues;
        console.log("drop zone value is",dz)
        console.log("dropzone value y",dz.y,"height",dz.height)
        return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
    }

    setDropZoneValues(event){
        console.log("drop down event value",event.nativeEvent.layout)
        this.setState({
            dropZoneValues : event.nativeEvent.layout
        });
    }

    render(){
        return (
            <View style={styles.mainContainer}>
                <View
                    onLayout={this.setDropZoneValues.bind(this)}
                    style={styles.dropZone}>
                    <Text style={styles.text}>Drop me here!</Text>
                </View>

            {this.renderDraggable()}
           
            </View>
        );
    }

    renderDraggable(){
        if(this.state.showDraggable){
            return (
                <View style={styles.draggableContainer}>
                    <Animated.View 
                        {...this.panResponder.panHandlers}
                        style={[this.state.pan.getLayout(), styles.circle]}>
                        <Text style={styles.text}>Drag nm yuome!</Text>
                    </Animated.View>
{/* 
                    <View>
                        <Image resizeMode ='contain' source = {require('../assets/images/image1.png')} style = {{width:100,height:100,alignSelf:'center'}} />
                    </View> */}
                </View>
            );
        }
    }
}


let styles = StyleSheet.create({
    mainContainer: {
        flex    : 1,
        backgroundColor:'lightcoral'
    },
    dropZone    : {
        height  : 200,
        //width   : '100%',
        backgroundColor:'#2c3e50',
       // marginTop:100
    },
    text        : {
        marginTop   : 25,
        marginLeft  : 5,
        marginRight : 5,
        textAlign   : 'center',
        color       : '#fff'
    },
    draggableContainer: {
        position    : 'absolute',
        top         : Window.height/2 - CIRCLE_RADIUS,
        left        : Window.width/2 - CIRCLE_RADIUS,
    },
    circle      : {
        backgroundColor     : '#1abc9c',
        width               : CIRCLE_RADIUS*2,
        height              : CIRCLE_RADIUS*2,
        borderRadius        : CIRCLE_RADIUS
    }
});