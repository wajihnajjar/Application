import React  , {Component}from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { withNavigation } from "react-navigation";

import {
    Text,
    View,
    SafeAreaView,
    StatusBar,
    InnerWrapper , 
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

},


]
 class Menu extends Component{
  static navigationOptions={
    title:"Menu"
  
    }
constructor(props){
super(props) 
}
render(){
  const {navigate} = this.props.navigation 

return(
<View>
<StatusBar hidden = {true}  translucent = {true}/>

<View style={styles.container}>
<Text style={styles.whiteSquare}> </Text>
<Text style={{
top:height * 0.2,
left:width * 0.2,
fontWeight:"700",
fontSize:22,
}}>Choisissez votre</Text>
<Text style ={{

top:height * 0.2,
left:width * 0.3,
fontWeight:"700",
fontSize:22,


}}>prestation


</Text>

<Text style={styles.greenSquare}> 



</Text>

<View style={{flex:1 , 

}}>
<FlatList
data={service} 
keyExtractor={({ id }) => id.toString()}
contentContainerStyle={{
  flexGrow: 1,
  }}
renderItem={({ item }) =>
<Pressable onPress={()=>{
navigate("Home")

}}>
  <View style={{
 top : height * 0.33,
 left:width*0.01, 
 zIndex:4,
 flexDirection:"row" , 
  padding:20,
 
}}>
  {item.id ==1 ? <Image   source={require("../../assets/images/jardinier.png")}/> : item.id ==2 ?
   <Image   source={require("../../assets/images/electricien.png")}/> : item.id==3 ? <Image   source={require("../../assets/images/plombier.png")}/> :<Image   source={require("../../assets/images/tansporter.png" )}/>
}
<Text style ={{
 padding:10,
 left:width*0.14,
 fontWeight:"700" , 
 fontSize:16,
 borderRadius:15,
}}>{item.title}</Text>
</View>
</Pressable>

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
        backgroundColor: "#E3FDFD",
        height:height , 
        width: width , 
      }, 
       whiteSquare:{
          position:"absolute" , 
          backgroundColor:"#FFFFFF", 
          width:200 , 
          height:200,
top:height * 0.3 ,
borderRadius:40,
left:width*0.7,
transform : [{rotate:"55.35deg"}] , 
       },
greenSquare:{
    position:"absolute" , 
    width  : width*0.5 , 
    height : height*0.3,
        left  : width * 0.2 ,
        top  : height * 0.9, 
 backgroundColor:"#71C9CE", 
 borderRadius :40 , 
 transform : [{rotate:"55.35deg"}] , 


},
})
export default withNavigation(Menu);