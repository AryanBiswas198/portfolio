"use client";

import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import { useRouter } from 'next/navigation';
import { BackgroundBeams } from './ui/background-beams';
import { WavyBackground } from './ui/wavy-background';
import { SparklesCore } from './ui/sparkles';

const Footer = () => {

    const router = useRouter();

    const handleClick = (link?: string) => {
        if(link){
            router.push(link);
        }
    }

  return (
    <div className='w-full relative pt-14 pb-6' id="contact">
        {/* <div className='w-full absolute left-0 -bottom-30 md:-bottom-64 min-h-96 '>
            <img src='/footer-grid.svg' alt='grid' className='w-full h-full opacity-50' />
        </div> */}

        <div className="w-full absolute top-0 h-screen">
            <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={60}
            className="w-full h-full"
            particleColor="#FFFFFF"
            />
        </div>

        <div className='flex flex-col items-center '>
            <h1 className='heading lg:max-w-[45vw]'>
                Ready to take <span className='text-purple'> your </span> digital presence to the next level ?
            </h1>

            <p className='text-white-200 md:mt-10 my-5 tracking-wide text-center'>
                Reach out to me today and let&apos;s discuss how i can help you achieve your goals
            </p>

            <a href='mailto:aryanb198@gmail.com'>
                <MagicButton 
                    title='Let&apos;s get in Touch' 
                    icon={<FaLocationArrow />}
                    position='right'
                />
            </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-lg text-sm md:font-normal font-light tracking-wide'>
                Copyright © 2024 | {" "}
                <span className='text-purple'>Aryan Biswas</span>
            </p>

            <div className='flex items-center my-3 md:my-0 md:gap-4 gap-5'>
                {socialMedia.map((profile) => (
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300' onClick={() => handleClick(profile?.link)}>
                        <img src={profile.img} alt="Image" width={20} height={20} />
                    </div>
                ))}
            </div>
        </div>
        {/* <BackgroundBeams /> */}
    </div>
  )
}

export default Footer