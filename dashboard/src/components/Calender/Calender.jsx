import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ValuePiece = Date | null;

const Value = ValuePiece | [ValuePiece, ValuePiece];

const Calender = () => {
  const [value, onChange] = useState < Value > new Date();

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default Calender;
