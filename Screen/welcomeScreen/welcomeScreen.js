import React  , {Component}from 'react';
import { LinearGradient } from "expo-linear-gradient";
import normalize from 'react-native-normalize';
import { useNavigation } from '@react-navigation/native'

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
  } from "react-native";
  var { width, height } = Dimensions.get("screen");

 const MontserratB = null 


class Welcome extends Component {
  static navigationOptions={
  title:"Welcome"

  }
render(){
  const {navigate} = this.props.navigation 
    return (
        <View>
                <StatusBar hidden = {false}  translucent = {true}/>

          <Image source={require("../../assets/images/logo.png")} style = {styles.image}/>
<View style = {styles.container}> 
<Text style = {styles.text}>Profitez de votre</Text>
<Text style = {styles.text1}>service Avec</Text>
<Text style = {styles.text2}>Knock Knock</Text>

        <LinearGradient
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          colors={['rgba(113, 201, 206, 1)', 'rgba(113, 201, 206, 1))',]}
          style={styles.continueButtonStyle}

        >
          <Text style = {styles.text4}         onPress={()=>{
 navigate("Connexion")
         }} >Soyer les bienvenues</Text>
        </LinearGradient>
  <Text style ={styles.cadre}>                    </Text>
<Text style ={styles.cadre1}> </Text>
<Text style = {styles.cadre2}></Text>
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
      flex: 1 
    } , 
    image: {
      position:"absolute",
      zIndex:3,
        top:height * 0.2 ,
        left:width*0.35 ,
         
       width:normalize(120),
       height: normalize(164),

    },
    text4 : {
      fontSize:17  , 
      fontWeight:'700' , 
    }, 
    text : {
      position:"absolute", 

       zIndex:4,
       top:height*0.45 , 
       left : width*0.3   , 
       fontSize:20  , 
       fontWeight:'700' , 
    } , 
    continueButtonStyle: {
      color:"#71C9CE ",
      zIndex:4,
      borderRadius:30,
      alignItems: "center",
      justifyContent: "center",
      marginTop: height*0.7,
     left : width*0.1,
      height: normalize(59.0),
      width:normalize(283),
    },
  
    text1 : {
      position:"absolute", 

      zIndex:4,
      top:height * 0.48, 
      left : width*0.35   , 
      fontSize:20   , 
      fontWeight:'700' , 
      textAlign:"left",

    },
    text2: {
      position:"absolute", 

      zIndex:4,
      top:height * 0.52, 
      left : width*0.31   , 
      fontSize:25   , 
      fontWeight:'900' ,
          
      textAlign:"left",
      color:"#71C9CE"
    },
    botton : {

      zIndex:3,
      marginVertical: 8,

      top:height* 0.53 , 
      left :width   , 
      fontSize:25  , 
      fontWeight:'700' ,
borderColor:"red" ,
borderRadius:200

    },
    cadre : {
      
        position:"absolute",
        top: height*0.002,
       right :width * 0.7  ,
/*
 right 280 , 
*/
       width:normalize(200),
       borderRadius:40,
       height:normalize(200), 
        backgroundColor: "#71c9ce",
        transform : [{rotate:"55.35deg"}] , 
    } , 
    cadre1 : {
        position:"absolute",
        zIndex:3,
        top: height * 0.3,
        left :width * 0.76,
        width:normalize(200),
        borderRadius:40,
        height:normalize(200), 
         backgroundColor: "#E3FDFD",
         transform : [{rotate:"55.35deg"}] , 

    } , 
    cadre2 : {

        position:"absolute",
        zIndex:6,
        backgroundColor: "#F1F5F8",
        transform : [{rotate:"-42.66deg"}] , 
        width:(200),
        height:(200), 
        top:height* 0.8, 
        borderRadius:40,
        right : width * 0.7  ,
        opacity: 1,
    }
})
export default Welcome