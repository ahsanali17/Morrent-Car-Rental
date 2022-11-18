import { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { DatePickerWrapperStyles } from './styles';

const Calender = () => {
  const [startDate, setDate] = useState(new Date);
  const today = new Date();

  const ExampleCustomInput = forwardRef(({ value, onClick }) => ( <p onClick={onClick}>{value}</p>
  ));

  const selectDateHandler = (d: Date) => {
    setDate(d);
  }
  return (
    <>
      <DatePickerWrapperStyles />
      <DatePicker
        wrapperClassName='date-picker'
        dateFormat="yyyy/MM/dd"
        selected={startDate}
        onChange={selectDateHandler} 
        minDate={today}
        todayButton={"Today"}
        customInput={<ExampleCustomInput />}
        popperPlacement="bottom"
        popperModifiers={[
          {
          name: 'flip',
          options: {
            fallbackPlacements: ["bottom"],
              }
          }
        ]}
      />
    </>
  )
}

export default Calender;