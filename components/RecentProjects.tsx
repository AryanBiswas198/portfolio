"use client";

import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa6'
import { useRouter } from 'next/navigation'
import { ContainerScroll } from './ui/container-scroll-animation';
import GithubProfile from "@/public/GithubProfile.png"
import Image from 'next/image';

const RecentProjects = () => {
    
    const router = useRouter();

    const handleRedirect = (link: string) => {
        router.push(link);
    }
    
  return (
    <div className='mt-5 pb-20 bg-grid-small-white/[0.2]' id='projects'>
        <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-2xl md:text-4xl tracking-wide font-semibold text-black dark:text-white">
              Explore my projects on <br />
              <span className="text-6xl md:text-[6rem] text-purple font-bold mt-1 leading-none tracking-wide">
                Github
              </span>
            </h1>
          </>
        }
      >
        <Image
            src={GithubProfile}
            alt="hero"
            // height={720}
            // width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top cursor-pointer"
            draggable={false}
            onClick={() => window.open('https://github.com/AryanBiswas198', '_blank')}
        />
      </ContainerScroll>


        <h1 className='heading'>
            A small selection of {' '}
            <span className='text-purple'>Recent Projects</span>
        </h1>

        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
            {projects.map(({id, title, des, img, iconLists, link}) => (
                <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'
                    onClick={() => handleRedirect(link)}>
                    <PinContainer title={title} href={link}>
                        <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                            <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                <img src='/bg.png' alt='bg-img' />
                            </div>
                            <img src={img} alt={title} className='z-10' />
                        </div>

                        <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                            {title}
                        </h1>

                        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                            {des}
                        </p>

                        <div className='flex items-center justify-between mt-7 mb-3'>
                            <div className='flex items-center'>
                                {iconLists.map((icon, index) => (
                                    <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                    style={{ 
                                            transform: `translateX(-${5 * index * 2}px)`
                                        }}>
                                        <img src={icon} alt={icon} className='p-2' />
                                    </div>
                                ))}
                            </div>

                            <div className='flex justify-center items-center'>
                                <p className='flex lg:text-xl md:text-xs tracking-wider text-sm text-purple'>Check Live Site</p>
                                <FaLocationArrow className='ms-3' color='#CBACF9' />
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects