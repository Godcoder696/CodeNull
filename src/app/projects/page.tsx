import { FaPlusCircle } from "react-icons/fa";
import { GoProjectTemplate } from "react-icons/go";
import { MdDelete, MdEdit } from "react-icons/md";
import NavBar from "../components/projects/NavBar";
import Link from "next/link";

function page() {
    
  return (
    <>
        <div className='textured-bg min-h-screen w-full flex flex-col'>
            <NavBar project={undefined}/>
            <hr className='bg-gray-300 h-[1px]'/>
            <div className='w-full flex justify-end px-5 pt-3'>
                <Link href="/projects/new-project">
                    <button className='px-5 py-2 bg-[#7551dc] flex items-center space-x-2 rounded-md'>
                        <FaPlusCircle size={20} color='white'/>
                        <span className='text-white'>New</span>
                    </button>
                </Link>
            </div>
            <div className='px-7 py-2 mt-2 grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-4 gap-10 '>
                <div className='border-gray-300 border-2 p-3 rounded-md  flex flex-col space-y-3 bg-[#f0f0f0]'>
                    <div className='flex space-x-2 items-center'>
                        <GoProjectTemplate size={25}/>
                        <span className='text-lg'>Project Name</span>
                    </div>
                    <div className='text-xs'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, molestias nam quibusdam dolores id unde?
                    </div>
                    <div className='flex justify-end items-center space-x-2'>
                        <button className='rounded-[50%] border-gray-300 border-2 p-1'>
                            <MdDelete size={17}/>
                        </button>
                        <button className='rounded-[50%] border-gray-300 border-2 p-1'>
                            <MdEdit size={17}/>
                        </button>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default page
