import  React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import catGIF from "../images/cat.gif"
import mainImg from "../images/main.jpg";

import { Box, Center, Heading,Text } from "@chakra-ui/react"
const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle} bgImg={mainImg}>
        <Seo title="Index Page" />

      <section>
        <Box w={"100%"} justifyContent={"center"} alignItems="center" pos={'relative'}>

            <Center pos={'fixed'}
              p={5}
              w={'lg'} 
              h={'md'} 
              bg={'whiteAlpha.600'} 
              rounded='lg'
              left={'50%'} 
              top={'50%'} 
              zIndex={3} 
              transform={'translate(-50%, -50%)'}
              shadow='.2rem .2rem 3px gray'
              justifyContent={'center'}
              flexDirection={'column'}
              >
              <Heading>Park Award</Heading>
              <Text fontSize={'2xl'} fontStyle={"italic"}>UX관련 기술을 공부하는 공간입니다.</Text>
              <img src={catGIF} style={{alignItems:'flex-end'}} width='300px'/>
            </Center>
        </Box>        
      </section>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
query{
  site {
    siteMetadata {
      title
    }
  }
}
`