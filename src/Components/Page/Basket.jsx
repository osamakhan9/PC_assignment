import React, { useContext, useState } from 'react'
import { AppContext } from '../../Context/AppContext'
import { Button, ButtonGroup, Divider, HStack, IconButton, SimpleGrid, Spacer, Stack, Text, VStack, Wrap } from '@chakra-ui/react'
import ProductCard from '../All_smalle_Components/ProductCard'
import Loading from '../All_smalle_Components/Loding'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { useEffect } from 'react'


const Basket = () => {


  const {AllProductsData } = useContext(AppContext)


  const [mendata, setmenData] = useState([])

  // is Loading   // 
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false)


  }, 1500);


  useEffect(() => {
    setmenData(AllProductsData.menData)


  }, [mendata])

  if (isLoading) {

    return (
      <Loading />
    )

  }

  return (

    <Stack style={{ marginTop: "80px" }} >


      <Wrap justify='center' style={{ margin: "auto", marginTop: "20px" }}  >

        <Divider orientation='horizontal' />

        <HStack spacing={50} width="1200px" justify="stretch"  >


          {/* <ProductsSidebar   /> */}

          {/* PRODUCTS */}


          <SimpleGrid spacing={5} columns={[1, 2, 2, 3]}>

            {mendata.map((el) => (
              <ProductCard  {...el} />
            ))}



          </SimpleGrid>

        </HStack>




      </Wrap>




    </Stack>


  )
}

export default Basket
