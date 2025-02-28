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
    const [isMobile, setIsMobile] = useState(false);

    {/*모바일 검증 */}
    useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 1024); 
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }, []);

    {/** 초기화면 설정정 */}
    useEffect(() => {
      const initialProject = selectId(1);
      setSelectProject(initialProject);
    }, []);

    return(
        <div className="mt-20 bg-white lg:h-screen text-black md:m-20 z-50 rounded-lg shadow-lg shadow-neutral-500/50" {...(!isMobile && { 'data-aos': 'fade-left' })}>
          <div className='flex h-[20%] justify-center items-center border-b border-neutral-400 p-1'>
              <h1 className='lg:text-7xl font-bold text-black text-4xl'>경력 기술서</h1>
          </div>

          {/* 데스크탑버전, 모바일버전 분리 */}
          {/**  모바일버전 */}
          <div className="lg:hidden p-4">
            <select
              className="w-full p-2 border border-gray-300 rounded"
              value={selectProject?.pj_id || ""}
              onChange={(e) => setSelectProject(selectId(parseInt(e.target.value)))}
            >
              <optgroup label="개발 경력">
                <option value="1">특허 빅데이터 분석 서비스 데이터 구축 사업</option>
                <option value="2">건국대학교 색인·검색 시스템 구축 사업</option>
              </optgroup>
              <optgroup label="유지보수 경력">
                <option value="3">국민연금공단 콜 분석 시스템 유지보수</option>
                <option value="4">한국무역협회 TradePro, TradeNavy 색인 유지보수</option>
                <option value="5">부산대병원/양산부산대병원/부산대한방병원 사이트 유지보수</option>
              </optgroup>
            </select>
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
          </div>
          {/** 데스크탑 버전 */}
          <div className='hidden lg:flex flex-row h-[80%]'>
            <div className='flex w-[34%] flex-col justify-center ml-auto gap-52 *:text-center items-center border-r-2'>
              <div className='flex flex-col  border-t-4 border-b-4 border-black w-full'>
                <h2 className='border-b-4 h-10 border-black flex justify-center items-center'>개발 경력</h2>
                <div className='flex-row *:h-32 *:text-md flex *:w-1/2'>
                  <div className={`cursor-pointer ${selectProject?.pj_id === 1 ? 'bg-neutral-400' : ''} border-r-2 border-dashed flex items-center`} onClick={() => setSelectProject(selectId(1))}>
                    <span >특허 빅데이터 분석 서비스 데이터 구축 사업</span>
                  </div>
                  <div className={`cursor-pointer ${selectProject?.pj_id === 2 ? 'bg-neutral-400' : ''} flex items-center`} onClick={() => setSelectProject(selectId(2))}>
                    <span>건국대학교 색인·검색 시스템 구축 사업</span>
                  </div>
                </div>
              </div>
              <div className='flex flex-col border-t-4 border-b-4 border-black w-full'>
                <h2 className='border-b-4 h-10 border-black  flex justify-center items-center'>유지보수 경력</h2>
                <div className='flex-row *:h-32 *:text-md flex *:w-1/2'>
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
          </div>
        </div>
    )
}