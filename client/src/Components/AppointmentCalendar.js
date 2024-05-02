import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': require('date-fns/locale/en-US')
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const AppointmentCalendar = () => {
  const [events, setEvents] = useState([]);

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt('New Appointment Title:');
    if (title) {
      setEvents(prevEvents => [
        ...prevEvents,
        { start, end, title },
      ]);
    }
  };

  return (
    <div style={{ height: '100%' ,background:'linear-gradient(to bottom,   #FFFCFC,  #AB9551)'}}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 900 }}
        selectable
        onSelectSlot={handleSelectSlot}
      />
    </div>
  );
};

export default AppointmentCalendar;
