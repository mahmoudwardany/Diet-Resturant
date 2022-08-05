import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Asking from './Components/Asking/Asking';
import Home from './Components/Home/Home';
import Inger from './Components/Inger/Inger';
import Navs from './Components/Navbar/Navbar';
import Number from './Components/Number/Nubmer';
import Slider from './Components/Slider/Slider';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div >
      <Navs/>
      <Home/>
      <Number/>
    <Inger/>
    <Slider/>
    <Asking/>
    <Footer/>
    </div>
  );
}

export default App;
