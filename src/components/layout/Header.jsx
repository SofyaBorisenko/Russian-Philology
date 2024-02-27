import { useEffect, useRef, useState } from 'react';
import './Header.scss';
import logo1 from './assets/logo1.png';
import logo2 from './assets/logo2.png';
import {
  Center,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const headerRef = useRef(null);
  const mobileMenuRef = useRef(null);
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
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false); // Close the mobile menu
      }
    };

    // Attach the click event listener
    document.body.addEventListener('click', handleOutsideClick);

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, [isMobileMenuOpen]); // Listen for changes in isMobileMenuOpen

  return (
    <header className={`header ${visible ? '' : 'hidden'}`} ref={headerRef}>
      {/* Mobile Version */}
      <div className='mobile-header'>
        <div className='header-container-1'>
          <div className='mobile-menu' ref={mobileMenuRef}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
                onClick={handleMobileMenuToggle}
              />
              {isMobileMenuOpen && (
                <MenuList className='menu-list' minWidth={32}>
                  <MenuItem>
                    <Link to='/'>Главная</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/research'>Исследования</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/staff'>Сотрудники</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/teachers'>Наши учителя</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/experiment-2024'>Эксперимент-2024</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/photos'>Фотогалерея</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/contacts'>Контакты</Link>
                  </MenuItem>
                </MenuList>
              )}
            </Menu>
          </div>
          <a href='/'>
            <h1 className='header-title'>Русская филология</h1>
          </a>
          <img className='logo2' src={logo2} alt='Знак пси' height='auto' />
        </div>
        <div className='header-container-2'>
          <h2>
            Федеральный научный центр психологических
            <br />и междисциплинарных исследований
          </h2>
          <div className='lab-info'>
            <h3 id='lab'>
              Лаборатория
              <br />
              экопсихологии развития
              <br />и психодидактики
            </h3>
            <Center
              height={{
                base: '1.8rem',
                sm: '2.1rem',
                md: '1.3rem',
                lg: '1.45rem',
                xl: '1.9rem',
              }}
            >
              <Divider
                orientation='vertical'
                margin={'0 0.75rem'}
                width='1.5px'
                background='#43129B'
              />
            </Center>
            <h3 id='group'>
              Группа психологических
              <br />
              основ разработки
              <br />
              школьных учебников
            </h3>
          </div>
        </div>
      </div>
      <Divider
        orientation='horizontal'
        display={{
          base: 'block',
          sm: 'block',
          md: 'none',
          lg: 'none',
          xl: 'none',
          '2xl': 'none',
        }}
        my={{ base: '1rem', sm: '1.25rem' }}
        width='100%'
        height='1.5px'
        background='#FE205A'
      />
      {/* Full-Screen Version */}
      <div className='full-screen-header'>
        <div className='left-content'>
          <a href='/'>
            <h1 className='header-title'>Русская филология</h1>
          </a>
          <img className='logo1' src={logo1} alt='Логотип ПИ РАО' />
        </div>
        <div className='right-content'>
          <h2>
            ФГБНУ «Федеральный научный центр психологических
            <br />и междисциплинарных исследований» (ФНЦ ПМИ)
          </h2>
          <div className='lab-info'>
            <h3>
              Лаборатория экопсихологии
              <br />
              развития и психодидактики
            </h3>
            <Center height={{ md: '1.3rem', lg: '1.45rem', xl: '1.9rem' }}>
              <Divider
                orientation='vertical'
                margin={'0.5rem 1rem 0 1rem'}
                width='1.5px'
                background='#43129B'
              />
            </Center>
            <h3>
              Группа психологических основ
              <br />
              разработки школьных учебников
            </h3>
          </div>
        </div>
      </div>
      <Divider
        className='divider'
        orientation='horizontal'
        display={{
          base: 'none',
          sm: 'none',
          md: 'block',
          lg: 'block',
          xl: 'block',
          '2xl': 'block',
        }}
        width={{ md: '80vw', lg: '64vw', xl: '64vw', '2xl': '64vw' }}
        height='1.5px'
        background='#FE205A'
        margin={{
          md: '0.3rem 10vw',
          lg: '0.3rem 18vw',
          xl: '0.625rem 18vw',
          '2xl': '0.625rem 18vw',
        }}
      />
      <nav className='full-screen-menu'>
        <ul className='menu'>
          <li>
            <Link to='/'>Главная</Link>
          </li>
          <li>
            <Link to='/research'>Исследования</Link>
          </li>
          <li>
            <Link to='/staff'>Сотрудники</Link>
          </li>
          <li>
            <Link to='/teachers'>Наши учителя</Link>
          </li>
          <li className='experiment-link'>
            <Link to='/experiment-2024'>Эксперимент-2024</Link>
          </li>
          <li>
            <Link to='/photos'>Фотогалерея</Link>
          </li>
          <li>
            <Link to='/contacts'>Контакты</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
