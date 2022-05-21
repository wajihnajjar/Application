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
  } from "react-native";
  const { width, height } = Dimensions.get("screen");

  class Login extends Component{
constructor(props){
super(props)

}
render(){
return (
  <View>

<View style = {styles.container}>
<Text style = {styles.text}></Text>
<Text style ={styles.text1}>Knock Knock</Text>
<Image source={require("../../assets/images/logo.png")} style={styles.image}/>
<Image source = {require("../../assets/images/image2.png")} style = {styles.image1}/>

<TextInput style = {styles.input1} />
<Text style={styles.input}></Text> 
<Text style={styles.input2}></Text> 
<TextInput style = {styles.input3} secureTextEntry={true}/>

<Text  style = {styles.Mail}>Mail</Text>
<Text style= {styles.Password}>Mot de passe</Text>
<Text style = {styles.utilise}>ou utilisé</Text>

<Image style={styles.google} source = {require("../../assets/images/google.png")} />
<Image style={styles.facebook} source = {require("../../assets/images/facebook.png")} />
<LinearGradient
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          colors={['rgba(113, 201, 206, 1)', 'rgba(113, 201, 206, 1))',]}
          style={styles.continueButtonStyle}
        >
          <Text  style = {styles.text3} >Connexion</Text>
        </LinearGradient>

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
    } ,  
 image1 :{

 bottom:550 ,
 left:  40, 
 },
 input : {
   position:"absolute",
   backgroundColor:"black" ,
     borderRadius:100,
     top:515,
left: 15 ,
height:2 , 
width:300 , 


 },
 input1:{
     position:"absolute" , 
     top:485,
     left: 15 ,
     width:300,

 },
 input2 : {
  position:"absolute",
  backgroundColor:"black" ,
    borderRadius:100,
    top:610,
left: 15 ,
height:2 , 
width:300 , 


},

input3:{
  position:"absolute" , 
  top:584,
  left: 15 ,
  width:300,

},

 Mail:{
position:"absolute" , 
top:465,
left: 15 ,
fontWeight:"700" , 
fontSize:20,
 },
 Password:{
position:"absolute",
fontWeight:"700" , 
fontSize:20,
top:550,
left: 15 ,




 },
 utilise:{
  position:"absolute",
  fontWeight:"700" , 
  fontSize:20,
  top:640,
  left: 15 ,
  
  

 }, 

 facebook :{
   position:"absolute",
   zIndex:4,
 top: 630,
 left:190,
 },
 google:{
   position:"absolute",
  top:630 ,
  left:  120, 
 },
 continueButtonStyle: {
  position:"absolute",
color:"#71C9CE ",
zIndex:4,
borderRadius:30,
alignItems: "center",
justifyContent: "center",
marginTop: 550,
left : 30,
top:150 , 
marginBottom: 100,
height: 59.0,
width:283,
},


   text:{
       backgroundColor : "#E3FDFD", 
      width:500,  
      bottom:130,
      right: 30 ,  
      height : 500,
      borderRadius:40 ,  
      transform : [{rotate:"55.35deg"}] , 

   },
   text1: {
       fontSize:22,
         bottom:380,
left : 40,
fontWeight:"700",
        },
   image: { 
     position:"absolute",
      top: 240, 
      left: 120 , 
      width:100 , 
      height:150 , 
      

   
   } , 
   text3:{
    fontWeight:"700",
    fontSize:20
    
       },
    
})

  export default Login 