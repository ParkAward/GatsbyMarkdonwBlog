import * as React from "react"
import { Link } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"
import { Center } from "@chakra-ui/react"
import Top from "./Top"
const Layout = ({ location, title, subTitle, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath} title={title}>
      <Top title={title}/>
      <Header className="global-header" isRootPath={isRootPath}  />
      <main>
        <Center flexDirection={'column'}>
        {children}
        </Center>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
