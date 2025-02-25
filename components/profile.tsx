import { UserIcon } from '@heroicons/react/24/solid';

export default function Profile(){
    return(
        <div className="min-h-screen rounded-lg bg-white text-black m-14 flex flex-row z-50" data-aos="fade-right">
            <div className='w-[20%] border-neutral-500 flex flex-col border-r-2 pt-8 items-center'>
                <div className='border border-black w-44 h-44 rounded-full m-5 flex justify-center items-center'>
                    {/* <Image className='w-full h-full' src={testImg} alt="증명사진"/> */}
                    <UserIcon className='w-full h-full' />
                </div>
                <div className='flex flex-1 justify-center items-center flex-col gap-2 *:text-right'>
                    <span className='text-neutral-400'>끊임없는 도전자</span>
                    <span className='text-2xl font-semibold'>류 호 진</span>
                    <span className='text-xl text-neutral-300'>Ryu Hojin</span>
                </div>
            </div>
            <div className='flex-1 flex flex-col'>
                <div className='h-[40%] flex flex-row'>
                    <div className='flex flex-1 flex-col'>
                        <div className='flex justify-center items-center gap-2 border-b-4 border-black mt-10 mx-10 mb-0'>
                            <span className='text-2xl font-semibold'>개인정보</span>
                            <span className='text-neutral-400 font-semibold pt-2'>Personal Detail</span>
                        </div>
                        <div className='flex flex-1 flex-col gap-4 m-10 *:border-b *:border-dashed mt-4 mx-10 mb-10'>
                            <span>이름: OOO</span>
                            <span>생년월일: 1991. 11. 12(만 33세)</span>
                            <span>연락처: 010-0000-0000</span>
                            <span>이메일: OOO@gmail.com</span>
                        </div>
                    </div>
                    <div className='flex flex-1 flex-col'>
                        <div className='flex justify-center items-center gap-2 border-b-4 border-black mt-10 mx-10 mb-0'>
                            <span className='text-2xl font-semibold'>자격증</span>
                            <span className='text-neutral-400 font-semibold pt-2'>License</span>
                        </div>
                        <div className='flex flex-1 flex-col gap-4 m-10 *:border-b *:border-dashed mt-4 mx-10 mb-10 *:gap-4'>
                            <div className='flex flex-row'>
                                <span className='font-bold flex-1'>SQLD</span>
                                <span className='flex-1'>2019. 12. 12 취득</span>
                                <span className='flex-1'>데이터베이스</span>
                            </div>
                            <div className='flex flex-row'>
                                <span className='font-bold flex-1'>정보처리기사</span>
                                <span className='flex-1'>2019. 12. 12 취득</span>
                                <span className='flex-1'>한국산업인력공단</span>
                            </div>
                            <div className='flex flex-row'>
                                <span className='font-bold flex-1'>컴퓨터활용능력 1급</span>
                                <span className='flex-1'>2019. 12. 12 취득</span>
                                <span className='flex-1'>대한상공회의소</span>
                            </div>
                            <div className='flex flex-row'>
                                <span className='font-bold flex-1'>SQLD</span>
                                <span className='flex-1'>2019. 12. 12 취득</span>
                                <span className='flex-1'>데이터베이스</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row h-[40%]'>
                    <div className='flex flex-1 flex-col'>
                        <div className='flex justify-center items-center gap-2 border-b-4 border-black mt-10 mx-10 mb-0'>
                            <span className='text-2xl font-semibold'>학력사항</span>
                            <span className='text-neutral-400 font-semibold pt-2'>Education</span>
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
                        <div className='flex justify-center items-center gap-2 border-b-4 border-black mt-10 mx-10 mb-0'>
                            <span className='text-2xl font-semibold'>기술</span>
                            <span className='text-neutral-400 font-semibold pt-2'>Skill</span>
                        </div>
                        <div className='flex flex-1 flex-col gap-4 m-10 *:border-b *:border-dashed mt-4 mx-10 mb-10 *:gap-4'>
                            <div className='flex flex-row'>
                                <span className='flex-1'>JavaScript</span>
                                <span className='flex-1'>⭐️⭐️⭐️</span>
                            </div>
                            <div className='flex flex-row'>
                                <span className='flex-1'>DB</span>
                                <span className='flex-1'>⭐️⭐️⭐️⭐️</span>
                            </div>
                            <div className='flex flex-row'>
                                <span className='flex-1'>Java</span>
                                <span className='flex-1'>⭐️⭐️</span>
                            </div>
                            <div className='flex flex-row'>
                                <span className='flex-1'>React</span>
                                <span className='flex-1'>⭐️</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-1'>
                <div className='flex flex-1 flex-col'>
                        <div className='flex justify-center items-center gap-2 border-b-4 border-black mt-10 mx-10 mb-0'>
                            <span className='text-2xl font-semibold'>경력사항</span>
                            <span className='text-neutral-400 font-semibold pt-2'>Education</span>
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