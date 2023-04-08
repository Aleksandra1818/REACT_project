import './App.css';
import NavBar from './Components/Navbar';
import SearchBar from './Components/SearchBar';
import Congrats from './Components/Congrats';
import SmallInfoBox from './Components/SmallinfoBox';
import ChartSec from './Components/FigureSection';
import { createContext} from 'react';
import { useState } from 'react';
import ReactSwitch from 'react-switch';
import FontSizeChanger from 'react-font-size-changer';
import { Icon } from '@iconify/react';

export const LightDarkMode = createContext(null); 

function App() {

  const [mode,setMode]=useState("dark");

  function changeMode(){
    setMode((acc_mode) => (acc_mode==="dark" ? "light" : "dark"))
  };
  
  return (
    <LightDarkMode.Provider value={{mode,changeMode}}>
    <div className="App" class={mode}>
      <header className="App-header">
      <NavBar/>
      <div class="content">
        <SearchBar/>
        <div class="row-boxes">
          <Congrats name="Ola"/>
          <SmallInfoBox name="Profit " icon="ic:round-access-time" desc=" 2,00 zł"/>
          <SmallInfoBox name="Happiness " icon ="mdi:emoticon-happy-outline" desc=" Medium"/>
        </div>
        <div class="row-boxes">
          <ChartSec/>
          <div class="column-boxes">
            <div class="row-boxes">
              <SmallInfoBox name="Payments " icon="mdi:account-payment-outline"  desc=" -2,878 zł"/>
              <SmallInfoBox name="Cats seen today "  icon="fluent:animal-cat-24-regular"  desc=" 2"/>
            </div>
            <div class="row-boxes">
              <SmallInfoBox name="Weather "  icon="ph:cloud-sun-light"  desc=" Sunny"/>
            </div>
          </div>
        </div>
        <div class="row=boxes">
          <div class="modeChange">
            <label>{mode==="light" ? "Light Mode " : "Dark Mode "}</label>
            <ReactSwitch onChange={changeMode} checked={mode==="light"} />
            <label>Zoom in/out</label>
            <FontSizeChanger
                  targets={['.content', '.nav-box']}
                  options={{
                    stepSize: 1,
                    range: 2
                  }}
                  customButtons={{
                    up: <Icon icon="mdi:magnify-plus" />,
                    down: <Icon icon="mdi:zoom-out" />,
                    style: {
                      WebkitBorderRadius: '15px',
                      width: '40px',
                      height: '30px',
                    },
                    buttonsMargin: 7}}/>
          </div>
        </div>
        </div>
      </header>
    </div>
    </LightDarkMode.Provider>
  );
}

export default App;
