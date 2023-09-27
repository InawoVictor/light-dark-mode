import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'
import './App.scss';
import useLocalStorage from 'use-local-storage';
import { useEffect, useState } from 'react';


function App() {
  const [switchBtn, setSwitchBtn] = useState(false)

 const [mode, setMode] = useLocalStorage("mode", "light");

  const toggleMode =() => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    setSwitchBtn(!switchBtn);
  }

  useEffect(() => {
    if(mode==="dark"){
      setSwitchBtn(true)
    }
  }, [mode])

  return (
    <div className="main">
     <Header
     myMode= {mode}
    onToggleMode ={toggleMode}
    onSwitch = {switchBtn}
    />
     <Hero myMode={mode}/>
     <Footer myMode={mode}/>
    </div>
  );
}

export default App;
