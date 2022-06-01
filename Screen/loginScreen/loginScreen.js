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
  const height = Dimensions.get("window").height

  class Login extends Component{
    static navigationOptions={
      title:"Login"
    
      }
    constructor(props){
super(props)

}
render(){
  const {navigate} = this.props.navigation 

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
          <Text  style = {styles.text3} onPress={()=>{
        navigate("Menu")

          }} >Connexion</Text>
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

 bottom:height * 0.7 ,
 left:  width * 0.12, 
 },
 input : {
   position:"absolute",
   backgroundColor:"black" ,
     borderRadius:100,
     top:height * 0.64,
left: width * 0.04 ,
height:2 , 
width:300 , 


 },
 input1:{
     position:"absolute" , 
     top:height  * 0.61,
     left: width * 0.04 ,
     width:300,

 },
 input2 : {
  position:"absolute",
  backgroundColor:"black" ,
    borderRadius:100,
    top:height * 0.75,
    left: width * 0.04 ,
    height:2 , 
width:300 , 


},

input3:{
  position:"absolute" , 
  top:height * 0.72,
  left: width * 0.04 ,
  width:300,

},

 Mail:{
position:"absolute" , 
top:height * 0.58,
left: width * 0.04 ,
fontWeight:"700" , 
fontSize:20,
 },
 Password:{
position:"absolute",
fontWeight:"700" , 
fontSize:20,
top:height * 0.68,
left: width * 0.04 ,




 },
 utilise:{
  position:"absolute",
  fontWeight:"700" , 
  fontSize:20,
  top:height * 0.8,
  left: width * 0.04 ,
  
  

 }, 

 facebook :{
   position:"absolute",
   zIndex:4,
   top:height * 0.78,
   left:width*0.52,
 },
 google:{
   position:"absolute",
   top:height * 0.78,
   left:width*0.35,
 },
 continueButtonStyle: {
  position:"absolute",
color:"#71C9CE ",
zIndex:4,
borderRadius:30,
alignItems: "center",
justifyContent: "center",
marginTop: height * 0.86,
left : width * 0.1,
marginBottom: 100,
height: 59.0,
width:283,
},


   text:{
       backgroundColor : "#E3FDFD", 
      width:500,  
      bottom:height * 0.18,
      right: width * 0.1 ,  
      height : 500,
      borderRadius:40 ,  
      transform : [{rotate:"55.35deg"}] , 

   },
   text1: {
       fontSize:22,
         bottom:height * 0.47,
left : width* 0.14,
fontWeight:"700",
        },
   image: { 
     position:"absolute",
      top: height * 0.3, 
      left: width * 0.33 , 
      width:100 , 
      height:150 , 
      

   
   } , 
   text3:{
    fontWeight:"700",
    fontSize:20
    
       },
    
})

export default withNavigation(Login);