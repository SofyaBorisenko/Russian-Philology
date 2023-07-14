import React, { useEffect, useRef, useState } from "react";
import './styles.css';
import logo1 from '../images/logo1.png';
import { Divider } from '@chakra-ui/react'

const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const headerRef = useRef(null);

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos, visible, handleScroll]);

    return (
        <header className={`header ${visible ? '' : 'hidden'}`} ref={headerRef}>
        <div className="header-top">
            <div className="left-content">
                <h1>Русская Филология</h1>
                <img src={logo1} alt="Логотип ПИ РАО" style={{ width: '340px', height: '54px' }} />
            </div>
            <div className="right-content">
                <h2>Лаборатория экопсихологии развития и психодидактики</h2>
                <h3>Группа психологических основ разработки
                <br />школьных учебников</h3>
            </div>
        </div>
        <Divider
            orientation='horizontal'
            style={{ width: '84vw', height: '1.5px', background: '#FE205A', margin: '10px 8vw' }}
        />
        <nav>
            <ul className="menu">
                <li><a href="/">Главная</a></li>
                <li><a href="/research">Исследования</a></li>
                <li><a href="/staff">Сотрудники</a></li>
                <li><a href="/teachers">Наши учителя</a></li>
                <li><a href="/news">Новости</a></li>
                <li><a href="/photos">Фотогалерея</a></li>
                <li><a href="/contacts">Контакты</a></li>
            </ul>
        </nav>
      </header>
    );
  }

export default Header;