import React, { useEffect, useState } from 'react'

const CalendarView = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch('/api/calendar')
      .then((response) => response.json())
      .then((data) => setEvents(data))
  }, [])

  return <div></div>
}

export default CalendarView
