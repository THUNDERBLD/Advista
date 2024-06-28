import { useEffect, useState } from "react"

let autoSlide = true
let slideDuration = 2000
const slider = [
    "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://media.istockphoto.com/id/1432011901/photo/working-desktop-surrounded-by-colored-led-lights.webp?s=170667a&w=0&k=20&c=eFdAqRfkPwEmrjCu-QXIjfjUgj_yTeezx9Al2uibYDo=",
    "https://images.unsplash.com/photo-1563498250890-28c63b64a217?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1495954222046-2c427ecb546d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    "https://media.istockphoto.com/id/1432011901/photo/working-desktop-surrounded-by-colored-led-lights.webp?s=170667a&w=0&k=20&c=eFdAqRfkPwEmrjCu-QXIjfjUgj_yTeezx9Al2uibYDo=",
    "https://images.unsplash.com/photo-1563498250890-28c63b64a217?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
]

function Carousel() {
    
    const [current, setCurrent] = useState(0)
    
    const prev = () => setCurrent((e) => (e === 0 ? slider.length - 1: e - 1))
    const next = () => setCurrent((e) => (e === slider.length - 1 ? 0: e + 1))
    
    useEffect(()=>{
    if(!autoSlide){ 
            return 
        } else {
            const s = setInterval(next, slideDuration);
            return ()=> clearInterval(s);
        }

    }, [])
    return (
        <div>
            <div className="m-auto mt-10 p-4 bg-blue-600 sm:w-[80vw] rounded-md border-2 flex justify-center items-center sm:h-[70vh] h-[60vh] relative w-full overflow-hidden">
                <div style={{transform: `translateX(-${current * 100}%)`}} className={`flex absolute transition-transform ease-out duration-500 m-auto sm:w-[50vw] w-[100vw] sm:h-[60vh] h-[60vh] `}>
                    {slider.map((e, i) => (
                        <img src={e} key={i} alt="" />
                    ))}
                </div>
                <div className="absolute p-1 w-full flex justify-between items-center ">
                    <button onClick={prev} className="rotate-180 border-gray-200 border-2 p-2 rounded-full shadow-lg hover:bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                            <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button onClick={next} className="border-gray-200 border-2 p-2 rounded-full shadow-lg hover:bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                            <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className="absolute bottom-2">
                    <div className="gap-2 flex justify-center items-center">
                        {slider.map((_,i)=>(
                            <div key={i} className={`border bg-white w-2 h-2 rounded-full ${current === i ? "p-1":"bg-opacity-50"}`} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel