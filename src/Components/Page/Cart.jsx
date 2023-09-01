import { ArrowRightIcon } from '@chakra-ui/icons';
import { Badge, Box, Button, Divider, HStack, Image, Spacer, Spinner, Stack, Text, VStack, Wrap } from '@chakra-ui/react';
import React, { useContext, useState } from 'react'

import { BiShoppingBag } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';
import CartSingleCard from '../All_smalle_Components/CartSingleCard';
import Loading from '../All_smalle_Components/Loding';

const Cart = () => {



 const {cartData,price, discountPrice, TotalQty} = useContext(AppContext)

 const [isLoading, setIsLoading] = useState(true);
 const [isButLoading, setIsButLoading] = useState(false);
 const navigate = useNavigate();

 setTimeout(() => {
 setIsLoading(false)
  
 }, 1500);


 console.log(discountPrice)
  

 console.log(cartData)


 
 const BackToPRoductPage = () => {
    setIsButLoading(true);
    
    setTimeout(() => {
      
    
      setIsButLoading(false);
      navigate("/men-clothing")
    }, 1500);
   
  };






 if(isLoading){

  return (  
     <Loading />
    ) 

 } 
 
 
 if(cartData.length===0){

    return (  

        <Wrap justify="center" style={{marginTop: "80px"}}>

            <HStack>

            <Image src='https://cdn.dribbble.com/users/887568/screenshots/3172047/ufo.gif' />
         
           <VStack spacing={30} >
           <Text fontSize="3xl" >Nothing In The Bag </Text>

           <Divider />
<Button  onClick={()=>BackToPRoductPage()} fontSize="x-large" padding={8}  colorScheme='yellow'> 


<BiShoppingBag fontSize="30px" /> 
{!isButLoading &&  "Continue Shopping" }
    {isButLoading && (
      <Spinner
        thickness="4px"
        speed="0.55s"
        emptyColor="gray.200"
        color="blue.500"
        size="lg"
      />
    )}


</Button>



           </VStack>
            </HStack>

        </Wrap>
      
      ) 
  
   }  

 

  return (

  
 <VStack marginTop="180px" justify="center" >

  <Text fontSize="2xl" fontWeight="extrabold" >CART Iteam: {TotalQty}</Text>

    <Wrap  padding={10} spacing={50} >
      
      <VStack  spacing={5}   >

         <HStack spacing={5} w="full"  padding={3} bg="#fcffee" > <Image w={10} src='https://images.bewakoof.com/web/Red-truck.png' /> <Text>Yay! You get FREE delivery on this order</Text></HStack>
      {
        cartData.map((el)=> (
           <CartSingleCard el={el} />
        ) )
      }

      </VStack>


      <VStack spacing={5} >

      <HStack  spacing={5} w="full"  padding={3} bg="teal" >   <Text fontWeight="bold" color='white' >Save extra ₹140 with Join now!</Text> <Spacer /> <ArrowRightIcon /> </HStack>

     <Stack  bg="gray.200" w={600} spacing={3} borderWidth='1px' overflow='hidden' padding="5" textAlign="center" > 
     <Text  fontWeight="bold" fontSize="20px">PRICE METHOD</Text> </Stack>

     <VStack fontSize="16px" padding="5"  w={600} spacing={5} borderWidth='1px' overflow='hidden'  >

     <Image height='200px' src='https://cdn.dribbble.com/users/614270/screenshots/14575431/media/4907a0869e9ed2ac4e2d1c2beaf9f012.gif'/>

      
     </VStack>

     <HStack w="full" padding="5" >

   
        <Text  w="50%"  fontSize="2xl" fontWeight="bold" >Total  ₹{price}</Text>

      
         
        <Divider w="10%"  orientation='vertical' />

     <Button onClick={()=>navigate("/checkout/payment")} w="full" colorScheme='teal' color="white" size='lg'>
        CheckOut
      </Button>

     </HStack>

              <Divider as="bold" />
              <Divider as="bold" />
              <Divider as="bold" />
      </VStack>
     
       
      
     

      
    </Wrap>


 </VStack>

  )
}

export default Cart
