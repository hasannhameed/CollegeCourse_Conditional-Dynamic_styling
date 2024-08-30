import React, { useEffect, useState } from 'react';

const UserInputForm = (props) => {
   const [name, setName] = useState('');
   const [age, setAge] = useState('');
   const [college, setCollege] = useState('');

   const formHandler = (event) => {
       event.preventDefault();

       // Validation check
       if (name.trim().length === 0 || age<= 0 || college.trim().length === 0) {
           return props.onhandleValidation(false); // Corrected case
       }

       // Creating user data object
       const userData = { name:name,age:age,college:college};
       props.onAdduserInput(userData);
       props.onhandleValidation(true); // Corrected case

       // Resetting the input fields
     setAge('');
     setCollege('');
     setName('');
   }


   useEffect(()=>{
    console.log("name changed")
   },[props.onhandleValidation])

   useEffect(()=>{
    alert("i'll render only once ")
   },[])
   
  
   return (
       <div className='formclass'>
           <form onSubmit={formHandler}>
               <label>Name</label>
               <input type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} />
               <label>Age</label>
               <input type="number" placeholder='age' value={age} onChange={(e)=>setAge(e.target.value)}/>
               <label>College</label>
               <input type="text" placeholder='collegeName' value={college} onChange={(e)=>setCollege(e.target.value)}/>
               <button type='submit'>Add</button>
           </form>
       </div>
   );
}

export default UserInputForm;
