import './App.css';
import Greetings from "./Greetings/Greetings";
import InfoSection from "./InfoSection/InfoSection";
import TextBlock from "./TextBlock/TextBlock";
import Basement from "./Basement/Basement";
import Menu, {changeMenuVisibility} from "./Menu/Menu";
import {useState} from "react";

function App() {
  const [contentClass, setContentClass] = useState('');
  const [animationIterations, setAnimationIterations] = useState(1);

  function changeBlur() {
    if (contentClass !== 'blured') {
      setContentClass('blured');
    } else {
      setContentClass('unblured');
    }

    setAnimationIterations(animationIterations + 1);
  }

  return (
      <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <Greetings changeVisibility={changeMenuVisibility}/>
          <Menu changeVisibility={changeMenuVisibility} changeBlur={changeBlur}/>
          <div className={contentClass}>
              <TextBlock h1='Сделки с Fair Deal - это безопасно' p='Fair Deal - сервис, помогающий не терять деньги, товар и драгоценное время на мошенников, обеспечивая выполнение всех условий любой онлайн сделки как для заказчика (покупателя), так и для исполнителя (продавца).
    ' button='Совершите сделку с нами'/>
              <InfoSection/>
              <Basement/>
          </div>
      </div>
  );
}

export default App;
