import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useState } from 'react'
import { heroVideo , smallHeroVideo } from '../utils'

function Hero() {
    const [videoSrc , setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

    useGSAP(()=>{
        gsap.to('.hero-title',{
            opacity: 1,
            delay: 2
        })
        gsap.to('#cta',{
            opacity:1,y:-50,delay: 2
        })
    },[])

    const handleHeroVideo = () => {
        if(window.innerWidth < 760){
            setVideoSrc(smallHeroVideo)
        }else{
            setVideoSrc(heroVideo)
        }
    }

    useEffect(()=>{
        window.addEventListener('resize' , handleHeroVideo)

        return ()=>{
            return window.removeEventListener('resize',handleHeroVideo)
        }
    },[])
  return (
    <section className='w-full nav-height bg-black position-relative'>
        <div className='h-5/6 w-full flex-center flex-col'>
            <p className='hero-title'>iPhone 15 Pro</p>
            <div className='md:w-10/12 w-9/12 mb-5'>
                <video className='pointer-events-none' autoPlay muted playsInline={true}>
                    <source src={videoSrc} type='video/mp4'></source>
                </video>
            </div>
            <div id="cta" className='flex flex-col items-center opacity-0 translate-y-20'> 
                <a href='#heighLights' className='btn'>Buy</a>
                <p className='f-normal text-xl'>From $199/month or $999 </p>
            </div>
        </div>
    </section>
  )
}

export default Hero