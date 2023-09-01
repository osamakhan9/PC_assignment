import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Badge, Box, Button, Center, Divider, HStack, Image, Spinner, Stack, Text, VStack, Wrap } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';
import Loading from './Loding';
import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag, } from "react-icons/bi";

const SingleProductPage = () => {

  const [isLoading, setIsLoading] = useState(true);

  const [isButLoading, setIsButLoading] = useState(false);

  const [data, setData] = useState(null)

  const [DefaultImg, setImage] = useState()

  const [bagbutton, setbagbutton] = useState(true)

  const { CartDataToMatch, handleCart } = useContext(AppContext)



  setTimeout(() => {
    setIsLoading(false)

  }, 1500);


  const handleClick = () => {

    setIsButLoading(true);

    setTimeout(() => {
      alert("Added To Cart")

      setIsButLoading(false);
      handleCart(data[0])
      setbagbutton(false)
      // console.log(data[0])
    }, 1500);
  };

// console.log(data)

  const { id } = useParams()

  useEffect(() => {


    let obj = CartDataToMatch.filter((el) => {
      if (el.id === Number(id)) {
        return true
      }
      return false
    })

    setData(obj)
    setImage(obj[0].moreImage[0])
  }, [])







  if (isLoading) {

    return (
      <Loading />
    )

  }


  return (
    <Wrap  spacing={30} justify="center" style={{ marginTop: "150px", marginBottom: "50px" }} >

      <HStack spacing={5} >

        <VStack padding={3} >

          <ChevronDownIcon boxSize="30px" color="gray.500" cursor="pointer" />

          {data[0].moreImage.map((img) => (

            <Image borderRadius={5} alt={data[0].Name} width="100px"
              objectFit='cover' src={img}
              onClick={() => setImage(img)} cursor="pointer" />

          ))}
          <ChevronUpIcon boxSize="30px" color="gray.500" cursor="pointer" />
        </VStack>

        <Image borderRadius={15} src={DefaultImg} w="550px" minW="200px" />

      </HStack>


      <VStack width={550} align="revert-layer" spacing={5} >

        <Text marginTop={30} fontSize="2xl" color="gray.500" >{data[0].Name}</Text>

        <Badge fontSize="18px" variant="outline" width="fit-content" colorScheme="teal">{"4.4  ⭐"}</Badge>

        <Stack>

            <Text fontWeight="bold" fontSize="15px">Weight: {data[0].Weight}</Text>
          <HStack alignContent="center">


            <Text fontWeight="bold" fontSize="4xl" >₹{data[0].price}</Text>


          </HStack>

        </Stack>

      

        <Divider />


         <Text>Customer FeedBack</Text>

        <Box>

          <Image src='https://tagembed.com/blog/wp-content/uploads/2022/03/customer-reviews-examples.jpg' />
        </Box>

        <HStack w="full" >

          <Button onClick={() => handleClick()} fontSize="x-large" padding={8} w="full" colorScheme='teal'>

            <BiShoppingBag fontSize="30px" />
            {!isButLoading && bagbutton && "ADD TO BAG"}
            {!isButLoading && !bagbutton && "ADDED"}
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



        </HStack>



      </VStack>


    </Wrap>
  )
}

export default SingleProductPage


