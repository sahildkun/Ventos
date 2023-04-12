import React from 'react'
import { json, redirect } from 'react-router-dom'
import EventForm from '../components/EventForm'
const NewEvent = () => {
  return (
    <EventForm method='post'/>
  )
}

export default NewEvent


export const action = async ({request,params}) => {
  const data = await request.formData();

  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description : data.get('description')
  }
  console.log(eventData);

  const response = await fetch('http://localhost:8080/events',{
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(eventData)
  })
  // console.log(response);
  if(!response.ok){
    throw json({
      message: 'Could not save event'
    },
    {
      status: 500
    }
    )
  }

  return redirect('/events')
}