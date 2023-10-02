import { useState } from 'react'
import './hello-user.scss'
import DesignBlock from './hello-user-designblock/hello-user-design-block'

const HelloUser = ({changeColor}) => {
    const initialData = [
        { block: 'left', id: 1, title: 'About-Me', activity: false },
        { block: 'center', id: 2, title: 'My-Skills', activity: false },
        { block: 'right', id: 3, title: 'My-Works', activity: false }
    ];

const [data, setData] = useState(initialData)
const [block, setBlock] = useState('')
const [selected, setSelected] = useState(null)
const [open, setOpen] = useState('open')

////////////////////////////////////////
const handleClick = (id ) => {
    const newData = data.filter(item => item.id === id);
    setData(newData);
    setSelected(id)
}
const handleActiveBlock = (block) => {
    setBlock(block)
    console.log(block)  
}
const handleClickBack = () => {
    setSelected('')
   setData(initialData)
}
///////////////////////////////////////////
    return (
        <div className={`hello__user__design ${open ? 'active' :''}`}>

            { data.map(item => {
                return (
                    <DesignBlock {...item} changeColor={changeColor} click={handleClick} back={handleClickBack} selected={selected}  activeIndex={handleActiveBlock}
                    />
                );
            })}
        </div>
    )
}


export default HelloUser