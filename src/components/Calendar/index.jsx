import {useEffect, useState} from "react";
import moment from 'moment'
import PropTypes from "prop-types";
import SvgIcon from "/@/components/SvgIcon/index.jsx";

const WeekHeader = [
  '日',
  '一',
  '二',
  '三',
  '四',
  '五',
  '六',
]


const ItemDay = (props) => {
  const {item, today, month} = props
  return (
    <div className={[
      "inline-block text-center",
      [0, 6].includes(item.week) && "text-red-500",
      (month !== item.month && "text-gray-300 text-opacity-60"),
      (today === item.raw && "today bg-green-200 text-green-500"),
    ].join(" ")}>{item.day}</div>
  )
}

ItemDay.propTypes = {
  item: PropTypes.object.isRequired,
  today: PropTypes.number,
  year: PropTypes.number,
  month: PropTypes.number,
}

const Calendar = (props) => {
  window.moment = moment

  const {fistIndex = 0, className} = props;
  const [year, setYear] = useState(null)
  const [month, setMonth] = useState(null)
  const [today, setToday] = useState(null)
  const [weekHeader, setWeekHeader] = useState([])
  const [weekdays, setWeekdays] = useState([])

  // 初始化日期信息和 头部信息
  useEffect(() => {
    const day = moment()
    setToday(day.format('yyyy-MM-DD'))
    setYear(day.year())
    setMonth((day.month() + 1))
    initWeekHeader(fistIndex)
  }, [fistIndex])

  useEffect(() => {
    initCalendar(moment(`${year}-${month}-01`))
  }, [year, month])

  // 初始化头部内容
  const initWeekHeader = (fist) => {
    setWeekHeader(WeekHeader.slice(fist, WeekHeader.length).concat(WeekHeader.slice(0, fist)))
  }

  // 初始化日历数据
  const initCalendar = (date) => {
    // 取第一天
    const fist = moment(date).startOf('month').day(fistIndex)
    // 取预算的最后一天
    const lest = moment(date).endOf('month').day((fistIndex + 6) + 7)

    const days = []
    for (let i = fist; i.diff(lest) < 1; i.add(1, 'day')) {
      days.push({
        date: i,
        raw: i.format('yyyy-MM-DD'),
        week: i.day(),
        day: i.date(),
        month: i.month() + 1,
        year: i.year(),
      })
    }

    // 切除多算的天数
    setWeekdays(days.slice(0, 42))
  }

  const onPreMonth = () => {
    if (month - 1 < 1) {
      setYear(year - 1)
      setMonth(12)
    } else {
      setMonth(month - 1)
    }
  }
  const onNextMonth = () => {
    if (month + 1 > 12) {
      setYear(year + 1)
      setMonth(1)
    } else {
      setMonth(month + 1)
    }
  }

  return <>
    <div className={"Calendar w-fit text-gray-700 " + className.toString()} key={props.key}>
      <div className={"text-gray-700  flex items-center justify-between"}>
        <SvgIcon name={"houtui"} onClick={onPreMonth}/>
        <span>{year}年 {month}月</span>
        <SvgIcon name={"qianjin"} onClick={onNextMonth}/>
      </div>
      <div className="grid grid-cols-7 gap-1 py-1 px-2 bg-blue-300 text-blue-500">

        {weekHeader.map(item => {
          return <>
            <div key={item} className={"inline-block"}>{item}</div>
          </>
        })}

      </div>

      <div className={"grid grid-cols-7 gap-1 p-2"}>
        {
          weekdays.map(item => {
            return (
              <>
                <ItemDay key={item.raw} year={year} month={month} today={today} item={item}/>
              </>
            )
          })
        }
      </div>
    </div>
  </>
}
Calendar.propTypes = {
  fistIndex: PropTypes.number, // 暂时只支持 0, 1 0 从周日开始推算， 1从周一开始推算
  item: PropTypes.node,
  key: PropTypes.string,
  className: PropTypes.string,
}

export default Calendar
