import React  , {Component}from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { withNavigation } from "react-navigation";

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
  const width = Dimensions.get("window").width
  var height = Dimensions.get("window").height 
   class Register extends Component{

    static navigationOptions={
      title:"Register"
    
      }
constructor(props){
super(props) 
}
render(){
  const {navigate} = this.props.navigation 

console.log(height,' ',width)
var arr =["Mail" , "Numero de telephone", "Mot de passe" ]
var padingFix  = 0.1 
   /*
      Name  : 0.43 
           0.49
           0.57

      Input : 0, 46 , 
      */
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
           <Text key={index+1} style ={{
            position:'absolute', 
            top:height*((padingFix * (0.7*index+1))+0.42 ),
            left:width * 0.03,
            fontWeight:'700', 
            fontSize:17,
             }}>{elem}</Text>
             <Text style={{    position:"absolute",
    backgroundColor:"black" ,
     borderColor:0.1,    
      top:height*((padingFix * (0.73*index+1))+0.47 ),
      left:width * 0.03,
      height:2 , 
  width:300 , 
}}></Text>
           <TextInput style={{
      position:"absolute" , 
      top:height*((padingFix * (0.73*index+1))+0.44 ),
      left:width * 0.03,
      width:400,
           }} secureTextEntry={elem=="Mot de passe"? true:false}/>
</View>
            )
        })}
        <Text style ={{
     position:"absolute" , 
     top : height * 0.76,
     left:width*0.03,
     fontWeight:'700', 
     fontSize:17,
        

        }}>Date de naissance</Text>
        <Text style ={{
  position:"absolute" , 
  top : height * 0.76,
    left: width*  0.6,
  fontWeight:'700', 
  fontSize:17,

        }}>.../.../....</Text>

       <TextInput style={{
  top : height * 0.76,
  left: width*0.6,
       width:16,
       }}></TextInput> 
       
       <TextInput style={{
  top : height * 0.724,
  left: width*0.66,
       width:16,

       }}></TextInput> 
       
       <TextInput style={{
  top : height * 0.690,
  left: width*0.72,
       width:22,

       }}></TextInput> 
       <Image style={styles.google} source = {require("../../assets/images/google.png")} />
<Image style={styles.facebook} source = {require("../../assets/images/facebook.png")} />
<Text style = {styles.utilise}>ou utilisé</Text>
<Pressable style={{
  position:"absolute",
}}  onPress={()=>{
      navigate("Menu")

          }} >
<LinearGradient
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          colors={['rgba(113, 201, 206, 1)', 'rgba(113, 201, 206, 1))',]}
          style={styles.continueButtonStyle}
        >
          <Text  style = {styles.text3} onPress={()=>{
      navigate("Menu")

          }} >Register</Text>
        </LinearGradient>
        </Pressable>
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
  marginTop: height * 0.88,
  left : width * 0.1,
  height: 59.0,
  width:283,
  },
   text3:{
fontWeight:"700",
fontSize:20

   },
  
  google:{
    position:"absolute",
   top:height * 0.8 ,
   left:  width * 0.41, 
  },
  facebook :{
    position:"absolute",
    zIndex:4,
    top:height * 0.8 ,
    left:  width * 0.57, 
  },
  utilise:{
    position:"absolute",
    fontWeight:"700" , 
    fontSize:20,
    top:height*0.81,
    left: width * 0.04 ,
    
    
  
   }, 
  
  greyRec:{
position:"absolute",
width:257, 
height:236 , 
backgroundColor: "#F1F5F8",
top:height * 0.4,
right:width * 0.7,
transform : [{rotate:"-61.58deg"}] , 
borderRadius:40,
  },
  blueRec:{
    position:"absolute",
    backgroundColor: "#E3FDFD",
    transform : [{rotate:"144.44deg"}] , 
    width:180, 
    height:800 ,
    bottom:height* 0.17, 
       left:width * 0.35,      
  },
 image:{
position:"absolute",
zIndex:4,
top:height * 0.06,
left:width* 0.1,
//-4.26deg
// so hight = 800 and widht = 360 
// top + = currhigh - hight  
// 
transform : [{rotate:"-4.26deg"}] , 
 },
Name:{
position:'absolute', 
top:height * 0.43,
left:width * 0.03,
fontWeight:'700', 
fontSize:17,
},
input1 : {
    position:"absolute",
    backgroundColor:"black" ,
     borderColor:0.1,    
      top:height * 0.49,
   
  left: width * 0.03 ,
  height:2 , 
  width:300 , 
  },
  nameInput:{
      position:"absolute" , 
      top:height* 0.46, 
      left :width * 0.03 , 
      width:400,
  },
  })
  export default withNavigation(Register);