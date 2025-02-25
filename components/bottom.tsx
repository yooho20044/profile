import { useEffect, useState } from "react";

export default function Bottom(){

    const [hide, setHide] = useState(false);
    
            useEffect(() => {
                const handleScroll = () => {
                const threshold = 1000; // 문서 맨 아래로부터 얼마 남았을 때 숨길지 결정 (픽셀 단위)
                if (window.innerHeight + window.scrollY >= document.body.offsetHeight - threshold) {
                    setHide(false);
                } else {
                    setHide(true);
                }
                };
    
                window.addEventListener("scroll", handleScroll);
                return () => window.removeEventListener("scroll", handleScroll);
            }, []);

    return(
        <div className="bg-black min-w-screen min-h-screen flex justify-center items-center text-white font-semibold text-8xl z-50">
            <div 
            className={`${hide ? "opacity-0" : "opacity-100"}`} 
            style={{ fontSize: '100px', minWidth: '11px' }}>
                    <span className="text-white">
                        Thank You
                    </span>
            </div>
        </div>
    )
}