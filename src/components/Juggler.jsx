import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import plusBg from '../assets/plusBg.png'

const Juggler = () => {
    const box1ref = useRef(null);
    const box2ref = useRef(null);
    const box3ref = useRef(null);
    const box4ref = useRef(null)

    useEffect(() => {
        let tl1 = gsap.timeline({ repeat: -1 });

        tl1.to(box1ref.current, {
            x: 0,
            y: 0,
        })
            .to(box1ref.current, {
                x: 285,
                y: 0,
                duration: 2,
                ease: 'power3.inOut',
                zIndex: 1000
            })
            .to(box1ref.current, {
                y: 185,
                x: 285,
                duration: 2,
                ease: 'power3.inOut',
            })
            .to(box1ref.current, {
                y: 370,
                x: 285,
                duration: 2,
                ease: 'power3.inOut',
            })
            .to(box1ref.current, {
                x: 0,
                y: 370,
                duration: 2,
                ease: 'power3.inOut',
            })
            .to(box1ref.current, {
                y: 185,
                x: 0,
                duration: 2,
                ease: 'power3.inOut',
            })
            .to(box1ref.current, {
                y: 0,
                x: 0,
                duration: 2,
                ease: 'power3.inOut',
            });

        let tl2 = gsap.timeline({ repeat: -1 });

        tl2.to(box2ref.current, {
            x: 0,
            y: 0,
        })
            .to(box2ref.current, {
                x: 0,
                y: -185,
                duration: 2,
                ease: 'power3.inOut',
            })
            .to(box2ref.current, {
                y: -185,
                x: 285,
                duration: 2,
                ease: 'power3.inOut',
            })
            .to(box2ref.current, {
                y: 0,
                x: 285,
                duration: 2,
                ease: 'power3.inOut',
            })
            .to(box2ref.current, {
                y: 185,
                x: 285,
                duration: 2,
                ease: 'power3.inOut',
            })
            .to(box2ref.current, {
                y: 185,
                x: 0,
                duration: 2,
                ease: 'power3.inOut',
            })
            .to(box2ref.current, {
                y: 0,
                x: 0,
                duration: 2,
                ease: 'power3.inOut',
            });

        let tl3 = gsap.timeline({ repeat: -1 });

        tl3.to(box3ref.current, {
            x: 0,
            y: 0,
        })
            .to(box3ref.current, {
                x: 0,
                y: 185,
                duration: 2,
                ease: 'power3.inOut',
            })
            .to(box3ref.current, {
                y: 185,
                x: -285,
                duration: 2,
                ease: 'power3.inOut',
            })
            .to(box3ref.current, {
                y: 0,
                x: -285,
                duration: 2,
                ease: 'power3.inOut',
            })
            .to(box3ref.current, {
                y: -185,
                x: -285,
                duration: 2,
                ease: 'power3.inOut',
            })
            .to(box3ref.current, {
                y: -185,
                x: 0,
                duration: 2,
                ease: 'power3.inOut',
            })
            .to(box3ref.current, {
                x: 0,
                y: 0,
                duration: 2,
                ease: 'power3.inOut',
            })
        let tl4 = gsap.timeline({ repeat: -1 });

        tl4.to(box4ref.current, {
            x: 0,
            y: 0,
        })
            .to(box4ref.current, {
                y: 0,
                x: -285,
                duration: 2,
                ease: 'power3.inOut',
            })
            .to(box4ref.current, {
                y: -185,
                x: -285,
                duration: 2,
                ease: 'power3.inOut',
            })
            .to(box4ref.current, {
                y: -370,
                x: -285,
                duration: 2,
                ease: 'power3.inOut',
            })
            .to(box4ref.current, {
                y: -370,
                x: 0,
                duration: 2,
                ease: 'power3.inOut',
            })
            .to(box4ref.current, {
                x: 0,
                y: -185,
                duration: 2,
                ease: 'power3.inOut',
            })
            .to(box4ref.current, {
                x: 0,
                y: 0,
                duration: 2,
                ease: 'power3.inOut',
            })

    }, []);





    return (
        <div className='hidden lg:flex items-center h-[625px] w-1/2 flex-col gap-6 backdrop-blur-px[0.5px] bg-white/20 border border-white/30 rounded-lg shadow-lg p-6 mt-2'>
            <h1 className='text-5xl text-[#eaeeff] font-medium '>
                Money Monitor
            </h1>
            <div>
                <div className='flex gap-[150px]'>
                    <div className=' h-[135px] w-[135px] relative z-0  border  border-white/30 rounded-lg shadow-lg '>
                        <div ref={box1ref} className='box1 m-0 p-2 flex bg-[#a36ef9] relative z-50 border-none rounded-lg flex-col justify-end h-full w-full'>
                            <div
                                sx={{ backgroundImage: {plusBg} }}
                                className="absolute inset-0 bg-cover bg-top bg-[url('src/assets/plusBg.png')] bg-repeat opacity-20">
                            </div>
                            <p className='text-white'>Budget better, </p>
                            <p className='text-white'>Live smarter.</p>
                        </div>
                    </div>
                    <div className='h-[135px] w-[135px] relative z-0  border  border-white/30 rounded-lg shadow-lg '></div>
                </div>
                <div className='flex gap-[150px] mt-[50px]'>
                    <div className='h-[135px] w-[135px] relative z-10  border  border-white/30 rounded-lg shadow-lg '>
                        <div ref={box2ref} className='box2 m-0 p-2 flex relative z-50 bg-[#fef391] border-none rounded-lg flex-col justify-between h-full w-full ' >
                            <p className='text-2xl text-black'>+</p>
                            <p className='text-black text-sm '>Smart tracking for smarter spending.</p>
                        </div>
                    </div>
                    <div className='h-[135px] w-[135px] relative z-10  border  border-white/30 rounded-lg shadow-lg '>
                        <div ref={box3ref} className='box3 m-0 p-2 flex relative z-50 bg-[#fef391] border-none rounded-lg flex-col justify-between h-full w-full ' >
                            <p className='text-2xl text-black'>+</p>
                            <p className='text-black text-sm '>Effortless expense management tool.</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-[150px] mt-[50px]'>
                    <div className='h-[135px] w-[135px] relative z-10  border  border-white/30 rounded-lg shadow-lg '></div>
                    <div className='h-[135px] w-[135px] relative z-10  border  border-white/30 rounded-lg shadow-lg '>
                        <div ref={box4ref} className='box4 m-0 p-2 flex bg-[#a36ef9] relative z-50 border-none rounded-lg flex-col justify-end h-full w-full'>
                            <div
                                sx={{ backgroundImage: {plusBg} }}
                                className="absolute inset-0 bg-cover bg-top bg-[url('src/assets/plusBg.png')] bg-repeat opacity-20">
                            </div>
                            <p className='text-white'>Your money,  </p>
                            <p className='text-white'>under control.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Juggler
