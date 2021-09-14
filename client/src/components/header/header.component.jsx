import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/BH3Logo_sm.svg';
import './header.styles.scss';

import { logout } from '../../redux/user/user.actions';

const Header = ({user, logout}) => (
    <div className='header'>
        <div className='logo-container'>
            <Link to='/'><Logo className='logo' /></Link>
        </div>
        <div className='options'>
            <Link className='option' to='/event/6124cd74e0ce610d294b60cd'>Run, Baby, Run</Link>
            <Link className='option' to='/event/6115068a805598666f2fa856'>Run this coming Sunday</Link>
            {
                user ? (
                    <Link className='option'  onClick={logout}>Logout</Link>
                ) : (
                    <Link className='option' to='/signin'>Login</Link>
                )
            }
        </div>
  </div>
);

function mapStateToProps(state) {
    const { user } = state.user;
    return {
      user,
    };
  }

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);