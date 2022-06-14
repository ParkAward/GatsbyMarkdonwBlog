import React from 'react'
import Item from './Item'

export default function index({posts, category}) {
    if(category !== 'ALL'){
        posts = posts.filter(post => post.frontmatter.category === category);
    }
    return posts.map(post => {

        return (
            <Item key={post.fields.slug} post={post}/>
        )
    })


}
