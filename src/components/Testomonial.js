import React, { useState } from 'react'
import Card from './Card'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testomonial = (props) => {
    let reviews = props.reviews;
    const[index, setIndex] = useState(0);


    function leftShiftHandler(){

        if(index -1 < 0 ){
            setIndex(reviews.length-1);
        }else {
            setIndex(index-1);
        }

    }
    function rightShiftHandler(){

        if(index+1 >= reviews.length ){
            setIndex(0);
        }else {
            setIndex(index+1);
        }

    }
    function surpriceHandler(){
    let  randomIndex = Math.floor(Math.random()  * reviews.length);
      setIndex(randomIndex);
    }
   
  return (
    <div className='w-[85vw] border border-black border-opacity-30 md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 hover:shadow-md  transition-all duration-200  '>
     
        <Card review ={reviews[index] }/>
      

       <div className='flex gap-3 justify-center text-3xl mt-5 font-bold text-violet-500' >
        <button className='cursor-pointer  hover:text-violet-600' onClick={leftShiftHandler}>
            <FiChevronLeft/>
        </button>
        <button className='cursor-pointer  hover:text-violet-600' onClick={rightShiftHandler}>
            <FiChevronRight/>
            </button>
       </div>
       <div>
        <button onClick={surpriceHandler} className=' bg-violet-400 rounded-md mt-5 hover:bg-violet-600  font-bold transition-all duration-200 cursor-pointer px-10 py-2 text-white text-lg '>Surprise Me </button>
       </div>
      
    </div>
  )
}

export default Testomonial
