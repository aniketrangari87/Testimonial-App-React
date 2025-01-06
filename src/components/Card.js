import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


const Card = (props) => {
    let review = props.review;
    return (
        <div  className="flex flex-col md:relative">
            <div className="absolute top-[15rem]  md:top-[-7rem]  z-10 mx-auto ">
                <img className=" aspect-square rounded-full w-[140px] h-[140px] z-[25]"
                 src={review.image} alt="image"/>
                 <div className="w-[140px] h-[140px] z-[-20] left-[10px] bg-violet-400 absolute rounded-full top-[-6px]"></div>
              
            </div>
            <div className="text-center mt-7">
                <p className="text-2xl font-semibold capitalize">{review.name}</p>
            </div>
            <div className="text-center mt-7">
                <p className="text-violet-500 text-sm uppercase" >{review.job}</p>
            </div>
            <div className="text-center text-violet-400 mx-auto mt-5 ">
                <FaQuoteLeft />
            </div>
            <div>
                <p className="text-slate-500 mt-4 text-center">{review.text}</p>
            </div>
            <div className="text-center text-violet-400 mx-auto mt-5 ">
                <FaQuoteRight />
            </div>
        </div>
    );
};

export default Card;
