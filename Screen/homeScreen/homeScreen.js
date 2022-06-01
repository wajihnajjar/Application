import React  , {Component}from 'react';
import { LinearGradient } from "expo-linear-gradient";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { withNavigation } from "react-navigation";
import * as Location from 'expo-location';

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
    
 class Home extends Component{
    static navigationOptions={
        title:"Home"
      
        }
constructor(props)
{
    super(props)
    this._map = React.createRef(null);
    this.state={
 lat : 0 , 
 long : 0 , 

    }

}
 async componentDidMount(){
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
     this.setState({ lat: location.coords.latitude} ) 
     this.setState({long :location.coords.longitude })
   


}

render(){
    const {navigate} = this.props.navigation 

return (
<View>
<View style = {styles.container}>
    <View                 style={{
   width: '90%', height: '45%',
   borderRadius: 330, 
   borderWidth: 1, 
top:height*0.21,
      left:width*0.03 , 
      overflow: 'hidden',
                }}>

<MapView
ref={this._map}
style={{
    flex: 1, height: '150%', width: '100%', borderRadius: 10,
    left:3,
 
                 }}
region={{
latitude: this.state.lat,
longitude: this.state.long,
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
}}> Tous le Mecaniciens</Text>
       <TouchableOpacity   onPress ={()=>{
navigate("UserProfile")
}}style={{
 position:"absolute" , 
    left:width*0.03 , 
    top : height * 0.13  ,
    zIndex : 6, 



}}
>

<Image 
onPress={()=>{

}}
source ={require('../../assets/images/profile.png')}
/>
</TouchableOpacity>
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
<TouchableOpacity onPress={()=>{
 navigate("Profile")

}}>
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
</TouchableOpacity>
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
export default withNavigation(Home);