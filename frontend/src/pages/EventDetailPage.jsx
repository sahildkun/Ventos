import React from 'react'
import { useParams } from 'react-router-dom'
const EventDetailPage = () => {

    const params = useParams();
  return (
    <div>EventDetailPage : {params.id}</div>
  )
}

export default EventDetailPage