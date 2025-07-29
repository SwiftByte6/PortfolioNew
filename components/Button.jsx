import React from 'react'

const Button = ({value}) => {
    return (
        <div>
            <button
                className="relative cursor-pointer rounded-2xl p-[2px] mt-10 w-fit mx-auto 
             bg-[radial-gradient(circle_80px_at_80%_-10%,#ffffff,#181b1b)]">

                {/* Top-right glow */}
                <div className="absolute w-[65%] h-[60%] rounded-[120px] top-0 right-0 
                  shadow-[0_0_20px_#ffffff38] -z-10">
                </div>

                {/* Bottom-left dark glow */}
                <div className="absolute w-[70px] h-full rounded-2xl bottom-0 left-0 
                  bg-[radial-gradient(circle_60px_at_0%100%,#3f3f3f,#3f3f3f80,transparent)] 
                  shadow-[-10px_10px_30px_#ffffff2d]">
                </div>

                {/* Inner button content */}
                <div className="relative px-[22px] py-[12px] rounded-[14px] text-white z-[3] 
                  bg-[radial-gradient(circle_80px_at_80%_-50%,#555555,#0f1111)]">

                    {/* Highlight overlay */}
                    <div className="absolute w-full h-full left-0 top-0 rounded-[14px] 
                    bg-[radial-gradient(circle_60px_at_0%_100%,#ffffff1a,#ffffff11,transparent)]">
                    </div>

                    {/* Button text */}
                    <span className="relative z-10 text-xl">{value}</span>
                </div>
            </button>
        </div>
    )
}

export default Button
