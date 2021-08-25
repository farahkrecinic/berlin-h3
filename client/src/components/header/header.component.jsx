import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/BH3Logo_sm.svg';
import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <div className='logo-container'>
            <Link to='/'><Logo className='logo' /></Link>
        </div>
        <div className='options'>
            <Link className='option' to='/event/6124cd74e0ce610d294b60cd'>Run, Baby, Run</Link>
            <Link className='option' to='/event/6115068a805598666f2fa856'>Run this coming Sunday</Link>
        </div>
  </div>
);

export default Header;