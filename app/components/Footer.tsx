import Link from 'next/link'
import React from 'react';
import { CiFacebook } from "react-icons/ci";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className='dark:text-white  text-center pt-6 py-8'>
        <div className='px-4 mx-auto max-w-screen-lg'>
            <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center sm:text-left'>
                <div className='sm:col-span-2'></div>
                <Link 
                href="/"
                aria-label="GO Home"
                title="AH Car Bloges"
                className='text-[#2E5077] flex justify-center text-center font-serif font-bold text-3xl tracking-wide' >
                    {/* AH Cars Bloges */}
                </Link>
                
            </div>
            <div>
              <h3 className='font-bold text-2xl text-[#2E5077] font-serif mb-4'>Contact</h3>
              <div className='flex flex-col'>
                <p className='text-sm'>Mobail No:</p>
                <Link 
                href="tel:03239243027"
                aria-label='My Contact Number'
                className='text-[#2E5077] hover:text-[#1c3046] transition-colors duration-300'>
                  03239243027
                </Link>
              </div>
              <div className='flex flex-col'>
               <p className='text-sm'>Email:</p>
               <Link href="mailto:ayeshaharis1999@gmail.com"
               aria-label='Email'
               title="Email"
               className='text-[#2E5077] hover:text-[#1c3036] trasition-colors duration-300'>
                ayeshaharis1999@gmail.com
               </Link>
              </div>
            </div>
        </div>

        <div>
          <p className='text-base font-serif font-bold tracking-wide text-[#2E5077]'>
            <span>CARS</span>  |   <span>Latest Models cars</span>   | <span>Cars Mechanics</span>
          </p>
        </div>
         </div>

      <div className='mt-8 flex flex-col sm:flex-row justify-between items-center border-t pt-4 mb-6 '>
      <div className='text-sm'>All copyright &copy; reserved AH Cars </div>
      <div className='flex gap-4 mt-4 sm:mt-0'>
        <CiFacebook 
        className='text-2xl text[#4d6cc1] hover:text-[#3c538f] transition-colors duration-300'
        />
        <FaInstagram 
        className='text-2xl text-[#e73d3d] hover:text-[#823e3e] transition-colors duration-300'/>
        <FaLinkedinIn 
        className='text-2xl text-[#4d6cc1] hover:text-[#374f8f] transition-colors duration-300'/>
        <FaGithub
        className='text-2xl text-[#2E5077] hover:text-[#1c3046] transition-colors duration-300' />
      </div>
      </div>
  
         </>
  )
}

export default Footer