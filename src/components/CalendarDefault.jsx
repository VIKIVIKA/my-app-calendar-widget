import React from 'react'

const CalendarDefault = (props) => {
  let calDates = [];
  for(let i=1;i<=31;i++){
    calDates.push(i);
  }
  return (
    <div className="u_width249 text-left marginAuto marT45">
      <div className="heading">
        <span className="prev" onClick={props.prevDate.bind(this)} > Prev </span>
        {props.curMonth}
        <span className="next" onClick={props.nextDate.bind(this)}> Next </span>
      </div>
      {calDates.map((i)=>{
        return (
          <div className="u_dispInline" key={i}>
            <span className="u_dispInline cell">{i}</span>
          </div>)
      })}
    </div>
  )
}

export default CalendarDefault;
