import { Button, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import HoverImage from "react-hover-image";
import { useNavigate } from 'react-router-dom'

const ProductCard = ({
  id,
  Display_image,
  hover_Image,
  Name,
  price,
  Weight
}) => {

  const navigate = useNavigate()

  const VisitSingleProduct = () => {

    navigate(`/products/${id}`)


  }



  return (
    <div  style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }} >

      <HoverImage onClick={VisitSingleProduct} src={Display_image} hoverSrc={hover_Image} alt={Name} />

      <VStack align="revert-layer" >

        <Text fontSize="15" color="gray.500" >{Name}</Text>
        <Text>Weight: {Weight}</Text>
        <Flex>
          <Text fontWeight="bold" fontSize="2xl" >₹{price}</Text>
        </Flex>



        {/* <Flex justifyContent="space-between">

          <Button>ADD TO BAG</Button>

        </Flex> */}

        <Button onClick={VisitSingleProduct}>VIEW DETAILS</Button>

      </VStack>


    </div>
  )
}

export default ProductCard
