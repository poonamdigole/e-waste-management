import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import Home from './views/Home/Home';
import Manufacturer from './views/Manufacturer/Manufacturer';
import Retailer from './views/Retailer/Retailer';
import Consumer from './views/Consumer/Consumer';
import Contractor from './views/Contractor/Contractor';
import Center from './views/Center/Center';
import WasteBin from './views/WasteBin/WasteBin';
import RecyclingPlant from './views/RecyclingPlant/RecyclingPlant';
import DataUnit from './views/DataUnit/DataUnit';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/manufacturer',
    element: <Manufacturer />
  },
  {
    path: '/retailer',
    element: <Retailer />
  },
  {
    path: '/consumer',
    element: <Consumer/>
  },
  {
    path: '/contractor',
    element: <Contractor/>
  },
  {
    path: '/center',
    element: <Center/>
  },
  {
    path: '/wasteBin',
    element: <WasteBin/>
  },
  {
    path: '/recyclingPlant',
    element: <RecyclingPlant/>
  },
  {
    path: '/dataUnit',
    element: <DataUnit/>
  },
])

root.render(<RouterProvider router={router} />);


