import { Box, Heading, LinkOverlay, Text } from '@chakra-ui/react'
import { Link } from 'gatsby'
import React from 'react'

export default function Item({post}) {
    const location = post.fields.slug;
    const title = post.frontmatter.title || post.fields.slug
    const {date, reading} = post.frontmatter;
  return (
    <Box>
        <Link to={location} itemProp="url">
        <Box _hover={ {textShadow:'.1em .1em 3px gray'}} p='4' w={"lg"} minH={"10"} maxH={"sm"}>
            <Heading>{title}</Heading>
            <Text>{date??""}{reading?`- ${reading}분`:''}</Text>
            <Text>{post.excerpt}</Text>
        </Box>
        </Link>
    </Box>
  )
}
