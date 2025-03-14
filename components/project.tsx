import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Project(){
      const [isMobile, setIsMobile] = useState(false);
  
      {/*모바일 검증 */}
      useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024); 
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
      }, []);
      
    return(
        <div className="flex lg:h-screen flex-col bg-white text-black mt-20 lg:m-20 z-50 rounded-lg shadow-2xl shadow-neutral-500/50" {...(!isMobile && { 'data-aos': 'zoom-in' })}>
          <div className='flex h-[20%] justify-center items-center border-b border-neutral-400 p-3'>
              <span className='lg:text-7xl font-bold text-black text-4xl'>개인 프로젝트</span>
          </div>
          <div className='flex flex-1 flex-wrap lg:flex-row gap-4 *:rounded-lg *:bg-neutral-100 *:shadow-lg *:shadow-neutral-200/100'>
              <div 
              className='w-full flex lg:flex-1 flex-col justify-center items-center m-16' 
              {...(!isMobile && { 'data-aos': 'flip-up', 'data-aos-duration': '3000', 'data-aos-anchor-placement' : 'center-bottom' })}
              >
                <div className='relative flex lg:flex-1 h-96 w-full justify-center items-center overflow-hidden rounded-lg'>
                <Link href='https://carrot-market-rhj.vercel.app/' target='_blank'>
                  <Image 
                  src='https://imagedelivery.net/ei8ubQSruTv8AmnS3d2tXQ/c7eea095-ce58-4d45-fffa-41619b5b4500/public' 
                  alt='당근마켓 클론사이트'
                  fill  
                  style={{ objectFit: 'fill' }}
                  />
                </Link>
                </div>
                <div className='flex flex-1 flex-col gap-3 justify-center pb-1 pt-2'>
                  <span className='text-2xl pb-2 border-b-4 border-neutral-400 text-center font-bold'>당근마켓 클론사이트 구현</span>
                  <span className='text-md font-bold text-center'>실제 구현부분</span>
                  <span className='pl-4 text-sm'>prisma(postgresql)를 사용한 CRUD구현</span>
                  <span className='pl-4 text-sm'>next.js를 사용한 페이지 구현 및 컴포넌트화</span>
                  <span className='pl-4 text-sm'>vercel을 이용한 CI/CD구현</span>
                  <span className='text-md font-bold text-center'>사용 기술</span>
                  <div className='flex flex-row gap-1 justify-center'>
                    <Image 
                    src='https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png' 
                    alt='React' 
                    width={20}   
                    height={20}
                    />
                    <Image 
                    src='https://img.icons8.com/color/48/nextjs.png' 
                    alt='Next.js' 
                    width={20}   
                    height={20}
                    />
                    <Image 
                    src='https://img.icons8.com/fluency/48/typescript--v2.png' 
                    alt='TypeScript' 
                    width={20}   
                    height={20}
                    />
                    <Image 
                    src='https://img.icons8.com/color/48/postgreesql.png' 
                    alt='Postgresql' 
                    width={20}   
                    height={20}
                    />
                    <Image 
                    src='https://img.icons8.com/ios-filled/50/github.png' 
                    alt='Github' 
                    width={20}   
                    height={20}
                    />
                    <Image 
                    src='https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-cloudflare-provides-content-delivery-network-services-ddos-mitigation-logo-color-tal-revivo.png' 
                    alt='Cloudflare' 
                    width={20}   
                    height={20}
                    />
                  </div>
                  <div className='flex flex-row gap-1 justify-center'>
                    <Image 
                    src='https://cdn.brandfetch.io/idBBE3_R9e/id1Mpn6ivM.svg?c=1dxbfHSJFAPEGdCLU4o5B' 
                    alt='prisma' 
                    width={40}   
                    height={40}
                    />
                    <Image 
                    src='https://cdn.brandfetch.io/idDpCfN4VD/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B' 
                    alt='vercel' 
                    width={40}   
                    height={40}
                    />
                    <Image 
                    src='https://cdn.brandfetch.io/idMNEQh7-0/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B' 
                    alt='tailwindCSS' 
                    width={60}   
                    height={60}
                    />
                  </div>
                  <div className='flex flex-row justify-center items-center gap-3 pb-2'>
                    <Link className="p-2 bg-blue-500 shadow-lg shadow-blue-500/50 w-16 rounded-md flex justify-center items-center" href='https://carrot-market-rhj.vercel.app/' target='_blank'>
                      <Image 
                      src='https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/external-homepage-button-for-every-website-under-a-landing-page-template-landing-bold-tal-revivo.png' 
                      alt='homepage' 
                      width={20}   
                      height={20}
                      />
                    </Link>
                    <Link className="p-2 bg-blue-500 shadow-lg shadow-blue-500/50 w-16 rounded-md flex justify-center items-center"  href='https://github.com/yooho20044/carrot-market-reloaded' target='_blank'>
                      <Image 
                      src='https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/external-github-with-cat-logo-an-online-community-for-software-development-logo-bold-tal-revivo.png' 
                      alt='Github' 
                      width={20}   
                      height={20}
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div 
              className='w-full flex lg:flex-1 flex-col justify-center items-center m-16 bg-neutral-100 shadow-xl shadow-neutral-200/100 rounded-lg' 
              {...(!isMobile && { 'data-aos': 'flip-up', 'data-aos-duration': '3000', 'data-aos-anchor-placement' : 'top-center' })}
              >
                <div className='relative flex lg:flex-1 w-full h-96 justify-center items-center overflow-hidden rounded-lg'>
                <Link href='https://nextjs-movies-git-main-yooho20044s-projects.vercel.app/' target='_blank'>
                  <Image 
                  src='https://imagedelivery.net/ei8ubQSruTv8AmnS3d2tXQ/3bb3a036-3374-4abc-404c-75c79e36e600/public' 
                  alt='영화 평점 사이트'
                  fill  
                  style={{ objectFit: 'fill' }}
                  />
                </Link>
                </div>
                <div className='flex flex-1 flex-col gap-3 justify-center pb-1'>
                  <span className='text-2xl pb-2 border-b-4 border-neutral-400 text-center font-bold'>영화 평점사이트 구현</span>
                  <span className='text-md font-bold text-center'>실제 구현부분</span>
                  <span className='pl-4 text-sm'>api를 사용한 데이터 표출</span>
                  <span className='pl-4 text-sm'>next.js를 사용한 페이지 구현 및 컴포넌트화</span>
                  <span className='pl-4 text-sm'>vercel을 이용한 CI/CD구현</span>
                  <span className='text-md font-bold text-center'>사용 기술</span>
                  <div className='flex flex-row gap-2 justify-center'>
                    <Image 
                    src='https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png' 
                    alt='React' 
                    width={20}   
                    height={20}
                    />
                    <Image 
                    src='https://img.icons8.com/color/48/nextjs.png' 
                    alt='Next.js' 
                    width={20}   
                    height={20}
                    />
                    <Image 
                    src='https://img.icons8.com/fluency/48/typescript--v2.png' 
                    alt='TypeScript' 
                    width={20}   
                    height={20}
                    />
                    <Image 
                    src='https://img.icons8.com/ios-filled/50/github.png' 
                    alt='Github' 
                    width={20}   
                    height={20}
                    />
                    <Image 
                    src='https://cdn.brandfetch.io/idDpCfN4VD/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B' 
                    alt='vercel' 
                    width={40}   
                    height={40}
                    />
                  </div>
                </div>
                <div className='flex flex-row justify-center items-center gap-3 pb-3'>
                    <Link className="p-2 bg-blue-500 shadow-lg shadow-blue-500/50 w-16 rounded-md flex justify-center items-center" href='https://nextjs-movies-git-main-yooho20044s-projects.vercel.app/' target='_blank'>
                      <Image 
                      src='https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/external-homepage-button-for-every-website-under-a-landing-page-template-landing-bold-tal-revivo.png' 
                      alt='homepage' 
                      width={20}   
                      height={20}
                      />
                    </Link>
                    <Link className="p-2 bg-blue-500 shadow-lg shadow-blue-500/50 w-16 rounded-md flex justify-center items-center"  href='https://github.com/yooho20044/learn-nextjs' target='_blank'>
                      <Image 
                      src='https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/external-github-with-cat-logo-an-online-community-for-software-development-logo-bold-tal-revivo.png' 
                      alt='Github' 
                      width={20}   
                      height={20}
                      />
                    </Link>
                  </div>
              </div>
              <div 
              className='w-full flex lg:flex-1 flex-col justify-center items-center m-16 bg-neutral-100 shadow-xl shadow-neutral-200/100 rounded-lg' 
              {...(!isMobile && { 'data-aos': 'flip-up', 'data-aos-duration': '3000', 'data-aos-anchor-placement' : 'bottom-bottom' })} 
              >
                <div className='relative flex lg:flex-1 w-full h-96 justify-center items-center overflow-hidden rounded-lg'>
                  <Image 
                  src='https://imagedelivery.net/ei8ubQSruTv8AmnS3d2tXQ/31646407-f05b-43b8-dd79-a19541936800/public' 
                  alt='내 이력서 사이트'
                  fill  
                  style={{ objectFit: 'fill' }}
                  />
                </div>
                <div className='flex flex-1 flex-col gap-3 justify-center pb-1'>
                  <span className='text-2xl pb-2 border-b-4 border-neutral-400 text-center font-bold'>내 이력서 페이지 구현</span>
                  <span className='text-md font-bold text-center'>실제 구현부분</span>
                  <span className='pl-4 text-sm'>Next.js를 사용한 페이지 구현 및 컴포넌트화</span>
                  <span className='pl-4 text-sm'>Spring을 사용한 API 구현 및 페이지 연결</span>
                  <span className='pl-4 text-sm'>Github Action을 이용한 자동 CI/CD구현</span>
                  <span className='pl-4 text-sm'>개인서버에 웹서버(NginX)적용 및 도메인, SSL적용</span>
                  <span className='text-md font-bold text-center'>사용 기술</span>
                  <div className='flex flex-row gap-2 justify-center'>
                    <Image 
                    src='https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png' 
                    alt='React' 
                    width={20}   
                    height={20}
                    />
                    <Image 
                    src='https://img.icons8.com/color/48/nextjs.png' 
                    alt='Next.js' 
                    width={20}   
                    height={20}
                    />
                    <Image 
                    src='https://img.icons8.com/fluency/48/typescript--v2.png' 
                    alt='TypeScript' 
                    width={20}   
                    height={20}
                    />
                    <Image 
                    src='https://img.icons8.com/color/48/postgreesql.png' 
                    alt='Postgresql' 
                    width={20}   
                    height={20}
                    />
                    <Image 
                    src='https://img.icons8.com/ios-filled/50/github.png' 
                    alt='Github' 
                    width={20}   
                    height={20}
                    />
                    <Image 
                    src='https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-cloudflare-provides-content-delivery-network-services-ddos-mitigation-logo-color-tal-revivo.png' 
                    alt='Cloudflare' 
                    width={20}   
                    height={20}
                    />
                  </div>
                  <div className='flex flex-row gap-2 justify-center'>
                    <Image 
                    src='https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-nginx-accelerates-content-and-application-delivery-improves-security-logo-shadow-tal-revivo.png' 
                    alt='NginX' 
                    width={20}   
                    height={20}
                    />
                    <Image 
                    src='https://cdn.brandfetch.io/idMNEQh7-0/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B' 
                    alt='tailwindCSS' 
                    width={60}   
                    height={60}
                    />
                  </div>
                </div>
                <div className='flex flex-row justify-center items-center gap-3 pb-3'>
                    <Link className="p-2 bg-blue-500 shadow-lg shadow-blue-500/50 w-16 rounded-md flex justify-center items-center"  href='https://github.com/yooho20044/profile' target='_blank'>
                      <Image 
                      src='https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/external-github-with-cat-logo-an-online-community-for-software-development-logo-bold-tal-revivo.png' 
                      alt='Github' 
                      width={20}   
                      height={20}
                      />
                    </Link>
                  </div>
              </div>
          </div>
        </div>
    )
}