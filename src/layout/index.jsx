// import Header from './Header.jsx'
import SvgIcon from "/@/components/SvgIcon/index.jsx";
// import {Link, Outlet} from "react-router-dom";
import Calendar from "../components/Calendar/index.jsx";

function Layout() {
  return (
    <div className={"h-screen w-screen overflow-auto bg-white flex flex-col"}>
      {/*<Header className={"h-8"}/>*/}

      <div className={"flex-1 flex"}>
        <div className={"w-10 border-r-2 border-b-black flex flex-col items-center dark:bg-black dark:text-white"}>
          <nav className="nav flex-1">
            <ul className="nav_links">
              <li className="nav_link active">
                <a to="home"><SvgIcon name="shouye" className="my-2"/></a>
              </li>
              <li className="nav_link">
                <a to={`WorkProgress`}><SvgIcon name="Generalcalendar-" className="my-2"/></a>
              </li>
              <li className="nav_link">
                <a to={`contacts/1`}><SvgIcon name="Generalaccount-" className="my-2"/></a>
              </li>
            </ul>
            <div className="nav_light"></div>
          </nav>

          <nav>
            <ul>
              <li>
                {/* 设置 */}
                <SvgIcon name="xitongguanli" className="my-2"/>
              </li>
              <li>
                {/* 退出 */}
                <SvgIcon name="tuichu" className="my-2"/></li>
            </ul>
          </nav>
        </div>
        <div className="flex-1 h-full p-2">
          {/* Main */}
          {/*<Outlet/>*/}

          <Calendar />
        </div>
      </div>
    </div>
  )
}

export default Layout
