import React, { useState, useCallback } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import DraggableFlatList, {
  RenderItemParams,
} from "react-native-draggable-flatlist";

const NUM_ITEMS = 10;

// function getColor(i) {
//   const multiplier = 255 / (NUM_ITEMS - 1);
//   const colorVal = i * multiplier;
//   return `rgb(${colorVal}, ${Math.abs(255   +colorVal)}, ${255 - colorVal})`;
// }

// const exampleData  = [...Array(20)].map((d, index) => {
//   const backgroundColor = getColor(index);
//   return {
//     key: `item-${backgroundColor}`,
//     label: index,
//     backgroundColor
//   };
// });

const exampleData = [{backgroundColor:'blue',key:1,label:1},
{backgroundColor:'green',key:2,label:2},
{backgroundColor:'lightblue',key:3,label:3},
{backgroundColor:'lightgreen',key:4,label:4},
{backgroundColor:'lightcoral',key:5,label:5},
{backgroundColor:'yellow',key:6,label:6},
{backgroundColor:'purple',key:7,label:7},
{backgroundColor:'orange',key:8,label:8}]


function DragFlatList() {
  const [data, setData] = useState(exampleData);

  const renderItem = 
    ({ item, index, drag, isActive }) => {
      return (
        <TouchableOpacity
          style={{
            height: 100,
            backgroundColor: isActive ? "red" : item.backgroundColor,
            alignItems: "center",
            justifyContent: "center",
          }}
          onLongPress={drag}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: 32,
            }}
          >
            {item.label}
          </Text>
        </TouchableOpacity>
      );
    }
   

  return (
    <View style={{ flex: 1 }}>
      <DraggableFlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `draggable-item-${item.key}`}
        onDragEnd={({ data }) => setData(data)}
      />
    </View>
  );
}

export default DragFlatList;