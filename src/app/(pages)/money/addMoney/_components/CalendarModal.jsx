import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const CalendarModal = ({ popup, value, onChange, setShowModal }) => {
  const modelClass = `modal-calendar ${
    popup ? "open-modal-calendar" : ""
  } fixed w-full h-full left-0 top-0 z-20 flex justify-center items-center`;
  const modelOverlay = `modal-overlay-calendar absolute w-full h-full left-0 top-0`;
  const modelMain = `modal-main-calendar ${
    popup ? "open-modal-main-calendar" : ""
  } absolute rounded-3xl shadow-md`;

  return (
    <div className={modelClass}>
      <div className={modelOverlay} onClick={() => setShowModal(false)} />

      <div className={modelMain}>
        <div className="flex flex-[1] justify-center items-center">
          <Calendar
            onChange={onChange}
            value={value}
            onClickDay={() => setShowModal(false)}
          />
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default CalendarModal;
