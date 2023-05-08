需要使用管理员终端来启动
启动命令: `yarn tauri dev`


打包命令：`yarn tauri build`


WindowConfig
tauri -> windows[]
名称	类型	默认值	描述
label	string	null	窗口标识符，它必须是字母数字
url	WindowUrl		窗口 Web 视图 URL
fileDropEnabled	boolean	true	是否在 Web 视图上启用文件拖拽
center	boolean	false	窗口是否以居中方式启动
x	number?(format: double)	null	窗口左上角的水平位置
y	number?(format: double)	null	窗口左上角的垂直位置
width	number?(format: double)	null	窗口宽度
height	number?(format: double)	null	窗口高度
minWidth	number?(format: double)	null	窗口最小宽度
minHeight	number?(format: double)	null	窗口最小高度
maxWidth	number?(format: double)	null	窗口最大宽度
maxHeight	number?(format: double)	null	窗口最大高度
resizable	boolean	true	窗口是否可调整大小
title	string	null	窗口标题
fullscreen	boolean	false	窗口是否以全屏方式启动
focus	boolean	true	窗口是否聚焦
transparent	boolean	false	窗口是否透明，注意：mac 需要启用 macOSPrivateApi（警告：使用私有 API 会阻止应用程序被接受）
maximized	boolean	false	窗口是否最大化
visible	boolean	true	窗口是否可见
decorations	boolean	true	窗口是否具有边框和标题栏
alwaysOnTop	boolean	false	窗口是否应始终位于其他窗口上层
skipTaskbar	boolean	false	是否将窗口图标添加到任务栏
theme	Theme?		初始窗口主题，默认为系统主题。仅在 Windows 和 macOS 10.14+ 上实现
