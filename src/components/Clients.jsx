import React from 'react'
import { clients } from '../constants'
import styles from '../styles'
const Clients = () => (
  <section id="clients" className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map(({ id, logo }) => (
        <div key={id} className={`flex-1 ${styles.flexCenter} sm:min-h-[192px] min-w-[120px]`}>
        <img src={logo} alt={id} className="object-contain sm:w-[192px] w-[100px] cursor-pointer opacity-70  hover:opacity-100" />
        </div>
      )  
      )}
    </div>
  </section>
)

export default Clients