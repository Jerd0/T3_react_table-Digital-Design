import React from 'react';
import {format, addSeconds} from 'date-fns'
const date=new Date(0)
export default props => (
  <table className="table" >
    <thead className="text-center"  style={{ cursor: "pointer" }}>
      <tr>
        <th onClick={props.onSort.bind(null, "name")}>
          Имя {props.sortField === "name" ? <small>{props.sort}</small> : null}
        </th>
        <th onClick={props.onSort.bind(null, "date")}>
          Первый полёт{" "}
          {props.sortField === "date" ? <small>{props.sort}</small> : null}
        </th>
        <th onClick={props.onSort.bind(null, "days")}>
          Дней в космосе{" "}
          {props.sortField === "days" ? <small>{props.sort}</small> : null}
        </th>
        <th onClick={props.onSort.bind(null, "mission")}>
          Название миссии{" "}
          {props.sortField === "mission" ? <small>{props.sort}</small> : null}
        </th>
        <th onClick={props.onSort.bind(null, "isMultiple")}>
          Повторные полёты{" "}
          {props.sortField === "isMultiple" ? <small>{props.sort}</small> : null}
        </th>
        <th>
          Удалить
        </th>
      </tr>
    </thead>
    <tbody className="text-center">
          {props.data ? props.data.map(item =>
              <tr key={item.id}>
            <td>{item.name}</td>
                <td>{(typeof (item.date))!=="number" ? 'ошибка типа' : format (addSeconds(date, item.date), 'dd-MM-yyyy') }</td>
                <td>{item.days}</td>
            <td>{item.mission}</td>
           <td className="text-center"><input
               name="isGoing"
               type="checkbox"
               checked={item.isMultiple}
                /></td>
                <td><button className="btn btn-outline-danger" onClick={props.onRowSelect.bind(null, item)}>X</button></td>
              </tr>) : window.location.reload()
            //   <div >
            // <p>Вы попали в неприятную ситуацию,</p>
            // <p>не стоило удалять этого пользователя</p>
            // <p>Нажмите на страницу</p>
            // <p>а если осталась всего одна, тогда на поиск</p>
            // <p>И всё починится</p>
            // </div>
            }
    </tbody>
  </table>
);