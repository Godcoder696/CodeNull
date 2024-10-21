import { FaCirclePlay } from "react-icons/fa6";

function Hero() {
  return (
    <>
        <div className='flex space-x-5 px-10 justify-evenly h-full items-center'>
            <div className='w-2/6 flex flex-col space-y-5'>
                <span className='text-6xl'>
                    Lorem ipsum dolor sit amet consectetur.
                </span>
                <span className='text-lg'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis aliquid fugiat laudantium, quos asperiores tenetur.
                </span>
                <button className='px-5 w-3/6 hover:bg-[#7551dc] hover:text-white rounded-2xl py-3 border-2 border-[#7551dc] flex items-center justify-center space-x-3'>
                    <FaCirclePlay size={20}/>
                    <span>See It How Works</span>
                </button>
            </div>
            <div className='w-3/6'>
                <img src="https://rive.app/s/iN-zPbKj6Ey1eB9lmD6xkw/embed" alt=''></img>
            </div>
        </div> 
    </>
  )
}

export default Hero
