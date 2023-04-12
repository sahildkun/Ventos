import { createBrowserRouter, RouterProvider,json} from 'react-router-dom'
import EditEvent from './pages/EditEvent';
import EventDetailPage, {loader as eventLoader}from './pages/EventDetailPage';
import EventsLayout from './pages/EventsLayout';
import EventsPage from './pages/Events';
import Homepage from './pages/Homepage';
import NewEvent from './pages/NewEvent';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import { action as manipulateEvent } from './components/EventForm';
import { action as deleteEventAction } from './pages/EventDetailPage';
import { loader as allEventsLoader} from './pages/Events';
const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true , element: <Homepage/>},
      {path: 'events' , 
      element: <EventsLayout/>,
      children: [  
        {path:'' ,  element:<EventsPage/>,
        loader:  allEventsLoader,
      },
        {
        path: ':id' , 
        id: 'event-detail',
        loader: eventLoader,
        children: [
          {
            index: true,
            element: <EventDetailPage/>,
            loader: eventLoader,
            action: deleteEventAction,
          },
          {
            path: 'edit' , 
            element: <EditEvent/>,
            action: manipulateEvent,
          }
        ]
       },
        {path: 'new' ,
         element: <NewEvent/>,
         action: manipulateEvent,
      },
        
      ]
    
    },
      
      
    ]
  }
  
])
function App() {
  return <RouterProvider router={router}/>;
}

export default App;
