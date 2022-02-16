import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Block_1 from './components/Block_1/Block_1';
import Block_2 from './components/Block_2/Block_1/Block_2';
import Block_3 from './components/Block_3/Block_3';
import Block_4 from './components/Block_4/Block_4';
import Block_5 from './components/Block_5/Block_5';
import Block_6 from './components/Block_6/Block_6';
import Block_7 from './components/Block_7/Block_7';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
        <Header />
        <Block_1 />
        <Block_2 />
        <Block_3 />
        <Block_4 />
        <Block_5 />
        <Block_6 />
        <Block_7 />
        <Footer />
    </div>
  );
}

export default App;
