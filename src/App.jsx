import './App.css';
import Block1 from './components/Block1/Block1';
import Block2 from './components/Block2/Block2';
import Block3 from './components/Block_3/Block3';
import Block4 from './components/Block_4/Block4';
import Block5 from './components/Block_5/Block5';
import Block6 from './components/Block_6/Block6';
import Block7 from './components/Block_7/Block7';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MobileHeader from './components/MobileHeader/MobileHeader';
import Return from "./components/Return/Return";
import {useInView} from "react-intersection-observer";
import {useEffect, useState} from "react";

const App = () => {

  const {ref, inView} = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  const [block1State, setBlock1State] = useState(false)
  useEffect(() => {
    setBlock1State(true)
    console.log(inView)
  }, [inView])

  return (
    <div className="App">
      <Header/>
      <MobileHeader/>
      <Block1 refView={ref} view={block1State}/>
      <Block2/>
      <Block3/>
      <Block4/>
      <Block5/>
      <Block6/>
      <Block7/>
      <Footer/>
      <Return/>
    </div>
  );
}

export default App;
