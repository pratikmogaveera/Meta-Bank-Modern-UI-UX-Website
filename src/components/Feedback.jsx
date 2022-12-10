import React from 'react'
import { quotes } from '../assets'

const Feedback = ({ id, content, name, title, img }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 md:mr-10 sm:mr-5 mr-0 my-5 feedback-card max-w-[370px] rounded-[20px]">
      <img src={quotes} alt="quotes" className="w-[42px] object-contain h-[27px]" />

      <p className="font-poppins font-normal text-[18px] leading-[32px] my-10">
        {content}
      </p>

      <div className="flex flex-row">
        <img src={img} alt={name} className="h-[48px] rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px]">
            {name}
          </h4>
          <p className="font-poppins text-dimWhite font-normal text-[16px] leading-[24px]">
            {title}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Feedback