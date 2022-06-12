import React from 'react'
import { Link } from "gatsby"
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react'
import {jsx, css} from '@emotion/react'
export default function Header({isRootPath, title}) {

  return (
    <div>
        {isRootPath}
    </div>
  )
}
