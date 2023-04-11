import { createBrowserRouter, RouterProvider,json} from 'react-router-dom'
import EditEvent from './pages/EditEvent';
import EventDetailPage, {loader as eventLoader}from './pages/EventDetailPage';
import EventsLayout from './pages/EventsLayout';
import EventsPage from './pages/Events';
import Homepage from './pages/Homepage';
import NewEvent from './pages/NewEvent';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import { action as newEventAction } from './pages/NewEvent';

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
        loader: async() => {
          const response = await fetch('http://localhost:8080/events');
  
          if (!response.ok) {
            // throw new Response(JSON.stringify({message: 'Could not find events'}), {status: 500})
           return json(
            {message: 'Could not find events'},
            {status: 500}
            )
          } else {
            // const resData = await response.json();
            // console.log(resData.events);
            //loader also directly returns response instead of the promise that resolves a response and it could be  easily utilized thankfully to the useloaderData hook of react router
            return response;
          }
        }
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
          },
          {
            path: 'edit' , 
            element: <EditEvent/>
          }
        ]
       },
        {path: 'new' ,
         element: <NewEvent/>,
         action: newEventAction,
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
