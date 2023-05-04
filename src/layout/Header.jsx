import {useEffect, useState} from "react";
import {getName, getVersion} from "@tauri-apps/api/app";
import PropTypes from "prop-types";
import SvgIcon from "@/components/SvgIcon/index.jsx";

const Header = (props) => {
  const {className: className = ""} = props
  const [minAble] = useState(false)
  const [tauriVersion, setTauriVersion] = useState("")
  useEffect(() => {
    const getTitle = async () => {
      const appName = await getName()
      const appVersion = await getVersion();
      setTauriVersion(`${appName}:v${appVersion}`)
    }
    getTitle()
  }, [])

  return (
    <div className={"" + className.toString() + " w-full bg-amber-50 "} data-tauri-drag-region>
      <span className="font-bold font-serif">{tauriVersion}</span>
      <div className="taui__winbtn w-fit float-right right-0">
        <SvgIcon name="Arrowmove-1"/>
        <SvgIcon name="Arrowmove-1"/>
        <SvgIcon name="Arrowmove-1"/>
        <SvgIcon name="Arrowmove-1"/>
      </div>
    </div>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node, // 定义 元素
  insert: PropTypes.oneOf(["left", "r"])
}

export default Header
