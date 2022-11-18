import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calender = () => {
  const [startDate, setDate] = useState(new Date);
  const today = new Date();

  const selectDateHandler = (d: Date) => {
    setDate(d);
  }
  return (
    <DatePicker
      dateFormat="yyyy/MM/dd"
      selected={startDate}
      onChange={selectDateHandler} 
      minDate={today}
      todayButton={"Today"}
    />
  )
}

export default Calender;