import Header from '../../layout/Header.jsx';
import Footer from '../../layout/Footer.jsx';
import { Link } from "@chakra-ui/react";
import './Experiment.scss';
import '../../../App.css';

function Text3() {
  return (
    <div>
      <Header />
        <main className="experiment"><br />
        <article className="exp-article">
          <Link textDecoration="underline" color="#43129B" className="link-back" href="/experiment-2024 ">НАЗАД</Link><br />
          <p>Этого предка, стрелецкого сотника, звали Гаврила Григорьевич Пушкин (? – 1638). При Борисе Годунове он был в опале, это заставило его примкнуть к сторонникам самозванца Лжедмитрия I. Позже Гаврила Пушкин служил Василию Шуйскому, а потом и Михаилу Романову. В дальнейшем был воеводой в Вязьме и послом в Польше. А.С. Пушкин писал о нём: «Гаврила Пушкин – один из моих предков, я изобразил его таким, каким нашёл в истории и в наших семейных бумагах. Он был очень талантлив – как воин, как придворный и в особенности как заговорщик».</p>
        </article><br />
        </main>
      <Footer />
    </div>
  );
}

export default Text3;