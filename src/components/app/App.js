import sparta from './pepsilogo11092018.jpg'

import './app.scss';
import '../hello/hello.scss'
import { createContext, useContext, useState } from 'react';
import HelloUser from '../hello/hello-user/hello-user';
import HeaderPannel from '../header-panel/HeaderPanel';
import HelloIntro from '../hello/hello-intro/helloIntro';

export const MyContext = createContext();

function App() {
  const [isModalOpen, setisModalOpen] = useState(false)
const [intro, setIntro] = useState(true)
const [color, setColor] = useState({})
const [modalWindow, setWindow] = useState(false)

const initialValue = {
  isModalOpen, 
  setisModalOpen,
  modalWindow,
  setWindow,
  setColor,
  color,
  intro,
  setIntro,
}





  return (
    <MyContext.Provider value={initialValue}  >
    <div className="App">
            <HeaderPannel/>
      

              <div className='hello'>
                     <HelloIntro />

      
                <div className={`hello__main ${intro ? 'close' : 'active' }`}>
                    <HelloUser />
                </div>

              </div>
     
    </div>
    </MyContext.Provider>
  );
  }

export default App;
