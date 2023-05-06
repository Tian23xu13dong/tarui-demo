import Calendar from "/@/components/Calendar/index.jsx";

export default function WorkProgress() {
  return (
    <div className={"flex h-full w-full overflow-auto"}>
      <div>
        <div>
          <h2>工作计划进度</h2>
          <span>PROJECT SCHEDULE MANAGEMENT </span>
        </div>

        <div>
          <Calendar />
        </div>

        <div>
          项目列表
        </div>
      </div>

      <div className={"flex-1"}>
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
