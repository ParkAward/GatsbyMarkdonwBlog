import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import styled from '@emotion/styled'
import { Button, Tag } from '@chakra-ui/react';

const CategoryDiv = styled.div`
    width: 90vw;
    padding: .3rem;
    display: flex;
    justify-content: center;
    background: #DDDDDD;
    ul{
        display:flex;
        font-size: 24px;
        border-radius: 4px;
        list-style: none;
        li{
            padding: 0 .5rem;
            margin: 0 .3rem;
            border-radius: 3px;
            border: solid 1px; #DEDEDE;
        }
    }
`;

export default function CategorySelector({handleCategory}) {
    const data = useStaticQuery(graphql`
    {
        allMarkdownRemark{
            distinct(field: frontmatter___category)
        }
    }
    `);

    const categories = data.allMarkdownRemark.distinct;
  return (
    <CategoryDiv>
        <ul>
            <li value="" onClick={(e)=>handleCategory(e.target.value)} >ALL</li>
            {categories.map(category =><li key={category}>
                <button  value={category} onClick={(e)=>handleCategory(e.target.value)}>{category}</button>
                </li>)}
        </ul>
    </CategoryDiv>
  )
}


