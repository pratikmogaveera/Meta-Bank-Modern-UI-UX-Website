import React from 'react'
import styles, { layout } from '../styles'
import Button from './Button'

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 box-shadow rounded-[20px]`}>
    <div className="flex-1 flex flex-col">
      <h1 className={` ${styles.heading2}`}>
        Let’s try our service now!
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to accept card payments and grow your business anywhere on the planet.
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 sm:mb-0 mb-5 ml-0 sm:mt-0 mt-10`}>
      <Button text="Get Started" />
    </div>
  </section>
)

export default CTA