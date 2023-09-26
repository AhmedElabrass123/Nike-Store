import React from 'react'

const Social = ({link}) => {
  return (
    <>
    <div className='mb-[15px]'>
        <img src={link} alt="SocialLink" className='w-[25px] h-[25px] sm:w-[28px] sm:h-[28px] md:w-[30px] md:h-[30px] 
        lg:w-[40px] lg:h-[35px] transition-all duration-300 hover:scale-[1.3]'/>
    </div>
        
    </>
  )
}

export default Social