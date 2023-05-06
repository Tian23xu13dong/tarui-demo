import Calendar from "../../components/Calendar/index.jsx";

export default function WorkProgress() {
  return (
    <div className={"flex h-full w-full overflow-auto"}>
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

      <div className={"flex-1 ml-2"}>
        <div>
          筛选条件和工作量统计
        </div>

        <div>
          工作列表
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
