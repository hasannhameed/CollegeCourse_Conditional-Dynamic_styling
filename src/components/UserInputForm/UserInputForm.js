import React, { useRef } from 'react';

const UserInputForm =(props)=>{
   const nameRef = useRef('');
   const ageRef = useRef('');
   const collegeref = useRef('');

    const formHandler=(event)=>{
        event.preventDefault();
        const enteredName = nameRef.current.value;
        const enteredAge = ageRef.current.value;
        const enteredClg = collegeref.current.value;

        if(enteredName.trim().length===0||enteredAge<=0|| enteredClg.trim().length===0){
            return   props.onhandleValidation(false);
        }

        const userData = { name: enteredName, age:enteredAge ,college:enteredClg };
        props.onAdduserInput(userData);
        props.onhandleValidation(true); 
        nameRef.current='';
        ageRef.current="";
        collegeref.current='';
    }
    
    return (
        <div className='formclass'>
            <form  onSubmit={formHandler}>
            <label>Name</label>
            <input  type="text" placeholder='name' ref={nameRef}/>
            <label >Age</label>
            <input type="number" placeholder='age' ref={ageRef}/>
            <label >College</label>
            <input type="text" placeholder='collegeName'  ref={collegeref}/>
            <button type='submit'>Add</button>
        </form>
        </div>
    )
}

export default UserInputForm;