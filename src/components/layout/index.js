import * as React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { Center } from "@chakra-ui/react"
const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header className="global-header" isRootPath={isRootPath} title={title} />
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
