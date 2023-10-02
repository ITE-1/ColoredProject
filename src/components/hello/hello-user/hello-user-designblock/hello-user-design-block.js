import React, { useState } from 'react';
import { useContext } from 'react';
import { MyContext } from '../../../app/App';
import herart from '../../../header-panel/heart.svg'


const DesignBlock = ({ title, block, click, back, id, selected  ,reserveData}) => {
const {color, setColor} = useContext(MyContext)
   

const changeColor = () => {
    let color = "#";
    const letters = '0123456789ABCDEF';
  
  for (let step = 0; step < 6; step++) {
     color += letters[Math.floor(Math.random() * 16)] 
  
  }
  const newCssStyle = {backgroundColor: color}
   return newCssStyle
  }
  

//   onClick={() => setColor(changeColor())}
  

    return (
        <div id={id} 
            style={color}
            className={`hello__user__design__block ${block} ${selected === id ? 'active' : ''}`}
        >   
            <h2 className='hello__user__design__block__title'>{title}</h2> 
            <div className='hello__user__design__button__row'>
                <button className='hello__user__design__button__heart'>
            <img src="" />

                </button>
                <button onClick={() => click(id, selected, block)}>{selected ? '#': 'open'}</button>
                <button onClick={() => back(reserveData)}>{`<--`}</button>
            </div>
          
        </div>
    );
}

export default DesignBlock;
