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
 class Profile extends Component{
    static navigationOptions={
        title:"Profile"
      
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
return (
<View>
<View style ={styles.container}>
<Pressable onPress={()=>{
    console.log('ht')
navigate("Home") 
}}>
<Image  style={{
 position:"absolute" , 
 left:width*0.05 , 
 top:height*0.12 , 
}} source={require("../../assets/images/close.png")} />
</Pressable>
<View style={{
position:"absolute", 
width:100, 
height:100,
top : height * 0.35, 
left: width * 0.4,
zIndex:3,
}}>
{this.showRating({number:4})}
</View>
<LinearGradient
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          colors={['rgba(227, 253, 253, 1)', 'rgba(227, 253, 253, 1))',]}
          style={styles.continueButtonStyle}
        >
          <Text  onPress={()=>{
               navigate("Wating")

          }} style = {{
        fontWeight:'700'  , 
        fontSize:16 ,


          }} >Appeler</Text>
        </LinearGradient>


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
<Text style={{
position:"absolute" , 
top:height*0.12 ,

left : width*0.4 , 
fontSize:25 , 
fontWeight:"700" , 

}}>Profile


</Text>
<Text style={{
position:"absolute" , 
left:width*0.01 , 
top : height * 0.5 , 
zIndex:3,
fontWeight:"700" , 
fontSize:17,
}}>
Langue: 
</Text>
<Text style={{
position:"absolute" , 
left:width*0.4 , 
top : height * 0.47 , 
zIndex:3,
fontWeight:"700" , 
fontSize:17,
}}>
 Francais

</Text>
<Text style={{
position:"absolute" , 
left:width*0.4 , 
top : height * 0.5 , 
zIndex:3,
fontWeight:"700" , 
fontSize:17,
}}>
 Anglais
</Text>
<Text style={{
position:"absolute" , 
left:width*0.4 , 
top : height * 0.53 , 
zIndex:3,
fontWeight:"700" , 
fontSize:17,
}}>
 Arabe
</Text>
<Text style={{
position:"absolute" , 
left:width*0.01 , 
top : height * 0.65 , 
zIndex:3,
fontWeight:"700" , 
fontSize:17,
}}>
 Certificate:
</Text>

<Image
source={require("../../assets/images/certificat.png")}
style={{
 position:"absolute" , 
 left:width*0.32 , 
 top : height * 0.62 , 
}}
/>

<Text style ={{
position:"absolute",
left:width*0.23 , 
top : height * 0.75 , 
fontWeight:'700' , 
fontSize:17,

}}>
Disponible pour le moment


</Text>

<Image  style={{
position:"absolute" , 
width:"10%",
height:'8%', 
top:height*0.1 , 
left:width*0.84,

}} source = {require("../../assets/images/logo.png")}/>
<Text style={{
position:"absolute" , 
width:'30%' , 
height:'20%'  , 
backgroundColor:"#E3FDFD" , 
borderRadius:40 , 
transform : [{rotate:"-142.91deg"}] , 
top:height*0.2 , 
left:width*0.9 , 

}}>


</Text>


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


<Text style={{
position:"absolute" , 
width:'30%' , 
height:'40%'  , 
backgroundColor:"rgba(241, 245, 248, 1)" , 
borderRadius:40 , 
transform : [{rotate:"55.35deg"}] , 
top:height*0.35, 
left:width*0.01, 

}}>


</Text>

<Image 
source = {require("../../assets/images/foulen.png")}
style={{
  position:"absolute" , 
  zIndex: 3 , 
  top : height*0.2 , 
  left : width * 0.4 , 
  borderRadius:200,
  height:'10%',
  width:'23%'
}}
/>
<Text style ={{
position:"absolute" , 
top : height * 0.30 , 
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
      marginTop: height * 0.83,
      left : width * 0.1,
      marginBottom: 100,
      height: 59.0,
      width:283,
      },
      


})
export default withNavigation(Profile);