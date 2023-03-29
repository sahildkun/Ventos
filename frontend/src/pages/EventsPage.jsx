import React from 'react'
import { NavLink } from 'react-router-dom'


const DUMMY_EVENTS = [ 
  {
    id:'e1',
    title: 'first event'
  },
  {
    id:'e2',
    title: 'last event'
  }
 ]
const EventsPage = () => {
  return (
    <>
    {
      DUMMY_EVENTS.map((event) => <li key={event.id}>
        <NavLink to={event.id} className='hover:text-yellow-300 '>{event.title}</NavLink>
      </li>)
    }
    
    </>
  )
}

export default EventsPage