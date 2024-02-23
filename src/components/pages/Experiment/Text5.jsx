import Header from '../../layout/Header.jsx';
import Footer from '../../layout/Footer.jsx';
import { Link } from "@chakra-ui/react";
import './Experiment.scss';
import '../../../App.css';

function Text5() {
  return (
    <div>
      <Header />
        <main className="experiment"><br />
        <article className="exp-article">
          <Link textDecoration="underline" color="#43129B" className="link-back" href="/experiment-2024 ">НАЗАД</Link><br />
          <p>22 ноября 1696 г. Пётр I издал указ об обучении дворянской молодёжи за границей. Первыми в Италию, Голландию и Англию отправились 28 отпрысков виднейших аристократических фамилий: Голицыных, Куракиных, Долгоруких, Шаховских и др. Согласно царской инструкции, за границей дворяне должны были за свой счёт обучаться корабельным, навигационным, математическим и астрономически наукам. Большинство из них заняло впоследствии важные посты на государственной службе.</p>
        </article><br />
        </main>
      <Footer />
    </div>
  );
}

export default Text5;