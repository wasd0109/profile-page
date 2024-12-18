import ImageSlideshow from '@/components/ImageSlideshow';
import { FaCss3, FaDocker, FaHtml5, FaJava, FaJenkins, FaNodeJs, FaReact } from "react-icons/fa";
import React from 'react';
import { SiApachekafka, SiNextdotjs, SiSpring, SiTailwindcss } from 'react-icons/si';

function AboutPage() {
    return (
        <main>
            <div className='flex justify-evenly items-center'>
                <div className='w-96 h-96'>
                    <ImageSlideshow />
                </div>
                <div className='flex flex-col mr-10 items-center'>
                    <div>
                        <div>
                            <h1 className='text-2xl'>
                                Hi, I am
                                <span className='block text-5xl font-bold'>
                                    Ken Cheung
                                </span>
                            </h1>
                            <h2 className='text-right text-2xl'>A full-stack engineer</h2>
                            <h3 className='text-right text-lg'>@ Rakuten Group, Inc.</h3>
                        </div>
                        <br />
                        <div className='self-center'>
                            <h3 className='text-xl'>Frontend: </h3>
                            <div className='flex gap-1'>
                                <FaHtml5 size={30} />
                                <FaCss3 size={30} />
                                <FaReact size={30} />
                                <SiTailwindcss size={30} />
                            </div>
                            <br />
                            <h3 className='text-xl'>Backend: </h3>
                            <div className='flex gap-1'>
                                <FaJava size={30} />
                                <SiSpring size={30} />
                                <FaNodeJs size={30} />
                                <SiNextdotjs size={30} />
                                <SiApachekafka size={30} />
                            </div>
                            <br />
                            <h3 className='text-xl'>CICD: </h3>
                            <div className='flex gap-1'>
                                <FaDocker size={30} />
                                <FaJenkins size={30} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default AboutPage;