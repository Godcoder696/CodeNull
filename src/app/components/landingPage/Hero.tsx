import { FaCirclePlay } from "react-icons/fa6";

function Hero() {
  return (
    <>
        <div className='flex h-screen flex-col items-center -space-y-5'>
            <div className="flex space-x-5 px-10 justify-evenly items-center h-4/5 w-full">
                <div className='w-2/6 flex flex-col space-y-5'>
                    <span className='text-6xl'>
                        Lorem ipsum dolor sit amet consectetur.
                    </span>
                    <span className='text-lg'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis aliquid fugiat laudantium, quos asperiores tenetur.
                    </span>
                    <button className='px-5 w-3/6 hover:bg-[#7551dc] hover:text-white rounded-2xl py-3 border-2 border-[#7551dc] flex items-center justify-center space-x-3'>
                        <FaCirclePlay size={20}/>
                        <span>See How It Works</span>
                    </button>
                </div>
                <div className='w-3/6 flex items-center justify-center'>
                    <img src="/hero_asset.png" alt="" className="p-32"/>
                </div>
            </div>
            <iframe src="https://lottie.host/embed/90c8895d-5347-4259-a075-6f33447e952f/NA4wXenL9m.json" className="h-16"/>
        </div> 
    </>
  )
}

export default Hero
