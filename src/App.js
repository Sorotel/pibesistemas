import './App.css';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import "react-multi-carousel/lib/styles.css";

function App() {
  return (
    <div className="App">
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
