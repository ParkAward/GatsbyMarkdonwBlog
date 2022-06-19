import React from 'react'
import { Link } from "gatsby"
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react'
export default function Header({isRootPath, title}) {

  return (
    <header>
        <Flex  w='100%' h='5vh' borderBottom={'1px black solid'} mb={1} margin={'auto'}>
            <Flex alignSelf={'center'}>
                <Link to='/'>
                    <Heading as='h1' size='1x1' pl={10} noOfLines={1}>{title}</Heading>
                </Link>
            </Flex>
            <Spacer />
            <Flex alignSelf={'center'} pr={70} w={120}>
                {/* <Link to='/About'>About</Link>
                <Spacer/>*/}
                {<Link to='/blog'>Blog</Link>}
            </Flex>
        </Flex>
    </header>
  )
}
