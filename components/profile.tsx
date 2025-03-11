"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Profile(){
    const [isMobile, setIsMobile] = useState(false);

    {/*모바일 검증 */}
    useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 1024); 
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return(
        <div className="min-h-screen rounded-lg bg-white text-black lg:m-20 lg:flex lg:flex-row z-50" {...(!isMobile && { 'data-aos': 'fade-right' })}>
            <div className='w-[100%] lg:w-[20%] border-neutral-500 flex flex-row lg:flex-col border-r-2 pt-8 items-center'>
                <div className='relative border border-neutral-300 border-dashed w-32 h-32 md:w-40 md:h-44 2xl:w-60 2xl:h-64 rounded-xl overflow-hidden m-5 flex justify-center items-center'>
                     <Image 
                     src='https://imagedelivery.net/ei8ubQSruTv8AmnS3d2tXQ/0183bc90-b2d4-4938-5443-2cf4d6f4bd00/public' 
                     alt="증명사진"
                     fill  
                        style={{ objectFit: 'cover' }}
                     /> 
                </div>
                <div className='flex flex-1 justify-end lg:justify-center items-center flex-col gap-2 *:text-right'>
                    <span className='text-neutral-400 text-xl'>끊임없는 도전자</span>
                    <span className='text-4xl font-semibold'>류 호 진</span>
                    <span className='text-2xl text-neutral-300'>Ryu Hojin</span>
                </div>
            </div>
            <div className='flex-1 flex flex-col'>
                <div className='h-[40%] flex lg:flex-row flex-col'>
                    <div className='flex flex-1 flex-col'>
                        <div className='flex justify-center items-center gap-2 border-b-4 border-black mt-10 mx-10 mb-0 pb-2'>
                            <span className='text-2xl font-semibold'>개인정보</span>
                            <span className='text-neutral-400 font-semibold pt-2'>PERSONAL DETAIL</span>
                        </div>
                        <div className='flex flex-1 flex-col gap-4 m-10 *:border-b *:border-dashed mt-4 mx-10 mb-10'>
                            <span>이름: 류 호 진</span>
                            <span>생년월일: 1991. 11. 12(만 33세)</span>
                            <span>연락처: 010-9490-2963</span>
                            <span>이메일: ryuho20044@gmail.com</span>
                        </div>
                    </div>
                    <div className='flex flex-1 flex-col'>
                        <div className='flex justify-center items-center gap-2 border-b-4 border-black mt-10 mx-10 mb-0 pb-2'>
                            <span className='text-2xl font-semibold'>자격증</span>
                            <span className='text-neutral-400 font-semibold pt-2'>LICENSE</span>
                        </div>
                        <div className='flex flex-1 flex-col gap-4 m-10 *:border-b *:border-dashed mt-4 mx-10 mb-10 *:gap-4'>
                            <div className='flex flex-row'>
                                <span className='font-bold flex-1'>SQLD</span>
                                <span className='flex-1'>2023. 12 취득</span>
                                <span className='flex-1'>한국데이터베이스진흥센터</span>
                            </div>
                            <div className='flex flex-row'>
                                <span className='font-bold flex-1'>정보처리기사</span>
                                <span className='flex-1'>2022. 06 취득</span>
                                <span className='flex-1'>한국산업인력공단</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row h-[40%]'>
                    <div className='flex flex-1 flex-col'>
                        <div className='flex justify-center items-center gap-2 border-b-4 border-black mt-10 mx-10 mb-0 pb-2'>
                            <span className='text-2xl font-semibold'>학력사항</span>
                            <span className='text-neutral-400 font-semibold pt-2'>EDUCATION</span>
                        </div>
                        <div className='flex flex-1 flex-col gap-4 m-10 *:border-b *:border-dashed mt-4 mx-10 mb-10 *:gap-4'>
                            <div className='flex flex-row'>
                                <span className='flex-1'>2007년 ~ 2010년</span>
                                <span className='flex-1'>성남서고등학교</span>
                                <span className='flex-1'>인문계열</span>
                            </div>
                            <div className='flex flex-row'>
                                <span className='flex-1'>2010년 ~ 2018년</span>
                                <span className='flex-1'>강남대학교</span>
                                <span className='flex-1'>행정학과, 법학과</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-1 flex-col'>
                        <div className='flex justify-center items-center gap-2 border-b-4 border-black mt-10 mx-10 mb-0 pb-2'>
                            <span className='text-2xl font-semibold'>기술</span>
                            <span className='text-neutral-400 font-semibold pt-2'>SKILL</span>
                        </div>
                        <div className='flex flex-1 flex-col gap-4 m-10 *:border-b *:border-dashed mt-4 mx-10 mb-10 *:gap-4'>
                            <div className='flex flex-row'>
                                <span className='flex-1'>DB</span>
                                <span className='flex-1'>⭐️⭐️⭐️⭐️</span>
                            </div>
                            <div className='flex flex-row'>
                                <span className='flex-1'>JavaScript</span>
                                <span className='flex-1'>⭐️⭐️⭐️</span>
                            </div>
                            <div className='flex flex-row'>
                                <span className='flex-1'>Java</span>
                                <span className='flex-1'>⭐️⭐️</span>
                            </div>
                            <div className='flex flex-row'>
                                <span className='flex-1'>CSS</span>
                                <span className='flex-1'>⭐️⭐️</span>
                            </div>
                            <div className='flex flex-row'>
                                <span className='flex-1'>React</span>
                                <span className='flex-1'>⭐️</span>
                            </div>
                            <div className='flex flex-row'>
                                <span className='flex-1'>TypeScript</span>
                                <span className='flex-1'>⭐️</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-1'>
                <div className='flex flex-1 flex-col'>
                        <div className='flex justify-center items-center gap-2 border-b-4 border-black mt-10 mx-10 mb-0 pb-2'>
                            <span className='text-2xl font-semibold'>경력사항</span>
                            <span className='text-neutral-400 font-semibold pt-2'>WORK EXPERIENCE</span>
                        </div>
                        <div className='flex flex-1 flex-col gap-4 m-10 *:border-b *:border-dashed mt-4 mx-10 mb-10 *:gap-4'>
                            <div className='flex flex-row'>
                            <span className='flex-1'>(주)이노그루 - (주임)</span>
                            <span className='flex-1'>2022.05.01 ~ 2024.10.31</span>
                            <span className='flex-1'>웹개발, 유지보수</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}