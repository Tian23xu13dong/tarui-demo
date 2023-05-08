import Calendar from "/@/components/Calendar/index.jsx";
import TableV2 from "../../../src/components/Table/index.jsx"
import styles from './index.module.less'
import mockData from './demo.js'
import {useCallback, useEffect, useState} from "react";
import {Link} from "react-router-dom";

// 状态列表
const StatusEmenu = [
  {label: "待处理", color: '', bgColor: ''},
  {label: "处理中", color: '', bgColor: ''},
  {label: "代发版", color: '', bgColor: ''},
  {label: "DEV已发版", color: '', bgColor: ''},
  {label: "DEV测试通过", color: '', bgColor: ''},
  {label: "UAT已发版", color: '', bgColor: ''},
  {label: "UAT测试通过", color: '', bgColor: ''},
  {label: "PROD已发版", color: '', bgColor: ''},
  {label: "PROD测试通过", color: '', bgColor: ''},
  {label: "测试不通过", color: '', bgColor: ''},
  {label: "待验收", color: '', bgColor: ''},
  {label: "验收驳回", color: '', bgColor: ''},
  {label: "验收通过", color: '', bgColor: ''},
]

export default function WorkProgress() {
  const [data, setData] = useState([])
  useEffect(() => {
    setData(mockData)
  }, [])

  const columns = [
    {prop: 'no', label: '序号', headClass: 'w-16'},
    {
      prop: 'status',
      label: '状态',
      headClass: 'w-24',
      render(text) {
        return text;
      }
    },
    {
      prop: 'projectName',
      label: '项目名称',
      render(text) {
        return <>
          <Link to={"/work/detail/:workId"} className={"text-blue-500 hover:underline"}>{text}</Link>
        </>
      }
    },
    {prop: 'projectDesc', label: '任务概述'},
    {prop: '负责', label: '负责人', headClass: 'w-32'},
    {prop: 'startTIme', label: '开始时间', headClass: 'w-32'},
    {prop: 'endTime', label: '结束时间', headClass: 'w-32'},
  ]

  return (

    <div className={"flex h-full w-full overflow-hidden"}>
      <div className={"w-56 overflow-hidden flex flex-col"}>
        <div className={"w-full my-5 text-center"}>
          <h1 className={"text-2xl truncate font-sans font-semibold"}>工作计划进度</h1>
          <span className={"truncate font-mono text-xs text-gray-400"}>PROJECT SCHEDULE MANAGEMENT </span>
        </div>

        <div>
          <Calendar className={"w-full mt-5"}/>
        </div>

        <div className={"flex-1"}>
          项目列表
        </div>
      </div>

      <div className={"flex-1 flex flex-col h-full ml-2"}>
        <div className={"flex my-5 items-center justify-between"}>
          <div>
            {/*筛选条件*/}
          </div>
          <div className={"flex-1 flex items-center justify-end"}>
            <div className={"mx-5 text-gray-500 text-xl flex items-center"}>
              <span>总任务</span>
              <span className={"font-bold text-blue-500 ml-2"}>{60}</span>
            </div>
            <div className={"mx-5 text-gray-500 text-xl flex items-center"}>
              <span>已完成</span>
              <span className={"font-bold text-green-500 ml-2"}>{60}</span>
            </div>
            <div className={"mx-5 text-gray-500 text-xl flex items-center"}>
              <span>待处理</span>
              <span className={"font-bold text-red-500 ml-2"}>{60}</span>
            </div>
            <div className={"mx-5 text-gray-500 text-xl flex items-center"}>
              <span>处理中</span>
              <span className={"font-bold text-blue-500 ml-2"}>{60}</span>
            </div>
          </div>
        </div>

        <div className={"flex-1 w-full relative overflow-hidden"}>
          <TableV2 data={data} columns={columns}/>
        </div>

        <div>
          每天任务量
        </div>
      </div>

      {
        false && (
          <div>
            编辑表单
          </div>
        )
      }

    </div>
  )
}
