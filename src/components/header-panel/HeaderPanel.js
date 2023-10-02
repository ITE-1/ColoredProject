import '../header-panel/headerpanel.scss'
import powerOn from '../header-panel/powerON2.jpg';
import powerOff from '../header-panel/powerOFF.jpg';
import home from '../../components/header-panel/Home.jpg';
import { MyContext } from '../app/App';
import { useContext, useEffect } from 'react';
import SearchInput from './headerPanelSearchInput/searchinput';
import user from '../header-panel/user.jpg';
const HeaderPannel = () => {

const { setColor, color, intro, setIntro, modalWindow, setWindow, isModalOpen, setisModalOpen} = useContext(MyContext)
//////////////////////////////
const HandlePowerOff = () => {
    setisModalOpen(false)
    setIntro(true)

    
}
///////////////////////////////


    return (
        <div className='header__panel'>
                <span>ver 1.0</span>
                
                
        <div className='header__panel__button__row'>
                   
                   <button className='header__panel__userForm'>
                        <div className='header__panel__userItem'>
                            <img src={user} alt='Login'/>
                        </div>
                    </button>


                    <SearchInput />
                  
                  <button onClick={() => HandlePowerOff()} className='header__panel__powerbutton'>
                    <img className='header__panel__powerbutton__img' alt='P' src={`${ intro ? powerOff : powerOn}`} />
                  </button>
                <button className='header__panel__home' ><img src={home} alt='Home'/></button>
        
                {/* {isModalOpen && modalWindow ? <OpenModal /> :  <button onClick={((e)=> handleButtonClick(e))} className='header__panel__modul__button'><img src={info} alt='modal' /></button>
                    }
                 */}
                <span style={{textAlign: 'right', fontSize: '600'}}>designed by <span style={{color: 'orange'}}>@</span>IT<span style={{color: 'red'}}>E</span>/</span>
        </div>
    </div>


    )
}


export default HeaderPannel