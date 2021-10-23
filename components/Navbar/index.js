import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../globals.styled';
import * as S from './Navbar.styled';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);


  return (
    <React.Fragment>
      <IconContext.Provider value={{ color: '#fff' }}>
        <S.Nav>
          <S.NavbarContainer>
            <S.NavLogo to='/' onClick={closeMobileMenu}>
              <S.NavIcon />
              ULTRA
            </S.NavLogo>
            <S.MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </S.MobileIcon>
            <S.NavMenu onClick={handleClick} click={click}>
              <S.NavItem>
                <S.NavLinks to='/' onClick={closeMobileMenu}>
                  Home
                </S.NavLinks>
              </S.NavItem>
              <S.NavItem>
                <S.NavLinks to='/services' onClick={closeMobileMenu}>
                  Services
                </S.NavLinks>
              </S.NavItem>
              <S.NavItem>
                <S.NavLinks to='/products' onClick={closeMobileMenu}>
                  Products
                </S.NavLinks>
              </S.NavItem>
              <S.NavItemBtn>
                {button ? (
                  <S.NavBtnLink to='/sign-up'>
                    <Button primary>SIGN UP</Button>
                  </S.NavBtnLink>
                ) : (
                  <S.NavBtnLink to='/sign-up'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      SIGN UP
                    </Button>
                  </S.NavBtnLink>
                )}
              </S.NavItemBtn>
            </S.NavMenu>
          </S.NavbarContainer>
        </S.Nav>
      </IconContext.Provider>
    </React.Fragment>
  );
}

export default Navbar;
