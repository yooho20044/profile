import { AtSymbolIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/solid';

export default function Contact(){
    return(
        <div className="h-96 bg-white text-black m-96 z-50 flex flex-row" data-aos="zoom-in">
          <div className='w-[30%] bg-blue-100 flex justify-center items-center'>
                <span className='text-5xl font-bold text-white'>Contact</span>
          </div>
          <div className='flex-1 flex flex-col border-r-2 border-dashed border-neutral-400'>
            <div className='flex-1 flex items-center justify-center *:font-bold'>
              <DevicePhoneMobileIcon style={{width:'100px', height:'100px'}}/>
            </div>
            <div className='flex-1 flex-col flex justify-center items-center font-bold text-3xl'>
              <span>010-9490-2963</span> 
            </div> 
          </div>

          <div className='flex-1 flex flex-col'>
            <div className='flex-1 flex items-center justify-center *:font-bold'>
              <AtSymbolIcon style={{width:'100px', height:'100px'}}/>
            </div>
            <div className='flex-1 flex-col flex justify-center items-center font-bold text-3xl'>
              <span>ryuho20044@gmail.com</span>
              <span>yooho20044@naver.com</span>  
            </div> 
          </div>
        </div>
    )
}