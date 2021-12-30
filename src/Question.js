import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({id, title, info}) => {
  const [expand, setExpand] = useState(false);


  const handleClick = () => {
    setExpand((expand) => {
      return !expand
    }) 
  }
  return <>
    <article className = "question">
      <header>
        <h4>{title}</h4>
        <button onClick ={handleClick} className = "btn">
          {!expand?<AiOutlinePlus/>:<AiOutlineMinus/>}
        </button>
      </header>
      {expand&&<p>{info}</p>}
      
    </article>
  </>
};

export default Question;
 