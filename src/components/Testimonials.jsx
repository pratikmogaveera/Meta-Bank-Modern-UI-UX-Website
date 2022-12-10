import React from 'react'
import styles, { layout } from '../styles'
import Feedback from './Feedback'
import { feedback } from '../constants'

const Testimonials = () => {
  return (
    <div className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="w-[60%] h-[60%] -right-[50%] rounded-full absolute z-[0] blue__gradient" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-1">
        <h1 className={styles.heading2}>What people are <br className="sm:block hidden" /> saying about us</h1>
        <p className={`${styles.paragraph} md:text-right text-left max-w-[470px] mt-5`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>

      <div className="flex flex-wrap  justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card, i) => <Feedback key={card.id} i={i} {...card} />)}
      </div>
    </div>
  )
}

export default Testimonials