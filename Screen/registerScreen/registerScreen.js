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
  export default class Register extends Component{
constructor(props){
super(props) 
}
render(){
console.log(height,' ',width)
var arr =["Mail" , "Numero de telephone", "Mot de passe" ]
return(
<View>
<View style={styles.container}>
    <Text style ={styles.greyRec}> </Text>
        <Text style={styles.blueRec}></Text>
        <Image style={styles.image} source ={require("../../assets/images/worker.png")}/>
        <Text style ={styles.Name}>Nom et Prénom</Text>
        <Text style={styles.input1}></Text>
        <TextInput style={styles.nameInput} />
        {arr.map((elem, index)=> {
            return (
                <View>
           <Text key={index} style ={{
            position:'absolute', 
            top:351+((index+1) * 60),
            left:13,
            fontWeight:'700', 
            fontSize:17,
             }}>{elem}</Text>
             <Text style={{    position:"absolute",
    backgroundColor:"black" ,
     borderColor:0.1,    
      top:395 + (index+1)*60,
  left: 7 ,
  height:2 , 
  width:300 , 
}}></Text>
           <TextInput style={{
      position:"absolute" , 
      top:370+ (index+1)*60, 
      left :7 , 
      width:400,
           }} secureTextEntry={elem=="Mot de passe"? true:false}/>
</View>
            )
        })}
        <Text style ={{
     position:"absolute" , 
     top : 365+(arr.length+1)*60,
     left:13,
     fontWeight:'700', 
     fontSize:17,
        

        }}>Date de naissance</Text>
        <Text style ={{
  position:"absolute" , 
  top:365+(arr.length+1) * 60,
  left: 230,
  fontWeight:'700', 
  fontSize:17,

        }}>.../.../....</Text>

       <TextInput style={{
       top:362+(arr.length+1) * 60,
       left: 230,
       width:16,

       }}></TextInput> 
       
       <TextInput style={{
       top:335+(arr.length+1) * 60,
       left: 250,
       width:16,

       }}></TextInput> 
       
       <TextInput style={{
       top:305+(arr.length+1) * 60,
       left: 270,
       width:22,
       }}></TextInput> 
       <Image style={styles.google} source = {require("../../assets/images/google.png")} />
<Image style={styles.facebook} source = {require("../../assets/images/facebook.png")} />
<Text style = {styles.utilise}>ou utilisé</Text>
<LinearGradient
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          colors={['rgba(113, 201, 206, 1)', 'rgba(113, 201, 206, 1))',]}
          style={styles.continueButtonStyle}
        >
          <Text  style = {styles.text3} >Register</Text>
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
   text3:{
fontWeight:"700",
fontSize:20

   },
  
  google:{
    position:"absolute",
   top:635 ,
   left:  140, 
  },
  facebook :{
    position:"absolute",
    zIndex:4,
  top: 635,
  left:210,
  },
  utilise:{
    position:"absolute",
    fontWeight:"700" , 
    fontSize:20,
    top:640,
    left: 15 ,
    
    
  
   }, 
  
  greyRec:{
position:"absolute",
width:257, 
height:236 , 
backgroundColor: "#F1F5F8",
top:350,
right:230,
transform : [{rotate:"-61.58deg"}] , 
borderRadius:40,
  },
  blueRec:{
    position:"absolute",
    backgroundColor: "#E3FDFD",
    transform : [{rotate:"144.44deg"}] , 
    width:180, 
    height:800 ,
    bottom:150, 
       left:150,      
  },
 image:{
position:"absolute",
zIndex:4,
top:50,
left:30,
//-4.26deg
// so hight = 800 and widht = 360 
// top + = currhigh - hight  
// 
transform : [{rotate:"-4.26deg"}] , 
 },
Name:{
position:'absolute', 
top:351,
left:13,
fontWeight:'700', 
fontSize:17,
},
input1 : {
    position:"absolute",
    backgroundColor:"black" ,
     borderColor:0.1,    
      top:395,
  left: 7 ,
  height:2 , 
  width:300 , 
  },
  nameInput:{
      position:"absolute" , 
      top:370, 
      left :7 , 
      width:400,
  },
  })