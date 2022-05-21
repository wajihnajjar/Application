import React  , {Component}from 'react';
import { LinearGradient } from "expo-linear-gradient";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
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
  var service =[
    {
      id:1,
     title: "jardinier" ,
     img :"../../assets/images/jardinier.png"
    
    } , 
    {
      id:2,
    
    title : "electricien" , 
    img : "../../assets/images/electricien.png"
    
    } , 
    {
      id:3,
    
    title :"plombier" , 
    img : "../../assets/images/plombier.png", 
    
    
    }, 
    {
      id:4,
    
    title:"tansporteur" ,
    img: "../../assets/images/tansporter.png" , 
    
    }
    
    ]
    
export default class Home extends Component{
constructor(props)
{
    super(props)
    this._map = React.createRef(null);

}
render(){

return (
<View>
<View style = {styles.container}>
    <View                 style={{
   width: '102%', height: '45%',
   borderRadius: 200, 
   borderWidth: 1, 
top:220,
      left:3 , 
      overflow: 'hidden',


                }}>

<MapView

ref={this._map}
style={{
    flex: 1, height: '150%', width: '100%', borderRadius: 10,
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


<Text style = {styles.blueSquere}> 

</Text>
<Text style={{
position:"absolute" , 
top:140 , 
left:110 , 
fontWeight:"700", 
fontSize:17,
}}> Tous le $service</Text>
<Text style={{
position:"absolute" , 
top:170 , 
left:80 ,
fontWeight:"700", 
fontSize:17,
}}>disponible pour le moment</Text>
<Text
style={{
position:"absolute" , 
zIndex:-1,
width:80 ,
height:115,
top:710, 
left:280 ,
backgroundColor:"rgba(113, 201, 206, 0.5)", 
borderRadius:40 , 
transform : [{rotate:"55.35deg"}] , 
}}
></Text> 
<Text style={styles.blackCircle}>
</Text>
<View>
</View>
<Text style={{
position:"absolute", 
backgroundColor:"#E3FDFD" , 
bottom:16,
left:30,
height:200, 
width:300,
 borderRadius:50,
}}>
    
<FlatList
data={service} 
keyExtractor={({ id }) => id.toString()}
renderItem={({ item }) =>
<View style={{
    backgroundColor:"red",
    position:"absolute" , 
     flex:1,
     padding:5 , 
     zIndex:2,
}}>
<Text>{item.title}</Text>
<Image  source={require("../../assets/images/jardinier.png")}/>
</View>
}

/>

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
        zIndex:1,
        /*

        */
        width: width , 
        zIndex:3,
      }, 
     blueSquere:{
  position:"absolute" , 
   width:113 , 
   height:149  , 
   backgroundColor:"#E3FDFD",
   borderRadius:40 , 
   transform : [{rotate:"130.27deg"}] , 
      top : 120 ,
      left:320,  
     },

    blackCircle:{
   position:"absolute",
   zIndex:2,
   height:358 ,
   width:360,
    top : 220 , 
    left:1,
    opacity:0.0,
                                         
        borderRadius:200 ,
backgroundColor:"black",
    },

})