import { MyContext } from "../../app/App"
import { useContext } from "react"
import '../modalEntire/openmodal.scss'

const OpenModal = () => {

const { setColor, color, modalWindow, setWindow, isModalOpen, setisModalOpen} = useContext(MyContext)

const handleClickClose = (e) => {
    
setWindow(false)
setisModalOpen(false)

}

    return (
     
             <div className="modal__window" style={{color}}>
                   
                    <h1 className="modal__window__title">Modal Window with information 
                     <button onClick={() => handleClickClose()}className="modal__window__triger">Close</button></h1>
                    <div className="modal__window__container">
                        <p>здесь какой то текст или уведомление</p>
                    </div>
                    
                </div>




    )
}


export default OpenModal