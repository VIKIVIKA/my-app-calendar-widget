import React from 'react'

const CalendarDefault = (props) => {
  let calDates = [];
  for(let i=1;i<=props.noofDays;i++){
    calDates.push(i);
  }
  let monthStrMap = {'0': 'January', '1': 'February', '2': 'March', '3': 'April', '4': 'May', '5': 'June', '6': 'July', '7': 'August', '8': 'September'
  , '9': 'October', '10': 'November', '11': 'December'};

  let date = new Date();
  return (
    <div className="u_width252 text-left marginAuto marT45">
      <table cellPadding="0" className="u_selNone" cellSpacing="0">
          <tbody>
          <tr><th className="heading">
            <span className="prev" onClick={props.prevDate.bind(this)} > Prev </span>
            {monthStrMap[props.curMonth]}
            <span className="next" onClick={props.nextDate.bind(this)}> Next </span>
          </th></tr>
          <tr>{calDates.map((i)=>{
              return (<td className={'u_dispInline'+(i === date.getDate() ? ' highlightCell': '')+''} key={i}>
                  <span className="u_dispInline cell">{i}</span>
                </td>)
              })}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CalendarDefault;
