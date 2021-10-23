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
            <S.NavLogo  onClick={closeMobileMenu}>
              <S.NavIcon to='one' />
              ULTRA
            </S.NavLogo>
            <S.MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </S.MobileIcon>
            <S.NavMenu onClick={handleClick} click={click}>
              <S.NavItem>
                <S.NavLinks to='one' onClick={closeMobileMenu} smooth={true}>
                  Home
                </S.NavLinks>
              </S.NavItem>
              <S.NavItem>
                <S.NavLinks to='two' onClick={closeMobileMenu} smooth={true}>
                  Services
                </S.NavLinks>
              </S.NavItem>
              <S.NavItem>
                <S.NavLinks to='four' onClick={closeMobileMenu} smooth={true}>
                  Products
                </S.NavLinks>
              </S.NavItem>
              <S.NavItemBtn>
                {button ? (
                  <S.NavBtnLink to='three' smooth={true}>
                    <Button primary>Pricing</Button>
                  </S.NavBtnLink>
                ) : (
                  <S.NavBtnLink to='three' smooth={true}>
                    <Button onClick={closeMobileMenu} fontBig primary>
                    Pricing
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
