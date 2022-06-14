import { Box, Button, Heading, HStack} from '@chakra-ui/react'
import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'

export default function TagSelector({handleCategories}) {
    const {distinct, group, totalCount} = useStaticQuery(graphql`
    {
        allMarkdownRemark {
        distinct(field: frontmatter___category)
        totalCount
        group(field: frontmatter___category){
                totalCount
        }
        }
    }
    `).allMarkdownRemark;
    const Tags = distinct.map((name, idx) => `${name}(${group[idx].totalCount})`);
    Tags.unshift(`ALL(${totalCount})`);
    // console.log(distinct, group, totalCount, Tags);
  return (
    <>
    <Heading as={'h2'}>총 {totalCount}개의 포스트가 있습니다.🖋</Heading>
    <HStack w={'lg'} flexWrap={'wrap'} py={4}>
        {Tags.map(tag=><Button
         key={tag}
         borderRadius={10}
         shadow={'md'}
         value={tag}
         >
        {tag}
        </Button>)}

    </HStack >
    </>
  )
}