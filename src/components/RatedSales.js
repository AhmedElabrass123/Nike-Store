import React from 'react'
import {toprateslaes} from "../data/Data"
import RatesSaleItem from '../otherComponents/RatesSaleItem'
const RatedSales = () => {
  return (
    <>
    <section className='rated-sales'>
        <div className='container'>
        <div className="head w-full text-left mb-[15px] ps-[10px]">
            <h2 className="text-[25px] font-extrabold text-slate-900 sm:text-[30px] md:text-[40px] lg:text-[50px]">
              {toprateslaes.title}
            </h2>
          </div>
                <div className='row flex justify-center items-center flex-wrap sm:justify-between'>
                    {toprateslaes.items.map((item)=>{
                        return(
                            <RatesSaleItem item={item} key={item.id}/>
                        ) 
                    })}
                </div>
        </div>
    </section>
    </>
  )
}

export default RatedSales