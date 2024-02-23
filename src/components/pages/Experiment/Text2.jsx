import Header from '../../layout/Header.jsx';
import Footer from '../../layout/Footer.jsx';
import { Link } from "@chakra-ui/react";
import './Experiment.scss';
import '../../../App.css';

function Text2() {
  return (
    <div>
      <Header />
        <main className="experiment"><br />
        <article className="exp-article">
          <Link textDecoration="underline" color="#43129B" className="link-back" href="/experiment-2024 ">НАЗАД</Link><br />
          <p>Родоначальником фамилии Пушкиных по отцовской линии считается легендарный выходец «из немец, мужем честен», именем Ратша (Рача), выехавший в Новгород при Александре Невском. Новейшими изысканиями выяснено, однако, что Ратша не мог быть современником А. Невского, а жил лет за 100 до него. Пушкин придерживался версии о происхождении Ратши, официально закреплённой в «Общем гербовнике дворянских родов Всероссийской империи» (1797). </p>
        </article><br />
        </main>
      <Footer />
    </div>
  );
}

export default Text2;