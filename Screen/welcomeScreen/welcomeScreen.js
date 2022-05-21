import React  , {Component}from 'react';
import { LinearGradient } from "expo-linear-gradient";
import normalize from 'react-native-normalize';

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
import { Colors } from 'react-native/Libraries/NewAppScreen';
  var { width, height } = Dimensions.get("screen");
 width=300 
 height = 650
 const MontserratB = null 
class Welcome extends Component {
constructor(props){
super(props)
}
render(){
    return (
        <View>
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
          <Text style = {styles.text4} >Soyer les bienvenues</Text>
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
        top:normalize(180,'height') ,
        left:normalize(120) , 
       width:normalize(120),
       height: normalize(164),

    },
    text4 : {
      fontSize:17  , 
      fontWeight:'700' , 
  right: 7,
    }, 
    text : {
       zIndex:4,
       top:normalize(350,'height') , 
       left : normalize(110)   , 
       fontSize:20  , 
       fontWeight:'700' , 
    } , 
    continueButtonStyle: {
      color:"#71C9CE ",
      zIndex:4,
      borderRadius:30,
      alignItems: "center",
      justifyContent: "center",
      marginTop: normalize(510,'height'),
     left : normalize(50),
      marginBottom: normalize(300,'height'),
      height: normalize(59.0),
      width:normalize(283),
    },
  
    text1 : {

      zIndex:4,
      top:normalize(345,'height') , 
      left : normalize(132)   , 
      fontSize:20   , 
      fontWeight:'700' , 
      textAlign:"left",

    },
    text2: {

      zIndex:4,
      top:normalize(340,'height') , 
      left : normalize(110)   , 
      fontSize:25   , 
      fontWeight:'900' ,
          
      textAlign:"left",
      color:"#71C9CE"
    },
    botton : {
      zIndex:3,
      marginVertical: 8,

      top:normalize(530,'height') , 
      left :normalize(80)   , 
      fontSize:25  , 
      fontWeight:'700' ,
borderColor:"red" ,
borderRadius:200

    },
    cadre : {
        position:"absolute",
        top: normalize(30,'height') , 
       right :normalize(280)  ,
       width:normalize(200),
       borderRadius:40,
       height:normalize(200), 
        backgroundColor: "#71c9ce",
        transform : [{rotate:"55.35deg"}] , 
    } , 
    cadre1 : {
        position:"absolute",
        bottom: normalize(340,'height') , 
        left :normalize(290),
        width:normalize(200),
        borderRadius:40,
        height:normalize(200), 
         backgroundColor: "#E3FDFD",
         transform : [{rotate:"55.35deg"}] , 

    } , 
    cadre2 : {

        position:"absolute",
        backgroundColor: "#F1F5F8",
        transform : [{rotate:"-42.66deg"}] , 
        width:normalize(200),
        height:normalize(200), 
        bottom:normalize(10) , 
        borderRadius:40,
        right :normalize(210)  ,
        opacity: 1,
    }
})
export default Welcome