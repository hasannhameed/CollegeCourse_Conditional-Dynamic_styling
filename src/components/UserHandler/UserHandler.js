import React,{useState} from "react";
import "./UserHandler.css";
import Modal from "../Modal/Modal";
import UserInputList from "../UserInputList/UserInputList";
import UserInputForm from "../UserInputForm/UserInputForm";

const UserHandler = ()=>{
    const[list, setList] = useState([]);
    const [isValid, setIsValid] = useState(true);
    

    const adduserInput = userData =>{
        setList(prevData=>[...prevData,userData])
        console.log(list)
    }

    const handleValidation = (valid) => {
        setIsValid(valid); // Updating validation state
    };

   
   
    return(
        <div className="container">
        {!isValid&&<Modal onHandleValidation={handleValidation} onList={list}/>}
       {isValid&& <>
       <UserInputForm onhandleValidation={handleValidation} onAdduserInput={adduserInput}/>
        <UserInputList onList={list}/>
        </>}
        </div>
    )
}

export default UserHandler;