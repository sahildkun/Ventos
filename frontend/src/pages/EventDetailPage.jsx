import React from 'react'
import { useParams,json,useLoaderData } from 'react-router-dom'
import EventItem from '../components/EventItem';
const EventDetailPage = () => {
   const data = useLoaderData();
   const event = data.event;
  
  console.log(event);

  return (
   <EventItem event={event}/>
  )
}

export default EventDetailPage


export const loader = async ({request,params}) => {
    const id = params.id;
  
    const response = await fetch('http://localhost:8080/events/' + id);
    
    if(!response.ok) {
      throw json({message: 'Could not load data for this event'} , {
        status: 500,
      })
    }
    else{
      return response 
    
    }
     
}