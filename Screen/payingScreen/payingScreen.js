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
  const { width, height } = Dimensions.get("screen");

 class Paying extends Component{
    static navigationOptions={
        title:"Paying"
      
        }
  constructor(props){

 super(props) 

 this.state = {
    rate1: false,
    rate2: false,
    rate3: false,
    rate4: false,
    rate5: false,
}

  }

  rating() {
    return (
        <View style={{

   flexDirection:"row",
        top : height*0.4,
        left: width*0.2 , 
        }}>
            <MaterialIcons
                name={this.state.rate1 ? "star" : "star-border"}
                size={33}
                color={"#FFD700"}
                onPress={() => {
                    if (this.state.rate1) {
                        this.setState({
                            rate2: false,
                            rate3: false,
                            rate4: false,
                            rate5: false,
                        })
                    }
                    else {
                        this.setState({ rate1: true })
                    }
                }}
            />
            <MaterialIcons
                name={this.state.rate2 ? "star" : "star-border"}
                size={33}
                color={"#FFD700"}
                onPress={() => {
                    if (this.state.rate2) {
                        this.setState({
                            rate1: true,
                            rate3: false,
                            rate4: false,
                            rate5: false,
                        })
                    }
                    else {
                        this.setState({
                            rate2: true,
                            rate1: true,
                        })
                    }
                }}
            />
            <MaterialIcons
                name={this.state.rate3 ? "star" : "star-border"}
                size={33}
                color={"#FFD700"}
                onPress={() => {
                    if (this.state.rate3) {
                        this.setState({
                            rate4: false,
                            rate5: false,
                            rate2: true,
                        })
                    }
                    else {
                        this.setState({
                            rate3: true,
                            rate2: true,
                            rate1: true,
                        })
                    }
                }}
            />
            <MaterialIcons
                name={this.state.rate4 ? "star" : "star-border"}
                size={33}
                color={"#FFD700"}
                onPress={() => {
                    if (this.state.rate4) {
                        this.setState({
                            rate5: false,
                            rate3: true,
                        })
                    }
                    else {
                        this.setState({
                            rate4: true,
                            rate3: true,
                            rate2: true,
                            rate1: true,
                        })
                    }
                }}
            />
            <MaterialIcons
                name={this.state.rate5 ? "star" : "star-border"}
                size={33}
                color={"#FFD700"}
                onPress={() => {
                    if (this.state.rate5) {
                        this.setState({
                            rate4: true,
                        })
                    }
                    else {
                        this.setState({
                            rate5: true,
                            rate4: true,
                            rate3: true,
                            rate2: true,
                            rate1: true,
                        })
                    }
                }}
            />
        </View>
    )
}

  render(){
    const {navigate} = this.props.navigation 

return (
    <View>
<View style={styles.container}>
<View style={{
    position:"absolute",
width : '30%' , 
height  :'60%' , 
elevation:0,
 top : height*0.2 ,
 left:  width * 0.01, 
 backgroundColor:'#F1F5F8' ,
 borderRadius : 40 , 
 transform :[{rotate : "55.35deg"}]

}}>
   </View>

<View style={{

 position:'absolute' , 
 width : '30%' , 
 height  :'60%' , 
  top : height*0.01 ,
  left:  width * 0.8, 
  backgroundColor:'#F1F5F8' ,
  borderRadius : 40 , 
  transform :[{rotate : "55.35deg"}]

}}>
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
<TouchableOpacity onPress={()=>{

navigate("Home")
}}>
<Image  style={{
 position:"absolute" , 
 left:width*0.05 , 
 top:height*0.12 , 
}} source={require("../../assets/images/close.png")} />
</TouchableOpacity>

<View

style={{
 position:"absolute" , 
 width:"87%" , 
 height : '63%' , 
 backgroundColor:"#E3FDFD", 
 borderRadius:40 , 
 left:width*0.06 , 
 top: height * 0.2

}}
>

<Image 
source = {require("../../assets/images/foulen.png")}
style={{
  position:"absolute" , 
  zIndex: 3 , 
  top : height*0.07 , 
  left : width * 0.34 , 
  borderRadius:200,
  height:'13%',
  width:'20%'
}}
/>


<Text style={{
  fontWeight:'700' , 
  fontSize:19 , 
  top: height * 0.17 ,
  left : width*0.2 

}}>
    Foulen Ben Foulen
</Text>
<Text style={{
  fontWeight:'700' , 
  fontSize:15 , 
  top: height * 0.18 ,
  left : width*0.15 

}}>
A votre services maintenant
</Text>
<LinearGradient
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          colors={['rgba(113, 201, 206, 0.4)', 'rgba(113, 201, 206, 0.4))',]}
          style={styles.continueButtonStyle}
        >
          <Text  style = {{
        fontWeight:'700'  , 
        fontSize:16 ,
            color:"white",


          }} >Facture</Text>
        </LinearGradient>

        <Text style={{
  fontWeight:'700' , 
  fontSize:19 , 
  top: height * 0.33 ,
  left : width*0.16 

}}>
Méthode de payement </Text>

<Text style={{
  fontWeight:'700' , 
  fontSize:15 , 
  top: height * 0.35 ,
  left : width*0.16 

}}>
Cash </Text>


<Text style={{
  fontWeight:'700' , 
  fontSize:15 , 
  top: height * 0.32 ,
  left : width*0.5 

}}>
Carte banciare </Text>

<Image
style={{
    position:"absolute" , 
 
    top : height * 0.48 ,
    left:width*0.14,

}}
source={require('../../assets/images/cash.png')}
/>
<Image
style={{
    position:"absolute" , 
    top : height * 0.48 ,
    left:width*0.6,

}}
source={require('../../assets/images/bancaire.png')}
/>
{this.rating()}

</View>

<Text style={{
position:"absolute" ,
top : height  * 0.85 ,
left : width * 0.25 , 
fontWeight:"700" , 
fontSize:15 , 


}}>

    Soyer les bienvenue avec 
</Text>

<Text style={{
position:"absolute" ,
top : height  * 0.88 ,
left : width * 0.34 , 
fontWeight:"700" , 
fontSize:15 , 


}}>


 Knock Knock</Text>

<View
style={{
 position:"absolute" , 
 height:"20%" , 
 width:"20%" , 
 top : height*0.85 , 
 left: width*0.9 ,
 borderRadius:40 , 
 transform : [{rotate:"55.35deg"}] , 
 backgroundColor:" rgba(113, 201, 206, 0.5)" , 


}}
></View>

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
        zIndex:1,
      },
      continueButtonStyle: {
        position:"absolute",
      color:"#E3FDFD",
      zIndex:4,
      borderRadius:30,
      alignItems: "center",
      justifyContent: "center",
      marginTop: height * 0.28,
      left : width * 0.21,
      marginBottom: 100,
      height: height*0.09,
      width:width*0.4,
      },
 
    })
    export default withNavigation(Paying);