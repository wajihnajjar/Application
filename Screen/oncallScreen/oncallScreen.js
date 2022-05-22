import React  , {Component}from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from '@expo/vector-icons';
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
 class Oncall extends Component{
    static navigationOptions={
        title:"Oncall"
      
        }
constructor(props){
super(props)
}
showRating({ number }) {
  console.log(number)
  return (
      <View style={{ flexDirection: 'row', alignItems: 'center' , 
      }}>
          {
              (number == 5.0 || number == 4.0 || number == 3.0 || number == 2.0 || number == 1.0)
                  ?
                  <MaterialIcons
                      name="star"
                      size={16}
                      color={'#FFD700'}
                  />
                  :
                  null
          }
          {
              (number == 5.0 || number == 4.0 || number == 3.0 || number == 2.0)
                  ?
                  <MaterialIcons
                      name="star"
                      size={16}
                      color={'#FFD700'}
                  />
                  :
                  null
          }
          {
              (number == 5.0 || number == 4.0 || number == 3.0)
                  ?
                  <MaterialIcons
                      name="star"
                      size={16}
                      color={'#FFD700'}
                  />
                  :
                  null
          }
          {
              (number == 5.0 || number == 4.0)
                  ?
                  <MaterialIcons
                      name="star"
                      size={16}
                      color={'#FFD700'}
                  />
                  :
                  null
          }
          {
              (number == 5.0) ?
                  <MaterialIcons
                      name="star"
                      size={16}
                      color={'#FFD700'}
                  />
                  :
                  null
          }
          {
          
         (5-number>0)? 
         <MaterialIcons
         name="star"
         size={16}
         color={'#C4C4C4'}
     />: null 
          }
      </View>
  )
}


render(){
    const {navigate} = this.props.navigation 

return(
<View>
<View style ={styles.container}>
    <TouchableOpacity onPress={()=>{
 navigate("Home")  

    }}>
<Image  style={{
 position:"absolute" , 
 left:width*0.05 , 
 top:height*0.12 , 
}} source={require("../../assets/images/close.png")} />
</TouchableOpacity>
<View style={{
position:"absolute", 
width:'30%', 
height:'30%',
top : height * 0.37, 
left: width * 0.4,
zIndex:3,
}}>
{this.showRating({number:4})}

</View>
<Text style={{
position:"absolute" , 
left:width*0.01 , 
top : height * 0.4 , 
zIndex:3,
fontWeight:"700" , 
fontSize:17,
}}>
Experience:

</Text>
<Text style={{
position:"absolute" , 
left:width*0.4 , 
top : height * 0.4 , 
zIndex:3,
fontWeight:"700" , 
fontSize:17,
}}>

15 ans 
</Text>

<Image 
source = {require("../../assets/images/foulen.png")}
style={{
  position:"absolute" , 
  zIndex: 3 , 
  top : height*0.22 , 
  left : width * 0.45 , 
  borderRadius:200,
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
fontSize:29,
left:width*0.3,
top:height*0.06,

}}>
1:02

</Text>
</View>

<LinearGradient
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          colors={['rgba(248, 0, 0, 1)', 'rgba(248, 0, 0, 1))',]}
          style={styles.continueButtonStyle}
        >
          <Text  onPress={()=>{
 navigate("Onroad")

          }} style = {{
        fontWeight:'700'  , 
        fontSize:16 ,
            color:"white",


          }} >Cancel</Text>
        </LinearGradient>
<Image 
style={{
position:"absolute",
top:height*0.7 , 
left:width*0.46,

}}
source ={require("../../assets/images/mute.png")}/>
<Image
style={{
    position:"absolute",
    top:height*0.7 , 
    left:width*0.27,
    
    

}}
source ={require("../../assets/images/parler.png")}/>
<Image  style={{
 position:"absolute",
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
    export default withNavigation(Oncall);