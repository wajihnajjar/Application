import React  , {Component}from 'react';
import { withNavigation } from "react-navigation";
import { MaterialIcons } from '@expo/vector-icons';

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
  var dummyData=[
{
  id:1 , 
name :"Gaoui Bechir" , 
rating : 4 , 
money : 120 , 
adresse : "Sfax , Sidi mansour km10" , 
date:"17/3/2022" 

},
{
  id:2 , 
name :"Montassar Haj Slimen" , 
rating : 4 , 
money : 40 , 
adresse : "Sfax  , Kerkennah Malita " , 
date:"10/3/2022" 

},
{
  id:3 , 
name :"Ahmed Bellaaj" , 
rating : 4 , 
money : 75 , 
adresse : "Ariena , Borej el wzir " , 
date:"11/3/2022" 

},

  ]
class Historique extends Component{

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
return (
<View style = {styles.container}>
<View style={{
position:"absolute" , 
height  :height* 0.3 , 
width : width * 0.3 , 
backgroundColor:"rgba(113, 201, 206, 0.5)" , 
top : height * 0.001 , 
right : width *0.9 , 
borderRadius:40 , 
transform  : [{rotate : "55.35deg"}]

}}>

</View>


<View style={{
position:"absolute" , 
height  :height* 0.9 , 
width : width * 0.3 , 
backgroundColor:"#F1F5F8", 
borderRadius:40, 
zIndex:1,

transform: [{rotate : "55.35deg"}],
left : width *0.2 
}}>
</View>
<Image  style={{
 position:"absolute" , 
 left:width*0.05 , 
 top:height*0.12 , 
}} source={require("../../assets/images/back.png")} />


<Image  style={{
 position:"absolute" , 
 width:"10%",
 height:'8%', 
 top:height*0.1 , 
 left:width*0.85,
 }} source={require("../../assets/images/logo.png")} />

<Text style={{
position:"absolute" , 
top : height * 0.13 , 
left : width*  0.35 , 
fontWeight:"700" , 
fontSize:22 , 

}}>
Historique
</Text>

<View style={{

position:"absolute" , 
top : height * 0.21 , 
left : width*  0.1 , 
height : height * 0.2 , 
width : width * 0.8 , 
backgroundColor:"#F1F5F8", 
zIndex:3 , 
elevation:3 , 
borderRadius:40 , 
}}>

<Text style={{
  position:"absolute", 
 top : height*0.07 , 
left: width * 0.07, 
fontWeight:"700",


}}>Clients</Text>

<Text style={{
    position:"absolute", 
    top : height*0.07 , 
 fontWeight:"700",
left : width * 0.3 , 

}}>Solde</Text>
<Text style={{
  position:"absolute", 
  top : height*0.07 , 
  fontWeight:"700",

left : width * 0.55 , 

}}>Facture</Text>

<Text style={{
   position:"absolute", 
   top : height*0.1 , 
   fontWeight:"700",

   left: width * 0.1
}}>
12 
</Text>
<Text style={{
    position:"absolute", 
    top : height*0.1 , 
    fontWeight:"700",

left : width * 0.3 , 


}}>
465Dt 

</Text>

<Text style={{
  position:"absolute", 
  top : height*0.1, 
  fontWeight:"700",

left : width * 0.58 , 


}}>10</Text>
</View>


<View style={{
flex:1 ,
zIndex:1,
}}>
<FlatList 
data={dummyData} 
keyExtractor={({ id }) => id.toString()}
contentContainerStyle={{
  flexGrow: 1,
  }}
  renderItem={({ item }) =>
<View style={{
  
padding:10,
flex:1,

}}>
<View style={{
top : height * 0.41 , 
left : width*  0.00001 , 
backgroundColor:"#E3FDFD", 
height : height * 0.18 , 
width : width * 0.99 , 

borderRadius:40 , 

}}>
<Text style={{
left: width * 0.2 , 
top : height * 0.05, 
fontWeight:"700" , 
fontSize:17 , 
}}>
{item.name}</Text>

{item.id==1 ? <Image  style={{
position:"absolute" , 
left : width * 0.03 ,
top : height*  0.04, 

}}source ={require("../../assets/images/bechir1.png")}/>
: item.id==2 ? <Image  style={{
position:"absolute" , 
left : width * 0.03 ,
top : height*  0.04, 

}}source ={require("../../assets/images/monta.png")}/>
 : <Image  style={{
position:"absolute" , 
left : width * 0.03 ,
top : height*  0.04, 

}}source ={require("../../assets/images/ahmed.png")}/>
}
<Text style={{
top : height * 0.11 , 
left:  width * 0.13 ,
fontWeight:"700" , 
fontSize:14 , 
}}>
{
  item.adresse
}</Text>
<Text style={{
position:"absolute" , 
left : width * 0.7 ,
top : height * 0.06,  
fontWeight:"700" , 
fontSize:12 , 
}}>
{item.date}</Text>
<Text style={{

position:"absolute" , 
left : width * 0.74 ,
top : height * 0.1,  
fontWeight:"700" , 
fontSize:14 , 

}}>{item.money}Dt</Text>
<View style={{
 position:"absolute" , 
 left: width * 0.2, 
 top  : height * 0.09,
}}>
  {this.showRating({number:4})}
</View>
</View>
</View>

}
  />

</View>

</View>
)

}

} 

const styles = StyleSheet.create({
 
    container:{

        backgroundColor:'#FFFFFF' , 
        height:height , 
        width : width,
        flex:1 ,

       } , 


})

export default withNavigation(Historique);