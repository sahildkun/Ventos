import { Suspense, useEffect, useState } from 'react';
import { Await, defer, useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';
 


function EventsPage() {
  
    const {events} = useLoaderData();
  
    console.log(events);
    
    return( 
      
  <Suspense fallback={<p>Loading....</p>}>
   <Await resolve={events}>
    {(loadedEvents) => {
        return  <EventsList events={loadedEvents}/>
       }} 
     </Await>
   </Suspense>
   
    )
}

export default EventsPage;

const loadEvents =async  () => {
  const response = await fetch('http://localhost:8080/events');
  
  if (!response.ok) {
    // throw new Response(JSON.stringify({message: 'Could not find events'}), {status: 500})
   return json(
    {message: 'Could not find events'},
    {status: 500}
    )
  } else {
    const resData = await response.json();
    // console.log(resData.events);
    //loader also directly returns response instead of the promise that resolves a response and it could be  easily utilized thankfully to the useloaderData hook of react router
    return resData.events;
  }

}
export const loader =  () => {
  return defer({
    events:loadEvents(),
  })
}