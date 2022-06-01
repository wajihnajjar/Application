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
  const width = Dimensions.get("window").width
  const height = Dimensions.get("window").height
  var x 
class Onroad extends Component{
    static navigationOptions={
        title:"Onroad"
      
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
                                size={25}
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
                                size={25}
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
                                size={25}
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
                                size={25}
                                color={'#FFD700'}
                            />
                            :
                            null
                    }
                    {
                        (number == 5.0) ?
                            <MaterialIcons
                                name="star"
                                size={25}
                                color={'#FFD700'}
                            />
                            :
                            null
                    }
                    {
                    
                   (5-number>0)? 
                   <MaterialIcons
                   name="star"
                   size={25}
                   color={'#C4C4C4'}
               />: null 
                    }
                </View>
            )
          }
             
render(){
    const {navigate} = this.props.navigation 
   x = setTimeout(()=>{
     navigate("Paying")

 },2000)
    return(

        <View>
<View style ={styles.container}>
    <TouchableOpacity onPress={()=>{
              
  navigate("Paying")

    }}><Image  style={{
 position:"absolute" , 
 left:width*0.05 , 
 top:height*0.12 , 
}} source={require("../../assets/images/close.png")} />
</TouchableOpacity>

<View style={{
position:"absolute", 
width:'50%', 
height:'50%',
top : height * 0.25, 
left: width * 0.4,
zIndex:3,
}}>
{this.showRating({number:4})}

</View>
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

<Image 
source = {require("../../assets/images/foulen.png")}
style={{
  position:"absolute" , 
  zIndex: 3 , 
  top : height*0.17 , 
  left : width * 0.1 , 
  borderRadius:200,
  height:'10%',
  width:'23%'
}}
/>
<Text style={{
 position:"absolute" , 
 top:height*0.2 , 
 left:width*0.36,
 fontWeight:'700' , 
 fontSize:24,

}}>
Foulen ben Foulen

</Text>

<View                 style={{
   width: '102%', height: '65%',
   borderRadius: 60, 
   borderWidth: 1, 
top:height*0.33,
      left:width*0.001 , 
      overflow: 'hidden',
                }}>

<MapView
ref={this._map}
style={{
    flex: 1, height: '250%', width: '100%', borderRadius: 10,
    left:3,
 
                 }}

region={{
latitude: 36.804887,
longitude: 9.783939,
latitudeDelta: 0.0922,
longitudeDelta: 0.0421,
}}
>      
</MapView>
    </View>

    <View style={{
position:"absolute"  , 
width:'100%',
height:'40%',
top:height*0.84 , 
left:width*0.01,
backgroundColor:"#71C9CE",
borderRadius:60,

}}>
<Text style={{
position:"absolute" , 
fontWeight:'700' , 
fontSize:20 ,
left:width*0.3 , 
top:height*0.05

}}>
 il reste 3 min

</Text>



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
    export default withNavigation(Onroad);