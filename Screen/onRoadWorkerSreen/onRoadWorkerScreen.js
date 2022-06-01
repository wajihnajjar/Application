import React  , {Component}from 'react';
import { withNavigation } from "react-navigation";
import { MaterialIcons } from '@expo/vector-icons';
import MapView, { PROVIDER_GOOGLE }   from "react-native-maps";
import * as Location from 'expo-location';
import { BlurView } from 'expo-blur';

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
  import { LinearGradient } from "expo-linear-gradient";
  const width = Dimensions.get("window").width
  const height = Dimensions.get("window").height
class OnRoadWorker extends Component{

render(){
return (
    <View style={styles.container}>
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
        left:3, }}
    region={{
    latitude:this.state.lat,
    longitude:this.state.long,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    }}
    >  
    </MapView>
        </View>
    </View>
)

}

}

const styles = StyleSheet.create({
    container: {
 width :width , 
 height : height , 
 backgroundColor:'#FFFFFF' , 
    } , 
})
export default withNavigation(OnRoadWorker)