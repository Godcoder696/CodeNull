import Image from "next/image";
import React from "react";

function Footer() {
  return(
    <div className="h-[30vh] w-full flex justify-center border-t-2 border-black">
      <div className="w-5/6 h-full flex">
      
        <div className="w-1/4 h-full flex justify-center items-center">
          <span className='flex space-x-1 items-center'>
            <Image src="/CodeNull.png" height={80} width={80} alt=''/>
            <span className='font-bold text-3xl'>Code Null</span>
          </span>
        </div>

        <div className="w-3/4 h-full flex">

          <div className="w-1/3 flex flex-col h-full items-center justify-center">
            <div className="mb-3 font-bold">Quick Links</div>
            <ul className="text-center">
              <li>Features</li>
              <li>Integrations</li>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>
          </div>
          
          <div className="w-1/3 flex flex-col h-full items-center justify-center">
            <div className="mb-3 font-bold">Support</div>
            <ul className="text-center">
              <li>Services</li>
              <li>Help Center</li>
              <li>Terms of Services</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="w-1/3 flex flex-col h-full items-center justify-center">
            <div className="mb-3 font-bold">Social Media</div>
            <ul className="text-center"> 
              <li>Instagram</li>
              <li>Linkedin</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Footer;