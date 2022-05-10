
import styled from "styled-components/native"
import React from "react"
import {useState} from "react"
import {View,Text,TouchableOpacity,TextInput,SafeAreaView,Image,ScrollView}
from "react-native"


import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"


import slicepizza from "./../assets/slicepizza.png"
import shrimp from "./../assets/shrimp.png"
import cup from "./../assets/cup.png"
import cheeseburger from "./../assets/cheesburger.png"
import chickenNuggets from "./../assets/chicken nuggets.png"
import chickenWings from "./../assets/chicken wings.png"
import frenchFries from "./../assets/french fries.png"
import salad  from "./../assets/salad.png"
import wagyu from "./../assets/wagyu.png"


import baconPizza from "./../assets/baconpizza.png"
import cheesePizza from "./../assets/cheese-pizza.png"
import chickenFajitas from "./../assets/chickenfajitas.png"
import fourCheese from "./../assets/fourcheese.png"
import hawaiianPizza from "./../assets/Hawaiianpizza.png"
import peperonePizza from "./../assets/peperone.png"



const data = [
  {
  id:1,
  image:slicepizza,
  title:"pizza",
  selected:true,
},
  {
  id:2,
  image:shrimp,
  title:"seafood",
  selected:false,
},
  {
  id:3,
  image:cup,
  title:"softdrinks",
  selected:false,
},
  {
  id:4,
  image:cheeseburger,
  title:"cheese burger",
  selected:false,
  
},
  {
  id:5,
  image:chickenNuggets,
  title:"chicken nuggets",
  selected:false,
},
  {
  id:6,
  image:chickenWings,
  title:"chicken wings",
  selected:false,
},
  {
  id:7,
  image:frenchFries,
  title:"french fries",
  selected:false,
},
  {
  id:8,
  image:salad,
  title:"salad",
  selected:false,
},
  {
  id:9,
  image:wagyu,
  title:"wagyu",
  selected:false,
},


];

 const pizzaData = [
  
  {
    
    id:1,
    pizzaPic:baconPizza,
    pizzaName:"Bacon pizza",
    pizzaWeight:"weight 520g",
    size:"Large 16",
    crust:"Thin crust",
    deliveryTime:"27 mins",
    price:"$13.24",
   
  },
  {
    
    id:2,
    pizzaPic:cheesePizza,
    pizzaName:"Cheese pizza",
    pizzaWeight:"weight 480g",
    size:"Medium 13",
    crust:"Thick crust",
    deliveryTime:"19 mins",
    price:"$17.11",
  },
  {
    
    id:3,
    pizzaPic:chickenFajitas,
    pizzaName:"Chicken  fajitas pizza",
    pizzaWeight:"weight 530g",
    size:"Extra large 19",
    crust:"Stuff crust",
    deliveryTime:"20 mins",
    price:"$8.45",
  },
  {
    
    id:4,
    pizzaPic:fourCheese,
    pizzaName:"Fourcheese pizza",
    pizzaWeight:"weight 510g",
    size:"Large 17",
    crust:"Cheese crust",
    deliveryTime:"22 mins",
    price:"$10.95",
  },
  {
    
    id:5,
    pizzaPic:hawaiianPizza,
    pizzaName:"Hawaiian pizza",
    pizzaWeight:"weight 500g",
    size:"Medium 15",
    crust:"Cracker crust",
    deliveryTime:"28 mins",
    price:"$13.58",
  },
  {
    
    id:6,
    pizzaPic:peperonePizza,
    pizzaName:"Peperone pizza",
    pizzaWeight:"weight 470g",
    size:"Medium 14",
    crust:"Doughey crust",
    deliveryTime:"23 mins",
    price:"$7.84",
  },
  
  ]; 

Feather.loadFont();




const MainContainer = styled.View`

//background-color:#89e1f7;
height:auto;

`;


const StyledSAV = styled.SafeAreaView`

//background-color:blue;
width:100%;
padding-right:20px;


`;

const StyledHeader = styled.View`


display:flex;
flex:1;
flex-direction:row;
align-items:center;
justify-content:space-between;
width:100%;
margin-left:20px;
padding:25px 10px;
//background-color:red;

`;



const ProfilePic = styled.Image`

width:40px;
height:40px;
border-radius:50%;

`;

const Titles = styled.View`


display:flex;
flex:1;
flex-direction:column;
align-items:flex-start;
justify-content:center;
width:100%;
height:auto;
margin:0 20px;
padding:30px 10px;
gap:4px;

//background-color:green;
`;
 
 
 const TextInputContainer = styled.View`
 
display:flex;
flex:1;
flex-direction:row;
align-items:center;
justify-content:flex-start;
width:100%;
height:auto;
margin:0 20px;
padding:25px 10px;
gap:4px;
//background-color:gold;
 
 
 `;
 
 
const StyledTextInput = styled.TextInput`

border-bottom-color:black;
border-bottom-width:2px;
border-bottom-style:solid;
font-size:15px;
padding:5px;
width:90%;

`;

const CategoryTitle = styled.View`

display:flex;
flex:1;
flex-direction:row;
align-items:center;
justify-content:flex-start;
width:100%;
height:auto;
margin:0 20px;
padding:20px 10px;
gap:4px;
//background-color:pink;


`;

const CategoryItemsContainer = styled.View`
 
display:flex;
flex:1;
flex-direction:row;
align-items:center;
justify-content:flex-start;
width:100%;
height:200px;
margin:0 20px;
padding:80px 0;
gap:10px;
//background-color:#1dff00;

 
 `;
 
const CategoryItems = styled.View`

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap;10px;

width:100px;
height:150px;
border-radius:15px;
margin-right:10px;
flex-wrap:wrap;

`;

const ItemImage = styled.Image`

width:52px;
height:40px;


`;

const ItemName = styled.Text`
font-size:13px;
align-self:center;
margin:10px 0;

`;


const PopularContainer = styled.View`
width:320px;
height:200px;
backgroundColor:#ffffff;
flex-direction:row;
display:flex;
justify-content:center;
align:center;
margin:10px;
border-radius:30px;
overflow:hidden;
`;

const PopularContent = styled.View`


flex:1;
display:flex;
flex-direction:column;

`;

const PizzaImage = styled.View`

flex:1;
overflow: hidden;

`;

const PopularHeader = styled.View`

display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
gap:10px;
margin:10px 0; 

`;

const PizzaInfo = styled.View`

margin:10px;
margin-top:40px;

`;


const FooterItem = styled.View`

display:flex;
flex-direction:row;
align-items:center;
justify-content:flex-start;
margin-top:auto;
`;


const Plus = styled.View`

display:flex;
align-items:center;
justify-content:center;
width:80px;
height:45px;
background-color: yellow;
border-top-right-radius:30px;

`;

const Ratings = styled.View`

display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:80px;
height:45px;



`;


function Home ({navigation}){
 

   return(
      <MainContainer>
      
     <StyledSAV>
        <StyledHeader>
        
        <ProfilePic resizeMode="cover"source={require("./../assets/dp2.jpg")}/>
        <Feather name="menu"size={24}  />
        
        </StyledHeader>
      
      </StyledSAV>
      
       <Titles>
        <Text>Food</Text>
        <Text style={{fontSize:20,fontWeight:"bold"}}>Delivery</Text>
       
       </Titles>
       
       <TextInputContainer>
       
        <Feather name="search"size={20}  />
        <StyledTextInput type="search"placeholder={"search..."}>
        </StyledTextInput>
       
       </TextInputContainer>
       <CategoryTitle>
       <Text style={{fontSize:12,}}>Categories</Text>
        </CategoryTitle>
        <ScrollView
         horizontal={true}
         showsHorizontalScrollIndicator={false}
        style={{height:"auto",
         
          marginLeft:20,
          overFlow:"hidden",
          
        }}
        >
     
        {
          
          data.map(({selected,id,image,title})=>{
            
            return(
              
 <CategoryItems style={
   {
     
backgroundColor:selected?"red":"#f5da0e",
   }
   
   
 } key={id}>
         
           <ItemImage resizeMode="contain"source={image}/>
           <ItemName>{title}</ItemName>
           <TouchableOpacity 
        
                 style={{fontSize:25,
              textAlign:"center",
              width:30,
              height:30,
              borderRadius:30/2,
              backgroundColor:selected?"green":"white",
           }}> >
           </TouchableOpacity>
         </CategoryItems>
              
              
              
              
              )
            
          })
          
          
          
        }
         
        
        </ScrollView>
        <Text style={{fontSize:18,
          marginLeft:30,
        }}>Popular</Text>
        
        <ScrollView
        horizontal={false}
        style={{marginLeft:20,
          height:250,overFlow:"hidden",
         
        //  overFlow:"hidden",
       //   backgroundColor:"#bc88f2",
        }}
        
        >
        
       
   {
          
          pizzaData.map(({id,pizzaPic,pizzaName,pizzaWeight,size,crust,deliveryTime,price})=>{
            
            return(
       <TouchableOpacity
   onPress={()=>{
     
     navigation.navigate("Second",
       {pizzaPic,price,pizzaName,size,crust,deliveryTime}
      
     )
     
     
   }}
        
        
        key={id}>      
   <PopularContainer >
         
         <PopularContent>
         
         <PopularHeader>
         <MaterialCommunityIcons name="crown" size={15} style={{color:"yellow"}}/>
         <Text>top of the week</Text>
         </PopularHeader>
         
         <PizzaInfo>
         <Text style=
         {{fontWeight:"bold"}}>
         {pizzaName}</Text>
         
         <Text style={{color:"#c0cacc"}}>{pizzaWeight}</Text>
         
         </PizzaInfo>
         
         <FooterItem>
         <Plus>
         
         <Text>+</Text>
         </Plus>
         <Ratings>
         
         <MaterialCommunityIcons name="star"size={10}
         style={{color: "yellow"}}/>
         <Text>5.0</Text>
         
         </Ratings>
         
         </FooterItem>
         </PopularContent>
         
         <PizzaImage>
         
        <Image style={{width:150,
          height:150,marginTop:30,
          marginLeft:40,
        }}resizeMode="contain"source={pizzaPic}/>
         
         </PizzaImage>
         
         
         </PopularContainer>
           </TouchableOpacity>   
              
              )
            
            
          })
          
          
        } 
    
        
        
   
        
        
        
  
        
        
        
        
        
        
        </ScrollView> 
      </MainContainer>


    
    );
}
export default Home;