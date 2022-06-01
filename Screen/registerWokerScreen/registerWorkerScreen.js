import React  , {Component}from 'react';
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
  import { LinearGradient } from "expo-linear-gradient";
 const width = Dimensions.get("window").width
 var height = Dimensions.get("window").height 
 height-=55
 class RegisterWorker extends Component {
  
render(){
return (

<View style= {styles.container}>
<StatusBar hidden = {true}  translucent = {true}/>

<View>

<Text style={{
     top : height  * 0.1,
     left : width * 0.35 ,
     fontWeight:"700"  , 
     fontSize:20 , 
}} >Informations</Text>

</View>
<View style={{
position:"absolute"  , 
width  : width * 0.35 , 
height : height * 0.9 ,
backgroundColor:"#E3FDFD" ,
bottom: height * 0.38 ,
left : width  * 0.8 ,
borderRadius:40 , 
transform : [{rotate:"-138.41deg"}]
}}> 
</View>
<View style={{
position:"absolute" , 
height  : height  * 0.4 ,
width  : width * 0.6 , 
bottom  :height * 0.67 , 
right : width * 0.9 ,  
borderRadius:40 , 
transform  : [{rotate : "-68.58deg"}]  , 
backgroundColor:"#F1F5F8" , 

}}>
</View>

<Image source = {require("../../assets/images/logo.png")} style={{

position:"absolute"  , 
top  : height *  0.15 , 
left : width * 0.8 , 
height   : height * 0.1 , 
width : width * 0.1 , 
}} />

<Text style ={{
     position:"absolute"  , 
     fontWeight:"700" , 
     top : height  * 0.28,
     left : width * 0.04 ,
     fontSize:17 ,
}}>Numéro CIN </Text>


<TextInput style={{
position:"absolute" , 
top : height  * 0.28,
left : width * 0.4 ,
borderRadius:30 , 
width : width*0.4  ,
height: 34 , 
backgroundColor:"white",
borderColor:"#000000", 
borderWidth: 1, 

}}/>


<Text style={{
       position:"absolute"  , 
       fontWeight:"700" , 
       top : height  * 0.39,
       left : width * 0.04 ,
       fontSize:17 ,   
}}>
Photo de votre carte 


</Text>

<Text style={{
position:"absolute"  , 
fontWeight:"700" , 
top : height  * 0.42     ,
left : width * 0.14 ,
fontSize:17 ,     
}}>
d’identiter
</Text>
<Image style={{
position:"absolute" , 
top : height  * 0.39     ,
left : width * 0.6 ,


}} source = {require("../../assets/images/telecharger.png")}/>
<Image  style={{
     position:"absolute" , 
     top : height  * 0.39     ,
     left : width * 0.8 ,
     
}}source = {require("../../assets/images/camera.png")}/>


<Text style={{
    top : height  * 0.4     ,
    left : width * 0.58 ,
    fontWeight:"700" , 
    fontSize:11 , 
}}>
telecharger


</Text>

<Text Text style={{
     position:"absolute" , 
     top : height  * 0.43     ,
     left : width * 0.8 ,
     fontWeight:"700" , 
     fontSize:11 , 
}}>
camera
</Text>
<View  style={{
position:"absolute"  , 
backgroundColor:"#dcdcdc" ,
top: height * 0.48 , 
left : width * 0.02 , 
height  : 2 , 
width : width*0.9 , 
}}>
</View>

<Text style={{
position:"absolute"  ,
 fontWeight:"700" , 
 fontSize:17 , 
 top : height* 0.5 ,
 left: width * 0.05 

}}>
Biographie
</Text>

<TextInput
style={{
     position:"absolute" , 
     top : height  * 0.55,
     left : width * 0.1 ,
     borderRadius:30 , 
     width : width*0.8  ,
     height: height*0.08 , 
     backgroundColor:"white",
     borderColor:"#000000", 
     borderWidth: 1, 
     }}
/>


<Text style={{
     position:"absolute"  ,
     fontWeight:"700" , 
     fontSize:17 , 
     top : height* 0.68 ,
     left: width * 0.05 
}}>
Langue

</Text>

<TextInput style={{
position:"absolute" , 
top : height  * 0.68,
left : width * 0.31 ,
borderRadius:30 , 
width : width*0.4  ,
height: 34 , 
backgroundColor:"white",
borderColor:"#000000", 
borderWidth: 1, 

}}/>

<Text  style={{
     position:"absolute"  ,
     fontWeight:"700" , 
     fontSize:17 , 
     top : height* 0.77 ,
     left: width * 0.05 
}}>
Cerification

</Text>

<Image style={{
position:"absolute" , 
top : height* 0.77 ,
left : width * 0.6 ,


}} source = {require("../../assets/images/telecharger.png")}/>
<Image  style={{
     position:"absolute" , 
     top : height* 0.77 ,
     left : width * 0.8 ,
     
}}source = {require("../../assets/images/camera.png")}/>
<Text style={{
     top : height* 0.77 ,
     left : width * 0.58 ,
    fontWeight:"700" , 
    fontSize:11 , 
}}>
telecharger
</Text>
<Text Text style={{
     top : height* 0.75 ,
     left : width * 0.8 ,
     fontWeight:"700" , 
     fontSize:11 , 
}}>
camera
</Text>

<Text style={{
     position:"absolute"  ,
     fontWeight:"700" , 
     fontSize:17 , 
     top : height* 0.87 ,
     left: width * 0.05 
    
    
}}>
Adresse
</Text>

<TextInput style={{
position:"absolute" , 
top : height  * 0.86,
left : width * 0.33 ,
borderRadius:30 , 
width : width*0.4  ,
height: 34 , 
backgroundColor:"white",
borderColor:"#000000", 
borderWidth: 1, 
}}/>
<LinearGradient
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          colors={['rgba(113, 201, 206, 1)', 'rgba(113, 201, 206, 1))',]}
          style={styles.continueButtonStyle}
        >
          <Text  style = {{
fontWeight:"700" , 
fontSize:16, 

          }} onPress={()=>{
      navigate("Login")

          }} >Suivant</Text>
        </LinearGradient>
    


</View>
)

}

  }

  const styles = StyleSheet.create({
       container:{

        backgroundColor:'#FFFFFF' , 
        height:height , 
        width : width,

       } , 
       continueButtonStyle: {
          position:"absolute",
        color:"#71C9CE ",
        zIndex:4,
        borderRadius:30,
        alignItems: "center",
        justifyContent: "center",
        marginTop: height * 0.94,
        left : width*0.13 , 
        height: 59.0,
        width:283,
      },



  })
  export default withNavigation(RegisterWorker);