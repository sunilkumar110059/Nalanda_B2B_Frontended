import { useState } from "react";
import {
  format, subMonths, addMonths, startOfWeek, addDays, isSameDay, lastDayOfWeek, addWeeks, subWeeks,
  // getWeek,
} from "date-fns";

function WeekCalander(props) {
  const { showDetailsHandle, IconPrev, IconNext, IconPrevMonth, IconNextMonth, IconCalander, PeriodsData, MonthSliderShow, CurrentDateShow } = props

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  // const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));

  const currentDate = format(new Date(), "ccc dd MMM yy");

  const changeMonthHandle = (btnType) => {
    if (btnType === "prev") {
      setCurrentMonth(subMonths(currentMonth, 1));
    }
    if (btnType === "next") {
      setCurrentMonth(addMonths(currentMonth, 1));
    }
  };

  const changeWeekHandle = (btnType) => {
    if (btnType === "prev") {
      setCurrentMonth(subWeeks(currentMonth, 1));
      // setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
    }
    if (btnType === "next") {
      setCurrentMonth(addWeeks(currentMonth, 1));
      // setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
    }
  };

  const onDateClickHandle = (day, dayStr) => {
    setSelectedDate(day);
    showDetailsHandle(dayStr);
  };



  const renderCells = () => {
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
    const calanderData = [];
    let weekAndDate = [];
    let day = startDate;
    let formatDate = "";
    let formatWeek = "";


    if (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formatDate = format(day, "d");
        formatWeek = format(addDays(startDate, i), "EEE")
        const cloneDay = day;

        weekAndDate.push(
          <td className="weekday" key={day} >
            <div className={`dayscol ${isSameDay(day, new Date()) ? "activedate"
              : isSameDay(day, selectedDate) ? "selectdate" : ""}`}

              onClick={() => {
                const dayStr = format(cloneDay, "ccc dd MMM yy");
                onDateClickHandle(cloneDay, dayStr);
              }}>
              <div className="daysname">{formatDate}</div>
              <div className="weekname">{formatWeek}</div>
            </div>
          </td>
        );

        day = addDays(day, 1);
      }

      calanderData.push(weekAndDate);
      weekAndDate = [];
    }

    return (calanderData);
  };


  return (
    <div className="week-calander">
      <div className="row monthcolum justify-content-between">
        {PeriodsData && <div className="col-auto">{PeriodsData}</div>}

        {MonthSliderShow &&
          <div className="col-auto d-none d-md-block">
            <div className="monthcol">
              <div className="monthprev" onClick={() => changeMonthHandle("prev")}> {IconPrevMonth} </div>
              <div className="monthshow">{format(currentMonth, "MMM yyyy")}</div>
              <div className="monthnext" onClick={() => changeMonthHandle("next")}> {IconNextMonth} </div>
            </div>
          </div>
        }

        {CurrentDateShow && <div className="col-auto"> {IconCalander} {currentDate}</div>}

      </div>

      <div className="row justify-content-between">
        <div className="col-auto prevday" onClick={() => changeWeekHandle("prev")}>{IconPrev}</div>
        <div className="col order-3">
          <div className="table-responsive">
            <table className="weekdaycol">
              <tbody>
                <tr>
                  {renderCells()}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-auto order-sm-0 order-sm-3 nextday" onClick={() => changeWeekHandle("next")}>{IconNext}</div>
      </div>
    </div >
  );

}

export default WeekCalander;

