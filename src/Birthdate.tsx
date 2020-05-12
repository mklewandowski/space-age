import React, { useState, useEffect } from 'react';
import "./Birthdate.css";

export interface IProps {
  onSetAge: (date: number) => void;
}

const months = [{name: "January", monthNum: 0, maxDays: 31},
                {name: "February", monthNum: 1, maxDays: 29},
                {name: "March", monthNum: 2, maxDays: 31},
                {name: "April", monthNum: 3, maxDays: 30},
                {name: "May", monthNum: 4, maxDays: 31},
                {name: "June", monthNum: 5, maxDays: 30},
                {name: "July", monthNum: 6, maxDays: 31},
                {name: "August", monthNum: 7, maxDays: 31},
                {name: "September", monthNum: 8, maxDays: 30},
                {name: "October", monthNum: 9, maxDays: 31},
                {name: "November", monthNum: 10, maxDays: 30},
                {name: "December", monthNum: 11, maxDays: 31}];

export const Birthdate: React.FC<IProps> = (props) => {
  const [year, setYear] = useState(2010);
  const [month, setMonth] = useState("0");
  const [day, setDay] = useState(1);

  let maxDay = 31;
  const currMonth = months.find(m => m.monthNum === parseInt(month));
  if (currMonth) {
    maxDay = currMonth.maxDays;
  }
  const days = [];
  for (let d = 1; d <= maxDay; d++) {
    days.push(d);
  }
  const years = [];
  for (let y = 1900; y <= 2020; y++) {
    years.push(y);
  }
  useEffect(() => {
    const dUser = new Date(year, parseInt(month), day);
    const dNow = new Date(Date.now());
    const difference = dateDiffInDays(dUser, dNow);
    props.onSetAge(difference);
  });
  useEffect(() => {
    const currMonth = months.find(m => m.monthNum === parseInt(month));
    if (currMonth && day > currMonth.maxDays) {
      setDay(currMonth.maxDays);
    }
  },[month, day]);

  const handleChangeMonth = (event: any) => {
    setMonth(event.target.value);
  };
  const handleChangeDay = (event: any) => {
    setDay(event.target.value);
  };
  const handleChangeYear = (event: any) => {
    setYear(event.target.value);
  };

  function dateDiffInDays(a: Date, b: Date) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }

  return (
    <div className="birthdate">
      <div className="title">
        Enter your birthday!
      </div>
        <label>
          {`Month: `}
          <select value={month} onChange={handleChangeMonth}>
            { months.map((m, i) => <option value={m.monthNum} key={i}>{m.name}</option>) }
          </select>
        </label>
        <label>
          {`Day: `}
          <select value={day} onChange={handleChangeDay}>
            { days.map((d, i) => <option value={d} key={i}>{d}</option>) }
          </select>
        </label>
        <label>
          {`Year: `}
          <select value={year} onChange={handleChangeYear}>
            { years.map((y, i) => <option value={y} key={i}>{y}</option>) }
          </select>
        </label>
    </div>
  );
};