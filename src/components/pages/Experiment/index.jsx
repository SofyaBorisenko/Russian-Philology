import Header from '../../layout/Header.jsx';
import Footer from '../../layout/Footer.jsx';
import { Link } from '@chakra-ui/react';
import Gerb from '../assets/Gerb.webp';
import Pushkin from '../assets/Pushkin.webp';
import './Experiment.scss';
import '../../../App.css';

function Experiment() {
  return (
    <div>
      <Header />
      <main className='experiment'>
        <h2 className='exp-heading'>ТЕКСТ ДЛЯ ЧТЕНИЯ</h2>
        <article className='exp-article'>
          <i>
            Прочитайте внимательно фрагмент из книги Г.Г. Граник, Л.А. Концевой,
            К.В. Мироновой «А.С. Пушкин, его друзья и современники».
          </i>
        </article>
        <div className='pics'>
          <div className='maintext-pic'>
            <img src={Pushkin} alt='А.С. Пушкин. Автопортрет (1829)' />
            <h3>А.С. Пушкин. Автопортрет (1829)</h3>
          </div>
          <div className='maintext-pic'>
            <img src={Gerb} alt='Герб рода Пушкиных' />
            <h3>Герб рода Пушкиных</h3>
          </div>
        </div>
        <h2 className='exp-heading'>
          Жизнь Александра Сергеевича Пушкина (1799–1837)
          <br />
          Предыстория
        </h2>
        <article className='exp-article'>
          <p>
            Александр Сергеевич Пушкин проявлял огромный{' '}
            <Link
              textDecoration='underline'
              color='#43129B'
              href='/experiment-text-1 '
            >
              интерес к своей родословной
            </Link>
            . И это не случайно: там было чем заинтересоваться.
          </p>
          <p>
            Род Пушкиных по отцовской линии насчитывал много веков, и поэт
            гордился своим «шестисотлетним дворянством». На самом деле ко
            временам Пушкина этот род насчитывал{' '}
            <Link
              textDecoration='underline'
              color='#43129B'
              href='/experiment-text-2'
            >
              семьсот лет
            </Link>
            . «Имя предков моих встречается поминутно в нашей истории», — пишет
            он в «Начале автобиографии».{' '}
            <Link
              textDecoration='underline'
              color='#43129B'
              href='/experiment-text-3'
            >
              Одного из этих предков
            </Link>
            , жившего во времена Бориса Годунова и «игравшего важную роль в сию
            несчастную эпоху», Пушкин-драматург «вывел на сцену» в исторической
            трагедии «Борис Годунов».
          </p>
          <p>
            «Родословная матери моей, — продолжает Пушкин, — ещё любопытнее. Дед
            её был негр…» И был это не просто негр, а знаменитый{' '}
            <Link
              textDecoration='underline'
              color='#43129B'
              href='/experiment-text-4'
            >
              Ибрагим Ганнибал
            </Link>
            , крестник и любимец императора Петра Великого. С этого
            экзотического прадеда поэта мы и начнём рассказ о Пушкине.
          </p>
          <p>
            «В числе молодых людей,{' '}
            <Link
              textDecoration='underline'
              color='#43129B'
              href='/experiment-text-5'
            >
              отправленных Петром Великим в чужие края
            </Link>{' '}
            для приобретения сведений, необходимых государству преобразованному,
            находился его крестник,{' '}
            <Link
              textDecoration='underline'
              color='#43129B'
              href='/experiment-text-6'
            >
              арап
            </Link>{' '}
            Ибрагим. Он обучался в парижском военном училище, выпущен был
            капитаном артиллерии, отличился в Испанской войне и, тяжело
            раненный, возвратился в Париж. Император посреди обширных своих
            трудов не переставал осведомляться о своём любимце и всегда получал
            лестные отзывы насчёт его успехов и поведения. &lt;…&gt;
          </p>
          <p>
            Появление Ибрагима, его наружность, образованность и природный ум
            возбудили в Париже общее внимание. Все дамы желали видеть у себя{' '}
            <abbr title='Царского негра (фр.).'>le Ne`gre du czar</abbr> и
            ловили его наперехват; регент приглашал его не раз на свои весёлые
            вечера. &lt;…&gt; Но мысль променять это рассеяние, эти блестящие
            забавы на суровую простоту Петербургского двора не одна ужасала
            Ибрагима. Другие сильнейшие узы привязывали его к Парижу. Молодой
            африканец любил. &lt;…&gt;
          </p>
          <p>
            Однажды Ибрагим был у выхода герцога Орлеанского. Герцог, проходя
            мимо его, остановился и вручил ему письмо, приказав прочесть на
            досуге. Это было письмо Петра I. Государь &lt;…&gt; писал герцогу,
            что он ни в чём неволить Ибрагима не намерен, что предоставляет его
            доброй воле возвратиться в Россию или нет, но что во всяком случае
            он никогда не оставит прежнего своего питомца. Это письмо тронуло
            Ибрагима до глубины сердца. С той минуты участь его была решена. На
            другой день он объявил регенту своё намерение немедленно отправиться
            в Россию».
          </p>
          <p>
            Вы прочитали отрывки из неоконченного романа А.С. Пушкина «Арап
            Петра Великого» (1827). Об Ибрагиме Ганнибале существует столько{' '}
            <Link
              textDecoration='underline'
              color='#43129B'
              href='/experiment-text-7'
            >
              легенд и мифов
            </Link>
            , что сейчас уже невозможно отличить правду от вымысла. Однако
            известно, что Петру I в 1706 году подарили африканского мальчика —{' '}
            <Link
              textDecoration='underline'
              color='#43129B'
              href='/experiment-text-8'
            >
              эфиопа
            </Link>
            .
          </p>
          <p>
            Удивительно сложилась судьба этого негритянского мальчика: царь Пётр
            Великий полюбил его, крестил, дал своё отчество. Так Ибрагим стал
            Абрамом Петровичем Ганнибалом. Пётр послал его учиться за границу и
            по возвращении сделал своим ближайшим помощником.
          </p>
          <p>
            Ибрагим Ганнибал был дважды женат, и вторая жена родила ему девять
            сыновей; один из них, Осип, был отцом Надежды Осиповны, матери
            поэта.
          </p>
          <p className='ending'>∽ Конец текста ∼</p>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default Experiment;