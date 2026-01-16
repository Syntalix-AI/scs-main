'use client'

import React from 'react'
import { FaWhatsapp } from 'react-icons/fa6'

const Whatsapp = () => {
  const phoneNumber = "919259750107"; // Your WhatsApp number without '+'

  const handleClick = () => {
    // Uses the universal WhatsApp link which works on both Mobile (App) and Desktop (Web)
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  }

  return (
    <div 
      className='bg-[#25D366] w-min p-3 rounded-full fixed bottom-10 right-4 cursor-pointer md:right-8 z-40 shadow-lg hover:scale-110 transition-transform duration-300' 
      onClick={handleClick}
      title="Chat on WhatsApp"
    >
      <FaWhatsapp color='white' className='w-7 h-7 md:w-9 md:h-9' />
    </div>
  )
}

export default Whatsapp