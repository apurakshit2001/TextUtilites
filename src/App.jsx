import './App.css';
import { Header } from './components/Header';
// import { Body } from './components/Body';
import Footer from './components/Footer';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (
    <>
      <Router>
        <Header Title="TextUtilites" />
        <Alert alert="Follow me on instagram" />
        <div className="container">

          <Routes >
            
            <Route path='/' element={<TextForm heading="Enter the text to analyze" />} />

            <Route path="/about" element={<About />} />

          </Routes>

        </div>
        <Footer />
      </Router>

    </>
  );
}

export default App;
