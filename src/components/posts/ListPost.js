import { Box, Heading, Text } from '@chakra-ui/react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import React, {useEffect} from 'react'

export default function ListPost({category, tag}) {
  const filterQuery = !category?'':`filter:{frontmatter:{category : {eq: ${category}}}}, `
  console.log(category, filterQuery);

  const data = useStaticQuery(graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt(pruneLength: 100, truncate: true)
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }  
  `);
  const posts = data.allMarkdownRemark.nodes;

  return (
    <>
    {posts.map(post =>{
        const title = post.frontmatter.title || post.fields.slug
        return(
          <Box key={post.fields.slug} w='lg' borderWidth='1px' borderRadius='.3rem' overflow='hidden' p={'.5rem'} m={'.6rem'} shadow={"base"}>
            <Link to={post.fields.slug}>
            <Box p='6'>
                <Heading p={3}>{title}</Heading>
                <Text mt={7}>{post.excerpt}</Text>
            </Box>
            </Link>
          </Box>
        )
      })}
    </>
  )
}
