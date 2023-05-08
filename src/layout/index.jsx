import Header from './Header.jsx'
import SvgIcon from "/@/components/SvgIcon/index.jsx";
// import {Link, Outlet} from "react-router-dom";
import Calendar from "../components/Calendar/index.jsx";
import WorkProgress from "../routes/WorkProgress/index.jsx";

function Layout() {
  //
  return (
    // 紫色渐变背景 relative items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500
    // 红色渐变背景 relative items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 to-rose-500
    // 黄色 relative mt-8 mb-12 flex flex-col items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-amber-300 to-orange-500
    // 绿色 relative mt-8 mb-12 flex flex-col items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-teal-400 to-cyan-400
    // 绿色2 relative mt-8 mb-12 flex flex-col items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-green-400 to-cyan-500
    // 粉紫色 relative mt-8 mb-12 flex flex-col items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-fuchsia-500 to-purple-600
    // 不怎么好看的蓝色 relative mt-8 mb-12 flex flex-col items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-sky-400 to-indigo-500
    <div className={"h-screen w-screen overflow-auto bg-white flex flex-col relative items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500"}>
      <Header className={"h-8"}/>

      <div className={"flex-1 w-full flex overflow-hidden"}>
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
        <div className="flex-1 h-full overflow-hidden p-2 text-gray-700 bg-white">
          {/* Main */}
          {/*<Outlet/>*/}
          <WorkProgress/>

          {/*<Calendar />*/}
        </div>
      </div>
    </div>
  )
}

export default Layout
