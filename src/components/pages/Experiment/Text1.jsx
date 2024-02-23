import Header from '../../layout/Header.jsx';
import Footer from '../../layout/Footer.jsx';
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import './Experiment.scss';
import '../../../App.css';

function Text1() {
  return (
    <div>
      <Header />
        <main className="experiment"><br />
        <article className="exp-article">
        <Link textDecoration="underline" color="#43129B" className="link-back" href="/experiment-2024 ">НАЗАД</Link><br />
          <p>На протяжении жизни Пушкин интересовался своей родословной. История славного рода прослеживается до XII в., до времён, когда Русь боролась с иноземными захватчиками – с Запада и с Востока. Предки Пушкина проявляли себя в переломные моменты истории русского народа. Во многом именно это ощущение причастности к истории Отечества вдохновляло поэта на стихи о далёком прошлом, формировало патриотическое мировоззрение. Неспроста Пушкин так увлёкся историей и сформулировал золотое правило: «Гордиться славою своих предков не только можно, но и должно; не уважать оной есть постыдное малодушие».</p>
          <p>Особенно ярко отношение Пушкина к истории своего рода проявилось в стихотворении <Link textDecoration="underline" color="#43129B" href="https://ru.wikisource.org/wiki/Моя_родословная_(Пушкин)" isExternal>«Моя родословная» (1830)<ExternalLinkIcon mx="2px" />
          </Link>. В нём есть такие строки:</p>
        </article>
        <article className="exp-poem-article">
          <p>Мой предок Рача мышцей бранной</p>
          <p>Святому Невскому служил;</p>
          <p>Его потомство гнев венчанный,</p>
          <p>Иван IV пощадил.</p>
        </article>
        <article className="exp-poem-article">
          <p>Водились Пушкины с царями;</p>
          <p>Из них был славен не один,</p>
          <p>Когда тягался с полякáми</p>
          <p>Нижегородский мещанин.</p>
        </article>
        <article className="exp-article">
          <p><b>Генеалогическое древо А.С. Пушкина</b> можно посмотреть <Link textDecoration="underline" color="#43129B" href="http://pushkin-lit.ru/images/family/pushkin-gen-5.jpg" isExternal>здесь<ExternalLinkIcon mx="2px" /></Link>.</p>
        </article><br />
        </main>
      <Footer />
    </div>
  );
}

export default Text1;