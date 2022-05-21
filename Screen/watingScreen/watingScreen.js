import React  , {Component}from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from '@expo/vector-icons';
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
export default class Wating extends Component{
constructor(props){
super(props)
}
render(){
return(
<View>
<View style ={styles.container}>
<Image  style={{
 position:"absolute" , 
 left:width*0.05 , 
 height:'4%' ,
 top:height*0.12 , 
 width:"9%" , 
}} source={require("../../assets/images/close.png")} />
<Image 
source = {require("../../assets/images/foulen.png")}
style={{
  position:"absolute" , 
  zIndex: 3 , 
  top : height*0.2 , 
  left : width * 0.4 , 
  borderRadius:200,
  height:'10%',
  width:'23%'
}}
/>
<Image  style={{
position:"absolute" , 
width:"10%",
height:'8%', 
top:height*0.1 , 
left:width*0.84,

}} source = {require("../../assets/images/logo.png")}/>
<Text style={{
position:"absolute" , 
top:height*0.12 ,

left : width*0.4 , 
fontSize:25 , 
fontWeight:"700" , 

}}>Profile


</Text>

<View style={{
position:"absolute"  , 
width:'80%',
height:'40%',
top:height*0.44 , 
left:width*0.12,
backgroundColor:"#E3FDFD",
borderRadius:60,

}}>

<Text style={{
fontWeight:"700",
fontSize:19,
left:width*0.2,
top:height*0.06,

}}>
 Appel en cours...


</Text>
</View>

<LinearGradient
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          colors={['rgba(248, 0, 0, 1)', 'rgba(248, 0, 0, 1))',]}
          style={styles.continueButtonStyle}
        >
          <Text  style = {{
        fontWeight:'700'  , 
        fontSize:16 ,
            color:"white",


          }} >Cancel</Text>
        </LinearGradient>
<Image 
style={{
position:"absolute",
width:"9%",
height:'3%', 
top:height*0.7 , 
left:width*0.46,

}}
source ={require("../../assets/images/mute.png")}/>
<Image
style={{
    position:"absolute",
    width:"9%",
    height:'3%', 
    top:height*0.7 , 
    left:width*0.27,
    
    

}}
source ={require("../../assets/images/parler.png")}/>
<Image  style={{
 position:"absolute",
 width:"9%",
 height:'3%', 
 top:height*0.7 , 
 left:width*0.67,
 
 

}}source ={require("../../assets/images/video.png")}/>


<Text style={{
position:"absolute" , 
width:'30%' , 
height:'15%'  , 
backgroundColor:"rgba(113, 201, 206, 0.5)" , 
borderRadius:40 , 
transform : [{rotate:"55.35deg"}] , 
top : height* 0.93, 
left:width*0.38, 

}}>


</Text>
    
<Text style ={{
position:"absolute" , 
top : height * 0.32 , 
left : width * 0.26, 
fontWeight:"700" , 
fontSize:24, 
}}>
Foulen Ben Foulen 
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
      continueButtonStyle: {
        position:"absolute",
      color:"#E3FDFD",
      zIndex:4,
      borderRadius:30,
      alignItems: "center",
      justifyContent: "center",
      marginTop: height * 0.58,
      left : width * 0.25,
      marginBottom: 100,
      height: height*0.09,
      width:width*0.54,
      },

    })