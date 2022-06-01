import React  , {Component}from 'react';
import { withNavigation } from "react-navigation";
import MapView, { PROVIDER_GOOGLE }   from "react-native-maps";
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
  } from "react-native";
  import { LinearGradient } from "expo-linear-gradient";
import { Circle } from 'react-native-maps';
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height
class HomeWorker extends Component {
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
            console.log(status)
          setErrorMsg('Permission to access location was denied');
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
         this.setState({ lat: location.coords.latitude} ) 
         this.setState({long :location.coords.longitude })
       console.log(location)
    
    
    }
    
render(){

    return (
        <View style={styles.container}>
                <StatusBar hidden = {true}  translucent = {true}/>

<Image  style={{
 position:"absolute" , 
 left:width*0.05 , 
 top:height*0.12 , 
}} source={require("../../assets/images/profile.png")} />
<Image  style={{
position:"absolute" , 
width:"10%",
height:'8%', 
top:height*0.1 , 
left:width*0.4,

}} source = {require("../../assets/images/logo.png")}/>
<View  style={{
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
latitude:this.state.lat,
longitude:this.state.long,
latitudeDelta: 0.0922,
longitudeDelta: 0.0421,
}}
>  
<MapView.Circle
center={{latitude : this.state.lat , longitude : this.state.long}} 
radius = {10000} 
strokeColor = { '#1a66ff' }
fillColor = { 'rgba(248, 0, 0, 0.3)' }

/>
</MapView>
    </View>

    <Image  style={{
position:"absolute" , 
top:height*0.12 , 
left:width*0.9,
}} source = {require("../../assets/images/packet.png")}/>

<Text style={{
top:height*0.15 , 
left:width*0.88,
position:"absolute",
fontWeight:"700", 
fontSize:15 , 
}}>
30 Dt
</Text>

<Image
style={{
    position:"absolute" , 
    top : height*0.22 , 
    left : width * 0.4 , 
    borderRadius:40,
}}
source ={require("../../assets/images/foulen.png")}/>
<View
style={{
    position:"absolute" , 
    height:height*0.03 , 
width : width*0.06 , 
backgroundColor:"red" , 
top : height * 0.23 , 
left :width * 0.85, 
borderRadius:90,
}}
></View>
<Text style={{
    position:"absolute" , 
    top : height * 0.27, 
left :width * 0.7, 
fontSize:12 , 
fontWeight:"700"  ,

}}>
Zone de demande

</Text>
    </View>
    )
}

 }






 const styles = StyleSheet.create({
    container:{

     backgroundColor:'#FFFFFF' , 
     height:height , 
     width : width,

    } 


})
export default withNavigation(HomeWorker);