import React from 'react'
import Item from './Item'

export default function index({posts}) {
    return posts.map(post => {

        return (
            <Item key={post.fields.slug} post={post}/>
        )
    })


}
