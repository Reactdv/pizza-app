import { StatusBar } from 'expo-status-bar';

import { StackActions } from '@react-navigation/native';



import styled from "styled-components/native"
import React from "react"
import {StyleSheet,View,Text,TouchableOpacity,TextInput,SafeAreaView,Image,ScrollView}
from "react-native"


import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"




const Container = styled.View`

flex:1;

`;

const StyledHeader = styled.View`

flex:0.2;
//background:#f586ad;
align-items:center;
flex-direction:row;
justify-content:space-around;
padding-horizontal:10px;

`;


const PriceAndName =styled.View`

flex:0.25;
//background-color:#8fe294;
justify-content:center;
padding-horizontal:10px;


`;

const DetailsAndPic = styled.View`

flex:1;
//background-color:#49ceef;
flex-direction:row;

`;

const Detail = styled.View`

flex:0.7;
//background-color:#8e8dee;
align-items: flex-start;
justify-content:space-around;
padding-left:10px;

`;

const Pic = styled.View`

flex:1;
//background-color:#e9789e;
display:flex;
align-items: flex-end;
justify-content:center;
over-flow:hidden;
//padding-left:40px;


`;

const Ingredients = styled.View`

flex:0.5;
flex-direction:column;
//background-color:#b1f084;

`;

const IngredientItem = styled.View`

display:flex;
align-items:center;
justify-content:center;
width:130px;
height:100px;
background-color:#f5fcfe;
margin:10px;
border-radius:14px;

`;



const PlaceOrderBtn = styled.View`

flex:0.25;
//background-color:#6772ff;
display:flex;
align-items:center;
justify-content:center;

`;

const OrderBtn = styled.TouchableOpacity`

width:90%;
height:auto;
background-color:#ebde53;
flex-direction:row;
align-items:center;
justify-content:center;
padding-vertical:10px;
border-radius:20px;


`;





Feather.loadFont();

export default function SecondScreen({navigation,route}) {
  const {pizzaPic,price,pizzaName,size,crust,deliveryTime} = route.params
  return (
     <Container>
     
      <StyledHeader>
      <TouchableOpacity 
      onPress={()=>{
        navigation.navigate("Home")
        
        
      }}
      style={{
        
        marginRight:"auto",
        width:40,height:40, backgroundColor:"#ffffff",display:"flex",alignItems:"center", justifyContent:"center",borderRadius:7}}>
      
      <Feather name="arrow-left"size={30}/>
      
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={()=> 
      alert("rate submitted thank you")
        
      }
      
      style={{
        marginLeft:"auto",
        width:40,height:40, backgroundColor:"#dfdb3b",display:"flex",alignItems:"center", justifyContent:"center",borderRadius:7,}}>
      
      <Feather name="star"size={23}color="#ffff"/>
      
      </TouchableOpacity>
      
      </StyledHeader>
      
      
      <PriceAndName>
      
      <Text style={{fontSize:40,fontWeight:"bold"}}>{pizzaName}</Text>
      
      <Text style={{color:"#f33f3f",fontSize:15}}>{price}</Text>
      
      </PriceAndName>
      
      <DetailsAndPic>
      
      <Detail>
      <View>
      <Text style={styles.subTitle}>size</Text>
      <Text style={styles.textFont}>
      {size}"</Text>
      </View>
      
      <View>
      <Text style={styles.subTitle}>crust</Text>
      <Text style={styles.textFont}>
      {crust}</Text>
      </View>
      
      <View>
      <Text style={styles.subTitle}>delivery time</Text>
      <Text style={styles.textFont}>
      {deliveryTime}
      </Text>
      </View>
      
      </Detail>
      <Pic>
      
      <Image resizeMode="contain" source={pizzaPic} style={{width:200,height:200}}/>
      
      </Pic>
      
      </DetailsAndPic>
      
      <Ingredients>
      
      <View>
      <Text style={{paddingLeft:10,fontSize:15,fontWeight:"bold"}}>Ingredients</Text>
      </View>
      
      <View>
      
 /*     <ScrollView
     showsHorizontalScrollIndicator={false}
      horizontal={true}
      style={{height:"auto",
        
      }}>
      
      <IngredientItem>
      
      <Image style={{width:60, height:60,}} resizeMode="contain"source={require ("./../assets/ham.png")}/>
      </IngredientItem>
      <IngredientItem>
      
      <Image style={{width:60, height:60,}} resizeMode="contain"source={require ("./../assets/ham.png")}/>
      </IngredientItem>
      <IngredientItem>
      
      <Image style={{width:60, height:60,}} resizeMode="contain"source={require ("./../assets/ham.png")}/>
      </IngredientItem>
      <IngredientItem>
      
      <Image style={{width:60, height:60,}} resizeMode="contain"source={require ("./../assets/ham.png")}/>
      </IngredientItem>
      <IngredientItem>
      
      <Image style={{width:60, height:60,}} resizeMode="contain"source={require ("./../assets/ham.png")}/>
      </IngredientItem>
      <IngredientItem>
      
      <Image style={{width:60, height:60,}} resizeMode="contain"source={require ("./../assets/ham.png")}/>
      </IngredientItem>
      
      
      
      </ScrollView> */
      </View>
      
      </Ingredients>
      <PlaceOrderBtn>
      <OrderBtn 
      onPress={()=> alert("ordered successfuly")}>
      
      <Text style={{fontSize:20}}>Place order </Text>
      <Text style={{fontSize:20}}> > 
      </Text>
      
      </OrderBtn>
      
      </PlaceOrderBtn>
      
    
     
     
     </Container>
   
  );
}


const styles = StyleSheet.create({
  
  textFont:{
    
    fontSize:25,
    
    
  },
  subTitle:{
    
    color:"#c4caccd0",
    fontSize:17,
    textTransform:"capitalize",
    
  },
  
  
})