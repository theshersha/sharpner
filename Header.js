import './Header.css';
import { Fragment } from 'react';
import Button from '../UI/Button/Button';

const Header = props =>{
    return (
        <Fragment>
          <header className='header'>
            <h1>Fansy Mall</h1>
            <Button>Home</Button>
            <Button>Store</Button>
            <Button>About Us</Button>

          </header>
          <div className='headerlowerpart'>
              <div className='headerlowertext'>Shop Anything and get within 3 Days!</div>
          </div>
        </Fragment>
      );

}
export default Header;