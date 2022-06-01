import React  , {Component}from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from '@expo/vector-icons';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
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
    FlatList,
  } from "react-native";
  const { width, height } = Dimensions.get("screen");

   class UserProfile extends Component{
    static navigationOptions={
      title:"UserProfile"
    
      }
 constructor(props){
super(props) ; 

 }

 render(){
  const {navigate} = this.props.navigation 

return (
<View>
<View style = {styles.container}>
  <Pressable onPress={()=>{

navigate("Home")

  }}>
<Image  style={{
 position:"absolute" , 
 left:width*0.05 , 
 top:height*0.12 , 

}} source={require("../../assets/images/close.png")} />
</Pressable>

<Image  style={{
position:"absolute" , 
width:"10%",
height:'8%', 
top:height*0.1 , 
left:width*0.5,

}} source = {require("../../assets/images/logo.png")}/>

<Image
style={{
position:"absolute" , 
zIndex:2,
top:height*0.23 , 
left:width*0.1,
}}
source={require("../../assets/images/bechir.png")}
/>

<View style={{
position:"absolute" ,
backgroundColor:"#E3FDFD" , 
width:"100%" , 
height:"60%"  , 
top : height*0.3 , 
left:width*0.01,
borderRadius:30,

}}>
<Text style={{
 position:"absolute" , 
 fontWeight:"700" , 
 fontSize:22 , 
 left:width*0.4,
 top : height*0.07

}}>

Ghaoui Bechir 


</Text>

<Text style={{
 position:"absolute" , 
 fontWeight:"700" , 
 fontSize:15 , 
 left:width*0.05,
 top : height*0.2

}}>

Editer votre profile

</Text>

<Text style={{
 position:"absolute" , 
 zIndex:5,
 fontWeight:"700" , 
 fontSize:15 , 
 left:width*0.05,
 top : height*0.25

}}>

Historique
</Text>


<Text style={{
 position:"absolute" , 
 zIndex:5,
 fontWeight:"700" , 
 fontSize:15 , 
 left:width*0.05,
 top : height*0.3

}}>

Paramètres
</Text>

<Text style={{
 position:"absolute" , 
 zIndex:5,
 fontWeight:"700" , 
 fontSize:15 , 
 left:width*0.05,
 top : height*0.35

}}>

Statistiques
</Text>

<Text style={{
 position:"absolute" , 
 zIndex:5,
 fontWeight:"700" , 
 fontSize:15 , 
 left:width*0.05,
 top : height*0.4

}}>

Mentions légales
</Text>
<Text style={{
 position:"absolute" , 
 zIndex:5,
 fontWeight:"700" , 
 fontSize:15 , 
 left:width*0.05,
 top : height*0.45

}}>

Contacter l’assistance
</Text>

<Text style={{
 position:"absolute" , 
 zIndex:5,
 fontWeight:"700" , 
 fontSize:15 , 
 left:width*0.35,
 top : height*0.54



}}>
  Se déconnecter

</Text>
</View>
<View style={{
 position:"absolute" , 
 top : height*0.89 ,
 right : width * 0.9 ,  
height:"20%" , 
width:"30%" , 
backgroundColor:"rgba(113, 201, 206, 0.5)" , 
borderRadius:40, 
transform : [{rotate:"55.35deg"}] 
}}>
 


</View>
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
    export default withNavigation(UserProfile);