import { useContext, useEffect, useState } from "react";
import {MyContext} from '../../app/App';
import check from '../../header-panel/info.jpg'
import OpenModal from "../modalEntire/openmodal";
import '../../hello/modalEntire/openmodal.scss'
import info from '../../header-panel/info.jpg';


 const HelloIntro = () => {
const {intro, color,setColor, setIntro, modalWindow, setWindow, isModalOpen, setisModalOpen} = useContext(MyContext);



 const handleClick = () => {
        setisModalOpen(false)
      setIntro((prev) => !prev)
      setColor(color)
      console.log()
    }
const handleClickOpen = () => {

    
setWindow((prev) => !prev)

}



    return (


        <div className={`hello__intro ${intro ? 'active' : 'close'}`}>
            <div className={`hello__intro__modal ${isModalOpen ? 'open' : ''}`}>
           
            {modalWindow ? <OpenModal /> :  <button onClick={((e)=> handleClickOpen(e))} className='header__panel__modul__button__intro'><img src={info} alt='modal' /></button>}
            </div>
                  
            <h1 className='hello__intro__title'>Greetings!</h1>
            <button style={color} onClick={(e) =>  handleClick()}>Hello Buddy</button>
       

            {/* <button onClick={(e) => spinner(e)}><div className='spinner'><div className='spinner__intro'><div className='spinner__intro1'><div className='spinner__intro2'></div></div></div></div></button> */}
        </div>



    )
}

export default HelloIntro