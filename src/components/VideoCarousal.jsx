import React from 'react'
import { hightlightsSlides } from '../constants'

function VideoCarousal() {
  return (
    <>
        <div className='flex items-center '>
            {hightlightsSlides.map((item,index)=>(
                <div key={index} id="slider" className='sm:pr-20 pr-10'>
                    <div className='video-carousel_container'>
                        <div className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black'>
                            <video id='video' playsInline autoPlay muted preload='auto'>
                                <source src={item.video} type='video/mp4'></source>
                            </video>
                        </div>
                        <div className='absolute top-12 left-[5%] z-10'>
                            {item.textLists.map((item2,index)=>(
                                <p key={item2} className='md:text-2xl text-xl font-medium'>
                                    {item2}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}

export default VideoCarousal