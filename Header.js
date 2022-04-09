import React ,{ Fragment } from "react";
import classes from './Header.module.css';

const Header = props => {         //export header component function
      return  (                 //return the JSX code
                              //fragment component as a wrapper which is the root element
                             //two sibling element header and div
  <Fragment> 
      
      <header className={classes.header}>
          <h1>Welcome To Hotel Mount View</h1>
          <button>Cart</button>
      </header>

      <div className = {classes['main-image']}>
          <img src="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content9442.jpg" alt="order what you want to eat"/>
      </div>
  </Fragment>
      );

}; 
export default Header;