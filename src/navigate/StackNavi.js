import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HeaderScroll from '../screens/HeaderScroll';
import DragDrop from '../screens/DragDrop';
import NewDragDrop from '../screens/NewDragDrop';
import DragFlatList from '../screens/DragFlatList';
import UserProfile from '../screens/UserProfile';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';


const stack = createStackNavigator()
const StackNavi = ()=>{
    return(
        <NavigationContainer>
            <stack.Navigator headerMode = {false}>
                <stack.Screen name = "HeaderScroll" component = {HeaderScroll}/>
                <stack.Screen name = "DragAndDrop" component = {DragDrop} />
                <stack.Screen name = "NewDragDrop" component = {NewDragDrop} />
                <stack.Screen name = "DragFlatList" component = {DragFlatList} />
                <stack.Screen name = "UserProfile" component = {UserProfile} />
                <stack.Screen name="Home" component={HomeScreen} />
                <stack.Screen name="Settings" component={SettingScreen} /> 
                
            </stack.Navigator>
        </NavigationContainer>
    )
}


export default StackNavi