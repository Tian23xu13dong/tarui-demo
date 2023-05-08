/**
 * 处理多格式的类名返回
 * @param _classNames
 * @returns {string}
 */
export const classNames = (_classNames) => {
  if (typeof _classNames === 'string') {
    return _classNames
  } else if (_classNames instanceof Array) {
    return _classNames.join(" ")
  } else if (_classNames instanceof Object) {
    const keys = Object.keys(_classNames)
    let classStr = ""
    for (let i = 0; i < keys.length; i++) {
      classStr += _classNames[keys[i]] && keys[i]
    }
    return classStr
  }
  return ""
}

export const c = classNames
