import { useEffect, useState } from 'react';

export default function Top(){

    const [hide, setHide] = useState(false);

        useEffect(() => {
            const handleScroll = () => {
            const threshold = 1000; // 문서 맨 아래로부터 얼마 남았을 때 숨길지 결정 (픽셀 단위)
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - threshold) {
                setHide(true);
            } else {
                setHide(false);
            }
            };

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);


    return(
        <div className="bg-black w-screen min-h-screen flex justify-center items-center font-semibold text-8xl">
            {/* 타이핑 효과를 적용할 컨테이너 */}
            <div className={`fixed ${hide ? "opacity-0" : "opacity-100"}`} style={{ fontSize: '100px', minWidth: '11px' }}>
                {/* overflow-hidden과 border-r로 커서 효과 적용 */}
                <div className="overflow-hidden inline-block border-r border-white animate-typing">
                    <span className="whitespace-nowrap text-white">
                        &lt;Hello World/&gt;
                    </span>
                </div>
            </div>
        </div>
    )
}