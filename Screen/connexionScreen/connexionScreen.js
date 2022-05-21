import React  , {Component}from 'react';
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
  } from "react-native";
  import { LinearGradient } from "expo-linear-gradient";
  const { width, height } = Dimensions.get("screen");
class Connexion extends Component {
constructor(props){
super(props) 
}
render(){
return (
  <View> 
<View style = {styles.container}>
<Image source = {require("../../assets/images/logo.png")} style = {styles.image}/>
<Text style ={styles.text}> </Text>
<Image source={require ("../../assets/images/image1.png")}  style = {styles.image1}/>
<LinearGradient
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          colors={['rgba(113, 201, 206, 1)', 'rgba(113, 201, 206, 1))',]}
          style={styles.continueButtonStyle}
        >
          <Text  style = {styles.text3} >Connexion</Text>
        </LinearGradient>
        <Pressable style ={styles.botton}>
<Text style = {styles.text2}>Register</Text>
</Pressable>


</View>
</View>

)

}

}const styles = StyleSheet.create({
    container: {
      backgroundColor: "#E3FDFD",
      height:height , 
      width: width , 
    } , 
    botton : {
         height:53 , 
         width:270 , 
         bottom:height*0.2  ,
         left : width*0.15 , 
 backgroundColor:"white" ,
 borderColor:"black", 
elevation:4,
borderWidth:2,
 borderRadius:40 , 






    } , 
    text2 : {

         left :width*0.28  ,
         top : height * 0.015 ,
         fontWeight:'700', 
    }, 
    text3 : {
        fontWeight:'700', 
        color:"white"

    },
    image: {
        position:"absolute",
          top:  height * 0.1,
          left:width*0.35 , 
         width:120,
         height:164,
  
      },
      image1: {
        bottom :height * 0.28 , 



      },
      text : {
backgroundColor : "#FFFFFF" , 
height:500 , 
width:width , 
top : height *0.37 ,
borderRadius:40,
      },
      continueButtonStyle: {
          position:"absolute",
        color:"#71C9CE ",
        zIndex:4,
        borderRadius:30,
        alignItems: "center",
        justifyContent: "center",
        marginTop: height * 0.84,
        left : width*0.13 , 
        height: 59.0,
        width:283,
      },
      continueButtonStyle1: {
        position:"absolute",
      color:"#71C9CE ",
      zIndex:4,
      borderRadius:30,
      alignItems: "center",
      justifyContent: "center",
      //image.png
      marginTop: 550,
     left : 50,
     top:50 , 
      marginBottom: 100,
      height: 59.0,
      width:283,
    },
   
})

export default Connexion