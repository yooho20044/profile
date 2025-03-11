import { useEffect, useState } from 'react';

export default function Top(){

   const [hide, setHide] = useState(false);
   const [showScrollButton, setShowScrollButton] = useState(true);

        useEffect(() => {
            const handleScroll = () => {
            const threshold = 900; // 문서 맨 아래로부터 얼마 남았을 때 숨길지 결정 (픽셀 단위)
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - threshold) {
                setHide(true);
            } else {
                setHide(false);
            }

            //스크롤버튼 숨김여부
            if(window.scrollY === 0){
                setShowScrollButton(true);
            }else{
                setShowScrollButton(false);
            }
            };

            

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);

        const handleScrollDown = () => {
            const target = document.getElementById("scroll-target");
            if (target) {
              target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          };

    return(
        <div className="bg-black w-screen min-h-screen flex justify-center items-center font-semibold text-8xl">
            {/* 타이핑 효과를 적용할 컨테이너 */}
            <div 
            className={`relative md:fixed text-[50px] min-w-[8px] md:text-[75px] md:min-w-[10px] lg:text-[100px] lg:min-w-[11px]`} 
            >
                {/* overflow-hidden과 border-r로 커서 효과 적용 */}
                <div className="overflow-hidden inline-block border-r border-white animate-typing">
                    <span className="whitespace-nowrap text-white">
                       {hide ? `</Hello World>` :  `<Hello World>` } 
                    </span>
                </div>
            </div>
            {/* 아래 스크롤 버튼 */}
            {showScrollButton && (
            <button 
                onClick={handleScrollDown} 
                className="animate-pulse fixed bottom-4 left-1/2 transform -translate-x-1/2 text-xl px-4 py-2 bg-gray-700 text-white rounded z-10"
            >
            Scroll Down ⇣
            </button>
            )}
        </div>
    )
}