import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { watchImg } from '../utils'
import VideoCarousal from './VideoCarousal'

function HighLights() {
    useGSAP(()=>{
        gsap.to('#title',{
            opacity: 1,
            y: 0,

        })
        gsap.to('.link',{
            opacity:1,
            y:0,
            duration: 1,
            stagger: .4
        })
    },[])
  return (
    <section id="heighLights" className='w-screen overflow-hidden h-full common-padding bg-zinc'>
        <div className='screen-max-width'>
            <div className='mb-12 w-full items-end md:flex justify-between'>
                <h1 id="title" className='section-heading'>
                    Get The HighLights
                </h1>
                <div className='flex flex-wrap items-end'>
                    <p className='link ms-4'>Watch the Film
                    <img src={watchImg} className='ml-2'/>
                    </p>
                    <p className='link ms-4'>Watch the Event
                    <img src={watchImg} className='ml-2'/>
                    </p>
                </div>
            </div>
            <VideoCarousal />
        </div>
    </section>
)
}

export default HighLights