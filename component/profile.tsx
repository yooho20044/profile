import { UserIcon } from '@heroicons/react/24/solid';

export default function Profile(){
    return(
        <div className="min-h-screen bg-neutral-200 text-black m-20 flex flex-row" data-aos="fade-right">
          <div className='border border-black w-80 h-80 rounded-full m-10 flex justify-center items-center'>
            {/* <Image className='w-full h-full' src={testImg} alt="증명사진"/> */}
            <UserIcon className='w-full h-full' />
          </div>
        </div>
    )
}