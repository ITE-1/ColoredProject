import { useState } from "react"
import search from '../search.jpg'





const SearchInput = () => {


const [value, setValue] = useState('');
const [active, setActive] = useState(false);


const handleClick = () => {

    if(active) {
        setActive(false)
        setValue('')
    } else {

        setActive(true)
    }
}
    

console.log(value, active)



const onChangeHandle = (e) => {
    const currentTarget = e.currentTarget
    const inputElement = currentTarget.querySelector('input')

    if(inputElement) {
        return
    } else  {
      setTimeout((e) => handleClick(e),10000)
    }
      
    }


    return(

        <label  className='header__panel__search__item' onChange={(e) => onChangeHandle(e)}>
             <input className={`${active ? 'active' : ''}`} type="text" placeholder='search here' onChange={(e) => setValue(e.currentTarget.value)} value={value}/> 
            <img onDoubleClick={() => handleClick()} src={search} alt="S" />
           
        </label>
   


    )
}

export  default SearchInput