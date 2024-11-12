'use client'
import Image from 'next/image'
import Link from 'next/link'

function NavBar({project}) {
    
  return (
    <>
        <div className='flex px-7 py-2 justify-between items-center sticky top-0 bg-gray-200 shadow-md'>
            <span className='flex items-center justify-center space-x-1 text-xl'>
                <Link href="/">
                    <Image src="/CodeNull.png" height={45} width={45} alt='CodeNull'/>
                </Link>
                <span>/</span>
                <span>Projects</span>    
                {
                    project &&
                    <>
                        <span>/</span>
                        <span>{project}</span>
                    </>
                }
            </span>
            <span>
                <Image src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" 
                    height={45} width={45} alt='' className='rounded-[50%]'/>
            </span>
        </div>
    </>
  )
}

export default NavBar
