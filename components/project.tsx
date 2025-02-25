import Image from 'next/image';
import Link from 'next/link';

export default function Project(){
    return(
        <div className="flex flex-col h-screen bg-white text-black m-20 z-50" data-aos="zoom-in">
          <div className='flex h-[20%] justify-center items-center border-b border-neutral-400'>
              <span className='text-7xl font-bold text-black'>개인 프로젝트</span>
          </div>
          <div className='flex flex-1 flex-row'>
              <Link 
              className='flex flex-1 flex-col justify-center items-center m-20 bg-neutral-100' 
              target='_blank'
              data-aos="flip-up" 
              data-aos-duration="3000"
              data-aos-anchor-placement="top-bottom"
              href="https://carrot-market-rhj.vercel.app">
                <div className='flex flex-1 w-full  justify-center items-center overflow-hidden'>
                  <Image 
                  src='https://imagedelivery.net/ei8ubQSruTv8AmnS3d2tXQ/c7eea095-ce58-4d45-fffa-41619b5b4500/public' 
                  alt='당근마켓 클론사이트트'
                  width={16}   
                  height={9}     
                  layout="responsive"
                  />
                </div>
                <div className='flex flex-1 flex-col gap-3 justify-center'>
                  <span className='text-2xl pb-2 border-b-4 border-neutral-400 text-center'>당근마켓 클론사이트 구현</span>
                  <span className='text-md pt-2'>참여도 : 100% </span>
                  <span className='text-md font-bold'>실제 구현부분</span>
                  <span className='pl-4 text-sm'>prisma(postgresql)를 사용한 CRUD구현</span>
                  <span className='pl-4 text-sm'>next.js를 사용한 페이지 구현 및 컴포넌트화</span>
                  <span className='pl-4 text-sm'>vercel을 이용한 CI/CD구현</span>
                  <span className='text-md'>사용 기술 : </span>
                </div>
              </Link>
              <Link 
              className='flex flex-1 flex-col justify-center items-center m-20 bg-neutral-200' 
              target='_blank'
              data-aos="flip-up" 
              data-aos-duration="3000" 
              data-aos-anchor-placement="center-bottom"
              href="https://nextjs-movies-beryl-one.vercel.app">
                <div className='flex flex-1 w-full  justify-center items-center overflow-hidden'>
                  <Image 
                  src='https://imagedelivery.net/ei8ubQSruTv8AmnS3d2tXQ/3bb3a036-3374-4abc-404c-75c79e36e600/public' 
                  alt='영화 평점 사이트'
                  width={16}   
                  height={9}     
                  layout="responsive"
                  />
                </div>
                <div className='flex flex-1 flex-col gap-3 justify-center'>
                  <span className='text-2xl pb-2 border-b-4 border-neutral-400 text-center'>영화 평점사이트 구현</span>
                  <span className='text-md pt-2'>참여도 : 100%</span>
                  <span className='text-md font-bold'>실제 구현부분</span>
                  <span className='pl-4 text-sm'>api를 사용한 데이터 표출</span>
                  <span className='pl-4 text-sm'>next.js를 사용한 페이지 구현 및 컴포넌트화</span>
                  <span className='pl-4 text-sm'>vercel을 이용한 CI/CD구현</span>
                  <span className='text-md'>사용 기술 : </span>
                </div>
              </Link>
              <div 
              className='flex flex-1 flex-col justify-center items-center m-20 bg-neutral-200' 
              data-aos="flip-up" 
              data-aos-duration="3000" 
              data-aos-anchor-placement="bottom-bottom">
                <div className='flex flex-1 w-full  justify-center items-center overflow-hidden'>
                  <Image 
                  src='https://imagedelivery.net/ei8ubQSruTv8AmnS3d2tXQ/31646407-f05b-43b8-dd79-a19541936800/public' 
                  alt='내 이력서 사이트'
                  width={16}   
                  height={9}     
                  layout="responsive"
                  />
                </div>
                <div className='flex flex-1 flex-col gap-3 justify-center'>
                  <span className='text-2xl pb-2 border-b-4 border-neutral-400 text-center'>내 이력서 페이지 구현</span>
                  <span className='text-md pt-2'>참여도 : 100%</span>
                  <span className='text-md font-bold'>실제 구현부분</span>
                  <span className='pl-4 text-sm'>next.js를 사용한 싱글 페이지 구현</span>
                  <span className='pl-4 text-sm'>vercel을 이용한 CI/CD구현</span>
                  <span className='text-md'>사용 기술 : </span>
                </div>
              </div>
          </div>
        </div>
    )
}