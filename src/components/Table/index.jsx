import styles from './index.module.less'
import PropTypes from "prop-types";
import {c} from "/@/utils/classNames.js";

const Table = (props) => {
  const {data = [], columns = [], rowClass} = props

  return <>
    <div className={styles['table']}>
      <div className={styles['table-container']}>
        <table className={styles['table-container-inner']}>
          <colgroup>
            {
              columns.map(col => {
                return <>
                  <col className={col.headClass}/>
                </>
              })
            }
          </colgroup>
          <thead>
          <tr>
            {columns.map(col => {
              return <>
                <th scope="col" className={c([styles['table-header'], col.headClass])}>
                  <span className={styles['table-header-col']}>
                    {col.renderHeader ? col.renderHeader() : col.label}
                  </span>
                </th>
              </>
            })}
          </tr>
          </thead>
          <tbody className={styles['table-body']}>
          {data.map((row, index) => {
            return <>
              <tr key={row[props.key ?? 'id']}
                  className={c([styles['table-row'], rowClass && (typeof rowClass === 'string' ? rowClass : rowClass(row, index))])}>
                {
                  columns.map(col => {
                    return <>
                      <td className={c([styles['table-col'], col.colClass])}>
                        {
                          col.render ? col.render(row[col.prop], row, col) : (<span>{row[col.prop] ?? '--'}</span>)
                        }
                      </td>
                    </>
                  })
                }
              </tr>
            </>
          })}
          </tbody>
          <caption className="caption-bottom">
            {/*{"Table 3.1: Professional wrestlers and their signature moves."}*/}
          </caption>
        </table>
      </div>
    </div>
  </>
}

Table.propTypes = {
  key: PropTypes.string,
  data: PropTypes.array,
  columns: PropTypes.array,
  rowClass: PropTypes.oneOf([PropTypes.string, PropTypes.func]),
}

export default Table
