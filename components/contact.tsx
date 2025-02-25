import { AtSymbolIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/solid';

export default function Contact(){
    return(
        <div className="h-96 bg-white flex-shrink-0  min-w-[300px] text-black m-20 lg:m-96 z-50 flex lg:flex-row flex-col" data-aos="zoom-in">
          <div className='xl:w-[30%] w-full  bg-blue-100 flex justify-center items-center'>
                <span className='2xl:text-5xl xl:text-3xl text-2xl font-bold text-white'>Contact</span>
          </div>
          <div className='flex-1 flex lg:flex-col flex-row border-r-2 border-dashed border-neutral-400'>
            <div className='flex-1 flex items-center justify-center *:font-bold'>
              <DevicePhoneMobileIcon style={{width:'100px', height:'100px'}}/>
            </div>
            <div className='flex-1 flex-col flex justify-center items-center font-bold xl:text-3xl lg:text-xl md:text-lg text-md p-2'>
              <span>010-9490-2963</span> 
            </div> 
          </div>

          <div className='flex-1 flex lg:flex-col flex-row'>
            <div className='flex-1 flex items-center justify-center *:font-bold'>
              <AtSymbolIcon style={{width:'100px', height:'100px'}}/>
            </div>
            <div className='flex-1 flex-col flex justify-center items-center font-bold xl:text-3xl lg:text-xl md:text-lg text-md p-2'>
              <span>ryuho20044@gmail.com</span>
              <span>yooho20044@naver.com</span>  
            </div> 
          </div>
        </div>
    )
}