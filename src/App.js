import './App.css';
import Block_1 from './components/Block_1/Block_1';
import Block_2 from './components/Block_2/Block_1/Block_2';
import Block_3 from './components/Block_3/Block_3';
import Block_4 from './components/Block_4/Block_4';
import Block_5 from './components/Block_5/Block_5';
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
    </div>
  );
}

export default App;
