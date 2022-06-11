import React from 'react'
import { Link } from "gatsby"
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react'
export default function Header({isRootPath, title}) {

  return (
    <header>
        <Flex  w='100%' p={'8px 0'} borderBottom={'1px black solid'} mb={3}>
            <Box>
                <Link to='/'>
                    <Heading as='h1' size='1x1' noOfLines={1}>{title}</Heading>
                </Link>
            </Box>
            <Spacer />
            <Flex alignSelf={'center'} pr={70} w={120}>
                <Link to='/About'>About</Link>
                <Spacer/>
                <Link to='/Blog'>Blog</Link>
            </Flex>
            
        </Flex>
    </header>
  )
}
