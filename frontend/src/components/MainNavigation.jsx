import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';

function MainNavigation() {
  return (
    <header className='m-10'>
      <nav>
        <ul className='flex flex-row justify-end items-center space-x-10 '>
          <li>
            <NavLink 
            to={'/'}
            className={({isActive}) => isActive ? 'text-red-400  ' : " hover:text-red-400" }
            end={true}
            >Home</NavLink>
          </li>
          <li>
            <NavLink 
            to={'/events'}
            className={({isActive}) => isActive ? 'text-red-400  ' :'hover:text-red-400' }
            >Events</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
