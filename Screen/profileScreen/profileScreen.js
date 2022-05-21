import React  , {Component}from 'react';
import { LinearGradient } from "expo-linear-gradient";
import {
    Text,
    View,
    SafeAreaView,
    StatusBar,
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

export default class Profile extends Component{
constructor(props){
super(props)

}
render(){
return (
<View>
<View style ={styles.container}>

<Image  style={{
 position:"absolute" , 
 left:30 , 
 height:22 ,
 top:100 , 
 width:25 , 

}} source={require("../../assets/images/close.png")} />
<Text style={{
position:"absolute" , 
top:90 ,

left : 150 , 
fontSize:25 , 
fontWeight:"700" , 

}}>Profile


</Text>

<Image  style={{
position:"absolute" , 
width:40,
height:56, 
top:80 , 
left:300,

}} source = {require("../../assets/images/logo.png")}/>
<Text style={{
position:"absolute" , 
width:113 , 
height:149  , 
backgroundColor:"#E3FDFD" , 
borderRadius:40 , 
transform : [{rotate:"-142.91deg"}] , 
top:150 , 
left:300 , 

}}>


</Text>


<Text style={{
position:"absolute" , 
width:87 , 
height:118  , 
backgroundColor:"rgba(113, 201, 206, 0.5)" , 
borderRadius:40 , 
transform : [{rotate:"55.35deg"}] , 
bottom:-50, 
left:150, 

}}>


</Text>


<Text style={{
position:"absolute" , 
width:87 , 
height:402  , 
backgroundColor:"rgba(241, 245, 248, 1)" , 
borderRadius:40 , 
transform : [{rotate:"55.35deg"}] , 
top:300, 
left:20, 

}}>


</Text>

</View>
</View>

)

}


}

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#FFFFFF",
        height:height , 
        width: width , 
      }, 


})
