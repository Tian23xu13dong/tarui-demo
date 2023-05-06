import {useEffect, useState} from "react";
import {getName, getVersion} from "@tauri-apps/api/app";
import PropTypes from "prop-types";
import SvgIcon from "/@/components/SvgIcon/index.jsx";

import {getCurrent} from '@tauri-apps/api/window'

const currtWin = getCurrent()

const _WinBtn = (props) => {
  const {onClose, onMin, onMax, onReset} = props
  const [isMaximized, setMaximizable] = useState(false)

  const init = async () => {
    setMaximizable(await currtWin.isMaximized())
  }
  useEffect(() => {
    init().then()
  }, [])


  const onWinMax = async () => {
    isMaximized ? (await currtWin.unmaximize()) : (await currtWin.maximize())
    setMaximizable(await currtWin.isMaximized())
    isMaximized ? onMax() : onReset()
  }

  const onWinMin = async () => {
    await currtWin.minimize()
    onMin()
  }

  const onCloseWin = async () => {
    await currtWin.close()
    onClose()
  }


  return (
    <div className="taui__winbtn h-full w-fit p-2 float-right right-0 flex items-center justify-end">
      <SvgIcon name="Generalmoon-" title="主题" className={"mx-1"}/>
      <SvgIcon name="Controlhelp-" className={"mx-1"}/>
      <SvgIcon name="Controlchevrondown-" className={"mx-1"} onClick={onWinMin}/>
      <SvgIcon name={`Arrowmove-${isMaximized ? '' : '1'}`} className={"mx-1"} onClick={onWinMax}/>
      <SvgIcon name="Controlclose-" className={"mx-1"} onClick={onCloseWin}/>
    </div>
  )
}
_WinBtn.protoTypes = {
  onCLose: PropTypes.func,
  onMax: PropTypes.func,
  onMin: PropTypes.func,
  onReset: PropTypes.func,
}

export const WinBtn = _WinBtn

const Header = (props) => {
  const {className: className = ""} = props
  const [tauriVersion, setTauriVersion] = useState("")

  const init = async () => {
    // setFullscreen(await currtWin.isFullscreen())

    // 设置头信息
    setTauriVersion(`${await getName()}:v${await getVersion()}`)
  }

  useEffect(() => {
    init().then()
  }, [])

  return (
    <div className={"" + className.toString() + " w-full bg-amber-50 flex items-center justify-between"}
         data-tauri-drag-region>
      <span className="font-bold font-serif p-2">{tauriVersion}</span>
      <WinBtn/>
    </div>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node, // 定义 元素
  insert: PropTypes.oneOf(["left", "r"])
}

export default Header
