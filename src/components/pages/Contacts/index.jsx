import Header from '../../layout/Header.jsx';
import Footer from '../../layout/Footer.jsx';
import '../../../App.css';
import './Contacts.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import Location from './Location';

function Contacts() {
  return (
    <div>
      <Header />
      <main>
        <h1>Наши контакты</h1>
        <div className="staff-contacts-container">
          <div className="contact">
            <h2>Борисенко Наталья Анатольевна</h2>
            <p>
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              <a href="mailto:borisenko_natalya@list.ru">
                borisenko_natalya@list.ru
              </a>
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} />{" "}
              <a href="tel:+7-909-692-11-14">+7-909-692-11-14</a>
            </p>
          </div>
          <div className="contact">
            <h2>Миронова Ксения Вадимовна</h2>
            <p>
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              <a href="mailto:kseniamir@inbox.ru">kseniamir@inbox.ru</a>
            </p>
          </div>
          <div className="contact">
            <h2>Шишкова Светлана Викторовна</h2>
            <p>
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              <a href="mailto:sshishkova@yandex.ru">sshishkova@yandex.ru</a>
            </p>
          </div>
        </div>
        <div className="contact">
          <h2>Наш адрес:</h2>
          <p>
            <FontAwesomeIcon icon={faMapMarker} /> 125009, г. Москва, ул.
            Моховая, д. 9, строение 4, группа школьных учебников – Ц18
            (Цокольный этаж)
          </p>
        </div>
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default Contacts;