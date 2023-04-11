import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';
 


function EventsPage() {
  
    const data = useLoaderData();
    if(data.isError){
      return <p>{data.message}</p>
    }
    const events = data.events;
    console.log(events);
  return <EventsList events={events}/>
}

export default EventsPage;