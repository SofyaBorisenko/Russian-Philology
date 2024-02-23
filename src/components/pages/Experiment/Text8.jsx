import Header from '../../layout/Header.jsx';
import Footer from '../../layout/Footer.jsx';
import './Experiment.scss';
import '../../../App.css';
import { Link } from "@chakra-ui/react";

function Text8() {
  return (
    <div>
      <Header />
        <main className="experiment"><br />
        <article className="exp-article">
          <Link textDecoration="underline" color="#43129B" className="link-back" href="/experiment-2024 ">НАЗАД</Link><br />
          <p>Эфиоп – представитель коренного населения Эфиопии (в прошлом Абиссинии) – крупного государства на северо-востоке Африки. </p>
        </article><br />
        </main>
      <Footer />
    </div>
  );
}

export default Text8;