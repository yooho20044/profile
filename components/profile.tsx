import { UserIcon } from '@heroicons/react/24/solid';

export default function Profile(){
    return(
        <div className="min-h-screen rounded-lg bg-white text-black m-20 flex flex-row" data-aos="fade-right">
            <div className='w-[20%] border-r-2 border-neutral-500 flex justify-center pt-10'>
                <span className='text-4xl'>개인 사항</span>
            </div>
            <div className='w-[80%]'>
                <div className='border border-black w-80 h-80 rounded-full m-10 flex justify-center items-center'>
                    {/* <Image className='w-full h-full' src={testImg} alt="증명사진"/> */}
                    <UserIcon className='w-full h-full' />
                </div>
            </div>
        </div>
    )
}