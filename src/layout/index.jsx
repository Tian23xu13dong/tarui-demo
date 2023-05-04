import {useEffect, useState} from "react";
import Header from './Header.jsx'

function Layout() {
  return (
    <div className={"h-screen w-screen overflow-auto bg-white"}>
      <Header className={"h-8"}/>

      <div className={"flex"}>
        <div className={"w-10 border-r-2 border-b-black"}>
          {/* Side */}
        </div>
        <div>
          {/* Main */}
        </div>
      </div>
    </div>
  )
}

export default Layout
