import { Box, Flex, Heading, Spacer } from '@chakra-ui/react'
import { Link } from 'gatsby'
import React from 'react'

export default function Top({title}) {
  return (
    <Flex  w='100%' h='50px' p={'8px 0'} borderBottom={'1px black solid'} mb={3}>
    <Box alignSelf={'center'}>
        <Link to='/'>
            <Heading as='h1' size='1x1' noOfLines={1}>{title}</Heading>
        </Link>
    </Box>
    <Spacer />
    <Flex alignSelf={'center'} pr={70} w={'170px'}>
        <Link to='/About'>About</Link>
        <Spacer/>
        <Link to='/Posts'>Posts</Link>
    </Flex>
    
</Flex>
  )
}
