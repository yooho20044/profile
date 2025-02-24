export default function Top(){

    return(
        <div className="bg-black w-screen min-h-screen flex justify-center items-center font-semibold text-8xl">
            {/* 타이핑 효과를 적용할 컨테이너 */}
            <div className="relative" style={{ fontSize: '100px', minWidth: '11px' }}>
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