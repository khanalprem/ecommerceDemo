import React, { useCallback } from 'react';
import {Link} from 'react-router-dom';
import {AiOutlineLogin, AiOutlineShoppingCart,AiOutlineLogout} from 'react-icons/ai';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const state = useSelector((state) => state.handleCart)
  const cart_amount = useCallback(() => {
    let count = 0;
    state.map((cart_item) => {
      count = count + cart_item?.qty
    })
    return count
  }, [state]);

  return (
    <header className='site-header'>
        <div className='container'>
            <div className='is-flex is-between is-align-center'>
                <Link to='/' className="site-logo">Logos</Link>
                <nav>
                    <ul className='is-flex is-center is-align-center'>
                        <li>
                          <Link to='/'>Home</Link>
                        </li>
                        <li>
                          <Link to='/products'>Product</Link>
                        </li>
                        <li>
                          <Link to='/about'>About</Link>
                        </li>
                        <li>
                          <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className='is-flex is-end is-align-center col-gap-12'>
                    <Link to='./signin' className='btn btn-secondary btn-sm is-flex is-align-center col-gap-8'>
                      <AiOutlineLogin/>
                      <span>Login</span>
                    </Link>
                    <Link to='signup' className='btn btn-secondary btn-sm is-flex is-align-center col-gap-8'>
                      <AiOutlineLogout />
                      <span>sign up</span>
                    </Link>
                    <a className='btn btn-primary btn-sm is-flex is-align-center col-gap-8'>
                      <AiOutlineShoppingCart/>
                      <span>Cart</span>
                      <span>{cart_amount()}</span>
                    </a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar