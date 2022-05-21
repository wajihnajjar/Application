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
     title: "Foulen Ben Foulen" ,
     img :"../../assets/images/foulen.png" , 
     exp : "3 ans d'experience" , 
     coordinate: {
        latitude: 36.809560,
        longitude: 10.177434,
    },
    } , 
    {
      id:2,
    
    title : "Falten Ben Foulen" , 
    img : "../../assets/images/falten.png", 
    exp : "10 ans d'experience" , 
    coordinate: {
        latitude: 36.809560,
        longitude: 11.177434,
    },

    
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
top:height*0.23,
      left:width*0.01 , 
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
{service.map((marker, index) => {
                 
                    return (
                        <MapView.Marker
                            key={index}
                            coordinate={marker.coordinate}
                        >
                            <Animated.View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 50.0, height: 50.0
                                }}
                            >
{marker.id==1 ? 
                                <Animated.Image
                                
                                    source={require('../../assets/images/foulen.png')}
                                    resizeMode="cover"
                                    borderRadius={100000}
                                      

                                
                                >
                                </Animated.Image>  : 
                                <Animated.Image
                                
                                    source={require('../../assets/images/falten.png')}
                                    resizeMode="cover"
                                    borderRadius={100000}
                                      

                                
                                >
                                </Animated.Image>}

                            </Animated.View>
                        </MapView.Marker>
                    )
                }
            
        )}         
</MapView>


      </View>

<Text style = {styles.blueSquere}> 
</Text>
<Text style={{
position:"absolute" , 
top:height*0.13 , 
left:width*0.3 , 
fontWeight:"700", 
fontSize:17,
}}> Tous le $service</Text>
<Image 
source ={require('../../assets/images/profile.png')}
style={{
 position:"absolute" , 
    height : height*0.04,
    width:width*0.1,
    left:width*0.03 , 
    top : height * 0.16  ,
    zIndex : 6, 



}}
/>
<Text style={{
position:"absolute" , 
top:height*0.17 , 
left:width*0.2 , 
fontWeight:"700", 
fontSize:17,
}}>disponible pour le moment</Text>
<Text
style={{
position:"absolute" , 
zIndex:-1,
width:80 ,
height:115,
top:height*0.9, 
left:width*0.8 ,
backgroundColor:"rgba(113, 201, 206, 0.5)", 
borderRadius:40 , 
transform : [{rotate:"55.35deg"}] , 
}}
></Text> 
<Text style={styles.blackCircle}>
</Text>
<View>
</View>
<View style={{
position:"absolute", 
backgroundColor:"#E3FDFD" , 
bottom:height*0.06,
left:width*0.1,
height:200, 
width:300,
 borderRadius:50,

}}>
    
<FlatList
data={service} 
keyExtractor={({ id }) => id.toString()}
contentContainerStyle={{
    flexGrow: 1,
    }}
renderItem={({ item }) =>
<View style={{
     padding:20 ,
     flexDirection:"row" , 
 
     
}}>

{item.id ==1 ? <Image  source={require("../../assets/images/foulen.png")}/>  : item.id==2 ? <Image  source={require("../../assets/images/falten.png")}/> : <Image  source={require("../../assets/images/jardinier.png")}/>


}
<Text style={{
 left:width*0.1,
 fontWeight:'700' , 
 fontSize:16,

}}>{item.title}</Text>
<Text style={{
    top:height*0.03,
right:width*0.27,
 fontWeight:'700' , 
 fontSize:16,

}}>{item.exp}</Text>

</View>
}

/>

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
      top : height*0.1 ,
      left:width*0.9,  
     },

    blackCircle:{
   position:"absolute",
   zIndex:2,
   height:358 ,
   width:360,
    top : height*0.3 , 
    left:width*0.01,
    opacity:0.0,
                                         
        borderRadius:200 ,
backgroundColor:"black",
    },

})