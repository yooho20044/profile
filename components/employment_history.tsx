"use client"

import project from '@/test.json'
import { useEffect, useState } from 'react';

interface ProjectProps{
    pj_id: number;
    pj_title: string;
    pj_company: string;
    pj_period: string;
    pj_man: string;
    pj_participation?: string;
    pj_skill: string[];
    pj_work: string[];
    pj_result?: string[];
    pj_review?: string[];
}

function selectId(id: number){

  return project.find((proj : ProjectProps) => proj.pj_id === id);
}

export default function EmploymentHistory(){
    const [selectProject, setSelectProject] = useState<ProjectProps>();

    useEffect(() => {
      const initialProject = selectId(1);
      setSelectProject(initialProject);
    }, []);

    return(
        <div className="bg-white lg:h-screen text-black m-20 z-50 rounded-lg shadow-lg shadow-neutral-500/50" data-aos="fade-left">
          <div className='flex h-[20%] justify-center items-center border-b border-neutral-400 p-1'>
              <h1 className='lg:text-7xl font-bold text-black text-4xl'>경력 기술서</h1>
          </div>
          <div className='flex flex-row h-[80%]'>
            <div className='flex w-[34%] flex-col justify-center ml-auto gap-52 *:text-center items-center border-r-2'>
              <div className='border-t-4 border-b-4 border-black w-full'>
                <h2 className='border-b-4 h-10  border-black flex justify-center items-center'>개발 경력</h2>
                <div className='*:h-32 *:text-lg flex *:w-1/2'>
                  <div className={`cursor-pointer ${selectProject?.pj_id === 1 ? 'bg-neutral-400' : ''} border-r-2 border-dashed flex items-center`} onClick={() => setSelectProject(selectId(1))}>
                    <span >특허 빅데이터 분석 서비스 데이터 구축 사업</span>
                  </div>
                  <div className={`cursor-pointer ${selectProject?.pj_id === 2 ? 'bg-neutral-400' : ''} flex items-center`} onClick={() => setSelectProject(selectId(2))}>
                    <span>건국대학교 색인·검색 시스템 구축 사업</span>
                  </div>
                </div>
              </div>
              <div className='border-t-4 border-b-4 border-black w-full'>
                <h2 className='border-b-4 h-10 border-black  flex justify-center items-center'>유지보수 경력</h2>
                <div className='*:h-32 *:text-lg flex *:w-1/2'>
                  <div className={`cursor-pointer ${selectProject?.pj_id === 3 ? 'bg-neutral-400' : ''} border-r-2 border-dashed flex items-center`} onClick={() => setSelectProject(selectId(3))}>
                    <span>국민연금공단 콜 분석 시스템 유지보수</span>
                  </div>
                  <div className={`cursor-pointer ${selectProject?.pj_id === 4 ? 'bg-neutral-400' : ''} border-r-2 border-dashed flex items-center`} onClick={() => setSelectProject(selectId(4))}>
                    <span>한국무역협회 TradePro, TradeNavy 색인 유지보수</span>
                  </div>
                  <div className={`cursor-pointer ${selectProject?.pj_id === 5 ? 'bg-neutral-400' : ''} flex items-center`} onClick={() => setSelectProject(selectId(5))}>
                    <span>부산대병원/양산부산대병원/부산대한방병원 사이트 유지보수</span>
                  </div>
                </div>
              </div>
            </div>
            {selectProject && (
              <div className="w-full flex flex-col p-4">
                <div className="border-b-2 border-black pb-4">
                  <h1 className="text-center text-3xl font-bold">{selectProject.pj_title}</h1>
                </div>
                <div className='flex flex-col pt-2 gap-2'>
                  <p><span className='font-bold'>회사/기관명 </span>: {selectProject.pj_company}</p>
                  <p><span className='font-bold'>프로젝트 기간 </span> : {selectProject.pj_period}</p>
                  <p><span className='font-bold'>참여인원 </span> : {selectProject.pj_man}</p>
                  {selectProject.pj_participation && (<p><span className='font-bold'>참여도 </span>: {selectProject.pj_participation}</p>)}
                  
                  <p><span className='font-bold'>사용 기술 </span>: {selectProject.pj_skill.map(((sk,index) => <span key={index}>{sk}{index !== selectProject.pj_skill.length - 1 ? ', ' : ''}</span>))}</p>
                  <p><span className='font-bold'>주요 업무</span></p>
                  <div className='*:pl-3'>
                    {selectProject.pj_work.map((work,index) =><li key={index}>{work}</li>)}
                  </div>
                  {selectProject.pj_result &&(<>
                    <p><span className='font-bold'>성과 및 경험</span></p>
                    <div className='*:pl-3'>
                      {selectProject.pj_result.map((result, index) => <li key={index}>{result}</li>)}
                    </div>
                  </>
                  )}
                  {selectProject.pj_review && (<>
                    <p><span className='font-bold text-2xl'>Review</span></p>
                    <div className='*:pl-3'>
                      {selectProject.pj_review.map((review, index) => <li key={index}>{review}</li>)}
                    </div>
                  </>
                  )}
                </div>
              </div>
            )}
            {/* <div className='w-full flex flex-col p-4'>
                <div className='border-b-2 border-black pb-4'>
                  <h1 className='text-center text-3xl'>특허 빅데이터 분석 서비스 데이터 구축 사업</h1>
                </div>
                <div className='flex flex-col pt-2 gap-2'>
                  <p><span className='font-bold'>회사/기관명 </span>: 특허전략원</p>
                  <p><span className='font-bold'>프로젝트 기간 </span> : 2023.05 ~ 2023.12 / 2024.05 ~ 2024.10</p>
                  <p><span className='font-bold'>참여인원 </span> : 3명(PM 1명, 개발자 2명)</p>
                  <p><span className='font-bold'>참여도 </span>: 70%</p>
                  <p><span className='font-bold'>사용 기술 </span>: Spring Framework, Java, JavaScript, Vue.js, PostgreSQL, Linux, Shell Script, MicroStrategy, SVN, CentOS</p>
                  <p><span className='font-bold'>주요 업무</span></p>
                  <div className='*:pl-3'>
                    <li>데이터 수집, 적재, 정제 (100%)</li>
                    <li>리눅스 서버 관리(DB, API, 용량 관리, 스케줄링 등) (90%)</li>
                    <li>Vue.js 기반 페이지 추가 및 유지보수 (60%)</li>
                    <li>Spring Framework 기반 API 개발 및 유지보수 (30%)</li>
                  </div>
                  <p><span className='font-bold'>성과 및 경험</span></p>
                  <div className='*:pl-3'>
                    <li>약 4억 건의 대용량 데이터 수집, 적재, 정제 수행</li>
                    <li>2천만 건 이상의 해외 경제 데이터 수집, 적재, 정제</li>
                    <li>PostgreSQL 기반 SQL 정제 로직 유지보수 및 개발</li>
                    <li>Vue.js를 활용한 신규 페이지 추가 및 모듈화 진행</li>
                    <li>Linux 서버 환경에서 용량 관리 및 스케줄링 자동화</li>
                    <li>Shell Script를 활용한 데이터 정제 자동화 프로그램 개발</li>
                  </div>
                  <p><span className='font-bold text-2xl'>Review</span></p>
                    <li>대량의 데이터를 수집, 적재하는 과정에서 자동화 구현의 필요성을 절감</li>
                    <li>해외 경제 데이터 수집 과정에서 API 오류를 수정했으나, 기존 API 구조를 개선하지 못한 점이 아쉬움</li>
                    <li>SQLD 자격증 취득을 통해 SQL 실력 향상</li>
                    <li>MicroStrategy 사용 중 데이터 시각화의 한계를 경험, armChart 도입을 계획했으나 퇴사로 인해 실행하지 못한 점이 아쉬움</li>
                </div>
            </div> */}
          </div>
        </div>
    )
}