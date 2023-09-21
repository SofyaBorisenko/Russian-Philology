import Header from '../../layout/Header.jsx';
import Footer from '../../layout/Footer.jsx';
import Granik from './Granik.jsx';
import Kontsevaya from './Kontsevaya.jsx';
import Bondarenko from './Bondarenko.jsx';

function Teachers() {
  return (
    <div>
      <Header />
      <Granik />
      <Kontsevaya />
      <Bondarenko />
      <Footer />
    </div>
  );
}

export default Teachers;