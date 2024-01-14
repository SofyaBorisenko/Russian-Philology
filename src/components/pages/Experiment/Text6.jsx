import Header from '../../layout/Header.jsx';
import Footer from '../../layout/Footer.jsx';
import './Experiment.scss';
import '../../../App.css';
import Ethiopia from "../assets/Ethiopia.jpg";
import Cameroon from "../assets/Cameroon.jpg";

function Text6() {
  return (
    <div>
      <Header />
        <main className="text6"><br />
        <article className="exp-article">
          <p><i>Устар.</i> Чернокожий, тёмнокожий человек; негр.</p>
        </article>
        <div className='pics'>
          <div className='pic'>
            <img className='ethiopia'
                 src={Ethiopia}
                 alt="Почтовая марка Эфиопии 1964 г."
                 />
            <h3>Почтовая марка Эфиопии 1964 г.</h3>
          </div>
          <div className='pic'>
            <img className="cameroon"
                 src={Cameroon}
                 alt="Почтовая марка Камеруна 1962 г."
                 />
            <h3>Почтовая марка Камеруна 1962 г.</h3>
          </div>
        </div>
        </main>
      <Footer />
    </div>
  );
}

export default Text6;