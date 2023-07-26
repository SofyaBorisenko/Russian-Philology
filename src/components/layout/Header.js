import React, { useEffect, useRef, useState } from "react";
import './Header.css';
import logo1 from './assets/logo1.png';
import logo2 from './assets/logo2.png';
import { extendTheme, Divider, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const breakpoints = {
  sm: '30em', // 480px
  md: '48em', // 768px
  lg: '62em', // 992px
  xl: '80em', // 1280px
  '2xl': '96em', // 1536px
}

const theme = extendTheme({ breakpoints })
const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const headerRef = useRef(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos, visible, handleScroll]);

    return (
        <header className={`header ${visible ? '' : 'hidden'}`} ref={headerRef}>
        {/* Mobile Version */}
        <div className="mobile-header">
          <div class="header-container">
            <div class="mobile-menu">
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label='Options'
                  icon={<HamburgerIcon />}
                  variant='outline'
                  onClick={handleMobileMenuToggle}
                />
                {isMobileMenuOpen && (
                  <MenuList className="menu">
                    <MenuItem as='a' href='#'>Главная</MenuItem>
                    <MenuItem as='a' href='#'>Исследования</MenuItem>
                    <MenuItem as='a' href='#'>Сотрудники</MenuItem>
                    <MenuItem as='a' href='#'>Наши учителя</MenuItem>
                    <MenuItem as='a' href='#'>Новости</MenuItem>
                    <MenuItem as='a' href='#'>Фотогалерея</MenuItem>
                    <MenuItem as='a' href='#'>Контакты</MenuItem>
                  </MenuList>
              )}
            </Menu>
            </div>
            <h1 class="header-title">Русская Филология</h1>
            <img
            class="logo2"
            src={logo2}
            alt="Знак пси"
            height='auto'
            />
          </div>
          <div class="header-text-container">
            <h2 class="header-subtitle">Лаборатория экопсихологии развития и психодидактики</h2>
            <h3 class="header-caption">Группа психологических основ разработки школьных учебников</h3>
          </div>
        </div>
        <Divider
              className="divider"
              orientation='horizontal'
              display={{base: 'block', sm: 'block', md: 'block', lg: 'none', xl: 'none', '2xl': 'none'}}
              width='100%'
              height='1.5px'
              background='#FE205A'
          />
        {/* Full-Screen Version */}
        <div className="full-screen-header">
            <div className="left-content">
                <h1>Русская Филология</h1>
                <img className="logo1"
                src={logo1}
                alt="Логотип ПИ РАО"
                style={{ width: '21.25rem', height: 'auto' }}
                />
            </div>
            <div className="right-content">
                <h2>Лаборатория экопсихологии развития и психодидактики</h2>
                <h3>Группа психологических основ разработки
                <br />школьных учебников</h3>
            </div>
        </div>
        <Divider
          className="divider"
          orientation='horizontal'
          display={{base: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block', '2xl': 'block'}}
          width='60vw'
          height='1.5px'
          background='#FE205A'
          margin='0.625rem 20vw'
        />
        <nav className="full-screen-menu">
          <ul className="menu">
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/research">Исследования</Link></li>
            <li><Link to="/staff">Сотрудники</Link></li>
            <li><Link to="/teachers">Наши учителя</Link></li>
            <li><Link to="/news">Новости</Link></li>
            <li><Link to="/photos">Фотогалерея</Link></li>
            <li><Link to="/contacts">Контакты</Link></li>
          </ul>
        </nav>
      </header>
    );
  }

export default Header;