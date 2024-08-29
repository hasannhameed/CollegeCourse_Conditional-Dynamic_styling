import React from 'react';
import './UserInputList.css'
const UserInputList = (props) => {
  return (
    <ul className='listClass'>
      {props.onList.map((item, index) => (
        <li key={index}>
          Name: {item.name}, Age: {item.age},College:{item.college};
        </li>
      ))}
    </ul>
  );
}

export default UserInputList;
