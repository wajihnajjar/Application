import React  , {Component}from 'react';
import { LinearGradient } from "expo-linear-gradient";
import {
    Text,
    View,
    SafeAreaView,
    StatusBar,
    InnerWrapper , 
    StyleSheet,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    Image,
    TextInput,
    Dimensions,
    Button,
    BackHandler,
    Animated,
    Pressable,
    FlatList,
  } from "react-native";
  const { width, height } = Dimensions.get("screen");
var service =[
{
  id:1,
 title: "jardinier" ,
 img :"../../assets/images/jardinier.png"

} , 
{
  id:2,

title : "electricien" , 
img : "../../assets/images/electricien.png"

} , 
{
  id:3,

title :"plombier" , 
img : "../../assets/images/plombier.png", 


}, 
{
  id:4,

title:"tansporteur" ,
img: "../../assets/images/tansporter.png" , 

},


]

export default class Menu extends Component{
constructor(props){
super(props) 
}
render(){
return(
<View>
<View style={styles.container}>
<Text style={styles.whiteSquare}> </Text>
<Text style={{
top:250,
left:70,
fontWeight:"700",
fontSize:22,
}}>Choisissez votre</Text>
<Text style ={{

top:250,
left:110,
fontWeight:"700",
fontSize:22,


}}>prestation


</Text>
<View style={{flex:1 , 

}}>
<FlatList
data={service} 
keyExtractor={({ id }) => id.toString()}
contentContainerStyle={{
  flexGrow: 1,
  }}
renderItem={({ item }) =>

<View style={{
 top : 290,
 right:10, 
 zIndex:4,
 flexDirection:"row" , 
  padding:20,

}}>
<Image   source={require("../../assets/images/jardinier.png")}/>
<Text style ={{
 padding:20,
 left:50,
 fontWeight:"700" , 
 fontSize:16,
}}>{item.title}</Text>
</View>
}
/>
</View>
</View>
</View>
)
}
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E3FDFD",
        height:height , 
        width: width , 
      }, 
       whiteSquare:{
          position:"absolute" , 
          backgroundColor:"#FFFFFF", 
          width:200 , 
          height:200,
top:250 ,
borderRadius:40,
left:300,
transform : [{rotate:"55.35deg"}] , 
       },
text:{
    position:"absolute" , 
    top:250 ,
    backgroundColor:"red",
fontSize:22 , 
fontWeight:"700" , 
left:150,
},
})