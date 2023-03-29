import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import EditEvent from './pages/EditEvent';
import EventDetailPage from './pages/EventDetailPage';
import EventsLayout from './pages/EventsLayout';
import EventsPage from './pages/EventsPage';
import Homepage from './pages/Homepage';
import NewEvent from './pages/NewEvent';
import RootLayout from './pages/Root';



const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout/>,
    children: [
      {index: true , element: <Homepage/>},
      {path: 'events' , 
      element: <EventsLayout/>,
      children: [  
        {path:'' ,  element:<EventsPage/>},
        {path: ':id' , element: <EventDetailPage/>},
        {path: 'new' , element: <NewEvent/>},
        {path: ':id/edit' , element: <EditEvent/>}
      ]
    
    },
      
      
    ]
  }
  
])
function App() {
  return <RouterProvider router={router}/>;
}

export default App;
